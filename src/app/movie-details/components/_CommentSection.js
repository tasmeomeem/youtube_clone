import React from "react";

function CommentSection() {
    return (
        <>
            <div>
                <div className="mt-3">
                    <div className="fw-bold">1,442 Comments</div>
                </div>
                <div className="d-flex gap-3 mt-2">
                    <label className="display-4" htmlFor="comment">
                        <i className="ph ph-user-circle"></i>
                    </label>
                    <textarea name="comment" id="comment" className="form-control" placeholder="Add a comment"></textarea>
                </div>
                <div className="mt-3"> {[1, 2, 3, 4, 5].map((index) => (
                    <div className="d-flex gap-3 mb-3" key={`component-${index}`}>
                        <div className="display-6">
                            <i className="ph ph-user-circle"></i>
                        </div>
                        <div>
                            <div className="d-flex gap-3">
                                <div className="fw-bold">@Chandler Bing</div>
                                <div className="text-muted">2 months ago</div>
                            </div>
                            <div>
                                <small> Such an ear warming song it is💜 that era was something phenomenal. It feels like we are living this song... Every broken person can relate to each line of this song.💔 We get separated From the person we love... They leave us.. We move on.. But still it hurts when we remember the time we had w them. Nd then we start missing them. We start craving for their love, Affection, care, touch... Nd the even more saddest part is knowing that they'd never come back </small>
                            </div>
                            <div className="d-flex align-items-center gap-3 mt-2">
                                <div>
                                    <i className="ph ph-thumbs-up"></i>
                                </div>
                                <div>5</div>
                                <div>
                                    <i className="ph ph-thumbs-down"></i>
                                </div>
                                <button className="btn btn-secondary">Reply</button>
                            </div>
                        </div>
                    </div> ))}
                </div>
            </div>
        </>
    );
}

export default CommentSection;