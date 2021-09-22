import React, {useState, useEffect} from 'react';
import sliderContent from './sliderContent';
// import './Slider.css';

const sliderArray = sliderContent;

function Slider() {
    const [isDisplayed, setIsDisplayed] = useState(true);
    const [slideNumber, setSlideNumber] = useState(0);
    const [slideText, setSlideText] = useState('');

    useEffect(() => {
        setIsDisplayed(true);
        return function cleanup() {setIsDisplayed(false)};
    },[])
    
    useEffect(() => {
        setSlideText(sliderArray[slideNumber].text.toUpperCase());

        setTimeout(advanceSlide, sliderArray[slideNumber].displayTime);
    }, [slideNumber])

    const advanceSlide = () => {
        if (isDisplayed) {
            let newSlideNumber = slideNumber + 1;
            if(newSlideNumber > sliderArray.length-1) {
                setSlideNumber(0);
            } else {
                setSlideNumber(newSlideNumber);
            }
        }
    }

    
    return (
        <div id='Slider' style={{width:'100%', height: 250}} className='flex items-center justify-center'>
            <p className='f2 tc'>{slideText}</p>
        </div>
    )
}

export default Slider;