import React, { useRef, useState } from "react";
import './NewGame.css'
import { useNavigate } from "react-router-dom";
import { joinGameByCode, saveNewGame, tagYoureIt } from "../../modules/GameManager";
import { GameCode } from "./GameCode";

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
    let [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("tag_user")))
    const gameName = useRef()
    const startDateTime = useRef()
    const endDateTime = useRef()
    const navigate = useNavigate()

    //let today = new Date()
    //startDateTime.current.value = today.toISOString()
    //console.log(today.toISOString()) 

    const saveGame = () => {
        let gameCode = getCode()
        let newGame = {
            name: gameName.current.value,
            startDateTime: startDateTime.current.value,
            endDateTime: endDateTime.current.value,
            code: gameCode
        }
        saveNewGame(newGame)
            .then(game => { 
                joinGameByCode(currentUser.id, gameCode)
                    .then(()=> {
                        tagYoureIt(game.id, currentUser.id, currentUser.id)
                        .then(()=> navigate(`/gamecode/${gameCode}`))
                    }) 
            })
    }
    return (
        <div className="new-game-div">
            <div className="new-game">
                Create New Game
            </div>
            <div>
                <input className="game-name" placeholder="new game name" type="text" ref={gameName} />
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