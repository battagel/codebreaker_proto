import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';

function App() {

  return (
    <div className="App">
		<BrowserRouter>
			<div className="App-header">
				<div className="App-nav middle">
					<Link className="App-link" to="/">Home</Link>
					&nbsp;|&nbsp;
					<Link className="App-link" to="/about">About</Link>
				</div>
			</div>
			<div className="App-body">
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/about" element={<About/>}/>
					<Route component={Error}/>
				</Routes>
			</div>
	  	</BrowserRouter>
    </div>
  );
}

export default App;
