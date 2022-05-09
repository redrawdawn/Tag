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

export const getGamesByCode = (code) => {
    return fetch(`${remoteURL}/games/?code=${code}`)
    .then(res => res.json())
}

export const getCurrentGame = (playerId) => {
    let results =  fetch(`${remoteURL}/gameplayers/?_expand=game&userId=${playerId}`)
        .then(res => res.json())
        .then(games => {
            games.sort((g1, g2) => g2.id - g1.id)
            return games[0]
        })
    return results;
}

export const getPlayersForGame = (gameId) => {
    return fetch(`${remoteURL}/gameplayers?gameId=${gameId}&_expand=user`)
        .then(res => res.json())
}

export const joinGameByCode = (userId, gameCode) => {
    return getGamesByCode(gameCode).then(results => {
        let game = results[0]
        let newGamePlayer = { gameId: game.id, userId: userId }
        return fetch(`${remoteURL}/gameplayers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newGamePlayer)    
        })
        .then(result => result.json())
    })
}

export const tagYoureIt = (gameId, taggerUserId, taggedUserId) => {
    let newTag = { 
        gameId: gameId,
        taggerId: taggerUserId,
        taggedId: taggedUserId,
        datetime: Date.now() 
    }
    return fetch(`${remoteURL}/tags`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTag)    
    })
    .then(result => result.json())
}

export const getGame = (gameId) => {
    return fetch(`${remoteURL}/games/${gameId}`)
    .then(res => res.json())
    .then(games => games[0])
}



