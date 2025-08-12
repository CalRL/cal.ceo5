import {useEffect, useState} from "react";
import {getColor, getStatusString} from "../../utils/discord.ts";
import {StatusSkeleton} from "./StatusSkeleton.tsx";
import {api} from "../../axios.ts";

export function StatusComponent() {
    const [status, setStatus] = useState<string | null>(null)
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchStatus() {
            try {
                const res = await api.get("/discord", {
                    headers: {
                        "Cache-Control": "no-cache",
                    },
                })
                if (!res) {
                    setError(true)
                    return
                }

                const json = await res.data;
                setStatus(json?.data ?? "Unknown");
                setLoading(false);
            } catch (err) {
                console.error(err)
                setError(true)
            }
        }

        fetchStatus()
    }, [])
    if (error) return <div>Failed to load Discord status.</div>

    if (loading) return <StatusSkeleton />;

    const color = getColor(status)
    return (
        <>
            <span className={"font-semibold"} style={{
                color: color,
            }}>
           {status && `${getStatusString(status)}`}
            </span>
        </>
    )
}