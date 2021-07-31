import React from 'react';
import './Navigation.css';
import Logo from '../Logo/Logo.js';
import 'tachyons';

const Navigation = ({isSignedIn, signIn, signOut}) => {
    console.log('Nav', isSignedIn);
    let loginButton;

    if(isSignedIn){
        loginButton=<a href='' onClick={signOut}>Sign Out</a>;
    } else {
        loginButton=<a href='' onClick={signIn}>Sign In</a>;
    }

    return (
        <nav className='bg-washed-blue flex justify-between pa2'>
            <Logo/>
            <ul className='flex items-center justify-end m0 p0'>
                <li><a href=''>Games</a></li>
                <li><a href=''>About</a></li>
                <li><a href=''>Contact</a></li>
                <li>{loginButton}</li>
            </ul>
        </nav>
    )
}

export default Navigation;