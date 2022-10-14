import LeftBarItem from "./ExploreLeftBarItem.js";
import itemProperties from "./itemProperties.js";

const NavigationSidebar = (active) => {
    return(`
   <div class="list-group">
     <a class="list-group-item list-group-item-action" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
            ${
        itemProperties.map(itemProperty => {
            return (LeftBarItem(itemProperty, active));
        }).join('')
    }
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tuit</a>
   </div>
 `);
}
export default NavigationSidebar;