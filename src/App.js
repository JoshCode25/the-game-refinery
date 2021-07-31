import Navigation from './Components/Navigation/Navigation.js';
import React, {useState} from 'react';
import './App.css';


function App() {
  
  const [isSignedIn, setSignedIn] = useState();

  const signIn = () => {
    setSignedIn(true);
    console.log('signIn: ', isSignedIn);
  }

  const signOut = () => {
    setSignedIn(false);
    console.log('signOut: ', isSignedIn);
  }

  return (
    <div>
      <Navigation isSignedIn={isSignedIn} signIn={signIn} signOut={signOut}/>
      <p onClick={signOut}>Sign Out</p>
      <p onClick={signIn}>Sign In</p>
      <p>Signed In? {isSignedIn? 'Yes':'Nope'}</p>
    </div>
  );
}

export default App;
