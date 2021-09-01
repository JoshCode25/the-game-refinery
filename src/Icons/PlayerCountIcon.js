import React from 'react';
import { createPlayerNumberIcon } from '../Data/SVGBank';

const PlayerCountIcon = ({playerMin, playerMax, iconObject}) => {
    const iconStyleObject = iconObject? iconObject : {};

    return (
        <div>
            {createPlayerNumberIcon(iconStyleObject)} 
            {' ' + playerMin}{playerMin === playerMax? '': '-' + playerMax}
        </div>
    )
}

export default PlayerCountIcon;