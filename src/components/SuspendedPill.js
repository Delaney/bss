import React, { Component } from 'react';

class SuspendedPill extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: props.status
		}
	}

	render() {
		const status = this.state.active;
		let clss = {};

		if (status === null || status === 0){
			clss = {
				class: 'status-pill green',
				status: 'Active'
			}
		} else {
			clss = {
				class: 'status-pill red',
				status: 'Suspended'
			}
		}

		return (
			<div className={ clss.class } data-title={ clss.status } data-toggle="tooltip"></div>
		);
	}
}

export default SuspendedPill;