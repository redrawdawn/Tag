import React, { useState, useEffect } from "react";
import { getCurrentGame, getPlayersForGame } from "../../modules/GameManager";
import { getTags } from "../../modules/TagManager";
import { TagHistoryItem } from "./TagHistoryItem";
import "./TagHistory.css"
import { Navbar } from "../nav/navbar";

export const TagHistory = () => {
    let [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("tag_user")))
    let [game, setGame] = useState({})
    let [tags, setTags] = useState([])
    let [players, setPlayers] = useState([])
 
    useEffect(() => {
        //console.log("first render")
        getCurrentGame(currentUser.id).then(g => {
            //debugger
            if (!g) return
            setGame(g.game)
        })
    }, [] /* empty brackets -> execute only on first render */)

    useEffect(() => {
        //console.log("game changed 1")
        let playersFromDb = []
        if (game) {
            getPlayersForGame(game.id).then(gamePlayers => {
                gamePlayers.forEach(gamePlayer => {
                    playersFromDb.push(gamePlayer.user)
                    //console.log(gamePlayer.user.name)
                });
                setPlayers(playersFromDb)
            })
        } 
    }, [game]) 

    useEffect(() => {
        //console.log("game changed 2")
        getTags(game.id).then(res => setTags(res))
    }, [game])
 
    return(
    <>
        Tag History {game.name} {tags.length}
        {
            tags.map(t => {
            //console.log("game: " + game.id + "tag: " + t.taggedId + " " + t.taggerId)
            let taggedUser = players.find(p => p.id === t.taggedId)
            let taggerUser = players.find(p => p.id === t.taggerId)
            return <TagHistoryItem key={t.id} tag={t} taggedUser={taggedUser} taggerUser={taggerUser}/>
            })
        }
        <Navbar />
    </>
    )
}