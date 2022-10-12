import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return(`
    <ul class="list-group">
        <li class="list-group-item fw-bolder wd-large-font m-0">Who to Follow</li>
        ${
            who.map(item => {
                return (WhoToFollowListItem(item));
            }).join('')
        }
    </ul>
 `);
}



export default WhoToFollowList;