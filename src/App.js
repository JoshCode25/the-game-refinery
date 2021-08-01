import Navigation from './Components/Navigation/Navigation.js';
import React, {useState} from 'react';
import './App.css';
import Slider from './Components/Slider/Slider.js';
import SubmitForm from './Components/SubmitForm/SubmitForm.js';
import gameList from './Components/GameList/gameList.js';
import GameCard from './Components/GameCard/GameCard.js';



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
    <div>
      <Navigation userName={userName}>
        {isSignedIn && <p onClick={signOut}>Sign Out</p>}
        {!isSignedIn && <p onClick={signIn}>Set Name</p>}
      </Navigation>
      { route === 'signIn' ?
        <SubmitForm setRoute={setRoute} setUserName={setUserName}/> : ''}
      <Slider/>
      <GameCard game={gameList[1]}/>
      <GameCard game={gameList[3]}/>
    </div>
  );
}

export default App;
