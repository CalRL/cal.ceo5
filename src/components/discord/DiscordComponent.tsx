import {useEffect, useState} from "react";
import {getColor, getStatusString} from "../../utils/discord.ts";
import {ActivitiesComponent} from "./ActivitiesComponent.tsx";
import {DiscordSkeleton} from "./DiscordSkeleton.tsx";
import {api} from "../../axios.ts";

export function DiscordComponent() {
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

                const json = await res.data
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

    if (loading) return <DiscordSkeleton />;

    const color = getColor(status)
    return (
        <div className={"flex justify-center xl:justify-end mb-4 xl:mb-0"}>
            <div className="bg-[#2C2F33] rounded-3xl p-4 text-white border-white/10 border">
                <div className="flex space-x-4 items-center pb-2">
                    <img
                        className={`rounded-full border-4 avatar
                  border-slate-600`}
                        width="96px"
                        height="96px"
                        src="https://cdn.discordapp.com/avatars/242276511028084738/66b26bbc03c85fa6659b6ae21c8ff485.png?size=4096"
                        alt="Discord Avatar"
                        style={{borderColor: color}}
                    />

                    <div className={""}>
                        <h2 className={"text-gray-500"}>he/him</h2>
                        <h1 className={"text-3xl font-semibold"} style={{
                            color: color,
                        }}>
                            {status && `${getStatusString(status)}`}
                        </h1>

                    </div>
                </div>
                <ActivitiesComponent />
            </div>
        </div>

    )
}
