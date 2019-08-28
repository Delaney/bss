import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-sm-12 col-lg-12 col-xxl-12">
						<div className="element-balances justify-content-between mobile-full-width">
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
					<div className="col-6 col-sm-3 col-xxl-2">
						<a className="element-box el-tablo centered trend-in-corner smaller" href="# ">
							<div className="label">
								Bitcoin Price
							</div>
							<div className="value">
								$7.484
							</div>
							<div className="trending trending-up">
								<span>12%</span><i className="os-icon os-icon-arrow-up6"></i>
							</div>
						</a>
					</div>
					<div className="col-6 col-sm-3 col-xxl-2">
						<a className="element-box el-tablo centered trend-in-corner smaller" href="# ">
							<div className="label">
								Last Month
							</div>
							<div className="value text-danger">
								-$3,248
							</div>
							<div className="trending trending-down">
								<span>12%</span><i className="os-icon os-icon-arrow-down6"></i>
							</div>
						</a>
					</div>
					<div className="col-6 col-sm-3 col-xxl-2">
						<a className="element-box el-tablo centered trend-in-corner smaller" href="# ">
							<div className="label">
								Etherium Price
							</div>
							<div className="value">
								$784.12
							</div>
							<div className="trending trending-up">
								<span>12%</span><i className="os-icon os-icon-arrow-up6"></i>
							</div>
						</a>
					</div>
					<div className="col-6 col-sm-3 col-xxl-2">
						<a className="element-box el-tablo centered trend-in-corner smaller" href="# ">
							<div className="label">
								Ripple Price
							</div>
							<div className="value">
								$1,284
							</div>
							<div className="trending trending-up">
								<span>12%</span><i className="os-icon os-icon-arrow-up6"></i>
							</div>
						</a>
					</div>
					<div className="col-6 col-xxl-2 d-sm-none d-xxl-block">
						<a className="element-box el-tablo centered trend-in-corner smaller" href="# ">
							<div className="label">
								Litecoin Price
							</div>
							<div className="value">
								-$3,473
							</div>
							<div className="trending trending-down">
								<span>5%</span><i className="os-icon os-icon-arrow-down6"></i>
							</div>
						</a>
					</div>
					<div className="col-6 col-xxl-2 d-sm-none d-xxl-block">
						<a className="element-box el-tablo centered trend-in-corner smaller" href="# ">
							<div className="label">
								Last Month
							</div>
							<div className="value">
								-$3,248
							</div>
							<div className="trending trending-down">
								<span>12%</span><i className="os-icon os-icon-arrow-down6"></i>
							</div>
						</a>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-8">
						<div className="element-wrapper compact pt-4">
							<div className="element-actions d-none d-sm-block">
								<a className="btn btn-primary btn-sm" href="# "><i className="os-icon os-icon-ui-22"></i><span>Add Account</span></a><a className="btn btn-success btn-sm" href="# "><i className="os-icon os-icon-grid-10"></i><span>Make Payment</span></a>
							</div>
							<h6 className="element-header">
								Send Money To
							</h6>
							<div className="element-box-tp">
								<div className="inline-profile-tiles">
									<div className="row">
										<div className="col-4 col-sm-3 col-xxl-2">
											<div className="profile-tile profile-tile-inlined">
												<a className="profile-tile-box faded" href="users_profile_small.html">
													<div className="pt-new-icon">
														<i className="os-icon os-icon-plus"></i>
													</div>
													<div className="pt-user-name">
														New<br/> Account
													</div>
												</a>
											</div>
										</div>
										<div className="col-4 col-sm-3 col-xxl-2">
											<div className="profile-tile profile-tile-inlined">
												<a className="profile-tile-box" href="users_profile_small.html">
													<div className="pt-avatar-w">
														<img alt="" src="img/avatar1.jpg"/>
													</div>
													<div className="pt-user-name">
														Kelly<br/> Neymayers
													</div>
												</a>
											</div>
										</div>
										<div className="col-4 col-sm-3 col-xxl-2">
											<div className="profile-tile profile-tile-inlined">
												<a className="profile-tile-box" href="users_profile_small.html">
													<div className="pt-avatar-w">
														<img alt="" src="img/avatar3.jpg"/>
													</div>
													<div className="pt-user-name">
														Ben<br/> Gossman
													</div>
												</a>
											</div>
										</div>
										<div className="col-4 col-sm-3 col-xxl-2">
											<div className="profile-tile profile-tile-inlined">
												<a className="profile-tile-box" href="users_profile_small.html">
													<div className="pt-avatar-w">
														<img alt="" src="img/avatar1.jpg"/>
													</div>
													<div className="pt-user-name">
														Kimson<br/> Broker
													</div>
												</a>
											</div>
										</div>
										<div className="col-4 d-sm-none d-xxl-block col-xxl-2">
											<div className="profile-tile profile-tile-inlined">
												<a className="profile-tile-box" href="users_profile_small.html">
													<div className="pt-avatar-w">
														<img alt="" src="img/avatar2.jpg"/>
													</div>
													<div className="pt-user-name">
														Jake<br/> Gilbertson
													</div>
												</a>
											</div>
										</div>
										<div className="col-4 d-sm-none d-xxl-block col-xxl-2">
											<div className="profile-tile profile-tile-inlined">
												<a className="profile-tile-box" href="users_profile_small.html">
													<div className="pt-avatar-w">
														<img alt="" src="img/avatar7.jpg"/>
													</div>
													<div className="pt-user-name">
														Mary<br/> Clintons
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-12 col-xxl-8">
								<div className="element-wrapper compact pt-4">
									<div className="element-actions d-none d-sm-block">
										<form className="form-inline justify-content-sm-end">
											<label className="smaller" for="">News For</label><select className="form-control form-control-sm form-control-faded">
												<option value="Pending">
													Bitcoin
												</option>
												<option value="Active">
													Etherium 
												</option>
												<option value="Cancelled">
													Litecoin
												</option>
											</select>
										</form>
									</div>
									<h6 className="element-header">
										Crypto News
									</h6>
									<div className="element-box-tp">
										<div className="post-box">
											<div className="post-media" style={{ backgroundImage: 'url(img/portfolio1.jpg)' }}></div>
											<div className="post-content">
												<h6 className="post-title">
													Is Crypto the Future of Film Funding?
												</h6>
												<div className="post-text">
													Curiously, view both tone emerged. There should which yards two and concepts amidst liabilities sitting of and, parents it wait 
												</div>
												<div className="post-foot">
													<div className="post-tags">
														<div className="badge badge-primary">
															BTC
														</div>
														<div className="badge badge-primary">
															Crypto
														</div>
													</div>
													<a className="post-link" href="# "><span>Read Full Story</span><i className="os-icon os-icon-arrow-right7"></i></a>
												</div>
											</div>
										</div>
										<div className="post-box">
											<div className="post-media" style={{ backgroundImage: 'url(img/portfolio2.jpg)' }}></div>
											<div className="post-content">
												<h6 className="post-title">
													Is Crypto the Future of Film Funding?
												</h6>
												<div className="post-text">
													Curiously, view both tone emerged. There should which yards two and concepts amidst liabilities sitting of and, parents it wait 
												</div>
												<div className="post-foot">
													<div className="post-tags">
														<div className="badge badge-primary">
															BTC
														</div>
														<div className="badge badge-primary">
															Crypto
														</div>
													</div>
													<a className="post-link" href="# "><span>Read Full Story</span><i className="os-icon os-icon-arrow-right7"></i></a>
												</div>
											</div>
										</div>
										<a className="centered-load-more-link" href="# "><span>Read Our Blog</span></a>
									</div>
								</div>
							</div>
							<div className="col-12 d-sm-none d-xxl-block col-xxl-4">
								<div className="cta-w orange text-center">
									<div className="cta-content extra-padded">
										<div className="highlight-header">
											Bonus
										</div>
										<h5 className="cta-header">
											Invite your friends and make money with referrals
										</h5>
										<form action="">
											<div className="newsletter-field-w">
												<input placeholder="Email address..." type="text"/><button className="btn btn-sm btn-primary">Send</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="element-wrapper compact pt-4">
							<div className="element-actions">
								<form className="form-inline justify-content-sm-end">
									<label className="smaller" for="">Order By</label><select className="form-control form-control-sm form-control-faded">
										<option value="Pending">
											Today
										</option>
										<option value="Active">
											Last Week 
										</option>
										<option value="Cancelled">
											Last 30 Days
										</option>
									</select>
								</form>
							</div>
							<h6 className="element-header">
								Transactions
							</h6>
							<div className="element-box-tp">
								<table className="table table-clean">
									<tbody>
										<tr>
											<td>
												<div className="value">
													Amazon Store
												</div>
												<span className="sub-value">Books</span>
											</td>
											<td className="text-right">
												<div className="value">
													-$28.34
												</div>
												<span className="sub-value">12 Feb 2018</span>
											</td>
										</tr>
										<tr>
											<td>
												<div className="value">
													Dunkin Donuts
												</div>
												<span className="sub-value">Food & Restaurants</span>
											</td>
											<td className="text-right">
												<div className="value">
													-$7.15
												</div>
												<span className="sub-value">10 Feb 2018</span>
											</td>
										</tr>
										<tr>
											<td>
												<div className="value">
													Refund from Sephora
												</div>
												<span className="sub-value">Health & Beauty</span>
											</td>
											<td className="text-right">
												<div className="value text-success">
													$128.11
												</div>
												<span className="sub-value">10 Feb 2018</span>
											</td>
										</tr>
										<tr>
											<td>
												<div className="value">
													Amazon Store
												</div>
												<span className="sub-value">Books</span>
											</td>
											<td className="text-right">
												<div className="value">
													-$28.34
												</div>
												<span className="sub-value">12 Feb 2018</span>
											</td>
										</tr>
										<tr>
											<td>
												<div className="value">
													Dunkin Donuts
												</div>
												<span className="sub-value">Food & Restaurants</span>
											</td>
											<td className="text-right">
												<div className="value">
													-$7.15
												</div>
												<span className="sub-value">10 Feb 2018</span>
											</td>
										</tr>
										<tr>
											<td>
												<div className="value">
													Refund from Google Store
												</div>
												<span className="sub-value">Health & Beauty</span>
											</td>
											<td className="text-right">
												<div className="value text-success">
													$15.23
												</div>
												<span className="sub-value">9 Feb 2018</span>
											</td>
										</tr>
										<tr>
											<td>
												<div className="value">
													Amazon Store
												</div>
												<span className="sub-value">Books</span>
											</td>
											<td className="text-right">
												<div className="value">
													-$28.34
												</div>
												<span className="sub-value">8 Feb 2018</span>
											</td>
										</tr>
										<tr>
											<td>
												<div className="value">
													Dunkin Donuts
												</div>
												<span className="sub-value">Food & Restaurants</span>
											</td>
											<td className="text-right">
												<div className="value">
													-$7.15
												</div>
												<span className="sub-value">8 Feb 2018</span>
											</td>
										</tr>
									</tbody>
								</table>
								<a className="centered-load-more-link" href="# "><span>Load More Messages</span></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};
}

export default Dashboard;