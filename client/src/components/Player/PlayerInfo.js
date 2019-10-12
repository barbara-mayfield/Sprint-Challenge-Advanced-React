import React from 'react';
import PlayerCard from './PlayerCard';

const PlayerInfo = ({ data }) => {
    console.log("PLAYER INFO", data)
    return (
        <div>
            <div>
                {data.map((player) => {
                return (
                    <PlayerCard
                        name={player.name}
                        country={player.country}
                        searches={player.searches}
                    />
                    )}
                )}
            </div>
        </div>
    )
}

export default PlayerInfo;