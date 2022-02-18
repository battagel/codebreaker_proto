import React, { useRef } from 'react';
import './../../css/CodeBreaker.css';

export default function ColourInput({ makeGuess }) {

    const inputGuessRef = useRef();

    function handleInputGuess(e) {
        const inputGuess = inputGuessRef.current.value.split(',').map(Number);
        console.log(inputGuess) 
        makeGuess(inputGuess)
    }

    return (
        <div className="ColourInput">
            <input ref={inputGuessRef} type="text"/>
            <button onClick={handleInputGuess}>Make Guess</button>
        </div>
    )
}