import React from 'react';
import PlayerCard from './PlayerCard';

const PlayerInfo = ({ data }) => {
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