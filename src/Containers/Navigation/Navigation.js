import React from 'react';
import './Navigation.css';
import Logo from '../../Components/Logo/Logo.js';
import 'tachyons';
import UserInfo from '../../Components/UserInfo/UserInfo';
import SubmitForm from '../../Components/SubmitForm/SubmitForm'

const Navigation = ({userName, setUserName, userRoute, setUserRoute, userGold, setUserGold, signIn, signOut, goHomePage}) => {

    return (
        <nav className='flex justify-between pa2 items-center'>
            <Logo goHomePage={goHomePage}/>
            <div className='flex flex-column'>
                <ul className='flex items-center justify-end m0 p0'>
                    <li><p>Games</p></li>
                    <li><p>About</p></li>
                    <li><p>Contact</p></li>
                    <li style={{minWidth: '140px'}}>
                        {userRoute === 'signedIn' && <p className='pointer' href='' onClick={signOut}>Sign Out</p>}
                        {userRoute !== 'signedIn' && <p className='pointer' href='' onClick={signIn}>Set Name</p>}
                    </li>
                </ul>
                {userRoute === 'signedIn' && <UserInfo userName={userName} userGold={userGold} setUserGold={setUserGold}/>}
            </div>
            { userRoute === 'signingIn' ? <SubmitForm setUserRoute={setUserRoute} setUserName={setUserName}/> : ''}
        </nav>
    )
}

export default Navigation;