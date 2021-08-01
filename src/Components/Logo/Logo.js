import React from 'react';
import logo from './logo.svg';

const Logo = () => {
    return (
        <div className='flex pl1'>
            <img src={logo} style={{maxWidth:'150px', height:'auto'}} alt='logo'/>
            <p className='f2 b ph2 flex items-center'>THE <br/>GAME<br/>REFINERY</p>
        </div>
    )
}

export default Logo;