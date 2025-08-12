import {StatusComponent} from "./discord/StatusComponent.tsx";

export function HomeComponent() {
    return(
        <>
            <div className="main flex-nowrap mx-auto max-w-3/5 mt-8">
            <div className={"grid grid-cols-1 xl:grid-cols-2 text-white w-full space-x-8"}>
                <div className={""}>
                    <h1
                        className={"text-5xl font-fields"}
                        // style={{ fontFamily: 'Fields Black' }}
                        //todo: find a better font
                    >
                        Hi 👋, I&#39;m cal
                    </h1>
                    <h2 className={"text-yellow-200 my-2 mb-2 text-2xl"}>Full-Stack Engineer </h2>
                    <p>
                        I am currently a masters student, and a software engineer, that builds apps for the web (mostly backend).
                    </p>

                    <div className={"mt-4"}>
                        I am: <StatusComponent />
                    </div>
                </div>
                <div className={"text-center"}>
                    test1
                </div>
            </div>
            </div>
        </>
    )
}

