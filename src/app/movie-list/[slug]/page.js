'use client';

import MovieCard from "@/components/MovieCard";
import ApiService from "@/services/ApiService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import CategorySection from "../../home/components/_CategorySection";
import Layout from "@/components/Layout/Layout";
import helpers from "@/helpers/helpers";

function Placeholder() {
    return (
        <>

            {[1, 2, 3, 4].map((item) => (
                <div className="col-lg-3" key={`movie-placeholder-${item}`}>
                    <div className="card placeholder-glow">
                        <div className="card-img">
                            <div className="placeholder py-3 rounded w-100" style={{height: 350}}></div>
                        </div>

                        <div className="d-flex gap-3 mt-2">
                            <div className="w-100">
                                <div className="placeholder rounded mb-1 w-100" style={{height: 30}}></div>
                                <div className="placeholder rounded mb-1 w-100" style={{height: 20}}></div>
                                <div className="placeholder rounded mb-1 w-100" style={{height: 10}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

function Movies({movies}) {
    return (
        <>
            {movies.map((movie, index) => {
                return (
                    <div className="col-lg-3" key={`movie-card-${index}`}>
                        <MovieCard movie={movie} />
                    </div>
                );
            })}
        </>
    );
}

export default function MovieList({params}) {
    let [isLoading, setIsLoading] = useState(true);
    let [movies, setMovies] = useState([]);
    let [page, setPage] = useState(1);
    // let { slug } = useParams();
    let slug = params.slug;

    useEffect(() => {
        setIsLoading(true);

        ApiService.get(`movie/${slug.replace('-', '_')}`, {'page': page, 'language': 'en'})
            .then((data) => {
                setMovies(data.results);

                setIsLoading(false);
            });
    }, [page]);

    function previous() {
        if (page == 1) {
            return;
        }

        setPage(page - 1);
    }

    function next() {
        setPage(page + 1);
    }

    return (
        <>
            <Layout>
                <CategorySection />

                <section className="list-section px-3 mt-5">
                    <div className="row g-3">
                        <div className="col-12">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="h3">{helpers.toTitleCase(slug)}</div>
                            </div>
                        </div>

                        {isLoading ? <Placeholder /> : <Movies movies={movies} />}

                        <div className="row">
                            <div className="col-md-12 mt-5">
                                <div className="d-flex justify-content-center gap-3">
                                    <button
                                        className="btn btn-primary"
                                        onClick={previous}
                                        disabled={page == 1}
                                    >
                                        Previous
                                    </button>

                                    <button
                                        className="btn btn-primary"
                                        onClick={next}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
