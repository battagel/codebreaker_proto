import React from "react";

export default function CurrentGuess({ currentGuess }) {
	// TODO LOTS OF WORK HERE
	return (
		<div className="CurrentGuess">
			{currentGuess.map((value) => {
				return (
					<div className="CurrentGuess">
						<div className="CurrentGuessPegContainer">{value}</div>
					</div>
				);
			})}
		</div>
	);
}
