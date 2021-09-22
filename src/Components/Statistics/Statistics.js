import React from 'react';

const Statistics = ({currentGame}) => {
    const {name} = currentGame;

    return (
        <div>
            <h2>{`${name} Stats`}</h2>
            <p>Sample Stats and game trends</p>
        </div>
    )
}

export default Statistics;