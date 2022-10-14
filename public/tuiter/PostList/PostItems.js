const PostItems = (post) => {
    return (`
       <li class="list-group-item m-0 pt-4 pb-4 ps-1 pe-3 wd-background-black">
                <div class="row">
                    <div class="col-2 justify-content-center pe-0">
                        <img class="rounded-circle p-2" src="${post.userImage}" width="90%">
                    </div>
                    <div class="col-10 ps-0">
                        <div class="row">
                            <div class="col-11">
                                <span class="wd-font-size-medium wd-font-color-white">${post.userName}</span>
                                <i class="fa-solid fa-circle-check wd-font-color-white"></i>
                                <span class="wd-font-size-medium wd-font-color-grey">@${post.userAccount}</span>
                                <span class="wd-font-size-medium wd-font-color-grey ps-1 pe-1">·</span>
                                <span class="wd-font-size-medium wd-font-color-grey">${post.time}</span>
                            </div>
                            <div class="col-1">
                                <i class="fa-solid fa-ellipsis-vertical fa-rotate-90 wd-font-size-medium wd-font-color-grey"></i>
                            </div>
                        </div>
                        <p class="wd-font-size-medium wd-font-color-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi aperiam dolorem enim esse eveniet harum ipsa nobis non odit perspiciatis possimus quasi quia reiciendis repellendus sunt suscipit totam, velit.</p>
                        ${postContent(post)}
                        <div class="row pt-3 ps-2">
                            <div class="col-3 wd-font-size-medium wd-font-color-grey">
                                <i class="fa-regular fa-comment"></i>
                                <span class="ps-3">${post.reply}</span>
                            </div>
                            <div class="col-3 wd-font-size-medium wd-font-color-grey">
                                <i class="fa-solid fa-arrows-spin"></i>
                                <span class="ps-3">${post.like}</span>
                            </div>
                            <div class="col-3 wd-font-size-medium wd-font-color-grey">
                                <i class="fa-regular fa-heart"></i>
                                <span class="ps-3">${post.retuit}</span>
                            </div>
                            <div class="col-3 wd-font-size-medium wd-font-color-grey">
                                <i class="fa-solid fa-arrow-right-from-bracket fa-rotate-270"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
   `);
}

const postContent= (post) => {
    if (post.title || post.innerContent || post.website) {
        return `
        <div class="rounded-4 wd-border-solid">
                                <img class="rounded-top border-bottom wd-border-color" src="${post.image}" width="100%">
                            <div class="m-3">
                                <div class="mb-1">
                                    <span class="wd-font-size-medium wd-font-color-white">${post.title}</span>
                                </div>
                                <p class="mb-1 wd-font-size-small wd-font-color-grey">${post.innerContent}</p>
                                <i class="fa-solid fa-link wd-font-size-small wd-font-color-grey"></i>
                                <span class="m-0 wd-font-size-small wd-font-color-grey">${post.website}</span>
                            </div>
                        </div>
        
        `
    } else {
        return `
        <div class="rounded-4 wd-border-solid">
                            <img class="rounded-top border-bottom rounded-bottom wd-border-color" src="${post.image}" width="100%">
                        </div>
        `
    }
};
export default PostItems;