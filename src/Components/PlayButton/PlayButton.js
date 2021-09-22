import React from 'react';
import './PlayButton.css';
import {ColorPaletteHex} from '../../Data/ColorPalette.js';

const PlayButton = ({currentGame, playGame}) => {

    return (
        <div style={{backgroundColor: ColorPaletteHex.primary}} className='playButton' onClick={playGame}>
            <strong>Play Now!</strong>
        </div>
    )
}

export default PlayButton;