import React, { useEffect, useState } from 'react';
import './GamePage.css';
import {createClockIcon, createPlayerNumberIcon} from '../SVGBank/SVGBank.js';

function GamePage({game}) {
    const [isGameLoaded, setIsGameLoaded] = useState(false);
    const {name, rating, playerMin, playerMax, lengthMin, lengthMax, 
        description, mechanics, status, imageUrl} = game;

    return (
        <div className='flex'>
            <div className='flex flex-column child-p-font125rem'>
                <p>{name}</p>
                <img style={{width: '200px', height: '250px'}} alt='game icon' src={imageUrl}/>
                <p>{createPlayerNumberIcon({width: 25, playerFill: '#232c33'})} 
                    {` ${playerMin}-${playerMax}`}</p>
                <p>{createClockIcon({width: 25, minLength: lengthMin, maxLength: lengthMax})}
                    {` ${lengthMin}-${lengthMax}min`}</p>
            </div>
            <div className='child-p-font125rem'>
                <p>{`Status: ${status}. Rating: ${rating}/5`}</p>
                <p>{description}</p>
            </div>
            <div className='child-p-font125rem'>
                <h2>Mechanics</h2>
                {mechanics? mechanics.map((mechanic, i) => <p key={`mechanic${i}`}>{mechanic}</p>):''}
            </div>
        </div>
    )

}

export default GamePage;