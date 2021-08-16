import React, { useEffect, useState } from 'react';

function GamePage({game}) {
    const [isGameLoaded, setIsGameLoaded] = useState(false);
    const {name, rating, playerMin, playerMax, lengthMin, lengthMax, 
        description, mechanics, status, imageUrl} = game;
    const mechanicsDisplay = [];
    useEffect(() => {
        setIsGameLoaded(true);
    }, [])

    console.log({game});
    console.log(mechanics);
    return (
        <div className='flex'>
            <div className='flex flex-column'>
                <div>{name}</div>
                <img style={{width: '200px', height: '250px'}} alt='game icon' src={imageUrl}/>
                <div>{`Players: ${playerMin}-${playerMax}`}</div>
                <div>{`Length: ${lengthMin}-${lengthMax}min`}</div>
            </div>
            <div>
                <div>{`Status: ${status}. Rating: ${rating}/5`}</div>
                <div>{description}</div>
            </div>
            {/* <div>
                {mechanics.map((mechanic, i) => {
                    return <p key={i}>{mechanic}</p>

                })}
            </div> */}

        </div>
    )

}

export default GamePage;