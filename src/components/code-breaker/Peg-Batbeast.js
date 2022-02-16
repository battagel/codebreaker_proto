import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import '../../css/Peg.css';

export default function Peg({peg}) {

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
		9: "Empty"
	}
	
	var colour = "Peg " + colour_map[peg]
	
	return (
		<div className={colour} id={uuidv4()}></div>
	)
}
