import {useEffect, useState} from "react";
import type {Activity} from "../../types/LanyardResponse.ts";
import {ActivityComponent} from "./ActivityComponent.tsx";

export function ActivitiesComponent() {
    const [data, setData] = useState<Activity[]>([]);
    const [error, setError] = useState(false);
    useEffect(() => {
        async function getActivities() {
            try {
                const res = await fetch("https://api.cal.ceo/api/discord/activities", {
                    headers: {
                        "Cache-Control": "no-cache",
                    },
                })

                if (!res.ok) {
                    setError(true);
                    return;
                }

                const json = await res.json();
                const activities = json.activities;
                setData(activities);
            } catch (err) {
                console.error(err);
                setError(true);
            }
        }

        getActivities();
        console.log("got activities")
    }, [])

    if (!data || error) return <div>Loading...</div>;
    console.log(data);
    return (
        <div className={"space-y-4 "}>
            {data.map((activity: Activity) => {
                if (activity.name.toLowerCase() === "spotify") return null;

                return <ActivityComponent key={activity.id} activity={activity} />;
            })}
        </div>
    )
}