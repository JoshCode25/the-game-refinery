import Navigation from './Containers/Navigation/Navigation.js';
import React, {useEffect, useState} from 'react';
import './App.css';
import HomePage from './Pages/HomePage.js';
import Footer from './Containers/Footer/Footer.js';
import GamePage from './Pages/GamePage/GamePage.js';

function App() {

  const [userRoute, setUserRoute] = useState('signedOut');
  const [pageRoute, setPageRoute] = useState('home');
  const [currentGame, setCurrentGame] = useState('');
  const [userName, setUserName] = useState('');
  const [userGold, setUserGold] = useState(0);

  const signIn = () => {
    if(userRoute !== 'signingIn' && userRoute !== 'signedIn'){
      setUserRoute('signingIn');
      setUserGold(100);
    }
  }

  const signOut = () => {
    if(userRoute === 'signedIn') {
      setUserName('');
      setUserRoute('signedOut')
      setUserGold(0);
    }
  }

  let pageDisplay=<HomePage/>;

  useEffect(() => {
    switch(pageRoute) {
      case 'home':
        return pageDisplay=<HomePage/>;
      case 'gamePage':
        return pageDisplay=<GamePage currentGame={currentGame}/>;
      default :
        return pageDisplay=<HomePage/>;
    }

  }, [pageRoute])


  return (
    <div style={{maxWidth: '1250px', margin: '0 auto'}}>
      <Navigation 
        userRoute={userRoute} 
        setUserRoute={setUserRoute} 
        signIn={signIn}
        signOut={signOut}
        userName={userName} 
        setUserName={setUserName}
        userGold={userGold} 
        setUserGold={setUserGold}>
      </Navigation>
      {pageDisplay}
      <Footer/>
    </div>
  );
}

export default App;
