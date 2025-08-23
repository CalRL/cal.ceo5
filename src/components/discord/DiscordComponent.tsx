import {getColor, getStatusString} from "../../utils/discord.ts";
import {ActivitiesComponent} from "./ActivitiesComponent.tsx";
import {DiscordSkeleton} from "./DiscordSkeleton.tsx";
import {useLanyard} from "./useLanyard.tsx";
import type {Lanyard} from "../../types/LanyardResponse.ts";

export function DiscordComponent() {
    const data: Lanyard | null = useLanyard("242276511028084738");

    if(!data) {
        return <DiscordSkeleton />;
    }

    const status: string = data.discord_status;

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
                <ActivitiesComponent activities={data.activities} />
            </div>
        </div>

    )
}
