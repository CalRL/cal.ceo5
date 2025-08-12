import {SpotifyComponent} from "./SpotifyComponent.tsx";
import {Watchlist} from "./letterboxd/Watchlist";
import {DiscordComponent} from "./discord/DiscordComponent.tsx";

// const defaultClasses = "bg-[#2C2F33] rounded-3xl text-white p-4 border-white/10 border text-center";
export function NowComponent() {
    return (
        <>
            <div className={"max-w-3/4 mx-auto pt-8 mb-4 xl:justify-center xl:flex xl:space-x-4 xl:mb-0"}>
                <DiscordComponent/>
                <div className="flex justify-center xl:max-w-2/3 mx-auto xl:mx-0">
                    <div className="text-white">
                        <h1 className="font-semibold text-2xl">now</h1>
                        <div>
                      <span className="leading-relaxed lg:text-xl">
                        now, i&#39;m working on my plugin Hubbly, working on a project
                        with 800+ users, working on a elderly care product, learning
                        <span className="text-[#B94700]">{" "}rust</span>, and working on a web project for creatives.
                      </span>
                        </div>
                        <div className="space-y-4">
                            <Watchlist />
                        </div>
                        <SpotifyComponent/>
                    </div>
                </div>
            </div>
        </>
    )
}

