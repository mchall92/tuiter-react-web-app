import React from "react";

const TuitStats = (
    {
        post = {
            liked: true,
            replies: 123,
            retuits: 432,
            likes: 2345,
        }
    }
) => {
    return(
        <>
            <div className="col-3 wd-font-size-medium-small wd-font-color-grey">
                <i className="bi bi-chat"/>
                <span className="ps-3">{post.replies}</span>
            </div>
            <div className="col-3 wd-font-size-medium-small wd-font-color-grey">
                <i className="bi bi-repeat"/>
                <span className="ps-3">{post.retuits}</span>
            </div>
            <div className="col-3 wd-font-size-medium-small wd-font-color-grey">
                {post.liked && (<i className="bi bi-heart-fill wd-red"/>)}
                {!post.liked && (<i className="bi bi-heart"/>)}
                <span className="ps-3">{post.likes}</span>
            </div>
            <div className="col-3 wd-font-size-medium-small wd-font-color-grey">
                <i className="bi bi-box-arrow-up"/>
            </div>
        </>
    );
};
export default TuitStats;