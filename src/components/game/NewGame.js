import React, { useRef } from "react";
import './NewGame.css'
import { useNavigate } from "react-router-dom";
import { saveNewGame } from "../../modules/GameManager";

const getCode = () => {
    let length = 8;
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    console.log(result);
    return result;
}

export const NewGame = () => {
    const gameName = useRef("Game")
    const startDateTime = useRef(Date.now)
    const endDateTime = useRef(Date.now)
    const navigate = useNavigate()

    const saveGame = () => {
        let newGame = {
            name: gameName.current.value,
            startDateTime: startDateTime.current.value,
            endDateTime: endDateTime.current.value,
            code: getCode()
        }
        saveNewGame(newGame)
            .then(game => { 
                navigate(`/games/${game.code}`)
            })
    }
    return (
        <div className="new-game-div">
            <div className="new-game">
                Create New Game
            </div>
            <div>
                <input className="game-name" placeholder="game name here" type="text" ref={gameName} />
            </div>
            <div>
                <input className="start-date" type="datetime-local" ref={startDateTime} />
            </div>
            <div>
                <input className="end-date" type="datetime-local" ref={endDateTime} />
            </div>
            <div>
                <button type="button" onClick={() => saveGame()}>Save</button>
            </div>

        </div>
        //that's a lotta divs man
    )
}