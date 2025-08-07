import {SectionTitle} from "../types/Section.tsx";

export function WebStack() {
    return (
        <>
            <SectionTitle title="web" />
            <div>
                frontend: <span className="text-blue-400">react</span>,{" "}
                <span className="text-[#06b6d4]">tailwind</span>,{" "}
                <span className="text-teal-300">chakraUI</span>
            </div>
            <div>
                backend: <span className="text-gray-500">nextjs</span>,{" "}
                <span className="text-green-300">flask</span>,{" "}
                <span className={"text-yellow-300"}>express</span>, and i&#39;m
                learning <span className="text-green-500">springboot</span>,
                <span className={"text-orange-500"}>{" "}honojs</span>
            </div>
            <div>
                databases: <span className="text-green-500">mongodb</span>,{" "}
                <span className="text-green-500">supabase</span>,{" "}
                <span className="text-blue-900">postgreSQL</span>
            </div>
            <div className="mt-2">
                this website uses {" "}
                <span className="text-blue-500">react</span>,{" "}
                <span className="text-blue-300">tailwind</span>{" "}
                and <span className={"text-orange-500"}>honojs</span>
            </div>
        </>
    )
}