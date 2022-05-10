import React from "react";

export const TagHistoryItem = ({tag, taggerUser, taggedUser}) => {
    
    const formatDate = (date) => { 
        let d = new Date(date); 
        return d.toLocaleString();  
    }

    return(<>
        <div className="tag_history_item">{taggerUser.name} tagged {taggedUser.name} at {formatDate(tag.datetime)}</div>
        </>
    )
}