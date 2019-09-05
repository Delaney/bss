import React, { Component } from 'react';
import classNames from 'classnames/bind';

import styles from './styles/SuspendCashierForm.module.css';

class SuspendCashierForm extends Component {
	state = {
		username: ''
	}

	render() {
		var inputStyle = classNames({
			'form-control': true,
			[`${styles.input}`]: true
		});

		return (
			<form>
				<label className={styles.label}>Enter the username of the cashier</label>
				<input className={inputStyle}/>
			</form>
		);
	}
};

export default SuspendCashierForm;