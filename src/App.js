import Navigation from './Components/Navigation/Navigation.js';
import React, {useState} from 'react';
import './App.css';
import Slider from './Components/Slider/Slider.js';
import SubmitForm from './Components/SubmitForm/SubmitForm.js';
import GameBox from './Components/GameBox/GameBox.js';

function App() {

  const [isSignedIn, setSignedIn] = useState(false);
  const [route, setRoute] = useState('home');
  const [userName, setUserName] = useState('');

  const signIn = () => {
    if(route === 'home' && !isSignedIn){
      setRoute('signIn');
      setSignedIn(true);
    }
  }

  const signOut = () => {
    if(isSignedIn) {
      setSignedIn(false);
      setUserName('');
      setRoute('home');
    }
  }

  return (
    <div style={{maxWidth: '1250px', marginLeft: 'auto', marginRight: 'auto'}}>
      <Navigation userName={userName}>
        {isSignedIn && <p onClick={signOut}>Sign Out</p>}
        {!isSignedIn && <p onClick={signIn}>Set Name</p>}
      </Navigation>
      { route === 'signIn' ?
        <SubmitForm setRoute={setRoute} setUserName={setUserName}/> : ''}
      <Slider/>
      <GameBox/>
    </div>
  );
}

export default App;
