'use client';

import { useState, useEffect } from "react";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import ApiService from "@/services/ApiService";
import helpers from "@/helpers/helpers";
import MovieCard from "@/components/MovieCard";
import Link from "next/link";

function Placeholder() {
    return (
        <>
            <Swiper
                spaceBetween={20}
                slidesPerView={5}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    },
                    992: {
                        slidesPerView: 5
                    },
                }}
            >
                {[1, 2, 3, 4, 5].map((item) => (
                    <SwiperSlide key={`movie-placeholder-${item}`}>
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

function Movies({movies}) {
    return (
        <>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={5}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    },
                    992: {
                        slidesPerView: 5
                    },
                }}
                navigation
            >
                {movies.map((movie, index) => {
                    return (
                        <SwiperSlide key={`movie-card-${index}`}>
                            <MovieCard movie={movie} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}

function SliderMovieSection({type}) {
    let [isLoading, setIsLoading] = useState(true);
    let [movies, setMovies] = useState([]);

    useEffect(() => {
        ApiService.get(`movie/${type.replace('-', '_')}`)
            .then((data) => {
                setMovies(data.results);

                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <section className="videos-section px-3 mt-5">
                <div className="row g-3">
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="h3">{helpers.toTitleCase(type)}</div>

                            <div className="fs-1">
                                <Link href={`/movie-list/${type}`} className="text-dark text-decoration-none">
                                    <i className="ph ph-dots-three-outline"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        {isLoading ? <Placeholder /> : <Movies movies={movies} />}
                    </div>
                </div>
            </section>
        </>
    );
}

export default SliderMovieSection;
