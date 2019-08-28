// import React, { Component } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../App.css';

function HomePage() {
	return (
		<div className="App">
		<header className="">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				Home Page
			</p>
			<Link to="/second">Second Page</Link>
			<Link to="/third">Third Page</Link>
			<a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
			>
				Learn React
			</a>
		</header>
	</div>
	);
}

export default HomePage;