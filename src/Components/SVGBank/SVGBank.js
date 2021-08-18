const defaultShapeFill = 'black';
const defaultDotFill = 'white';
const defaultWidth = 50;
const defaultHeight = 50;

export const createLessThan = (svgWidth, svgStrokeColor, svgFillColor) => {
    const svgHeight = svgWidth;
    const centerX = svgWidth/2;
    const centerY = svgHeight/2;
    const lineOffsetStart = Math.round(svgWidth/6);
    const lineOffsetEnd = svgWidth - Math.round(lineOffsetStart*1.5);
    return (
        <svg style={{height: svgWidth, width: svgHeight}}>
            {svgFillColor? <circle cx={centerX} cy={centerY} r={centerX} fill={svgFillColor}/> :''}
            <line x1={lineOffsetStart} y1={centerY} x2={lineOffsetEnd} y2={lineOffsetEnd} stroke={svgStrokeColor} strokeWidth={2}/>
            <line x1={lineOffsetStart} y1={centerY} x2={lineOffsetEnd} y2={lineOffsetStart} stroke={svgStrokeColor} strokeWidth={2}/>
        </svg>
    )
}

export const createGreaterThan = (svgWidth, svgStrokeColor, svgFillColor) => {
    const svgHeight = svgWidth;
    const centerX = svgWidth/2;
    const centerY = svgHeight/2;
    const lineOffsetEnd = Math.round(svgWidth/6);
    const lineOffsetStart = svgWidth - Math.round(lineOffsetEnd*1.5);
    return (
        <svg style={{height: svgWidth, width: svgHeight}}>
            {svgFillColor? <circle cx={centerX} cy={centerY} r={centerX} fill={svgFillColor}/> :''}
            <line x1={lineOffsetStart} y1={centerY} x2={lineOffsetEnd} y2={lineOffsetEnd} stroke={svgStrokeColor} strokeWidth={2}/>
            <line x1={lineOffsetStart} y1={centerY} x2={lineOffsetEnd} y2={lineOffsetStart} stroke={svgStrokeColor} strokeWidth={2}/>
        </svg>
    )
}

export const createDice = (propertyObject) => {
    const width = propertyObject.width? propertyObject.width : 100;
    const height = propertyObject.height? propertyObject.height : width;
    const diceFill = propertyObject.diceFill? propertyObject.diceFill : defaultShapeFill;
    const dotFill = propertyObject.dotFill? propertyObject.dotFill : defaultDotFill;
    const diceMaxNumber = 6;
    const diceCornerRadius = propertyObject.diceCornerRadius? propertyObject.diceCornerRadius : 0;
    const diceNumber = 
                        (propertyObject.diceNumber<=diceMaxNumber && propertyObject.diceNumber>=1)? 
                        propertyObject.diceNumber : 
                        randomIntFromInterval(1, diceMaxNumber);
    const centerX = width/2;
    const centerY = height/2;
    const diceSpacingX = width/4;
    const diceSpacingY = height/4;
    const circleRatio = 0.1875;
    const circleDiameter = circleRatio*width;
    const circleRadius = circleDiameter/2;

    const dotLocations = [
        [diceSpacingX, diceSpacingY], [centerX, diceSpacingY], [width-diceSpacingX, diceSpacingY],
        [diceSpacingX, centerY], [centerX, centerY], [width-diceSpacingX, centerY],
        [diceSpacingX, height-diceSpacingY], [centerX, height-diceSpacingY], [width-diceSpacingX, height-diceSpacingY]
    ];

    const dotNumberLocator = {
        1 : [4],
        2 : [0, 8],
        3 : [0, 4, 8],
        4 : [0, 2, 6, 8],
        5 : [0, 2, 4, 6, 8],
        6 : [0, 2, 3, 5, 6, 8]
    };

    console.log('DiceNumberBefore: ', diceNumber);

    const renderedDots = dotNumberLocator[diceNumber].map((coordinates, i) => {
        console.log('diceNumber: ', diceNumber);
        console.log('coord: ', coordinates);
        return <circle key={'dice'+i} 
                cx={dotLocations[coordinates][0]} 
                cy={dotLocations[coordinates][1]} 
                r={circleRadius} 
                fill={dotFill}
                />;
    })

    console.log('DiceNumberAfter: ', diceNumber);
    console.log(renderedDots);

    return (
        <svg style={{width: width, height: height}}>
            <rect style={{width: width, height: height, fill: diceFill, rx: diceCornerRadius}}/>
            {renderedDots}
        </svg>
    )
}

export const createPlayerNumberIcon = (propertyObject) => {
    const playerFill = propertyObject.playerFill? propertyObject.playerFill : defaultShapeFill;
    const width = propertyObject.width? propertyObject.width : defaultWidth;
    const height = width; //must be a square
    const playerWidth = 5/8*width;

    const centerX = width/2;
    const headradius = 0.75*playerWidth/2;
    const shoulderHeight = 0.25*height;

    const headFront = <circle cx={playerWidth/2} cy={playerWidth/2} r={headradius} fill={playerFill}/>;
    const shoulderPath = <path d={`M 0 ${height} l ${playerWidth} 0 l 0 -${shoulderHeight} 
                                q -${playerWidth/2} -${shoulderHeight*0.5} -${playerWidth} 0 z`} 
                                fill={playerFill} stroke={playerFill}/>;
    const shoulderFront = <ellipse cx={playerWidth/2} cy={height*1.3} rx={width*1.25} ry={height*0.75} fill={playerFill}/>;
    const headBack = <circle cx={width - playerWidth/2} cy={headradius} r={headradius} fill={playerFill}/>;
    const shoulderBack = <ellipse cx={width - playerWidth/2} cy={height*1.3} rx={width*1.25} ry={height*0.75} fill={playerFill}/>;

    return (
        <g style={{width: width, height: height}} className='ba'>
            <svg style={{width: playerWidth, height: height, x: centerX, color: 'gray'}}>
                {headFront}
                {shoulderPath}
            </svg>
            {/* <svg style={{width: playerWidth, height: height}}>
                {headBack}
                {shoulderBack}
            </svg> */}
        </g>
    )
}
const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }