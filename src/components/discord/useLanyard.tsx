// useLanyard.ts
import { useEffect, useRef, useState } from "react";
import type {Lanyard} from "../../types/LanyardResponse.ts";

type LanyardMsg =
    | { op: 1; d: { heartbeat_interval: number } }
    | { op: 0; t: "INIT_STATE" | "PRESENCE_UPDATE"; d: any }
    | { op: number; [k: string]: any };

const WS_URL = "wss://api.lanyard.rest/socket";
const REST_URL = (id: string) => `https://api.lanyard.rest/v1/users/${id}`;

export function useLanyard(userId: string) {
    const [presence, setPresence] = useState<Lanyard | null>(null);
    const wsRef = useRef<WebSocket | null>(null);
    const hbRef = useRef<number | null>(null);
    const retryRef = useRef<number>(0);
    const pollRef = useRef<number | null>(null);

    useEffect(() => {
        let stopped = false;

        const startPollingFallback = () => {
            if (pollRef.current) return;
            pollRef.current = window.setInterval(async () => {
                try {
                    const r = await fetch(REST_URL(userId), { cache: "no-store" });
                    if (r.ok) {
                        const j = await r.json();
                        setPresence(j?.data ?? null);
                    }
                } catch {}
            }, 5000);
        };

        const stopPollingFallback = () => {
            if (pollRef.current) {
                clearInterval(pollRef.current);
                pollRef.current = null;
            }
        };

        const connect = () => {
            if (stopped) return;

            try {
                const ws = new WebSocket(WS_URL);
                wsRef.current = ws;

                ws.onopen = () => {
                    // reset backoff when we *successfully* open
                    retryRef.current = 0;
                };

                ws.onmessage = (ev) => {
                    const msg: LanyardMsg = JSON.parse(ev.data);

                    if (msg.op === 1) {
                        // Hello → heartbeat + subscribe
                        const interval = (msg as any).d.heartbeat_interval;
                        if (hbRef.current) clearInterval(hbRef.current);
                        hbRef.current = window.setInterval(() => {
                            ws.send(JSON.stringify({ op: 3 }));
                        }, interval);

                        ws.send(
                            JSON.stringify({
                                op: 2,
                                d: { subscribe_to_id: userId }, // or subscribe_to_ids: [userId]
                            })
                        );

                        stopPollingFallback();
                    }

                    if (msg.op === 0 && (msg as any).t) {
                        const d = (msg as any).d;
                        setPresence(d[userId] ?? d);
                    }
                };

                ws.onerror = (e) => {
                    console.warn("[Lanyard WS] error", e);
                };

                ws.onclose = (ev) => {
                    console.warn(
                        "[Lanyard WS] closed",
                        { code: ev.code, reason: ev.reason, wasClean: ev.wasClean }
                    );
                    if (hbRef.current) clearInterval(hbRef.current);
                    hbRef.current = null;

                    // Start REST fallback immediately
                    startPollingFallback();

                    // Reconnect with capped exponential backoff
                    const delay = Math.min(30000, 1000 * 2 ** Math.min(5, retryRef.current++));
                    setTimeout(() => {
                        if (!stopped) connect();
                    }, delay);
                };
            } catch (e) {
                console.warn("[Lanyard WS] construct failed", e);
                startPollingFallback();
            }
        };

        connect();

        return () => {
            stopped = true;
            if (hbRef.current) clearInterval(hbRef.current);
            if (pollRef.current) clearInterval(pollRef.current);
            hbRef.current = null;
            pollRef.current = null;
            wsRef.current?.close();
            wsRef.current = null;
        };
    }, [userId]);

    return presence;
}
