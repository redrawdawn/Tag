import React, { useState } from "react";
import "./PlayerCard.css"
import { TagButton } from "../tag/TagButton";


export const PlayerCard = ({game, player, setItUserId, itUserId}) => {
    let [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("tag_user")))
    let iAmIt = itUserId == currentUser.id
    let thisPlayerIsIt = player.id == itUserId
    let isItClass = thisPlayerIsIt ? "is-it" : ""

    let tagButtonDiv = (iAmIt && currentUser.id != player.id) ?
                <div className="tag-button-div">
                    <TagButton gameId={game.id} playerId={player.id} setItUserId={setItUserId} />
                </div>
                : "";

    return ( 
        <div className={`card ${isItClass}`}>
            {/* <div className="profile-picture">
                <img src="../../../logo512.png"/>
            </div> */}
            <div>
                <h1>{player.name}</h1>
                {tagButtonDiv}
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