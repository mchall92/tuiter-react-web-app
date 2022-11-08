import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunks";

const PostItem = (
    {
        post = {
            _id: 234,
            topic: "Space",
            userName: "SpaceX",
            time: "2h",
            title: "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            image: "spacex.png",
            liked: true,
            replies: 123,
            retuits: 432,
            likes: 2345,
            handle: "@spacex",
            tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <li className="list-group-item m-0 pt-2 pb-3 ps-1 pe-3">
            <div className="row">
                <div className="col-2 justify-content-center pe-0">
                    <img alt="text" width={70} className="rounded-circle p-2" src={`/images/${post.image}`} />
                </div>
                <div className="col-10 ps-0">
                    <div className="row pb-1">
                        <div className="col-11">
                            <span className="wd-font-size-medium wd-font-color-black wd-bold">{post.userName}</span>
                            <i className="bi bi-patch-check-fill text-primary ms-1 me-1" />
                            <span className="wd-font-size-medium wd-font-color-grey">@{post.handle}</span>
                            <span className="wd-font-size-medium wd-font-color-grey ps-1 pe-1">·</span>
                            <span className="wd-font-size-medium wd-font-color-grey">{post.time}</span>
                        </div>
                        <div className="col-1">
                            <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(post._id)} />
                        </div>
                    </div>
                    <div>
                        <span className="wd-font-size-medium wd-font-color-black">{post.tuit}</span>
                    </div>
                    <div className="row pt-3 ps-1">
                        <TuitStats post={post} />
                    </div>
                </div>
            </div>
        </li>
    );
};
export default PostItem;