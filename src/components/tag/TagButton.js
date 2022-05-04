import React from "react";
import "./TagButton.css";   

export const TagButton = ({playerId}) => {

    return (
        <>
            <button type="button" onClick={() => alert("clicked " + playerId)}>TAG!</button>
        </>
    )
}