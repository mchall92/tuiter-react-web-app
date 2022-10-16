import React from "react";
const TuitContent = (
    {
        post = {
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
        }
    }
) => {
    if (post.isRetuit) {
        return(
            <div className="rounded-4 wd-border-solid p-3 pt-2">
                    <img alt="text" width={40} className="rounded-circle p-2" src={`/images/${post.retuitPost.userImage}`}/>
                    <span className="wd-font-size-medium wd-font-color-black wd-bold">{post.retuitPost.userName}</span>
                    <i className="bi bi-patch-check-fill text-primary ms-1 me-1"/>
                    <span className="wd-font-size-medium wd-font-color-grey">@{post.retuitPost.userAccount}</span>
                    <span className="wd-font-size-medium wd-font-color-grey ps-1 pe-1">·</span>
                    <span className="wd-font-size-medium wd-font-color-grey">{post.retuitPost.time}</span>
                <div>
                    <span className="wd-font-size-medium wd-font-color-black">{post.retuitPost.content}</span>
                </div>
            </div>
        );
    } else {
        if (post.title || post.innerContent || post.website) {
            return (
                <div className="rounded-4 wd-border-solid">
                    <img alt="text" className="rounded-top border-bottom wd-border-color wd-full-image" src={`/images/${post.image}`}/>
                        <div className="m-3">
                            <div className="mb-1">
                                <span className="wd-font-size-medium wd-font-color-white">{post.title}</span>
                            </div>
                            <p className="mb-1 wd-font-size-small wd-font-color-grey">{post.innerContent}</p>
                            <i className="bi bi-link-45deg wd-font-size-small wd-font-color-grey"/>
                            <span className="m-0 wd-font-size-small wd-font-color-grey">{post.website}</span>
                        </div>
                </div>
            );
        } else {
            return(
                <div className="rounded-4 wd-border-solid">
                    <img alt="text" width={100} className="rounded-top border-bottom wd-border-color" src={`/images/${post.image}`}/>
                </div>
            );
        }
    }
};
export default TuitContent;