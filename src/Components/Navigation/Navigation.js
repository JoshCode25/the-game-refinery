import React from 'react';
import './Navigation.css';
import Logo from '../Logo/Logo.js';
import 'tachyons';

const Navigation = (props) => {

    return (
        <nav style={{backgroundColor: '#5089c6'}} className='flex justify-between pa2 items-center'>
            <Logo/>
            {props.userName && <p style={{padding: '0 auto'}}>Welcome {props.userName}!</p>}
            <ul className='flex items-center justify-end m0 p0'>
                <li><a href=''>Games</a></li>
                <li><a href=''>About</a></li>
                <li><a href=''>Contact</a></li>
                <li style={{minWidth: '140px'}}>{props.children}</li>
            </ul>
        </nav>
    )
}

export default Navigation;