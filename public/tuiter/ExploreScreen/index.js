import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js"
import ExploreComponent from "./ExploreComponent.js"

/* global $ */
function exploreComponent() {
    $('#wd-explore').append(`
   <div class="row mt-2">
       <div class="col-2 col-md-2 col-lg-1 col-xl-2 p-1 pb-5">
    <!--    <h3>NavigationSidebar</h3>-->
        ${NavigationSidebar('explore')}
       </div>
       <div class="col-10 col-lg-7 col-xl-6 pt-1 pb-5">
    <!--    <h3>ExploreComponent</h3>-->
        ${ExploreComponent()}
       </div>
       <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 pb-5 wd-follow">
    <!--    <h3>WhoToFollowList </h3>-->
        ${WhoToFollowList()}
       </div>
  </div>
   `);
}

$(exploreComponent);