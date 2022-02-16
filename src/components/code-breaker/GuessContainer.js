import React from 'react';
import Peg from './Peg.js';
import { v4 as uuidv4 } from 'uuid';

export default function GuessContainer({prevGuess}) {

	var blacks = [10];
	var whites = [11];

	return (
		<div className="GuessContainer">
			{
				prevGuess.map(row => {
					return (
						<div className="GuessRow">
							<div className="PegAnswerContainer">
								{
									blacks.map(value => {
										return (
											<Peg key={uuidv4()} value={value}/>
										)
									})
								}
								{
									whites.map(value => {
										return (
											<Peg key={uuidv4()} value={value}/>
										)
									})
								}
							</div>
							{
								row.map(value => {
									return (
										<Peg key={uuidv4()} value={value}/>
									)
								})
							}
						</div>
					)
				})
			}
		</div>
	)
}
