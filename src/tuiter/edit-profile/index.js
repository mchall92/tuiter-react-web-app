import React from "react";
import {useSelector} from "react-redux";
import "./index.css";
import EditProfile from "./EditProfileComponent";

const EditProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    return(
        <EditProfile profile={profile}/>
    );
};
export default EditProfileComponent;