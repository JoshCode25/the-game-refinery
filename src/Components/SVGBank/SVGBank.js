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

export const createDice = (svgWidth, svgHeight, svgFillColor, number, circleFill) => {
    const centerX = svgWidth/2;
    const centerY = svgHeight/2;
    const diceSpacingX = svgWidth/4;
    const diceSpacingY = svgHeight/4;
    const circleRatio = 0.125;
    const circleDiameter = circleRatio*svgWidth;



    return (
        <svg style={{width: svgWidth, height: svgHeight}}>
            <rect style={{width: svgWidth, height: svgHeight, fill: svgFillColor}}/>
            <circle cx={centerX} cy={centerY} r={circleDiameter} fill={'white'}/>
        </svg>
    )
}