import React from "react";
import postsArray from './posts.json';
import PostSummaryItem from "./post-summary-item";
import "./index.css";

const PostSummaryList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostSummaryItem post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;