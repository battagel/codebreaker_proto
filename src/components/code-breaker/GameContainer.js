import React from 'react';
import GuessContainer from './GuessContainer'
import AnswerContainer from './AnswerContainer'
import ColourInput from './ColourInput'
import './../../css/CodeBreaker.css';

export default function GameContainer({ prevGuess, newGame, toggleHidden, makeGuess }) {

	function handleToggleHiddenClick() {
		toggleHidden()
	}

	return (
		<div className="GameContainer">
				<AnswerContainer/>
				<GuessContainer prevGuess={prevGuess}/>
				<ColourInput makeGuess={makeGuess}/>
				<div className="ButtonContainer">
					<button onClick={newGame}>New Game</button>
					<button onClick={handleToggleHiddenClick}>Reveal Code</button>
				</div>
		</div>
	)
}