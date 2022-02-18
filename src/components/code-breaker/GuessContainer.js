import React from 'react';
import GuessRow from './GuessRow.js'
import { v4 as uuidv4 } from 'uuid';
import './../../css/CodeBreaker.css';

export default function GuessContainer({prevGuess}) {
	console.log(prevGuess)
	return (
		<table className="GuessContainer">
			<tbody className="GuessBody">
				{
					prevGuess.map(row => 
						<GuessRow key={uuidv4()} row={row}/>
					)
				}
			</tbody>
		</table>
	)
}
