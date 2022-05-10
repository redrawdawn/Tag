import React, { Link, useState } from "react";
import { useNavigate } from "react-router-dom"
import { Navbar } from "../nav/navbar";
import './Profile.css'

/*
let tmp = JSON.parse(sessionStorage.getItem("tag_user"));
let currentUser = null
if (tmp) {
    currentUser = tmp[0];
}
*/

export const Profile = ({clearAuthUser}) => {
    const currentUser = JSON.parse(sessionStorage.getItem("tag_user"))

    const navigate = useNavigate();
    
    return (
        <>
        <div className="profile_card">
            <div className="profile-picture">
                <img src="../../../icons/fox.png" />
            </div>
            <h1>{currentUser.name}</h1>
            {/* <div className="last-tagged">
                <p>Last tagged:</p>
                <p>Oct 2</p>
            </div> */}

            <button className="logout-button" onClick={clearAuthUser}>log out</button>

        </div>
        <Navbar />
        </>
    )
}