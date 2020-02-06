import React from 'react'

const PlayerCard = ({ name, country, id, searches }) => {
    console.log(name, "name")

        return (
        <div data-testid="players" className="player-cards">
                <div className="player">
                    <h2>Name: {name}</h2>
                    <h3>Country: {country}</h3>
                    <h3>ID: {id}</h3>
                    <h3>Searches: {searches}</h3>
                </div>
        </div>
        )
}

export default PlayerCard;