import React from 'react';
import './GameCard.css';
import PlayerCountIcon from '../../Icons/PlayerCountIcon';
import GameLengthIcon from '../../Icons/GameLengthIcon';
import { ColorPalleteHex } from '../../Data/ColorPallette';

function GameCard({game, goToGamePage}) {
    const cardWidth = '210px';
    const cardHeight = '260px';
    const {name, rating, playerMin, playerMax, 
        lengthMin, lengthMax, status, imageUrl} = game;
    const {primary, secondary, complimentary1, complimentary2, dark, light} = ColorPalleteHex;

    let hoverHighlightColor; 

    const updateHighlightColor = (status) => {
        switch(status) {
            case "Digital Development" :
                return hoverHighlightColor = primary;
            case 'Prototype Development' :
                return hoverHighlightColor = secondary;
            case 'Concept Development' :
                return hoverHighlightColor = complimentary1;
            case 'Inactive' :
                return hoverHighlightColor = complimentary2;
            default :
                return hoverHighlightColor = primary;
        }
    }

    hoverHighlightColor = updateHighlightColor(status);

    const playerIconObject = {
        width: 25,
        playerFill: hoverHighlightColor,
        maskStrokeColor: dark
    };
    
    const clockIconObject = {
        width: 25, 
        clockStrokeColor: hoverHighlightColor, 
        timeFill: hoverHighlightColor, 
        minLength: lengthMin, 
        maxLength: lengthMax
    }


    return (
        <div onClick={() => goToGamePage(game)} style={{width: cardWidth, height: cardHeight, position: 'relative'}} className='flex pointer ma3 ba shadowHover hoverReveal'>
            <div style={{borderColor: hoverHighlightColor}} className='hoverInfoContainer'>
                <p style={{color: hoverHighlightColor}} className='f4'>{`${rating}/5`}</p>
                <p style={{color: hoverHighlightColor}} className='f4 pb1'>
                    <PlayerCountIcon playerMin={playerMin} playerMax={playerMax} iconObject={playerIconObject}/>
                </p>
                <p style={{color: hoverHighlightColor}} className='f4 pb1'>
                    <GameLengthIcon lengthMin={lengthMin} lengthMax={lengthMax} iconObject={clockIconObject}/>
                </p>
                <p style={{color: hoverHighlightColor}} className='f4 pb2'>Status: {status}</p>

            </div>
            <div className='flex flex-column items-center' >
                <img src={imageUrl} alt='Game Icon' style={{width: cardWidth, height: cardWidth, overflow: 'hidden'}} />
                <h2 style={{position: 'absolute', bottom: '10px', backgroundColor: light}} 
                    className='f4 pb1 tc mh2'
                    >
                        {name.toUpperCase()}
                </h2>
            </div>            
        </div>
    )
}

export default GameCard;