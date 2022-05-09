import React, { useState, useEffect } from "react";
import { getCurrentGame, getPlayersForGame } from "../../modules/GameManager";
import { getTags } from "../../modules/TagManager";

export const TagHistory = () => {
    let [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("tag_user")))
    let [game, setGame] = useState({})
    let [tags, setTags] = useState([])
    let [players, setPlayers] = useState([])

    useEffect(() => {
        getCurrentGame(currentUser.id).then(g => {
            if (!g) return
            setGame(g.game)
        })
    }, [] /* empty brackets -> execute only on first render */)

    useEffect(() => {
        getTags(game.id).then(res => setTags(res))
        let playersFromDb = []
        if (game) {
            getPlayersForGame(game.id).then(gamePlayers => {
                gamePlayers.forEach(gamePlayer => {
                    playersFromDb.push(gamePlayer.user)
                });
                setPlayers(playersFromDb)
            })
        }
    }, [game])

    const formatDate = (date) => { 
        let d = new Date(date); 
        return d.toLocaleString(); 
    }

    return(
    <>
        Tag History {game.name} {tags.length}
            {tags.map(t => {
                let taggedUser = players.find(p => p.id === t.taggedId)
                let taggerUser = players.find(p => p.id === t.taggerId)
                return <div key={t.id}>{taggerUser.name} tagged {taggedUser.name} at {formatDate(t.datetime)}</div>
            }
            )}
    
    </>
    )
}