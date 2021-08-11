const defaultShapeFill = 'black';
const defaultDotFill = 'white';

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
        <svg className={diceNumber} style={{width: width, height: height}}>
            {console.log('numberWithin: ', diceNumber)}
            <rect style={{width: width, height: height, fill: diceFill, rx: diceCornerRadius}}/>
            {renderedDots}
            {console.log(renderedDots)}
        </svg>
    )
}

const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }