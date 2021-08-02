import React, {useState} from 'react';

function GameCard({game}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [cardWidth, setCardWidth] = useState('250px');
    const {name, rating, playerMin, playerMax, 
        lengthMin, lengthMax, mechanics, description, imageUrl} = game;
    const toggleExpandCard = () => {
        isExpanded? setCardWidth('250px') : setCardWidth('550px');
        setIsExpanded(!isExpanded);
    }

    return (
        <div style={{backgroundColor: 'light-gray', width: cardWidth}} className='flex grow ma3'>
            <div style={{position: 'relative'}} className='flex flex-column items-center' >
                <img src={imageUrl} alt='Game Icon' style={{width: '250px'}} />
                <h2 className='f3 pb1 tc'>{name.toUpperCase()}</h2>
                <p className='f3 pb1'>Players: {playerMin}{playerMin === playerMax? '': '-' + playerMax}</p>
                <p className='f3 pb2'>Length: {lengthMin}-{lengthMax}min</p>
                {!isExpanded? 
                    <div style={{position: 'absolute', right: '0px', top: '35%', width: '38px', height: '38px'}} 
                    onClick={toggleExpandCard} className='f1 dim pointer'>{'>'}</div>
                    : ''
                }    
                {/* <p style={{position: 'absolute', left: '15px', top: '15px'}} className='f4'>{rating}/5</p> */}
            </div>
            {isExpanded? 
                (
                    <div style={{position: 'relative', width: '300px'}} className='flex flex-column justify-around'>
                        <p className='f3 pa2'>{description}</p>
                        <div>
                            <p>Mechanics:</p>
                            <ul>
                                {mechanics.map(mechanic =><li>{mechanic}</li>)}
                            </ul>   
                        </div>   
                        <div style={{position: 'absolute', right: '0px', top: '35%', width: '38px', height: '38px'}} 
                            onClick={toggleExpandCard} className='f1 dim pointer'>{'<'}</div>   
                    </div> 
                ) : ''
            }
        </div>
    )
}

export default GameCard;