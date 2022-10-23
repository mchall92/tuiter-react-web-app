import {createSlice} from "@reduxjs/toolkit";
import profile from "../data/profile.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,

    reducers: {
        updateProfile(state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.location = action.payload.location;
            state.bio = action.payload.bio;
            state.dateOfBirth = action.payload.dateOfBirth;
        },
    }
});
export const {updateProfile} = profileSlice.actions
export default profileSlice.reducer;