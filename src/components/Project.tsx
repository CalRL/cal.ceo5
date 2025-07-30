import {RenderIcon, type RenderIconProps} from "./Icons";
import {useState} from "react";

export type ProjectProps = {
    name: string,
    link: string,
    iconProps: RenderIconProps[],
    description: string,
    imageUrl: string,
    imageAlt: string,
    coverOrContain: "object-cover" | "object-contain"
}

export function getImage(props: ProjectProps): React.JSX.Element {
    return (
        <div className="aspect-video w-full bg-black relative">
            {(
                <img
                    src={props.imageUrl || "/images/fallback.png"}
                    alt={props.imageAlt}
                    width={512}
                    height={512}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${props.coverOrContain}`}
                />
            )}
        </div>
    );
}

export function Project(props: ProjectProps) {
    return (
        <div className="">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href={props.link}
            >
                <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-grey-400 my-6 mx-6 transition-transform duration-200 scale-90 transform hover:scale-100">
                <figure>
                    {getImage(props)}
                    <div className="px-6 py-4">
                        <div className="text-white font-bold text-xl mb-2 text-center">
                            {props.name}
                        </div>
                        <p className="text-gray-400 text-base text-center line-clamp-5 min-h-[6rem]">
                            {props.description}
                        </p>
                        <div className="text-white flex pt-2 space-x-4 justify-center">
                            {props.iconProps.map((iconProp, index) => (
                                <RenderIcon
                                    key={index}
                                    name={iconProp.name}
                                    size={iconProp.size}
                                    link={iconProp.link}
                                />
                            ))}
                        </div>
                    </div>
                </figure>
                </div>

            </a>
        </div>
    );
}