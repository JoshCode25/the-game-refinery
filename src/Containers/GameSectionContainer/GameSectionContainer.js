import React, {useState, useEffect} from 'react';
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
    const positionArray = ['GameOverview', 'HowToPlay', 'Statistics', 'Comments'];

    const [sectionPositions, setSectionPositions] = useState({});

    useEffect(() => {
        setSectionPositions(positionObject);
    }, []);

    const updatePositions = (e) => {
        const classArray = e.currentTarget.className.split(/\s/);
        const sectionName = classArray.filter(className => !className.includes('Section'))[0];
        const sectionLocation = positionArray.indexOf(sectionName);

        const firstArrayPortion = positionArray.slice(sectionLocation);
        const secondArrayPortion = positionArray.slice(0, sectionLocation);
        const newPositionArray = firstArrayPortion.concat(secondArrayPortion);
        const newPositionObject = {};

        newPositionArray.forEach((position, index) => {
            newPositionObject[`${position}`] = index;
        })
        setSectionPositions(newPositionObject);
    }

    return (
        <div style={{position: 'relative'}}>
            <GameSection 
                sectionName={'GameOverview'} 
                updatePositions={updatePositions} 
                positionNumber={sectionPositions.GameOverview}>
                    <GameOverview currentGame={currentGame}/>
            </GameSection>
            <GameSection 
                sectionName={'HowToPlay'} 
                updatePositions={updatePositions} 
                positionNumber={sectionPositions.HowToPlay}>
                    <HowToPlay currentGame={currentGame}/>
            </GameSection>
            <GameSection 
                sectionName={'Statistics'} 
                updatePositions={updatePositions} 
                positionNumber={sectionPositions.Statistics}>
                    <div>Stats of {currentGame.name}</div>
            </GameSection>
            <GameSection 
                sectionName={'Comments'} 
                updatePositions={updatePositions} 
                positionNumber={sectionPositions.Comments}>
                    <div>Comments/Forum</div>
            </GameSection>
        </div>
    )
}

export default GameSectionContainer;