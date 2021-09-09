import React  from "react";
import './GameSection.css';

const GameSection = (props) => {
    const {positionNumber, sectionName} = props;
    const positionArray = ['firstSection', 'secondSection', 'thirdSection', 'fourthSection'];
    const sectionClass = positionArray[positionNumber];
    return (
        <div className={`gameSection ${sectionClass} ${sectionName}`} onClick={props.updatePositions}>
            <div style={{margin: '1rem'}}>
                {props.children}
            </div>
        </div>
    )
}

export default GameSection;