import React from 'react';
import { createClockIcon } from '../Data/SVGBank';

const GameLengthIcon = ({lengthMin, lengthMax, iconObject}) => {
    const iconStyleObject = iconObject? iconObject : {};

    return (
        <div style={{fontSize: '1.5rem'}}>
            {createClockIcon(iconStyleObject)} 
            {' ' + lengthMin}{lengthMin === lengthMax? 'min': '-' + lengthMax + 'min'}
        </div>
    )
}

export default GameLengthIcon;