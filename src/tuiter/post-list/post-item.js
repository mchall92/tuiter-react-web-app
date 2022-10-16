import React from "react";
import TuitContent from "./tuit-content";

const PostItem = (
    {
        post = {
            isRetuited: true,
            retuitUser: 'seal',
            userImage: './images/maple-leaves.jpg',
            userName: 'Maply Story',
            userAccount: 'maplestory',
            time: 'Yesterday',
            content: 'Sed vel sollicitudin elit. Vestibulum sed purus ut sapien feugiat ultricies a vel ipsum. Proin consequat varius augue, et blandit massa luctus commodo. ',
            isRetuit: true,
            retuitPost: {
                userImage: "1",
                userName: "2",
                userAccount: "account",
                time: "t",
                content: "Quisque mattis lorem ut neque tincidunt, sed dapibus felis mattis. Suspendisse in consectetur ipsum. Maecenas facilisis, dolor in pretium commodo, ex neque pharetra dui"
            },
            image: './images/seal.jpg',
            title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
            innerContent: "Curabitur lobortis leo ut sem tincidunt, rutrum rhoncus neque vestibulum. Aenean at augue vitae ante efficitur mollis. Vivamus congue eros vitae ligula ullamcorper pulvinar. ",
            website: 'seal.com',
            replyNumber: '20',
            retuitNumber: '102',
            likeNumber: '1k',
        }
    }
) => {
    return(
        <li className="list-group-item m-0 pt-2 pb-3 ps-1 pe-3">
            <div className="row">
                <div className="wd-dark-grey wd-bold ms-5">
                    {
                        post.isRetuited
                        &&
                         <span>
                             <i className="bi bi-arrow-repeat me-2"/>
                             {post.retuitUser} Retuited</span>
                    }
                </div>

                <div className="col-2 justify-content-center pe-0">
                    <img alt="text" width={70} className="rounded-circle p-2" src={`/images/${post.userImage}`}/>
                </div>
                <div className="col-10 ps-0">
                    <div className="row">
                        <div className="col-11">
                            <span className="wd-font-size-medium wd-font-color-black wd-bold">{post.userName}</span>
                            <i className="bi bi-patch-check-fill text-primary ms-1 me-1"/>
                            <span className="wd-font-size-medium wd-font-color-grey">@{post.userAccount}</span>
                            <span className="wd-font-size-medium wd-font-color-grey ps-1 pe-1">·</span>
                            <span className="wd-font-size-medium wd-font-color-grey">{post.time}</span>
                        </div>
                        <div className="col-1">
                            <i className="bi bi-three-dots wd-font-size-medium wd-font-color-grey"/>
                        </div>
                    </div>
                    <p className="wd-font-size-medium wd-font-color-black">{post.content}</p>
                    <TuitContent post={post}/>
                    <div className="row pt-2 ps-2">
                        <div className="col-3 wd-font-size-medium-small wd-font-color-grey">
                            <i className="bi bi-chat"/>
                            <span className="ps-3">{post.replyNumber}</span>
                        </div>
                        <div className="col-3 wd-font-size-medium-small wd-font-color-grey">
                            <i className="bi bi-repeat"/>
                            <span className="ps-3">{post.likeNumber}</span>
                        </div>
                        <div className="col-3 wd-font-size-medium-small wd-font-color-grey">
                            <i className="bi bi-heart"/>
                            <span className="ps-3">{post.retuitNumber}</span>
                        </div>
                        <div className="col-3 wd-font-size-medium-small wd-font-color-grey">
                            <i className="bi bi-box-arrow-up"/>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default PostItem;