import Navigation from './Components/Navigation/Navigation.js';
import React, {useState} from 'react';
import './App.css';
import Slider from './Components/Slider/Slider.js';
import SubmitForm from './Components/SubmitForm/SubmitForm.js';


function App() {

  const [isSignedIn, setSignedIn] = useState(false);
  const [route, setRoute] =useState('home');

  const signIn = () => {
    setRoute('signIn');
    setSignedIn(true);
  }

  const signOut = () => {
    setSignedIn(false);
  }

  return (
    <div>
      <Navigation>
        {isSignedIn && <p onClick={signOut}>Sign Out</p>}
        {!isSignedIn && <p onClick={signIn}>Set Name</p>}
      </Navigation>
      <Slider/>
      <SubmitForm/>
    </div>
  );
}

export default App;
