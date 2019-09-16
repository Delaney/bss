import React, { Component } from 'react';
import classNames from 'classnames/bind';
import $ from 'jquery';

import './styles/Login.css';

class Login extends Component {

	render() {

		document.getElementById('body').className = "auth-wrapper"

		return (
			<div className="all-wrapper menu-side with-pattern">
				<div className="auth-box-w">
					<div className="logo-w" style={{padding: '5%'}}>
						<a href="index.html"><img alt="" src="img/premier-bet-logo-small.png" width="100"/></a>
					</div>
					<h4 className="auth-header">
						Premier Lotto
					</h4>
					<form action="" onSubmit={(e) => this.postLogin(e)}>
						<div className="form-group">
							<label htmlFor="">Username</label><input className="form-control" placeholder="Enter your username" type="text" />
							<div className="pre-icon os-icon os-icon-user-male-circle"></div>
						</div>
						<div className="form-group">
							<label htmlFor="">Password</label><input className="form-control" placeholder="Enter your password" type="password" />
							<div className="pre-icon os-icon os-icon-fingerprint"></div>
						</div>
						<div className="buttons-w">
							<button className="btn btn-bss" onClick={(e) => this.postLogin(e)}>Log In</button>
						</div>
					</form>
				</div>
			</div>
		)
	}

	postLogin(e) {
		e.preventDefault();
		console.log("Logging in");
	};
}

export default Login;