import { PiVinylRecord } from "react-icons/pi";
import { useEffect, useState } from "react";
import type { Spotify, SpotifyResponse } from "../types/Spotify.ts";

export function SpotifyComponent() {
    const [error, setError] = useState(false);
    const [data, setData] = useState<Spotify | null>(null);

    // const color = " #7FFF00"

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("http://localhost:3000/api/discord/spotify", {
                    headers: {
                        "Cache-Control": "no-cache",
                    },
                });

                const json: SpotifyResponse = await res.json();

                if (!json.success || !json.spotify) {
                    setError(true);
                    return;
                }

                setData(json.spotify);
            } catch (err) {
                console.error(err);
                setError(true);
            }
        }

        fetchData();
    }, []);

    if (error) return <div>Failed to load Spotify info.</div>;

    if (!data) return <div>Loading...</div>;

    return (
        <div className="flex">
            <img
                src="/spotify-logo.svg"
                alt="Spotify Logo"
                className="w-6 h-6 inline-block"
            />
            <div className="flex items-center gap-2 text-white">

                <PiVinylRecord
                    style={{
                        animation: "spin 5s linear infinite",
                    }}
                />
                <span>
                {data.song}
            </span>

                <span className="text-gray-400">
                by {data.artist}
            </span>
            </div>
        </div>

    );
}

export function SpotifyComsponent() {

}