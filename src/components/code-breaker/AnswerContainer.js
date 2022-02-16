import React from 'react';
import Peg from './Peg.js';
import { v4 as uuidv4 } from 'uuid';

export default function AnswerContainer({ data }) {
  	
	var answer_pegs = [0,0,0,0,0]
	if (data) {
		const code = data.code
		if (data.hidden === false){
			answer_pegs = []
			for (var digit = 0; digit < code.length; digit++) {
				answer_pegs.push(
					code[digit]
				);
			}
		}
	}

	return (
		<div className='AnswerContainer'>
			{answer_pegs.map(value => {
				return <Peg key={uuidv4()} value={value}/>
			})}
		</div>
	)
}