import React from 'react';
import GameSection from '../../Components/GameSection/GameSection';

const GameSectionContainer = ({currentGame}) => {

    const positionArray = ['firstSection', 'secondSection', 'thirdSection', 'fourthSection'];

    return (
        <div style={{position: 'relative'}}>
            <GameSection sectionClassName={positionArray[0]}>
                <div>Overview of {currentGame.name}</div>
            </GameSection>
            <GameSection sectionClassName={positionArray[1]}>
                <div>How to Play {currentGame.name}</div>
            </GameSection>
            <GameSection sectionClassName={positionArray[2]}>
                <div>Stats of {currentGame.name}</div>
            </GameSection>
            <GameSection sectionClassName={positionArray[3]}>
                <div>Comments/Forum</div>
            </GameSection>
        </div>
    )
}

export default GameSectionContainer;