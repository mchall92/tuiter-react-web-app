import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";


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
    const dispatch = useDispatch();

    return (
        <>
            <div className="col-3 wd-font-size-medium-small wd-font-color-grey">
                <i className="bi bi-chat" />
                <span className="ps-3">{post.replies}</span>
            </div>
            <div className="col-3 wd-font-size-medium-small wd-font-color-grey">
                <i className="bi bi-repeat" />
                <span className="ps-3">{post.retuits}</span>
            </div>
            <div className="col-3 wd-font-size-medium-small wd-font-color-grey">
                {post.liked && (<i onClick={() => dispatch(updateTuitThunk({
                    ...post,
                    likes: post.likes - 1,
                    liked: false,
                }))} className="bi bi-heart-fill wd-red" />)}
                {!post.liked && (<i onClick={() => dispatch(updateTuitThunk({
                    ...post,
                    likes: post.likes + 1,
                    liked: true,
                }))} className="bi bi-heart" />)}
                <span className="ps-3">{post.likes}</span>
            </div>
            <div className="col-2 wd-font-size-medium-small wd-font-color-grey">
                {post.disliked && (<i onClick={() => dispatch(updateTuitThunk({
                    ...post,
                    dislikes: post.dislikes - 1,
                    disliked: false,
                }))} className="bi bi-hand-thumbs-down-fill wd-green" />)}
                {!post.disliked && (<i onClick={() => dispatch(updateTuitThunk({
                    ...post,
                    dislikes: post.dislikes + 1,
                    disliked: true,
                }))} className="bi bi-hand-thumbs-down-fill" />)}
                <span className="ps-3">{post.dislikes}</span>
            </div>
            <div className="col-1 wd-font-size-medium-small wd-font-color-grey">
                <i className="bi bi-box-arrow-up" />
            </div>
        </>
    );
};

export default TuitStats;