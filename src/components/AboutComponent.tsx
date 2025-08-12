import {WebStack} from "./WebStack.tsx";

export function AboutComponent() {
  return (
    <div className="mb-16">
      <div className="mx-auto lg:max-w-4xl sm:max-w-sm max-w-3/5">
        <div className="text-white xl:pb-16 pb-8 text-xl lg:text-3xl mt-[10%]">
          Hi 👋, I&#39;m cal
        </div>
        <div className="text-white text-wrap text-base space-y-8 md:text-xl  sm:max-w-full">
          <div>
            <SectionTitle title="about me" />
            <div className="leading-relaxed">
              <div>
                <span className="">BSc (Hons)</span> {" "}
                <span className="text-yellow-400">computer science</span> @{" "}
                <span className="text-yellow-200">york</span> sj uni
              </div>
              <div>
                <span className="">MSc</span> {" "}
                <span className="text-yellow-400">computing + ai </span>
                <span>@{" "}</span>
                <span className="text-yellow-200">?</span>
              </div>

              <div>I do frontend, backend, and machine learning </div>
            </div>
          </div>
          <SectionDivider />
          <div>
            <SectionTitle title="contact me" />
            <div>
              you can find me on{" "}
              <a
                href="https://github.com/calrl"
                className="hover:underline text-yellow-200"
              >
                <span>github</span>
              </a>
              ,{" "}
              <a
                href="https://www.linkedin.com/in/callum-burns-o-regan-519451258/"
                className="hover:underline text-[#0a66c2]"
              >
                <span>linkedin</span>
              </a>
              , or{" "}
              <a
                className="hover:underline text-[#7289da]"
                href="https://discord.com/invite/tM5JVsGWnY"
              >
                <span>discord</span>
              </a>{" "}
            </div>
          </div>
          <SectionDivider />
          <div>
            <SectionTitle title="programming" />
            <div>
              my best languages are <span className="text-[#f89823]">java</span>
              , {/* 306998 3FFE873*/}
              <span
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="bg-gradient-to-r from-[#306998] to-[#FFD43B]"
              >
                python
              </span>
              <span> and </span>{" "}
              <span className="text-[#3178c6]">typescript</span>
              <div>
                and i&#39;m learning {" "}
                <span className="text-[#B94700]">rust</span>
              </div>
            </div>
          </div>
          <SectionDivider />
          <div className="">
            <WebStack />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionDivider() {
  return <div className="bg-white h-[2px]"></div>;
}

function SectionTitle({ title }: { title: string }) {
  return <div className="font-semibold">{title}</div>;
}
