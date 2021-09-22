import React from 'react';

const Comments = ({currentGame}) => {
    const {name} = currentGame;

    return (
        <div>
            <h2>{`${name} Comments & Feedback`}</h2>
            <p>many comments</p>
            <p>Some Feedback</p>
        </div>
    )

}

export default Comments;