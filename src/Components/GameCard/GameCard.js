import React, {useState} from 'react';
import './GameCard.css';

function GameCard({game}) {
    const cardWidth = '210px';
    const {name, rating, playerMin, playerMax, 
        lengthMin, lengthMax, mechanics, description, imageUrl} = game;

    return (
        <div style={{width: cardWidth, height: cardWidth, position: 'relative'}} className='flex pointer ma3 ba shadowHover'>
            <div style={{position: 'absolute', top: '10px'}} className='hidden'>
                <p className='f3 pb1'>Players: {playerMin}{playerMin === playerMax? '': '-' + playerMax}</p>
                <p className='f3 pb2'>Length: {lengthMin}-{lengthMax}min</p>
                <p style={{position: 'absolute', left: '15px', top: '15px'}} className='f4'>{rating}/5</p>

            </div>
            <div className='flex flex-column items-center' >
                <img src={imageUrl} alt='Game Icon' style={{width: '100%', height: 'auto', overflow: 'hidden'}} />
                <h2 style={{position: 'absolute', bottom: '10px', backgroundColor: 'white'}} 
                    className='f3 pb1 tc'
                    >
                        {name.toUpperCase()}
                </h2>
            </div>
            {/* {isExpanded? 
                (
                    <div style={{position: 'relative', width: '300px'}} className='flex flex-column justify-around'>
                        <p className='f3 pa2'>{description}</p>
                        <div>
                            <p>Mechanics:</p>
                            <ul>
                                {mechanics.map((mechanic, i) => <li key={mechanic.value + i}>{mechanic}</li>)}
                            </ul>   
                        </div>   
                        <ExpandButton isExpanded={isExpanded} toggleExpanded={toggleExpandCard}/>
                    </div> 
                ) : ''
            } */}
        </div>
    )
}

export default GameCard;