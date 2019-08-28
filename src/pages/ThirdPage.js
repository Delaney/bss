// import React, { Component } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function ThirdPage() {
	return (
		<div className="App">
			<h1>Third Page</h1>
			<Link to="/">Home Page</Link>
			<Link to="/second">Second Page</Link>
		</div>
	);
}