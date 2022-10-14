import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="wd-main-top">
                <div class="row">
                    <div class="col-11">
                        <div class="position-relative">
                            <input class="ps-5 form-control rounded-pill wd-search-bar" placeholder="Search Tuiter"/>
                            <i class="fa-solid fa-magnifying-glass position-absolute wd-search-tuiter"></i>
                        </div>
                    </div>
                    <div class="col-1">
                        <i class="fa-solid fa-gear align-middle float-end fa-2x wd-fa-cog"></i>
                    </div>
                </div>
                <ul class="nav nav-tabs mt-1 mb-1 pt-2">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" >Sports</a>
                    </li>
                    <li class="nav-item d-none d-md-inline d-lg-line d-xl-inline d-xxl-inline">
                        <a class="nav-link" href="#">Entertainment</a>
                    </li>
                </ul>
            </div>
            <div class="position-relative wd-main-mid">
                <img src="../../images/spa.jpeg" width="100%"/>
                <h1 class="position-absolute bottom-0 left-0 text-white ps-2">SpaceO's Starship</h1>
            </div>
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
