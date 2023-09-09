import React from "react";
import "./Profile.css";
import HR from "../components/HR";

const Profile = (props) => {
    return (
        <section id="profile">
            <img src={props.userAvatar} alt="" />
            <h1>{props.title}</h1>
            <HR />

            <ul className="skillList">
                <li>{props.li1}</li>-<li>{props.li2}</li>-<li>{props.li3}</li>
            </ul>
        </section>
    );
};

export default Profile;
