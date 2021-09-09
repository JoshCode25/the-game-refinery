import React from 'react';

const HowToPlay = ({currentGame}) => {
    const {name} = currentGame;

    return (
        <div>
            <h2>{`How to Play ${name}`}</h2>
            <p>Sample of Rules and explanation</p>
        </div>
    )
}

export default HowToPlay;