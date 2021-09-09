import React from 'react';

const GameOverview = ({currentGame}) => {
    const {status, rating, description} = currentGame;

    return (
        <div className='child-p-font125rem'>
            <h2>OVERVIEW</h2>
            <p>{`Status: ${status}. Rating: ${rating}/5`}</p>
            <p>{description}</p>
        </div>
    )
}

export default GameOverview;