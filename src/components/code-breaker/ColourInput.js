import React from 'react';

export default function ColourInput({ makeGuess }) {

    var guess = [1,1,1,1,1]

    return (
        <div className="ColourInput">
            <button onClick={ () => makeGuess(guess) }>Make Guess</button>
        </div>
    )
}