import React from 'react';
import ClickableRandomDice from '../../Icons/ClickableRandomDice';

const UserInfo = ({userName, userGold, setUserGold}) => {

    const increaseUserGold = (amount) => {
        const newAmount = userGold + amount;
        setUserGold(newAmount);
    }

    return ( 
        <div className='flex justify-between'>
            <p style={{fontSize: '1.5rem'}}>Welcome {userName}!</p>
            <p style={{fontSize: '1.5rem'}} onClick={() => increaseUserGold(25)}>Gold: {userGold}</p>
            <ClickableRandomDice width={40}/>
        </div>
    )
}

export default UserInfo;