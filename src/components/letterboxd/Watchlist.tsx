import {useEffect, useState} from "react";
import {api} from "../../axios.ts";
import {MovieSkeleton} from "./MovieSkeleton.tsx";
import {MovieComponent} from "./MovieComponent.tsx";
import {type Movie} from "./Movie";

export function Watchlist() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const res = await api.get("/letterboxd");
                setMovies(res.data.data);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, []);

    const totalSlots = 8;
    const displayMovies = loading
        ? Array(totalSlots).fill(null)
        : [
            ...movies,
            ...Array(Math.max(0, totalSlots - movies.length)).fill(null),
        ];

    return (
        <section className="w-full text-right pt-8">
            <div className="flex justify-between items-center pb-2">
                <h1 className={""}>Movies I've watched recently</h1>
                <a
                    className="underline justify-end"
                    href="https://letterboxd.com/CalRL"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    see all
                </a>
            </div>


            <div className="grid grid-cols-2 xs:grid-cols-4 md:grid-cols-8 gap-4 ">
                {displayMovies.map((movie, i) =>
                    movie ? (
                        <MovieComponent key={movie.link} {...movie} />
                    ) : (
                        <MovieSkeleton key={`skeleton-${i}`} />
                    )
                )}
            </div>
        </section>
    );
}
