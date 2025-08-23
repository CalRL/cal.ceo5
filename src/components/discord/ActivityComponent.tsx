import type {Activity} from "../../types/LanyardResponse.ts";
import {Timer} from "../Timer.tsx";
import React from "react";

export type ActivityProps = {
    activity: Activity;
}

function toValidUrlOrNull(s?: string | null): string | null {
    if (!s) return null;
    try {
        const u = new URL(s);
        return (u.protocol === 'http:' || u.protocol === 'https:') ? u.toString() : null;
    } catch {
        return null;
    }
}

async function pickActivityImage({activity}: ActivityProps) {
    const assets = activity.assets;

    const stripped = assets?.large_image ? stripDiscordMediaProxy(assets.large_image) : null;
    const largeImage = toValidUrlOrNull(stripped);

    if(largeImage) return largeImage;

    return `https://dcdn.dstn.to/app-icons/${activity.application_id}?size=256`;
}

export function ActivityComponent({ activity }: ActivityProps) {
    const [source, setSource] = React.useState("");
    const assets = activity.assets;

    React.useEffect(() => {
        async function getImage() {
            const image = await pickActivityImage({ activity });
            setSource(image);
        }

        getImage()
    }, [])

    const smallImage = assets?.small_image
        ? stripDiscordMediaProxy(assets.small_image)
        : null;

    if(!source) return null;

    return (
        <div className="border-white/20 border bg-zinc-900 text-white rounded-xl shadow-lg p-4 gap-4 items-center max-w-md w-full block lg:flex">
            {/* Large image */}
            <div className={""}>
                <div className="relative min-w-[80px] max-w-[80px] 2xl:block mx-auto 2xl:mx-0">
                    {source && (<img
                        src={source}
                        alt=""
                        className="w-20 h-20 rounded-lg object-cover"
                    />)}
                    {/* Small overlay image */}
                    {smallImage && (
                        <img
                            src={smallImage}
                            alt=""
                            className="w-6 h-6 rounded-full absolute bottom-0 right-0 border border-zinc-900"
                        />
                    )}
                </div>
            </div>


            {/* Text and Details */}
            <div className="flex flex-col justify-center text-center lg:text-start">
                <div className="text-lg font-semibold">{activity.name}</div>
                {activity.details && (
                    <div className="text-sm text-zinc-300">{activity.details}</div>
                )}
                {activity.state && (
                    <div className="text-sm text-zinc-400">{activity.state}</div>
                )}
                {activity.timestamps &&
                    <div className={"text-green-400"}>
                        <Timer since={activity.timestamps.start} />
                    </div>
                }

            </div>
        </div>
    );
}

function stripDiscordMediaProxy(url: string): string {
    const match = url.match(/\/https\/(.+)$/);
    return match ? `https://${match[1]}` : url;
}