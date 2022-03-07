import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import CodeBreaker from './components/CodeBreaker';
import About from './components/About';
import Footer from './components/Footer'
import Modal from './components/Modal'

import './css/App.css';

const DATA_STORAGE_KEY = 'codeBreaker.data'
const PREV_GUESS_STORAGE_KEY = 'codeBreaker.preGuess'

export default function App() {

	// const sleep = (milliseconds) => {
	// 	return new Promise(resolve => setTimeout(resolve, milliseconds))
	// }

	const [data, setData] = useState()
	const [prevGuess, setPrevGuess] = useState([])
	const [modal, setModal] = useState({"visible": false, "type": "", "title": "Error", "body": "", "footer": ""})

	/* LOAD SAVED DATA */
	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem(DATA_STORAGE_KEY))
		if (storedData) {
			setData(storedData)
		}
	}, []);

	useEffect(() => {
		const storedPrevGuess = JSON.parse(localStorage.getItem(PREV_GUESS_STORAGE_KEY))
		if (storedPrevGuess) {
			setPrevGuess(storedPrevGuess)
		}
		else {
			/* Must be first load if nothing has been previously stored */
			firstLoad()
		}
	}, []);

	/* SAVE DATA */
	useEffect(() => {
		/* Anytime the dependancy [data] is updated run this effect which will save the current value for data */
		localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(data))
	}, [data]);

	useEffect(() => {
		localStorage.setItem(PREV_GUESS_STORAGE_KEY, JSON.stringify(prevGuess))
	}, [prevGuess]);

	/* HELPER FUNCTIONS */
	function newCode() {
		/**
			Update {data} when required.
		*/
		console.log("Clearing Game")
		fetch('/api/code-breaker').then(result => result.json()).then(data => {
			localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(data))
			console.log("New code is: ")
			console.log(data.code)
			setData(data)
		});
	};

	function toggleHidden() {
		/**
			Toggles the hidden state
		*/
		console.log("Toggle Hidden")
		var newData = {}
		Object.assign(newData, data)
		newData.hidden = !newData.hidden
		setData(newData)
	};

	async function makeGuess(guess) {
		/** 
			Saves guess and updates previous guesses
		*/
		console.log("Making guess of ");
		console.log(guess);
		const guess_payload = {"guess": guess, "code": data.code}
		await fetch("/api/check_guess", {
			method: "POST",
        	headers: {"Content-Type":"application/json"},
			body: JSON.stringify(guess_payload)
        }).then(res => {
			res.json().then(payload => {
				console.log(payload);
				console.log(typeof payload[0])
				if (JSON.stringify(payload) === JSON.stringify([10,10,10,10,10])) {
					console.log("Game won")
					winGame()
				}
				else {
					if (prevGuess.length >= data.num_guesses) {
						loseGame()
					}
					else {
						var currentGuess = [payload, guess]
						setPrevGuess([currentGuess, ...prevGuess])
					}
				}
			})
		})
	}

	function newGame() {
		/** 
			Generate a new game
		*/
		setPrevGuess([])
		setModal({"visible": false, 
			"type": "", 
			"title": "", 
			"body": "Error", 
			"footer": ""
		})
		newCode()
	}

	async function winGame() {
		/** 
		 * Initiate game win
		 */
		toggleHidden()
		setModal({"visible": true, 
			"type": "Win", 
			"title": "Congratulations, You Win!", 
			"body": "Press the button to play again", 
			"footer": "New game"
		})
	}

	function loseGame() {
		/** 
		 * Lose game
		 */
		setModal({"visible": true, 
			"type": "Lose", 
			"title": "You lose!", 
			"body": "You have ran out of guesses - Press the button to play again", 
			"footer": "Retry"
		})
	}

	function firstLoad() {
	
		setModal({"visible": true, 
			"type": "Welcome", 
			"title": "Welcome to Code Breaker!", 
			"body": "Click 'start' to start to begin your first game.", 
			"footer": "Start"
		})
	}

	const game_funcs = {
		prevGuess: prevGuess,
		newGame: newGame,
		toggleHidden: toggleHidden,
		makeGuess: makeGuess,
	}

  return (
    <div className="App">
		<BrowserRouter>
			<Header/>
			<div className="Body">
				<Routes>
					<Route path="/" element={<CodeBreaker data={data} game_funcs={game_funcs} />}/>
					<Route path="/about" element={<About/>}/>
				</Routes>
				{modal.visible && <Modal newGame={newGame} modal={modal}/>}
			</div>
			<Footer/>
	  	</BrowserRouter>
    </div>
  );
}