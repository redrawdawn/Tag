const remoteURL = "http://localhost:8088"

export const saveNewGame = (newGame) => {
    return fetch(`${remoteURL}/games`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newGame)    
    })
    .then(result => result.json())
}

export const getGameByCode = (code) => {
    return fetch(`${remoteURL}/games/?code=${code}`)
    .then(res => res.json())
}

export const getCurrentGame = (playerId) => {
    // let game = await fetch(`${remoteURL}/gameplayers/?_expand=game&userId=${playerId}`)
    //     .then(res => res.json())
    //     .then(gp => gp.game)

    let results =  fetch(`${remoteURL}/gameplayers/?_expand=game&userId=${playerId}`)
        .then(res => res.json())
        .then(gps => gps[0])

    //debugger

    return results;
}

export const getPlayersForGame = (gameId) => {
    return fetch(`${remoteURL}/gameplayers?gameId=${gameId}&_expand=user`)
        .then(res => res.json())
}
