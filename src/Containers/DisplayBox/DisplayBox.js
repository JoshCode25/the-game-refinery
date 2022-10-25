import React from 'react';
import GameCard from '../../Components/GameCard/GameCard.js';
import DividingHeader from '../../Icons/DividingHeader.js';

function GameBox({gameList, setCurrentGame, setPageRoute}) {

    const goToGamePage = (game) => {
        setCurrentGame(game);
        setPageRoute('gamePage');
    }

    return (
        <div style={{position: 'relative'}}>
            <DividingHeader text={'Games'} lineColor={'#5089C6'}/>
            <div className='flex flex-wrap justify-center'>
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