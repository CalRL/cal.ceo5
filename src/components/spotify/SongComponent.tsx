import type {SpotifyCurrentlyPlaying, SpotifyResponse} from "../../types/Spotify.ts";
import {useEffect, useState} from "react";
import {api} from "../../axios.ts";

export function SongComponent() {
    const [data, setData] = useState<SpotifyCurrentlyPlaying>();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            const data = await api.get("/spotify");
            const res: SpotifyResponse = data.data;
            setData(res.data);
            setLoading(false);
        }
        fetchData();
    }, []);

    if(loading){
        //todo: make skeleton
        return null;
    }
    const duration = data?.item?.duration_ms;
    const progress = data?.progress_ms;

    if(!duration || !progress){
        return null;
    }


    console.log(progress/1000, duration/1000);

    return null;
}
