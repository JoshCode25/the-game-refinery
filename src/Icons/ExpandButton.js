import React from 'react';
import {createLessThan, createGreaterThan} from '../Components/SVGBank/SVGBank.js'

function ExpandButton({isExpanded, toggleExpanded}) {

    return (
        <div 
            style={{position: 'absolute', right: '0px', top: '35%'}} 
            onClick={toggleExpanded} 
            className='dim pointer'>
                {isExpanded? createLessThan(30, '#000', 'gray') : createGreaterThan(30, '#000', 'gray') }
        </div>
    )
}

export default ExpandButton;