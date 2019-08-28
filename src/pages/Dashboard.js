import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Dashboard extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-sm-12 col-lg-12 col-xxl-12">
						{/* <div className="element-balances justify-content-between mobile-full-width"> */}
						<div className="element-balances text-center mobile-full-width">
							<div className="balance balance-v2">
								<div className="balance-title">
									Total Debt
								</div>
								<div className="balance-value">
									<span className="">₦391,955</span>
								</div>
							</div>

							<div className="balance balance-v2">
								<div className="balance-title">
									Due Debt
								</div>
								<div className="balance-value">
									<span className="">₦201,964</span>
								</div>
							</div>
						</div>
						<div className="gap-2"></div>
						{/* <div className="element-wrapper pb-4 mb-4 border-bottom">
							<div className="element-box-tp">
								<a className="btn btn-primary" href="# "><i className="os-icon os-icon-refresh-ccw"></i><span>Deposit Money</span></a><a className="btn btn-grey" href="# "><i className="os-icon os-icon-log-out"></i><span>Withdraw</span></a><a className="btn btn-grey d-none d-sm-inline-block" href="# "><i className="os-icon os-icon-plus-circle"></i><span>Add Wallet</span></a>
							</div>
						</div> */}
						<div className="element-wrapper compact">
							<div className="element-box-tp">
								<div className="element-actions d-none d-sm-block">
									<form className="form-inline justify-content-sm-end">
										<label className="smaller" htmlFor="">Show Period:</label>
										<select className="form-control form-control-sm form-control-faded">
											<option selected={true}>
												Last 30 days
											</option>
											<option>
												This Week
											</option>
											<option>
												This Month
											</option>
											<option>
												Today
											</option>
										</select>
									</form>
								</div>
								<h6 className="element-box-header">
									Balance History
								</h6>
								<div className="el-chart-w">
									<canvas data-chart-data="13,28,19,24,43,49,40,35,42,46,38,32,45" height="50" id="liteLineChartV3" width="300"></canvas>
								</div>
							</div>
						</div>
					</div>
					
				</div>
				<div className="row pt-2">
					<div className="col-12 col-sm-4 col-xxl-4">
						<a className="element-box el-tablo centered trend-in-corner smaller" href="# ">
							<div className="home-box-label">
								Commission Balance
							</div>
							<div className="value">
								₦39,200
							</div>
							{/* <div className="trending trending-up">
								<span>12%</span><i className="os-icon os-icon-arrow-up6"></i>
							</div> */}
						</a>
					</div>
					<div className="col-12 col-sm-4 col-xxl-4">
						<a className="element-box el-tablo centered trend-in-corner smaller" href="# ">
							<div className="home-box-label">
								This Week's Commission
							</div>
							<div className="value">
								₦11,955
							</div>
							{/* <div className="trending trending-down">
								<span>12%</span><i className="os-icon os-icon-arrow-down6"></i>
							</div> */}
						</a>
					</div>
					<div className="col-12 col-sm-4 col-xxl-4">
						<a className="element-box el-tablo centered trend-in-corner smaller" href="# ">
							<div className="home-box-label">
								Bonuses Available
							</div>
							<div className="value">
								₦840
							</div>
							{/* <div className="trending trending-up">
								<span>12%</span><i className="os-icon os-icon-arrow-up6"></i>
							</div> */}
						</a>
					</div>
					
				</div>
			</div>
		);
	};
}

export default Dashboard;