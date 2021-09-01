import React from 'react';
import './GamePage.css';
import GameLengthIcon from '../../Icons/GameLengthIcon';
import PlayerCountIcon from '../../Icons/PlayerCountIcon';
import TitledList from '../../Components/TitledList/TitledList.js';

function GamePage({currentGame}) {
    const {name, rating, playerMin, playerMax, lengthMin, lengthMax, 
        description, mechanics, status, imageUrl} = currentGame;
    
    return (
        <div className='flex '>
            <div className='flex flex-column child-font125rem'>
                <p>{name}</p>
                <img style={{width: '200px', height: '250px'}} alt='game icon' src={imageUrl}/>
                <PlayerCountIcon playerMin={playerMin} playerMax={playerMax}/>
                <GameLengthIcon lengthMin={lengthMin} lengthMax={lengthMax}/>
                <TitledList items={mechanics} title='Mechanics'/>
            </div>
            <div className='child-p-font125rem'>
                <p>{`Status: ${status}. Rating: ${rating}/5`}</p>
                <p>{description}</p>
            </div>
        </div>
    )

}

export default GamePage;