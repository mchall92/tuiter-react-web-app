const WhoToFollowListItem = (item) => {
    return (`
       <li class="list-group-item m-0">
          <div class="row">
             <div class="col-2 d-flex p-1">
                <img class="float-end my-auto rounded-circle" src="${item.avatarIcon}" width="100%">
             </div>
             <div class="col-6">
                <div>
                   <span class="fw-bolder wd-ml-font">${item.userName}</span>
                   <i class="fa-solid fa-circle-check wd-ml-font"></i>
                </div>
                <div class="text-secondary wd-medium-font wd-light-grey">@${item.handle}</div>
             </div>
             <div class="col-4 d-flex">
                <button class="btn btn-light wd-medium-font rounded-pill my-auto wd-button">
                   Follow
                </button>
             </div>
          </div>
       </li>
   `);
}
export default WhoToFollowListItem;