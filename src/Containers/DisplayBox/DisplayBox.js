import React from 'react';
import GameCard from '../../Components/GameCard/GameCard.js';

function GameBox({gameList, setCurrentGame, setPageRoute}) {

    const goToGamePage = (game) => {
        console.log(game);
        setCurrentGame(game);
        setPageRoute('gamePage');
    }

    return (
        <div style={{position: 'relative'}}>
            <hr style={{height: '3px', width: '100%', left: 0, backgroundColor: '#5089C6', position: 'absolute', top: '23px', zIndex:'-10'}}/>
            <p style={{backgroundColor: 'white', margin: '0 auto', width: '130px', textAlign: 'center'}} className='f2'>Games</p>
            <div className='flex flex-wrap'>
                {
                    gameList.map((game, i) => {
                        return (
                        <GameCard
                            key={game.name+i}
                            game={game}
                            goToGamePage={goToGamePage}
                        />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default GameBox;