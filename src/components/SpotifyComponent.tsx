import { PiVinylRecord } from "react-icons/pi";
import { useEffect, useState } from "react";
import type {SpotifyArtist, SpotifyCurrentlyPlaying, SpotifyResponse, SpotifyTrack} from "../types/Spotify.ts";

export function SpotifyComponent() {
    return (
        <div className="flex">
            <img
                src="/spotify-logo.svg"
                alt="Spotify Logo"
                className="w-6 h-6 inline-block"
            />
            <div className="flex items-center gap-2 text-white">

                <MessageComponent />
            </div>
        </div>

    );
}

export function MessageComponent() {
    const [error, setError] = useState(false);
    const [data, setData] = useState<SpotifyCurrentlyPlaying | null>(null);
    const [item, setItem] = useState<SpotifyTrack | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("https://api.cal.ceo/api/spotify", {
                    headers: {
                        "Cache-Control": "no-cache",
                    },
                });

                const json: SpotifyResponse = await res.json();

                const spotifyData = json.data;
                if (!spotifyData) {
                    console.log(json);
                    setError(true);
                    return;
                }

                setData(spotifyData);
                if(!spotifyData.item) {
                    setError(true);
                    return;
                }

                setItem(spotifyData.item);
            } catch (err) {
                console.error(err);
                setError(true);
            }
        }

        fetchData();
    }, []);

    console.log(data)
    if(!data || error || !item) {
        return(
            <div>Not listening to anything.</div>
        )
    }
    console.log(item.artists);
    return(
        <>
            <PiVinylRecord
                style={{
                    animation: "spin 5s linear infinite",
                }}
            />

            <a href={item.external_urls.spotify} target={"_blank"}>{item.name}</a>
            <span className="text-gray-400">
                by {formatArtists(item.artists)}
            </span>
        </>
    )
}

function formatArtists(artists: SpotifyArtist[]) {

    if(artists.length < 1) {
        return "";
    }

    if(artists.length === 1) {
        return `${artists[0].name}`;
    }

    if(artists.length > 1) {
        return `${artists[0].name}...`;
    }
}