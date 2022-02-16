import React from 'react';
import '../../css/Peg.css';

export default function Peg({value}) {

	const colour_map = {
		0: "Hidden",
		1: "A",
		2: "B",
		3: "C",
		4: "D",
		5: "E",
		6: "F",
		7: "G",
		8: "H",
		9: "Empty",
		10: "Mini Black",
		11: "Mini White",
		12: "Mini Empty"
	}
	
	var colour = "Peg " + colour_map[value]

	return (
		<div className={colour}></div>
	)
}
