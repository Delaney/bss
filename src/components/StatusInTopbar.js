import React, { Component } from 'react';

class StatusInTopbar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: props.status
		}
	}

	render() {
		const status = this.state.active;
		let clss = {};

		if (status){
			clss = {
				class: 'status-pill green hvr-pulse',
				status: 'Active'
			}
		} else {
			clss = {
				class: 'status-pill red hvr-pulse',
				status: 'Blocked'
			}
		}

		return (
			<div className="agent-status">
				<span>{ clss.status }</span>
				<div className={ clss.class} data-title={ clss.status } data-toggle="tooltip"></div>
			</div>
		);
	}
}

export default StatusInTopbar;