import React, {useState, useEffect} from 'react';
import { createDice } from '../Data/SVGBank';

const ClickableRandomDice = ({width}) => {
    const [displayDiceNumber, setDisplayDiceNumber] = useState(1);
    const [fillColorNumber, setFillColorNumber] = useState(0);
    const [diceFill, setDiceFill] = useState('');
    const [diceDouble, setDiceDouble] = useState(false);

    const diceWidth = width? width : 40;
    const fillColorList = ['black', 'red', 'blue', 'green', 'purple', 'orange'];
    let randomInt = 0;
    //changes dice display number
    const changeDiceNumber = () => {
        randomInt = Math.floor(Math.random() * (6) + 1);
        randomInt === displayDiceNumber ? 
            setDiceDouble(true) : setDisplayDiceNumber(randomInt);
    }
    //change dice background if get same number twice in a row
    useEffect (() => {
        if (diceDouble) {
            if(fillColorNumber < fillColorList.length -1) {
                setFillColorNumber(fillColorNumber+1);
            } else {
                setFillColorNumber(0);
            }
        } 
        setDiceDouble(false);
    },[diceDouble])
    //update dice fill color to display
    useEffect (() => {
        setDiceFill(fillColorList[fillColorNumber]);
    }, [fillColorNumber])

    const diceDisplay = createDice({width: diceWidth, diceNumber: displayDiceNumber, diceFill: diceFill, diceCornerRadius: 5});

    return (
        <div className='pointer' onClick={changeDiceNumber}>{diceDisplay}</div>
    )
}

export default ClickableRandomDice;