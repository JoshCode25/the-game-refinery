import React, {useState} from 'react';
import './GameCard.css';
import {createPlayerNumberIcon} from '../SVGBank/SVGBank.js';

function GameCard({game}) {
    const cardWidth = '210px';
    const cardHeight = '260px';
    const {name, rating, playerMin, playerMax, 
        lengthMin, lengthMax, status, imageUrl} = game;

    return (
        <div style={{width: cardWidth, height: cardHeight, position: 'relative'}} className='flex pointer ma3 ba shadowHover hoverReveal'>
            <div className='hoverInfoContainer'>
                <p className='f4'>{`${rating}/5`}</p>
                <p className='f3 pb1'>{createPlayerNumberIcon({width: 25, playerFill: '#f3a712'})} {playerMin}{playerMin === playerMax? '': '-' + playerMax}</p>
                <p className='f3 pb1'>Length: {lengthMin}-{lengthMax}min</p>
                <p className='f3 pb2'>Status: {status}</p>

            </div>
            <div className='flex flex-column items-center' >
                <img src={imageUrl} alt='Game Icon' style={{width: cardWidth, height: cardWidth, overflow: 'hidden'}} />
                <h2 style={{position: 'absolute', bottom: '10px', backgroundColor: 'white'}} 
                    className='f4 pb1 tc mh2'
                    >
                        {name.toUpperCase()}
                </h2>
            </div>            
        </div>
    )
}

export default GameCard;