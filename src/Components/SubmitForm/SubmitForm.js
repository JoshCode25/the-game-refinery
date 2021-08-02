import React, {useState, useEffect, useRef} from 'react';

function SubmitForm({setRoute, setUserName}) {
    const [value, setValue] = useState('');
    const inputRef = useRef(null);
  
    useEffect(() => {
      inputRef.current.focus();
    }, []);

    const handleChange = (e) => {
      setValue(e.target.value);
    }
  
    const handleSubmit = (e) => {
        setUserName(value);
        e.preventDefault();
        setValue('');
        setRoute('home');
    }
  
      return (
        <div 
            style={{width: '40%', height: 150, position: 'absolute', top: 100, left:'30%', backgroundColor: '#f56476'}} 
            className='tc br3 pa3 ma2 bw2 shadow-5 flex flex-column justify-center items-center'
            >
            <p className='f3 pv2'>Please enter your Name:</p>
            <form onSubmit={handleSubmit} className='f5'>
                <label>
                    <input ref={inputRef} type="text" value={value} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
      );
}
  
export default SubmitForm;