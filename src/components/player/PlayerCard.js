import React, { useEffect, useState } from "react";
import "./PlayerCard.css"
import { TagButton } from "../tag/TagButton";
import { getPlayerTags } from "../../modules/TagManager";


export const PlayerCard = ({game, player, setItUserId, itUserId}) => {
    let [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("tag_user")))
    let [tags, setTags] = useState([])
    let iAmIt = itUserId == currentUser.id
    let thisPlayerIsIt = player.id == itUserId
    let isItClass = thisPlayerIsIt ? "is-it" : ""

    let tagButtonDiv = (iAmIt && currentUser.id != player.id) ?
                <div className="tag-button-div">
                    <TagButton gameId={game.id} playerId={player.id} setItUserId={setItUserId} />
                </div>
                : "";

    useEffect(() => {
        async function fetchData() {
            let playerTags = await getPlayerTags(game.id, player.id)
            //console.log(JSON.stringify(tags))
            setTags(playerTags)
        }
        fetchData();
    },[])

    const formatDate = (date) => { 
        let d = new Date(date); 
        return d.toLocaleString(); 
    }

    return ( 
        <>
            {
                // (thisPlayerIsIt ? <> <hr /> <br/> </> : "")
                (thisPlayerIsIt ? <> <h3>'It' since: {(tags.length > 0) ? formatDate(tags[0].datetime) : ""} </h3></> : "")
            }
        <div className={`card ${isItClass}`}>

            <div className="mainPanel">
            <div className="profile-picture" style={{background: 'lightblue'}}>
                <img src="../../../icons/rhino.png"/>
            </div>
                <h1 className="player_name">{player.name} {(thisPlayerIsIt ? <>is IT!</> : "")}</h1>
                
            </div>
            <div className="expandoPanel">
                    <p>Last tagged: {(tags.length > 0) ? formatDate(tags[0].datetime) : " not yet!"}</p> 
                {tagButtonDiv}
                <div className="last-tagged">
                    {(thisPlayerIsIt ? <>CURRENTLY IT!</> : "")}
                </div>
            </div>


            {/* <div className="extra-player-info">
                <p>test 1</p>
                <p>test 2</p>
                <br />
                <p>test 3</p>
                <p>test 4</p>
            </div> */}
        </div>
            {
                (thisPlayerIsIt ? <> <hr /> <br/> </> : "")
            }
        </>
    )
}