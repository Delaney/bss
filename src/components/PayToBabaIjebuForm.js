import React, { Component } from 'react';
import classNames from 'classnames/bind';

import styles from './styles/PayToBabaIjebuForm.module.css';

class PayToBabaIjebuForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log('Transfer made');
	}

	render() {
		var inputClass = classNames({
			'form-control': true,
			[`${styles.input}`]: true
		});

		return (
			<form onSubmit={this.handleSubmit}>
				<div className="row">
					<div className="col-6">
						<div className="form-group">
							<label className={styles.label}>First Name</label>
							<input className={inputClass} placeholder="First Name" type="text"/>
						</div>
					</div>
					<div className="col-6">
						<div className="form-group">
							<label className={styles.label}>Last Name</label>
							<input className="form-control" placeholder="Last Name" type="text"/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<div className="form-group">
							<label className={styles.label}>Email</label>
							<input className="form-control" placeholder="Email Address" type="email"/>
						</div>
					</div>
					<div className="col-6">
						<div className="form-group">
							<label className={styles.label}>Username</label>
							<input className="form-control" placeholder="Username" type="text"/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<div className="form-group">
							<label className={styles.label}>Password</label>
							<input className="form-control" placeholder="Password" type="password"/>
						</div>
					</div>
					<div className="col-6">
						<div className="form-group">
							<label className={styles.label}>Confirm Password</label>
							<input className="form-control" placeholder="Confirm Password" type="password"/>
						</div>
					</div>
				</div>
				<button className="btn btn-primary btn-block btn-lg"><i className="os-icon os-icon-refresh-ccw"></i><span>Register Now</span></button>
			</form>
		);
	};
}

export default PayToBabaIjebuForm;