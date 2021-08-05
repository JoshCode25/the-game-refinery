import React from 'react';
import GameCard from '../GameCard/GameCard';
import gameList from '../GameList/gameList.js'

function GameBox() {

    return (
        <div style={{position: 'relative'}}>
            <p /*style={{backgroundColor: '#5089C6'}}*/ className='f2 flex justify-center'>Games</p>
            <hr style={{height: '3px', width: '45%', left: 0, backgroundColor: '#5089C6', position: 'absolute', top: '23px'}}/>
            <hr style={{height: '3px', width: '45%', right: 0, backgroundColor: '#5089C6', position: 'absolute', top: '23px'}}/>
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