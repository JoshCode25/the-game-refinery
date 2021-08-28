const defaultShapeFill = 'black';
const defaultDotFill = 'white';
const defaultWidth = 50;

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

    const renderedDots = dotNumberLocator[diceNumber].map((coordinates, i) => {
        return <circle key={'dice'+i} 
                cx={dotLocations[coordinates][0]} 
                cy={dotLocations[coordinates][1]} 
                r={circleRadius} 
                fill={dotFill}
                />;
    })

    return (
        <svg style={{width: width, height: height}}>
            <rect style={{width: width, height: height, fill: diceFill, rx: diceCornerRadius}}/>
            {renderedDots}
        </svg>
    )
}

export const createPlayerNumberIcon = (propertyInput) => {
    const propertyObject = propertyInput? propertyInput : {};

    const playerFill = propertyObject.playerFill? propertyObject.playerFill : defaultShapeFill;
    const width = propertyObject.width? propertyObject.width : defaultWidth;
    const height = width; //must be a square
    const playerWidth = .7*width;

    const headradius = 0.65*playerWidth/2;
    const shoulderHeight = 0.25*height;
    const shoulderPeakRatio = 0.8;
    const backOpacity = 0.6;
    const maskStrokeColor = propertyObject.maskStrokeColor? propertyObject.maskStrokeColor : 'white';
    const maskStrokeWidthReduction = 1/30;

    const headFront = <circle cx={playerWidth/2} cy={playerWidth/2} r={headradius} 
                            fill={playerFill} stroke={maskStrokeColor} strokeWidth={width*maskStrokeWidthReduction}/>;
    const shoulderFront = <path d={`M 0 ${height} l ${playerWidth} 0 l 0 -${shoulderHeight} 
                                q -${playerWidth/2} -${shoulderHeight*shoulderPeakRatio} -${playerWidth} 0 z`} 
                                fill={playerFill} stroke={maskStrokeColor} strokeWidth={width*maskStrokeWidthReduction}/>;

    //change back color by reducing opacity, shift back to right
    const headBack = <circle cx={width - playerWidth/2} cy={playerWidth/2} r={headradius} 
                            fill={playerFill} fillOpacity={backOpacity} stroke={maskStrokeColor} strokeWidth={width*maskStrokeWidthReduction}/>;
    const shoulderBack = <path d={`M ${width - playerWidth} ${height} l ${playerWidth} 0 l 0 -${shoulderHeight} 
                                q -${playerWidth/2} -${shoulderHeight*shoulderPeakRatio} -${playerWidth} 0 z`} 
                                fill={playerFill} fillOpacity={backOpacity} stroke={maskStrokeColor} strokeWidth={width*maskStrokeWidthReduction}/>;
    return (
            <svg style={{width: width, height: height}}>
                {headBack}
                {shoulderBack}
                {headFront}
                {shoulderFront}
            </svg>
    )
}

export const createClockIcon = (propertyInput) => {
    const propertyObject = propertyInput? propertyInput : {};

    const width = propertyObject.width? propertyObject.width : defaultWidth;
    const height = width;
    const clockFill = propertyObject.clockFill? propertyObject.clockFill : defaultDotFill;
    const clockStrokeColor = propertyObject.clockStrokeColor? propertyObject.clockStrokeColor : defaultShapeFill;
    const clockRadius = 0.9*width/2;
    const clockStrokeWidth = clockRadius/6;
    const centerX = width/2;
    const centerY = width/2;
    const timeFill = propertyObject.timeFill? propertyObject.timeFill : defaultShapeFill;
    const timeFillOpacity = 0.5;

    const minLength = propertyObject.minLength? propertyObject.minLength : 15;
    const maxLength = propertyObject.maxLength? propertyObject.maxLength : 60;
    const lengthLimit = 150;
    const minLengthDeg = minLength*360/lengthLimit;
    const maxLengthDeg = maxLength*360/lengthLimit;
    const clockTimeArc = describeArc(centerX, centerY, clockRadius, minLengthDeg, maxLengthDeg);

    const clock = <circle cx={centerX} cy={centerY} r={clockRadius}
                        fill={clockFill} stroke={clockStrokeColor} strokeWidth={clockStrokeWidth}/>;
    const clockTime = <path d={`M ${centerX} ${centerY} ${clockTimeArc} z`} fill={timeFill} fillOpacity={timeFillOpacity}/>

    return (
        <svg style={{width: width, height: height}}>
            {clock}
            {clockTime}
        </svg>
    )
}


function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "L", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;       
}

const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}