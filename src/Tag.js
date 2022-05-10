import React, { useState } from "react";
import { Router } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { Navbar } from "./components/nav/navbar";

export const Tag = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("tag_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("tag_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("tag_user") !== null)
    }

    const clearAuthUser = () => {
        //console.log("clearing auth user")
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("tag_user") !== null)
      }

    return (
        <>
            <ApplicationViews setAuthUser={setAuthUser} 
                isAuthenticated={isAuthenticated}
                clearAuthUser={clearAuthUser} />
        </>
    )
}