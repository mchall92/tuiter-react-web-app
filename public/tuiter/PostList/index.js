import PostItems from "./PostItems.js";
import posts from "./posts.js"

const PostList = () => {
    return(`
    <ul class="list-group wd-main-btm">
        ${
        posts.map(post => {
            return (PostItems(post));
        }).join('')
    }
    </ul>
 `);
}

export default PostList;