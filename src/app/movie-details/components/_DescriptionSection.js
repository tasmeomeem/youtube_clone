import React from "react";
import { useState } from "react";

function DescriptionSection ({movie}) {
    let [showMore, setShowMore] = useState(false);
    return(
        <>
            <div className="bg-light p-3 rounded">
                <div>
                    <div className="d-flex flex-wrap gap-3">
                        <b>951,486 views</b>
                        <b>Jul 28, 2022</b>
                    </div>
                    <div className="d-flex flex-wrap gap-3">
                        <a href="#">#MattLeBlanc</a>
                        <a href="#">#JenniferAniston</a>
                        <a href="#">#LisaKudrow</a>
                    </div>

                    <p> {movie.overview} </p> {showMore && ( <>
                        <p>{movie.overview}</p>
                    </> )} <button className="btn btn-link p-0" onClick={()=> setShowMore(showMore ? false : true)}> {showMore ? 'Show Less...' : 'Show More...'} </button>
                </div>
            </div>
        </>
    );
}

export default DescriptionSection;