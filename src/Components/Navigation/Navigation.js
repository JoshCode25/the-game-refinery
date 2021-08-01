import React from 'react';
import './Navigation.css';
import Logo from '../Logo/Logo.js';
import 'tachyons';

const Navigation = (props) => {

    return (
        <nav className='bg-washed-blue flex justify-between pa2'>
            <Logo/>
            <ul className='flex items-center justify-end m0 p0'>
                <li><a href=''>Games</a></li>
                <li><a href=''>About</a></li>
                <li><a href=''>Contact</a></li>
                <li>{props.children}</li>
            </ul>
        </nav>
    )
}

export default Navigation;