import React from "react";
import { useParams } from "react-router-dom";
import { getGameByCode } from "../../modules/GameManager";
import './GameCode.css'
import { useNavigate } from "react-router-dom";

export const GameCode = () => {
    const {code} = useParams();
    console.log("Game code: " + code.toString())

    const navigate = useNavigate()

    let game = null
    getGameByCode(code)
        .then(games => game = games[0]);


    return (
        <>
        <div className="game">
            Copy the link below and send it to your friends to invite them to your game
            <div className="game-code">
                {code} {game}
            </div>
            <button type="button" onClick={navigate("/game")}>done</button>
        </div>
        </>
    )
}