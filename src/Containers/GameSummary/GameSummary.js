import React from 'react';
import GameLengthIcon from '../../Icons/GameLengthIcon';
import PlayerCountIcon from '../../Icons/PlayerCountIcon';
import TitledList from '../../Components/TitledList/TitledList.js';

const GameSummary = ({currentGame}) => {
    const {name, playerMin, playerMax, lengthMin, lengthMax, mechanics, imageUrl} = currentGame;
    const clockIconObject = {
        width: 25, 
        minLength: lengthMin, 
        maxLength: lengthMax
    }

    return (
        <div style={{margin: '1rem'}}>
            <h2>{name}</h2>
            <img style={{width: '200px', height: '250px', margin: '0.5rem auto'}} alt='game icon' src={imageUrl}/>
            <div className='flex justify-around'>
                <PlayerCountIcon playerMin={playerMin} playerMax={playerMax}/>
                <GameLengthIcon lengthMin={lengthMin} lengthMax={lengthMax} iconObject={clockIconObject}/>
            </div>
            <TitledList items={mechanics} title='Mechanics'/>
        </div>
    )

}

export default GameSummary;