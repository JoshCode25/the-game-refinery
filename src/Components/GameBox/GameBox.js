import React from 'react';
import GameCard from '../GameCard/GameCard';
import gameList from '../GameList/gameList.js'

function GameBox() {

    return (
        <>
            <h2 style={{backgroundColor: '#f3a712'}} className='f1 flex justify-center'>Games</h2>
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
        </>
    )
}

export default GameBox;