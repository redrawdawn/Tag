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
