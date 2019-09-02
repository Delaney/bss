import React, { Component } from 'react';
import classNames from 'classnames/bind';

import styles from './styles/RegisterCashierForm.module.css';

class RegisterCashierForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			username: '',
			password: '',
			password2: '',
			message: '',
			messageStyle: {
				color: '#fff'
			}
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log('Transfer made');

		if (this.state.password !== this.state.password2) {
			this.setState(prevState => {
				let messageStyle = Object.assign({}, prevState.messageStyle);
				messageStyle.color = '#901d1d';
				return {
					message: "Passwords do not match!",
					messageStyle
				}
			});

			setTimeout(function() {
				this.setState(prevState => {
					let messageStyle = Object.assign({}, prevState.messageStyle);
					messageStyle.color = '#fff';
					return {
						message: "",
						messageStyle
					}
				});
			}, 5000);
		}

		let data = new FormData();
		data.append("First Name", this.state.firstName);
		data.append("Last Name", this.state.lastName);
		data.append("Email Address", this.state.email);
		data.append("Username", this.state.username);
		data.append("Password", this.state.password);
		data.append("Confirmation", this.state.password2);

		for(var pair of data.entries()) {
			console.log(pair[0]+ ': '+ pair[1]); 
		}
	}

	render() {
		let inputClass = classNames({
			'form-control': true,
			[`${styles.input}`]: true
		});

		let registerBtn = classNames({
			'btn btn-bss btn-block btn-lg': true,
			[`${styles.register}`]: true
		});

		let messageClass = classNames({
			[`${styles.message}`]: true,
		});

		return (
			<form onSubmit={this.handleSubmit}>
				<div className="row">
					<div className="col-6">
						<div className="form-group">
							<label className={styles.label}>First Name</label>
							<input
								className={inputClass} placeholder="First Name" type="text"
								name="firstName" value={this.state.firstName} onChange={this.handleChange} required	
							/>
						</div>
					</div>
					<div className="col-6">
						<div className="form-group">
							<label className={styles.label}>Last Name</label>
							<input
								className={inputClass} placeholder="Last Name" type="text"
								name="lastName" value={this.state.lastName} onChange={this.handleChange} required
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<div className="form-group">
							<label className={styles.label}>Email</label>
							<input
								className={inputClass} placeholder="Email Address" type="email"
								name="email" value={this.state.email} onChange={this.handleChange} required
							/>
						</div>
					</div>
					<div className="col-6">
						<div className="form-group">
							<label className={styles.label}>Username</label>
							<input
								className={inputClass} placeholder="Username" type="text"
								name="username" value={this.state.username} onChange={this.handleChange} required
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<div className="form-group">
							<label className={styles.label}>Password</label>
							<input
								className={inputClass} placeholder="Password" type="password"
								name="password" value={this.state.password} onChange={this.handleChange} required
							/>
						</div>
					</div>
					<div className="col-6">
						<div className="form-group">
							<label className={styles.label}>Confirm Password</label>
							<input
								className={inputClass} placeholder="Confirm Password" type="password"
								name="password2" value={this.state.password2} onChange={this.handleChange} required
							/>
						</div>
					</div>
				</div>
				<div className={messageClass} style={this.state.messageStyle}>{this.state.message}</div>
				<button className={registerBtn}><i className="entypo-icon-add-user"></i><span>Register Now</span></button>
			</form>
		);
	};
}

export default RegisterCashierForm;