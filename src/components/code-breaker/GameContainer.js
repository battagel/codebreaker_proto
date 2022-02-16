import React from 'react';
import GuessContainer from './GuessContainer'
import AnswerContainer from './AnswerContainer'
import ColourInput from './ColourInput'

export default function GameContainer({ data, prevGuess, newGame, toggleHidden, makeGuess}) {

	function handleToggleHiddenClick() {
		toggleHidden()
	}

	return (
		<div className="GameContainer">
				<GuessContainer prevGuess={prevGuess}/>
				<AnswerContainer data={data}/>
				<ColourInput data={data} makeGuess={makeGuess}/>
				<button onClick={newGame}>New Game</button>
				<button onClick={handleToggleHiddenClick}>Reveal Code</button>
		</div>
	)
}