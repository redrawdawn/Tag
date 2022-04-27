import React from "react";
import "./PlayerCard.css"

export const PlayerCard = () => {
    return (
        <div className="card">
            <div className="profile-picture">
                <img src="../../../logo512.png"/>
            </div>
            <h1>Player Name</h1>
            <div className="last-tagged">
                <p>Last tagged:</p> 
                <p>Oct 2</p>
            </div>
        </div>
    )
}