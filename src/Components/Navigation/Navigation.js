import React from 'react';
import './Navigation.css';
import Logo from '../Logo/Logo.js';
import 'tachyons';
import UserInfo from '../UserInfo/UserInfo';

const Navigation = ({userName, userGold, setUserGold, children}) => {

    return (
        <nav className='flex justify-between pa2 items-center'>
            <Logo/>
            <div className='flex flex-column'>
                <ul className='flex items-center justify-end m0 p0'>
                    <li><a href=''>Games</a></li>
                    <li><a href=''>About</a></li>
                    <li><a href=''>Contact</a></li>
                    <li style={{minWidth: '140px'}}>{children}</li>
                </ul>
                {userName && <UserInfo userName={userName} userGold={userGold} setUserGold={setUserGold}/>}
            </div>
        </nav>
    )
}

export default Navigation;