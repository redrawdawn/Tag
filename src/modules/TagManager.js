const remoteURL = "http://localhost:8088"

export const getLastTag = (gameId) => {
    return fetch(`${remoteURL}/tags?gameId=${gameId}&_sort=datetime&_order=desc`)
    .then(res => res.json())
    .then(tags => tags[0])
}

export const getPlayerTags = (gameId, taggedUserId) => {
    return fetch(`${remoteURL}/tags?gameId=${gameId}&taggedId=${taggedUserId}&_sort=datetime&_order=desc`)
    .then(res => res.json())
}

export const getTags = (gameId) => {
    return fetch(`${remoteURL}/tags?gameId=${gameId}&_sort=datetime&_order=desc`)
    .then(res => res.json())
}

