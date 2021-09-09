import React from 'react';
import './GamePage.css';
import GameSummary from '../../Containers/GameSummary/GameSummary';
import GameSectionContainer from '../../Containers/GameSectionContainer/GameSectionContainer';

function GamePage({currentGame}) {
    
    return (
        <div className='flex' style={{height: '70rem'}}>
            <GameSummary currentGame={currentGame}/>
            <GameSectionContainer currentGame={currentGame}/>
        </div>
    )

}

export default GamePage;