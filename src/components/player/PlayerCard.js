import React from "react";
import "./PlayerCard.css"

export const PlayerCard = () => {
    return (
        <div className="card">
            <div className="profile-picture">
                <img src="../../../logo512.png"/>
            </div>
            <h1>PlayerName</h1>
            <div className="last-tagged">
                <p>Last tagged:</p> 
                <p>Oct 2</p>
            </div>
            <div className="extra-player-info">
                <p>test 1</p>
                <p>test 2</p>
                <br />
                <p>test 3</p>
                <p>test 4</p>
            </div>
        </div>
    )
}