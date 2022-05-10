import React from "react";
import { PlayerCard } from "./PlayerCard";

export const PlayerList = ({game, players, setItUserId, itUserId}) => {
    players.sort((p1,p2) => Number(p2.id == itUserId)-Number(p1.id == itUserId) )
    return(
        <>
            <div className="players_div">
            {players.map(p =>
                <PlayerCard key={p.id} game={game} player={p} 
                    setItUserId={setItUserId} itUserId={itUserId} />
            )}
            </div>
        </>
    )
}