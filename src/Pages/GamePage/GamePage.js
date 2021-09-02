import React from 'react';
import './GamePage.css';
import GameSummary from '../../Containers/GameSummary/GameSummary';

function GamePage({currentGame}) {
    const {rating, description, status} = currentGame;
    
    return (
        <div className='flex'>
            <GameSummary currentGame={currentGame}/>
            <div className='child-p-font125rem'>
                <p>{`Status: ${status}. Rating: ${rating}/5`}</p>
                <p>{description}</p>
            </div>
        </div>
    )

}

export default GamePage;