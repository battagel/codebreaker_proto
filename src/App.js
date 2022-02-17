import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import CodeBreaker from './components/CodeBreaker';
import About from './components/About';
import Footer from './components/Footer'

import './css/App.css';

const DATA_STORAGE_KEY = 'codeBreaker.data'
const PREV_GUESS_STORAGE_KEY = 'codeBreaker.preGuess'

export default function App() {

	const [data, setData] = useState([])
	const [prevGuess, setPrevGuess] = useState([])

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
	}, []);

	/* SAVE DATA */
	useEffect(() => {
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
			setData(data)
		});
	};

	function toggleHidden() {
		/**
			Toggles the hidden state
		*/
		var newData = {}
		Object.assign(newData, data)
		newData.hidden = !newData.hidden
		setData(newData)
	};

	async function makeGuess(guess, code) {
		/** 
			Saves guess and updates previous guesses
		*/
		console.log("Making guess of ");
		console.log(guess);
		const guess_payload = {"guess": guess, "code": data.code}
		//const guess_payload = {"test": true}
		console.log(guess_payload);
		await fetch("/api/check_guess", {
			method: "POST",
        	headers: {"Content-Type":"application/json"},
			body: JSON.stringify(guess_payload)
        }).then(res => {
			console.log(res)
			res.json().then(payload => {
				var currentGuess = [payload, guess]
				setPrevGuess([...prevGuess, currentGuess])
			})
		})
	}

	function newGame() {
		/** 
			Generate a new game
		*/
		setPrevGuess([])
		newCode()
	}

  return (
    <div className="App">
		<BrowserRouter>
			<Header/>
			<div className="Body">
				<Routes>
					<Route path="/" element={<CodeBreaker 
						data={data} 
						prevGuess={prevGuess} 
						newGame={newGame} 
						toggleHidden={toggleHidden} 
						makeGuess={makeGuess}
					/>}/>
					<Route path="/about" element={<About/>}/>
				</Routes>
			</div>
			<Footer/>
	  	</BrowserRouter>
    </div>
  );
}