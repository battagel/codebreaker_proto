import React from 'react';

export default function ColourInput({ data, makeGuess }) {

    var guess = [1,1,1,1,1]

    return (
        <div className="ColourInput">
            <button onClick={ () => makeGuess(guess, data.code) }>Make Guess</button>
        </div>
    )
}