import React, { useState } from "react";
import { tagYoureIt } from "../../modules/GameManager";
import "./TagButton.css";   

export const TagButton = ({gameId, playerId, setItUserId}) => {
    let [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("tag_user")))

    if (playerId != currentUser.id)
        return (
            <div className="tag-button" >
                <button type="button" onClick={() => {
                    tagYoureIt(gameId, currentUser.id, playerId)
                    setItUserId(playerId)
                }
                }>TAG!</button>
            </ div>
    )
}