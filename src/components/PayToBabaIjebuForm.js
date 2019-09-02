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
		// let inputClass = classNames({
		// 	'form-control': true,
		// 	[`${styles.input}`]: true
		// });

		let registerBtn = classNames({
			'btn btn-bss btn-block btn-lg': true,
			[`${styles.register}`]: true
		});

		return (
			<form>
				<div className="row">
					<div className="col-6">
						<div className="form-group">
							<label htmlFor="">From</label><select className="form-control">
								<option>
									Bitcoins
								</option>
								<option>
									Litecoins
								</option>
								<option>
									Ripple
								</option>
								<option>
									Dogecoin
								</option>
							</select>
						</div>
					</div>
					<div className="col-6">
						<div className="form-group">
							<label htmlFor="">To</label><select className="form-control">
								<option>
									USD
								</option>
								<option>
									Litecoins
								</option>
								<option>
									Ripple
								</option>
								<option>
									Dogecoin
								</option>
							</select>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<div className="form-group">
							<label htmlFor="">Amount</label>
							<div className="input-group">
								<input className="form-control" placeholder="Amount..." type="text" defaultValue="1.37" />
								<div className="input-group-append">
									<div className="input-group-text">
										BTC
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-6">
						<div className="form-group">
							<label htmlFor="">Price per BTC</label>
							<div className="input-group">
								<input className="form-control" type="text" defaultValue="8,284" />
								<div className="input-group-append">
									<div className="input-group-text">
										USD
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<button className={registerBtn}><i className="entypo-icon-direction"></i><span>Transfer Now</span></button>
			</form>
		);
	};
}

export default PayToBabaIjebuForm;