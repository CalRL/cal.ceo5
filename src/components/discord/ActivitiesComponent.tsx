import type {Activity} from "../../types/LanyardResponse.ts";
import {ActivityComponent} from "./ActivityComponent.tsx";

type ActivitiesProps = {
    activities: Activity[];
};

export function ActivitiesComponent({ activities }: ActivitiesProps) {

    if(!activities) return null;

    return (
        <div className={"space-y-4"}>
            {activities.map((activity: Activity) => {
                if (activity.name.toLowerCase() === "spotify") return null;

                return <ActivityComponent key={activity.id} activity={activity} />;
            })}
        </div>
    )
}