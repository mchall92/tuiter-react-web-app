const PostSummaryItem = (post) => {
    return (`
       <li class="list-group-item m-0">
          <div class="row">
             <div class="col-10">
                <div class="text-secondary wd-medium-font wd-light-grey">
                   ${post.topic}
                </div>
             <div>
                <span class="fw-bolder wd-medium-font">${post.userName}</span>
                <i class="fa-solid fa-circle-check wd-medium-font"></i>
                <span class="text-secondary wd-medium-font wd-light-grey">- ${post.time}</span>
             </div>
             <div class="fw-bolder wd-medium-font">
                ${post.title}
             </div>
          </div>
          <div class="col-2 d-flex">
             <img class="float-end my-auto rounded-3" src="${post.image}" width="100%">
             </div>
          </div>
       </li>
   `);
}
export default PostSummaryItem;