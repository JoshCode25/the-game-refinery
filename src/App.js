import Navigation from './Components/Navigation/Navigation.js';
import React, {useState} from 'react';
import './App.css';
import Slider from './Components/Slider/Slider.js';
import SubmitForm from './Components/SubmitForm/SubmitForm.js';
import GameBox from './Components/GameBox/GameBox.js';
import Footer from './Components/Footer/Footer.js';

function App() {

  const [isSignedIn, setSignedIn] = useState(false);
  const [route, setRoute] = useState('home');
  const [userName, setUserName] = useState('');
  const [userGold, setUserGold] = useState(0);

  const signIn = () => {
    if(route === 'home' && !isSignedIn){
      setRoute('signIn');
      setSignedIn(true);
      setUserGold(100);
    }
  }

  const signOut = () => {
    if(isSignedIn) {
      setSignedIn(false);
      setUserName('');
      setRoute('home');
      setUserGold(0);
    }
  }

  return (
    <div style={{maxWidth: '1250px', marginLeft: 'auto', marginRight: 'auto'}}>
      <Navigation userName={userName} userGold={userGold} setUserGold={setUserGold}>
        {isSignedIn && <a className='pointer' href='' onClick={signOut}>Sign Out</a>}
        {!isSignedIn && <a className='pointer' href='' onClick={signIn}>Set Name</a>}
      </Navigation>
      { route === 'signIn' ?
        <SubmitForm setRoute={setRoute} setUserName={setUserName}/> : ''}
      <Slider/>
      <GameBox/>
      <Footer/>
    </div>
  );
}

export default App;
