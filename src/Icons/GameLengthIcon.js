import React from 'react';
import { createClockIcon } from '../Data/SVGBank';

const GameLengthIcon = ({lengthMin, lengthMax, iconObject}) => {
    const iconStyleObject = iconObject? iconObject : {};

    return (
        <div>
            {createClockIcon(iconStyleObject)} 
            {' ' + lengthMin}{lengthMin === lengthMax? '': '-' + lengthMax}
        </div>
    )
}

export default GameLengthIcon;