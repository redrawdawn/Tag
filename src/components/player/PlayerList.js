import React from "react";
import { PlayerCard } from "./PlayerCard";

export const PlayerList = ({players}) => {

    return(
        <>
            {players.map(p =>
                <PlayerCard key={p.id} player={p} />
            )}
        </>
    )
}  