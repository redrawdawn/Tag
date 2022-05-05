import React from "react";
import "./TagButton.css";   

export const TagButton = ({playerId}) => {

    return (
        <div className="tag-button" >
            <button type="button" onClick={() => alert("clicked " + playerId)}>TAG!</button>
        </ div>
    )
}