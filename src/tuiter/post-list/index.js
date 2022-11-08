import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "./post-item";
import "./index.css";
import { findTuitsThunk } from "../../services/tuits-thunks";

const PostList = () => {
    const { tuits, loading } = useSelector(state => state.tuitsData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [dispatch])

    return (
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuits.map(tuits =>
                    <PostItem post={tuits} />)
            }
        </ul>
    );
};
export default PostList;