import React from 'react';
import logo from '../../Images/logo.svg';

const Logo = ({goHomePage}) => {
    return (
        <div className='flex pl1 pointer' onClick={goHomePage}>
            <img src={logo} style={{maxWidth:'150px', height:'auto'}} alt='logo' />
            <p className='f2 b ph2 flex items-center'>THE <br/>GAME<br/>REFINERY</p>
        </div>
    )
}

export default Logo;