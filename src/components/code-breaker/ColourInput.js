import React, { useState, useContext } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./../../css/CodeBreaker.css";
import { DataContext } from "./../CodeBreaker.js";
import CurrentGuess from "./CurrentGuess";
import { v4 as uuidv4 } from "uuid";
import Peg from "./Peg";

export default function ColourInput({ makeGuess }) {
	const [currentGuess, setCurrentGuess] = useState([0, 0, 0, 0, 0]);
	const data = useContext(DataContext);
	const all_colours = [1, 2, 3, 4, 5, 6, 7, 8];

	// Find solution to manually entering [0,0,0,0,0]m - dynamic on number of pegs
	// setCurrentGuess(Array(data.code.length).fill(1))

	function handleOnDragEnd(result) {
		console.log("Hi");
	}

	return (
		<div className="ColourInput">
			<DragDropContext onDropEnd={handleOnDragEnd}>
				{currentGuess.map((value, index) => {
					return (
						<Droppable
							droppableId={uuidv4()}
							key={uuidv4()}
							index={index}
						>
							{(provided) => {
								return (
									<div
										{...provided.droppableProps}
										ref={provided.innerRef}
									>
										<Draggable
											draggableId={uuidv4()}
											index={index}
										>
											{(provided) => {
												return (
													<div
														ref={provided.innerRef}
														{...provided.draggableProps}
														{...provided.dragHandleProps}
													>
														<Peg
															key={index}
															value={value}
														/>
													</div>
												);
											}}
										</Draggable>
									</div>
								);
							}}
						</Droppable>
					);
				})}
				<Droppable droppableId="ColourSelection">
					{(provided) => {
						return (
							<div
								{...provided.droppableProps}
								ref={provided.innerRef}
							>
								{all_colours.map((value, index) => {
									return (
										<Draggable
											key={index}
											draggableId={uuidv4()}
											index={index}
										>
											{(provided) => {
												return (
													<div
														ref={provided.innerRef}
														{...provided.draggableProps}
														{...provided.dragHandleProps}
													>
														<Peg
															key={index}
															value={value}
														/>
													</div>
												);
											}}
										</Draggable>
									);
								})}
							</div>
						);
					}}
				</Droppable>
			</DragDropContext>
		</div>
		// <input ref={inputGuessRef} type="text"/>
		// <button onClick={handleInputGuess}>Make Guess</button>
	);
}
