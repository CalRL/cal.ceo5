import {useEffect, useState} from "react"
import {SpotifyComponent} from "./SpotifyComponent.tsx";
import type {Activity} from "../types/LanyardResponse.ts";
import {getColor, getStatusString} from "../utils/discord.ts";


export function NowComponent() {
    return (
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
                <DiscordComponent/>
                <SpotifyComponent/>
            </div>
        </div>
    )
}

type ActivityProps = {
    activity: Activity;
}


function ActivityComponent({ activity }: ActivityProps) {
    const assets = activity.assets;

    const largeImage = assets?.large_image
        ? stripDiscordMediaProxy(assets.large_image)
        : null;

    const smallImage = assets?.small_image
        ? stripDiscordMediaProxy(assets.small_image)
        : null;

    return (
        <div className="bg-zinc-900 text-white rounded-xl shadow-lg flex p-4 gap-4 items-center max-w-md w-full">
            {/* Large image */}
            <div className="relative">
                {largeImage && (<img
                    src={largeImage}
                    alt="Large"
                    className="w-20 h-20 rounded-lg object-cover"
                />)}
                {/* Small overlay image */}
                {smallImage && (
                    <img
                        src={smallImage}
                        alt="Small"
                        className="w-6 h-6 rounded-full absolute bottom-0 right-0 border border-zinc-900"
                    />
                )}
            </div>

            {/* Text and Details */}
            <div className="flex flex-col justify-center">
                <div className="text-lg font-semibold">{activity.name}</div>
                {activity.details && (
                    <div className="text-sm text-zinc-300">{activity.details}</div>
                )}
                {activity.state && (
                    <div className="text-sm text-zinc-400">{activity.state}</div>
                )}
            </div>

            {/* Timer (if available) */}
            {activity.timestamps?.start && (
                <div className="ml-auto text-green-400 text-sm flex items-center gap-1">
                    <Timer since={activity.timestamps.start} />
                </div>
            )}
        </div>
    );
}

function stripDiscordMediaProxy(url: string): string {
    const match = url.match(/\/https\/(.+)$/);
    return match ? `https://${match[1]}` : url;
}

function Timer({ since }: { since: number }) {
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
        }, 1000);
        return () => clearInterval(interval);
    }, [since]);

    return <span>{elapsed}</span>;
}

function ActivitiesComponent() {
    const [data, setData] = useState<Activity[]>([]);
    const [error, setError] = useState(false);
    useEffect(() => {
        async function getActivities() {
            try {
                const res = await fetch("http://localhost:3000/api/discord/activities", {
                    headers: {
                        "Cache-Control": "no-cache",
                    },
                })

                if (!res.ok) {
                    setError(true);
                    return;
                }

                const json = await res.json();
                const activities = json.activities;
                setData(activities);
            } catch (err) {
                console.error(err);
                setError(true);
            }
        }

        getActivities();
        console.log("got activities")
    }, [])

    if (!data || error) return <div>Loading...</div>;

    return (
        <>
            {data.map((activity: Activity) => {
                if (activity.name.toLowerCase() === "spotify") return null;

                return <ActivityComponent key={activity.id} activity={activity} />;
            })}
        </>
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
                setStatus(json?.data ?? "Unknown");
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
        <div className="w-[55%] bg-[#2C2F33] rounded-3xl p-4 text-white">
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

                <div>
                {/*<span>*/}
                {/*    Status: {" "}*/}
                {/*</span>*/}
                    <span className={"text-3xl font-semibold"} style={{
                        color: color,
                    }}>
                   {status && `${getStatusString(status)}`}
                </span>

                </div>
            </div>
            <ActivitiesComponent />
        </div>
    )
}
