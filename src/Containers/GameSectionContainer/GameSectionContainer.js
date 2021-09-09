import React, {useState, Children} from 'react';
import GameOverview from '../../Components/GameOverview/GameOverview';
import GameSection from '../../Components/GameSection/GameSection';
import HowToPlay from '../../Components/HowToPlay/HowToPlay';

const GameSectionContainer = ({currentGame}) => {

    //make function to cycle positionNumber on click to bring clicked section to front
    //change positionNumber of clicked section to 0
    //cycle through remaining sections and give them numbers 1 through 3
    const positionObject = {
        GameOverview: 0,
        HowToPlay: 1,
        Statistics: 2,
        Comments: 3
    }

    const [sectionPositions, setSectionPositions] = useState(positionObject);

    const updatePositions = (e) => {
        console.log(e.currentTarget);
    }

    return (
        <div style={{position: 'relative'}}>
            <GameSection 
                sectionName={'GameOverview'} 
                updatePositions={updatePositions} 
                positionNumber={positionObject.GameOverview}>
                    <GameOverview currentGame={currentGame}/>
            </GameSection>
            <GameSection 
                sectionName={'HowToPlay'} 
                updatePositions={updatePositions} 
                positionNumber={positionObject.HowToPlay}>
                    <HowToPlay currentGame={currentGame}/>
            </GameSection>
            <GameSection 
                sectionName={'Statisctics'} 
                updatePositions={updatePositions} 
                positionNumber={positionObject.Statistics}>
                    <div>Stats of {currentGame.name}</div>
            </GameSection>
            <GameSection 
                sectionName={'Comments'} 
                updatePositions={updatePositions} 
                positionNumber={positionObject.Comments}>
                    <div>Comments/Forum</div>
            </GameSection>
        </div>
    )
}

export default GameSectionContainer;