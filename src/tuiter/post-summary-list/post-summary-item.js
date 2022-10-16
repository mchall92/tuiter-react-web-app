import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return(
        <li className="list-group-item m-0">
            <div className="row">
                <div className="col-10">
                    <div>
                        <span className="fw-bolder wd-medium-font">{post.userName}</span>
                        <i className="bi bi-patch-check-fill text-primary ms-1 me-1 wd-medium-font"/>
                        <span className="text-secondary wd-medium-font wd-light-grey"> · {post.time}</span>
                    </div>
                    <div className="text-secondary wd-medium-font wd-light-grey">
                        {post.topic}
                    </div>
                    <div className="fw-bolder wd-medium-font">
                        {post.title}
                    </div>
                </div>
                <div className="col-2 d-flex">
                    <img alt="text" width={70} className="float-end my-auto rounded-3" src={`/images/${post.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;