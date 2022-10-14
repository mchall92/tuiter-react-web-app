import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"

const PostSummaryList = () => {
    return(`
    <ul class="list-group wd-main-btm">
        ${
        posts.map(post => {
            return (PostSummaryItem(post));
        }).join('')
        }
    </ul>
 `);
}

export default PostSummaryList;