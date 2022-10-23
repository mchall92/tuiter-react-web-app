import React from "react";
import "./index.css";
import Profile from "./ProfileComponent.js"
import {useSelector} from "react-redux";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    return(
        <Profile profile={profile}/>
    );
};
export default ProfileComponent;