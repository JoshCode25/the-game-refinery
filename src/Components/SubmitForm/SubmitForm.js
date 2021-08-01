import React, {useState} from 'react';

function SubmitForm() {
    const [value, setValue] = useState('');
  
    const handleChange = (e) => {
      setValue(e.target.value);
    }
  
    const handleSubmit = (e) => {
        alert('A name was submitted: ' + value);
        e.preventDefault();
        setValue('');
    }
  
      return (
        <div 
            style={{width: 300, height: 150}} 
            className='tc bg-light-green br3 pa3 ma2  bw2 shadow-5 flex flex-column justify-center items-center'
            >
            <p className='f3'>Set Name</p>
            <p className='f4 pv2'>Please enter your Name:</p>
            <form onSubmit={handleSubmit} className='f5'>
                <label>
                    <input type="text" value={value} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
      );
}
  
export default SubmitForm;