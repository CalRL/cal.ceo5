import {useEffect, useState} from "react";

export function Timer({ since }: { since: number }) {
    const [elapsed, setElapsed] = useState<string>("");

    useEffect(() => {
        const interval = setInterval(() => {
            const diff = Date.now() - since;
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            setElapsed(
                `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
            );
        });
        return () => clearInterval(interval);
    }, [since]);

    return <span>{elapsed}</span>;
}
