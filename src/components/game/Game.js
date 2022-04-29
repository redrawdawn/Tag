import React from "react";
import { useParams } from "react-router-dom";
import { getGameByCode } from "../../modules/GameManager";
import './Game.css'

export const Game = () => {
    const {code} = useParams();
    console.log("Game code: " + code.toString())

    let game = null
    getGameByCode(code)
        .then(games => game = games[0]);


    return (
        <>
        <div className="game">
            game 1 {code} {game}
        </div>
        </>
    )
}