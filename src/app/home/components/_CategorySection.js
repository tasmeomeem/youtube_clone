'use client';

import { useState, useEffect } from "react";
import ApiService from "@/services/ApiService";
import Link from "next/link";
import { useParams } from "next/navigation";

function Placeholder() {
    return (
        <>
            <div className="d-flex align-items-center justify-content-between gap-3 placeholder-glow overflow-x-scroll">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                    <div className="placeholder py-3 col-1 rounded" key={`category-placeholder-${item}`}></div>
                ))}
            </div>
        </>
    );
}

function Categories({categories}) {
    let { category_id } = useParams();

    return (
        <>
            <div className="d-flex align-items-center gap-3 overflow-x-scroll">
                {categories.map((category, index) => {
                    let name = category.name.toLowerCase().replaceAll(' ', '-');

                    return (
                        <Link
                            href={`/category-movie-list/${category.id}/${name}`}
                            className={`btn btn-secondary ${category_id == category.id ? 'active' : ''}`}
                            key={`category-${index}`}
                        >
                            {category.name}
                        </Link>
                    );
                })}
            </div>
        </>
    );
}

function CategorySection() {
    let [isLoading, setIsLoading] = useState(true);
    let [categories, setCategories] = useState([]);

    useEffect(() => {
        ApiService.get('genre/movie/list')
            .then((data) => {
                setCategories(data.genres);

                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <section className="categories-section py-3">
                {isLoading ? <Placeholder /> : <Categories categories={categories} />}
            </section>
        </>
    );
}

export default CategorySection;
