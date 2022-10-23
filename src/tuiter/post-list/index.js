import React from "react";
import {useSelector} from "react-redux";
import PostItem from "./post-item";
import "./index.css";

const PostList = () => {
    const postsArray = useSelector(state => state.postItem)
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostItem post={post}/> )
            }
        </ul>
    );
};
export default PostList;