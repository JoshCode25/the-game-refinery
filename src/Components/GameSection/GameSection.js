import React  from "react";
import './GameSection.css';

const GameSection = (props) => {

    return (
        <div className={`gameSection ${props.sectionClassName}`}>
            {props.children}
        </div>
    )
}

export default GameSection;