import React from "react";
import { PlayerList } from "../player/PlayerList";

export const Game = () => {

    // get current/latest game from database...
    const game = { id: 1, name: "Game One"}

    // ... and then use it to get playersData for game id 
    //const playersData = getPlayersForGameId(game.id);
    const mockPlayersData = [{ id: 1 }, { id: 2 }, { id: 3 }]

    return (
    <>
        <PlayerList players={mockPlayersData} />
    </>
    )
}