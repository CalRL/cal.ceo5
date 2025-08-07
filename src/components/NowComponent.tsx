import { useEffect, useState } from "react"
import {SpotifyComponent} from "./SpotifyComponent.tsx";


export function NowComponent() {
    return(
        <div className="pt-8">
            <div className="text-white">
                <div className="font-semibold">now</div>
                <div>
                  <span className="leading-relaxed">
                    now, i&#39;m working on my plugin Hubbly, working on a project
                    with 800+ users, working on a elderly care product, learning
                    <span className="text-[#B94700]">{" "}rust</span>, and working on a web project for creatives.
                  </span>
                </div>
                <DiscordComponent />
                <SpotifyComponent />
            </div>
        </div>
    )
}

export function DiscordComponent() {
    const [status, setStatus] = useState<string | null>(null)
    const [error, setError] = useState(false)
    useEffect(() => {
        async function fetchStatus() {
            try {
                const res = await fetch("http://localhost:3000/api/discord", {
                    headers: {
                        "Cache-Control": "no-cache",
                    },
                })
                if (!res.ok) {
                    setError(true)
                    return
                }

                const json = await res.json()
                setStatus(json?.data ?? "Unknown")
            } catch (err) {
                console.error(err)
                setError(true)
            }
        }
        fetchStatus()
    }, [])

    if (error) return <div>Failed to load Discord status.</div>

    const color = getColor(status)
    return (
        <div className="w-[35%] bg-[#2C2F33] rounded-3xl p-4 text-white">
            <div className="flex justify-between items-center">
                <img
                    className={`rounded-full border-4 avatar
                  border-slate-600`}
                    width="96px"
                    height="96px"
                    src="https://cdn.discordapp.com/avatars/242276511028084738/66b26bbc03c85fa6659b6ae21c8ff485.png?size=4096"
                    alt="Discord Avatar"
                    style={{ borderColor: color }}
                />

            <div>
                <span>
                    Status: {" "}
                </span>
                <span style={{
                    color: color,
                }}>
                   {status && `${getStatusString(status)}`}
                </span>

            </div>
            </div>
        </div>
    )
}

function getColor(status: string | null) {
    if (!status) {
        return "#747f8d";
    }

    switch (status.toLowerCase()) {
        case "online":
            return "#43b581"; // Green for online
        case "idle":
            return "#faa61a"; // Yellow for idle
        case "dnd": // Do not disturb
            return "#f04747"; // Red for DND
        default:
            return "#747f8d"; // Grey for offline or unknown
    }
}

function getStatusString(status: string) {
    switch (status) {
        case "online":
            return "Online";
        case "idle":
            return "Idle";
        case "dnd":
            return "DND";
        case "offline":
            return "Offline";
        default:
            return "Offline";
    }
}