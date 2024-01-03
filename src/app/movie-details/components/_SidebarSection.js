import ApiService from "@/services/ApiService";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function SidebarSection({movie}) {
    let [isLoading, setIsLoading] = useState(true);
    let [relatedMovies, setRelatedMovies] = useState([]);

    let movieGenresIds = movie.genres.map((genre) => genre.id).join(',');

    useEffect(() => {
        setIsLoading(true);

        ApiService.get(`discover/movie`, {'page': 1, 'with_genres': movieGenresIds})
            .then((data) => {
                setRelatedMovies(data.results);

                setIsLoading(false);
            });
    }, []);

    return (
        <>
           <div>
                {relatedMovies.map((relatedMovie, index) => (
                    <div className="d-sm-flex gap-3 mb-3" key={`movie-${index}`}>
                        <div>
                            <img className="rounded" src={`https://image.tmdb.org/t/p/original/${relatedMovie.poster_path}`} alt="Image" width="150" height="100" />
                        </div>
                        <div>
                            <div className="fw-bold">
                                <Link href={`/movie-details/${relatedMovie.id}`} className="text-primary text-decoration-none">{relatedMovie.title}</Link>
                            </div>
                            <div className="card-meta">{relatedMovie.vote_count} votes . {relatedMovie.release_date}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default SidebarSection;