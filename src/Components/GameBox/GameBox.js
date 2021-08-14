import React from 'react';
import GameCard from '../GameCard/GameCard';
import gameList from '../GameList/gameList.js'

function GameBox() {
    console.log(gameList);

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
        </div>
    )
}

export default GameBox;