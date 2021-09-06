import React from 'react';
import GameSection from '../../Components/GameSection/GameSection';

const GameSectionContainer = ({currentGame}) => {

    const positionArray = ['.firstSection', '.secondSection', '.thirdSection', '.fourthSection'];

    return (
        <div style={{position: 'relative'}}>
            <GameSection>
                <div>Overview of {currentGame.name}</div>
            </GameSection>
            <GameSection>
                <div>How to Play {currentGame.name}</div>
            </GameSection>
            <GameSection>
                <div>Stats of {currentGame.name}</div>
            </GameSection>
            <GameSection>
                <div>Comments/Forum</div>
            </GameSection>
        </div>
    )
}

export default GameSectionContainer;