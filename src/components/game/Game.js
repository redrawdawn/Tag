import React, { useEffect, useState } from "react";
import { getCurrentGame, getPlayersForGame } from "../../modules/GameManager";
import { PlayerList } from "../player/PlayerList";

//let playerId = JSON.parse(sessionStorage.getItem("tag_user")).id

// get current/latest game from database...
//const game = { id: 1, name: "Game One"}

//debugger

// ... and then use it to get playersData for game id 
//const playersData = getPlayersForGameId(game.id);
//const mockPlayersData = [{ id: 1 }, { id: 2 }, { id: 3 }]

export const Game = () => {
    let [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("tag_user")))
    let [players, setPlayers] = useState([])
    let [game, setGame] = useState({})

    useEffect(() => {
        let playersFromDb = []
        getCurrentGame(currentUser.id).then(g => {
            console.log("game: " + g.gameId)
            setGame(g.game)
            console.log(g.game.name)
            getPlayersForGame(g.gameId).then(gamePlayers => {
                console.log(gamePlayers.length)
                gamePlayers.forEach(gamePlayer => {
                    console.log(gamePlayer.user.name)
                    playersFromDb.push(gamePlayer.user) 
                });
                setPlayers(playersFromDb) 
            })
        }) 
    }, [] /* empty brackets -> execute only on first render */)
    
    return (
    <>
        <div className="game-component">{game.name}</div>
        <PlayerList players={players} />
    </>
    )
}