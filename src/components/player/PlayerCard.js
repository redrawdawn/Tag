import React from "react";
import "./PlayerCard.css"
import { TagButton } from "../tag/TagButton";

export const PlayerCard = ({player}) => {

    return ( 
        <div className="card">
            <div className="profile-picture">
                <img src="../../../logo512.png"/>
            </div>
            <div>
                <h1>{player.name}</h1>
                <div className="tag-button-div">
                    <TagButton playerId={player.id} />
                </div>
            </div>
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