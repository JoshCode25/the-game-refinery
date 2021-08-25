import React, {useEffect} from 'react';
import './GameCard.css';
import {createPlayerNumberIcon, createClockIcon} from '../SVGBank/SVGBank.js';

function GameCard({game}) {
    const cardWidth = '210px';
    const cardHeight = '260px';
    const {name, rating, playerMin, playerMax, 
        lengthMin, lengthMax, status, imageUrl} = game;

    let hoverHighlightColor; 

    const setHighlightColor = (status) => {
        switch(status) {
            case "Digital Development" :
                return hoverHighlightColor = '#f3a712';
            case 'Prototype Development' :
                return hoverHighlightColor = '#f56476';
            case 'Concept Development' :
                return hoverHighlightColor = '#739e82';
            case 'Inactive' :
                return hoverHighlightColor = '#5089C6';
            default :
                return hoverHighlightColor = '#5089C6';
        }
    }

    hoverHighlightColor = setHighlightColor(status);

    return (
        <div style={{width: cardWidth, height: cardHeight, position: 'relative'}} className='flex pointer ma3 ba shadowHover hoverReveal'>
            <div style={{borderColor: hoverHighlightColor}} className='hoverInfoContainer'>
                <p style={{color: hoverHighlightColor}} className='f4'>{`${rating}/5`}</p>
                <p style={{color: hoverHighlightColor}} className='f3 pb1'>
                    {createPlayerNumberIcon({width: 25, playerFill: hoverHighlightColor})} 
                    {playerMin}{playerMin === playerMax? '': '-' + playerMax}
                </p>
                <p style={{color: hoverHighlightColor}} className='f3 pb1'>
                    {createClockIcon({clockRadius: 12.5, clockStrokeColor: hoverHighlightColor, timeFill: hoverHighlightColor, 
                        minLength: lengthMin, maxLength: lengthMax})} 
                    {lengthMin}-{lengthMax}min</p>
                <p style={{color: hoverHighlightColor}} className='f3 pb2'>Status: {status}</p>

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