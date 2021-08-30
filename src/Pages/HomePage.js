import React from 'react';
import DisplayBox from '../Containers/DisplayBox/DisplayBox';
import Slider from '../Components/Slider/Slider';
import gameList from '../Data/gameList.js'

const HomePage = ({setCurrentGame, setPageRoute}) => {

    return (
        <div>
            <Slider/>
            <DisplayBox setPageRoute={setPageRoute} setCurrentGame={setCurrentGame} gameList={gameList}/>
        </div>
    )

}

export default HomePage;