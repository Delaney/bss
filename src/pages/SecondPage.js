// import React, { Component } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function SecondPage() {
	return (
		<div className="App">
			<h1>Second Page</h1>
			<Link to="/">Home Page</Link>
			<Link to="/third">Third Page</Link>
		</div>
	);
}