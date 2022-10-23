import React from "react";
import PostList from "../post-list";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <h2>Home</h2>
            <WhatsHappening/>
            <PostList/>
        </>
    );
};
export default HomeComponent;