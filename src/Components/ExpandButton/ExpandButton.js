import React from 'react';
import {createLessThan, createGreaterThan, createDice} from '../SVGBank/SVGBank.js'

function ExpandButton({isExpanded, toggleExpanded}) {

    return (
        <div 
            style={{position: 'absolute', right: '0px', top: '35%'}} 
            onClick={toggleExpanded} 
            className='dim pointer'>
                {isExpanded? createLessThan(30, '#000', 'gray') : createGreaterThan(30, '#000', 'gray') }
            {/* {createDice(200, 200, 'black', 1)} */}
        </div>
    )
}

export default ExpandButton;