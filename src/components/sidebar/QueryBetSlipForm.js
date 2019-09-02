import React, { Component } from 'react';
import classNames from 'classnames/bind';

import styles from './styles/QueryBetSlipForm.module.css';

class QueryBetSlipForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slipNumber: ''
		}
	}

	render() {
		var inputStyle = classNames({
			'form-control': true,
			[`${styles.input}`]: true
		});

		return (
			<form>
				<label className={styles.label}>Insert the betslip code you want to check</label>
				<input className={inputStyle}/>
			</form>
		);
	}
};

export default QueryBetSlipForm;