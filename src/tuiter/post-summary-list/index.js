import React from "react";
import {useSelector} from "react-redux";
import PostSummaryItem from "./post-summary-item";
import "./index.css";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.tuits)
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