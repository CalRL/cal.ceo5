import React from "react";

export function Other(): React.JSX.Element {
    return (
        <>
            <div className="text-4xl font-bold text-white text-center">
                Tech Stack
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-6">
                {skills.map((s, i) => (
                    <Skill key={i} {...s} />
                ))}
            </div>

            </>
    )

}

const skills: SkillProps[] = [
    {
        skill: "Java",
        experience: "2 years",
        notableProject: "Hubbly",
        url: "https://github.com/CalRL/Hubbly",
        strength: 4
    },
    {
        skill: "TypeScript",
        experience: "2 years",
        notableProject: "Quote generator tool for a client at /",
        url: "",
        strength: 3
    },
    {
        skill: "Rust",
        experience: "<1 year",
        notableProject: "GammaEditor",
        url: "https://github.com/CalRL/GammaEditor",
        strength: 2
    },
    {
        skill: "Python",
        experience: "3 years",
        notableProject: "vumo",
        url: "https://github.com/calrl/opencv",
        strength: 4
    },
    {
        skill: "TailwindCSS",
        experience: "2 years",
        notableProject: "GammaEditor",
        url: "https://github.com/calrl/gammaeditor",
        strength: 3
    },
    {
        skill: "C#",
        experience: "<1 year",
        notableProject: "Generator",
        url: "https://github.com/calrl/generator",
        strength: 2
    }

]

const javaSkill: SkillProps = {
    skill: "Java",
    experience: "2 years",
    notableProject: "Hubbly",
    url: "https://github.com/calrl/Hubbly",
    strength: 4
}

type Strength = 1 | 2 | 3 | 4 | 5;
type SkillProps = {
    skill: string;
    experience: string;
    notableProject: string;
    url: string,
    strength: Strength;
}

function Skill(props: SkillProps) {
    const amount = props.strength;
    const left: number = 5-amount;

    return (
        <div className={"text-white"}>
            <div>{props.skill}</div>
            <div className="flex gap-1 my-1">
                {/* Filled bars */}
                {Array.from({ length: amount }).map((_, i) => (
                    <div key={`filled-${i}`} className="w-4 h-1.5 rounded-full bg-zinc-200" />
                ))}

                {/* Empty bars */}
                {Array.from({ length: left }).map((_, i) => (
                    <div key={`empty-${i}`} className="w-4 h-1.5 rounded-full bg-zinc-700" />
                ))}
            </div>
            <div>experience: {props.experience}</div>
            {props.notableProject && (
                <div>
                    <span>notable project:</span>{" "}
                    {props.url ? (
                        <a
                            href={props.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-blue-400"
                        >
                            {props.notableProject}
                        </a>
                    ) : (
                        <span>{props.notableProject}</span>
                    )}
                </div>
            )}
        </div>
    )
}
