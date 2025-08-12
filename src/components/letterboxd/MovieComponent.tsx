import type {Movie} from "./Movie";

export function MovieComponent(props: Movie) {
    return (
        <div className={"mx-auto duration-200 transform hover:scale-110"}>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <img src={props.image_url} alt="" className="rounded-md" />
            </a>
            <div className={"text-center text-sm"}>{props.rating}/5</div>
        </div>
    )
}