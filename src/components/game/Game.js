import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentGame, getGamesByCode, getLastTag, getPlayersForGame, joinGameByCode } from "../../modules/GameManager";
import { PlayerList } from "../player/PlayerList";

export const Game = () => {
    let [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("tag_user")))
    let [players, setPlayers] = useState([])
    let [game, setGame] = useState()
    let [itUserId, setItUserId] = useState()
    let gameCode = useRef("")
    const navigate = useNavigate();

    useEffect(() => {
        getCurrentGame(currentUser.id).then(g => {
            if (!g) return
            setGame(g.game)
        })
    }, [] /* empty brackets -> execute only on first render */)

    useEffect(() => {
        let playersFromDb = []
        if (game) {
            getPlayersForGame(game.id).then(gamePlayers => {
                gamePlayers.forEach(gamePlayer => {
                    playersFromDb.push(gamePlayer.user)
                });
                setPlayers(playersFromDb)
            })
            getLastTag(game.id).then(t => {
                setItUserId(t.taggedId)
                game.itId = t.taggedId
            })
        }
    }, [game])

    if (game) {
        let youAreIt = currentUser.id == itUserId;
        let youAreItDiv = youAreIt ? <div>You are it!</div> : <></>
            return (
                <>
                    <div className="game-component">{game.name}</div>
                    <div>{itUserId}</div>
                    {youAreItDiv}
                    <PlayerList game={game} players={players} setItUserId={setItUserId} itUserId={itUserId} />
                </>
            )
    }

    return (
        <>
            <div>
                <div>Join an existing game</div>
                <input type="text" ref={gameCode}></input>
                <button className="join-game-by-code" onClick={() => {
                    joinGameByCode(currentUser.id, gameCode.current.value).then(jg => {
                        getGamesByCode(gameCode.current.value).then(games => setGame(games[0]))
                    })
                }}>Join</button>
            </div>
            <br />
            <div>
                <button type="button" className="start-new-game" onClick={() => navigate("/newgame")}>Start a new game</button>
            </div>
        </>
    )
}