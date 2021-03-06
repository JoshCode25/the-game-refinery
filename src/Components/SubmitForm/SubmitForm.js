import React, {useState, useEffect, useRef} from 'react';
import './SubmitForm.css';
import {ColorPaletteHex} from '../../Data/ColorPalette.js'

function SubmitForm({setUserRoute, setUserName}) {
    const [value, setValue] = useState('');
    const inputRef = useRef(null);
  
    //when it renders set focus to input
    useEffect(() => {
      inputRef.current.focus();
    }, []);

    const handleChange = (e) => {
      setValue(e.target.value);
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();
        setUserName(value);
        setValue('');
        setUserRoute('signedIn');
    }
  
      return (
        <div 
            style={{width: '30%', height: 150, position: 'absolute', zIndex: 100, top: 100, left:'35%', backgroundColor: ColorPaletteHex.secondary}} 
            className='tc br3 pa3 ma2 bw2 shadow-5 flex flex-column justify-center items-center'
            >
            <p className='f3 pv2'>Please enter your Name:</p>
            <form onSubmit={handleSubmit} className='f5'>
                <label>
                    <input style={{borderRadius: '10px', height: '2rem', width: '200px'}} className='hideFocusOutline' ref={inputRef} type="text" value={value} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" className='f3 ph3 pv2 mb2 dib dim pointer' style={{border: 'none', backgroundColor: ColorPaletteHex.secondary, fontFamily: 'Segoe UI'}}/>
            </form>
        </div>
      );
}
  
export default SubmitForm;