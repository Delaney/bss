import React, { Component } from 'react';
import classNames from 'classnames/bind';
import $ from 'jquery';

class Login extends Component {

	render() {

		$('body').classNames = "auth-wrapper";

		return (
			<div className="all-wrapper menu-side with-pattern">
				<div className="auth-box-w">
					<div className="logo-w">
						<a href="index.html"><img alt="" src="img/premier-bet-logo-small.png" /></a>
					</div>
					<h4 className="auth-header">
						Premier Lotto
					</h4>
					<form action="">
						<div className="form-group">
							<label for="">Username</label><input className="form-control" placeholder="Enter your username" type="text" />
							<div className="pre-icon os-icon os-icon-user-male-circle"></div>
						</div>
						<div className="form-group">
							<label for="">Password</label><input className="form-control" placeholder="Enter your password" type="password" />
							<div className="pre-icon os-icon os-icon-fingerprint"></div>
						</div>
						<div className="buttons-w">
							<button className="btn btn-bss">Log In</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}