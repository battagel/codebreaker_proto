import React, { useContext } from 'react';
import '../../css/Peg.css';
import {ColourMapContext} from './../CodeBreaker.js';

export default function Peg({value}) {

	const colour_map = useContext(ColourMapContext)
	
	var colour = "Peg " + colour_map[value]

	var char = ""
	if (colour_map[value] === "Hidden") {
		char = "?"
	}

	return (
		<div className={colour}>
			<div className="PegText">
				{char}
			</div>
		</div>
	)
}
