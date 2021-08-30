import React, { useState, useEffect } from 'react';
import GameCard from '../../Components/GameCard/GameCard.js';
import gameList from '../../Data/gameList.js'
import GamePage from '../../Pages/GamePage/GamePage.js';

function GameBox() {
    const [gameIndex, setGameIndex] = useState(0);
    const [currentGame, setCurrentGame] = useState({});
   
    useEffect(() => {
        setCurrentGame(gameList[gameIndex]);
    }, [gameIndex]);

    return (
        <div style={{position: 'relative'}}>
            <hr style={{height: '3px', width: '100%', left: 0, backgroundColor: '#5089C6', position: 'absolute', top: '23px', zIndex:'-1'}}/>
            <p style={{backgroundColor: 'white', margin: '0 auto', width: '130px', textAlign: 'center'}} className='f2'>Games</p>
            <div className='flex flex-wrap'>
                {
                    gameList.map((game, i) => {
                        return (
                        <GameCard
                            key={game.name+i}
                            game={game}
                        />
                        );
                    })
                }
            </div>
            <GamePage game={currentGame}/>
        </div>
    )
}

export default GameBox;