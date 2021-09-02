import React from 'react';

const DividingHeader = ({text, lineColor}) => {

    const pWidth = `${text.length*2}rem`;

    return (
        <div>
            <hr 
                style={{
                    borderTop: `0.25rem solid ${lineColor}`,
                    width: '100%', 
                    left: 0, 
                    position: 'relative', 
                    top: '1.75rem',
                }}
            />
            <p 
                style={{
                    width: pWidth,
                    backgroundColor: 'white', 
                    margin: '0 auto', 
                    padding: '0 1rem', 
                    textAlign: 'center', 
                    position: 'relative',
                    zIndex: '1'
                }}
                className='f2'
            >
                    {text}
            </p>
        </div>
    )
}

export default DividingHeader;