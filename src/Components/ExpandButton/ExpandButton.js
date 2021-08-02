import React from 'react';

function ExpandButton({isExpanded, toggleExpanded}) {

    let displayCharacter = '';
    isExpanded? displayCharacter = '<' : displayCharacter = '>';

    return (
        <div 
            style={{position: 'absolute', right: '0px', top: '35%', width: '40px', height: '40px',
                    backgroundColor: 'gray', borderRadius: '50%'}} 
            onClick={toggleExpanded} 
            className='dim pointer'>
                <p style={{width: '100%', height: '100%'}} className='f1 tc'>{displayCharacter}</p>
        </div>
    )
}

export default ExpandButton;