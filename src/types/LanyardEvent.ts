export type LanyardEvent =
    | { op: 1, d: { heartbeat_interval: number } }
    | { op: 0; t: "INIT_STATE" | "PRESENCE_UPDATE"; d: unknown }
    | { op: number; [k: string]: unknown };

