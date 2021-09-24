import React from 'react'
import { createDice } from '../../Data/SVGBank';

const TitledList = ({items, title}) => {

    return (
        <div style={{maxWidth: '20rem'}}>
            <h2 style={{fontSize: '2rem'}}>{title}</h2>
            <ul>
                {items? items.map((item, i) => {
                    let diceNum = i+1;
                    return (
                        <li style={{display: 'flex', alignItems: 'center'}} key={`item${i}`}>
                            {createDice({width: 12.5, diceNumber: diceNum, diceCornerRadius: 4})}
                            <p style={{marginLeft: '0.5rem'}}>{`${item}`}</p>
                        </li>
                        )
                   })
                :''}
            </ul>
        </div>
    )
}

export default TitledList;