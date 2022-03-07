import React, { useContext } from 'react';
import Peg from './Peg.js';
import { v4 as uuidv4 } from 'uuid';
import './../../css/CodeBreaker.css';
import {DataContext} from './../CodeBreaker.js';

export default function AnswerContainer() {
  	const data = useContext(DataContext)
	var answer_pegs = []
	if (data) {
		console.log(data)
		const code = data.code
		answer_pegs = Array(code.length).fill(0);
		if (data.hidden === false){
			answer_pegs = []
			code.map(digit => answer_pegs.push(digit))
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