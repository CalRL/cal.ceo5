import {SpotifyComponent} from "./SpotifyComponent.tsx";
import {Watchlist} from "./letterboxd/Watchlist";
import {DiscordComponent} from "./discord/DiscordComponent.tsx";


export function NowComponents() {
    return (
        <div className="pt-8 max-w-2/5 mx-auto">
            <div className="text-white">
                <div className="font-semibold text-2xl">now</div>
                <div>
                  <span className="leading-relaxed text-xl">
                    now, i&#39;m working on my plugin Hubbly, working on a project
                    with 800+ users, working on a elderly care product, learning
                    <span className="text-[#B94700]">{" "}rust</span>, and working on a web project for creatives.
                  </span>
                </div>
                <div className="space-y-8">
                    <DiscordComponent/>
                    <Watchlist />
                    <SpotifyComponent/>
                </div>

            </div>
        </div>
    )
}
const defaultClasses = "bg-[#2C2F33] rounded-3xl text-white p-4 border-white/10 border text-center";
export function NowComponent() {
    return (
        <>
            <div className={"xl:flex max-w-2/3 mx-auto pt-8 xl:space-x-4"}>
                <section className="flex justify-center max-w-1/2 xl:justify-end">
                    <DiscordComponent/>
                </section>
                <div className="flex justify-center max-w-2/3">
                    <div className="text-white">
                        <h1 className="font-semibold text-2xl">now</h1>
                        <div>
                      <span className="leading-relaxed text-xl">
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
            {/*<div className={"max-w-2/3 mx-auto flex xl:space-x-4 mt-4 "}>*/}
            {/*    <div className={`${defaultClasses} w-1/2 h-full`}>*/}
            {/*        test*/}
            {/*    </div>*/}
            {/*    <div className={`space-y-4`}>*/}
            {/*        <div className={`${defaultClasses} w-full`}>test</div>*/}
            {/*        <div className={`${defaultClasses} w-full`}>test</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}

