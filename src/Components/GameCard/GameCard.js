import React from 'react';

function GameCard({game}) {
    const {name, rating, playerMin, playerMax, 
        lengthMin, lengthMax, mechanics, description, imageUrl} = game;
    //rating    Description     Mechanics
    //Image     Lemgth
    //Name      PlayerCount

    //image
    //game title/name
    //game description
    //game rating
    //game player count
    //game length
    //game mechanics

    return (
        <div className='flex grow'>
            <div className='flex flex-column ba' style={{position: 'relative', width: '40%'}}>
                <h2 style={{position: 'absolute'}} className='f3 pa4'>{name.toUpperCase()}</h2>
                <img src={imageUrl} alt='Game Icon' style={{width: '90%', height: '90%'}} className='pa3'/>
                <p>{rating}</p>
            </div>
            <div className='flex flex-column ba'>
                <div className='flex justify-between'>
                    <p>Players: {playerMin}-{playerMax}</p>
                    <p>Play Time: {lengthMin}-{lengthMax}min</p>
                </div>
                <p>{description}</p>
            </div>
            <ul>
                {mechanics.map(mechanic =><li>{mechanic}</li>)}
            </ul>         
        </div>
    )
}

export default GameCard;