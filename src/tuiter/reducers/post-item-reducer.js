import { createSlice } from "@reduxjs/toolkit";
import postItem from '../data/post-item.json';

const currentUser = {
    "userName": "MASA",
    "handle": "@masa",
    "image": "javascript.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "Now",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const postItemSlice = createSlice({
    name: 'postItem',
    initialState: postItem,

    reducers: {
        deleteTuit(state, action) {
            const index = state.findIndex(tuit =>
                tuit._id === action.payload);
            state.splice(index, 1);
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        }
    }

});

export const {createTuit, deleteTuit} = postItemSlice.actions;
export default postItemSlice.reducer;