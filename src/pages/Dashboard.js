import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Dashboard extends Component {
	render() {
		return (
			<div>
				<div className="os-tabs-w">
					<div className="os-tabs-controls os-tabs-complex">
						<ul className="nav nav-tabs">
							<li className="nav-item">
								<a aria-expanded="false" className="nav-link active" data-toggle="tab" href="#overview">
									<span className="tab-label">Debt Overview</span>
								</a>
							</li>
							<li className="nav-item">
								<a aria-expanded="false" className="nav-link" data-toggle="tab" href="#cashiers">
									<span className="tab-label">Cashier Debt</span>
									<span className="tab-value">₦7,839.23</span>
								</a>
							</li>
							<li className="nav-item">
								<a aria-expanded="false" className="nav-link" data-toggle="tab" href="#bonus">
									<span className="tab-label">Bonuses</span>
								</a>
							</li>
						</ul>
					</div>

					<div className="tab-content" id="myTabContent">

						{/* <!--------------------
						START - Overview Tab
						--------------------> */}
						<div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
							{/* <div className="row">
								<div className="col-sm-12 col-lg-12 col-xxl-12">
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
									<div className="element-wrapper compact">
										<div className="element-box-tp">
											<div className="element-actions d-none d-sm-block">
												<form className="form-inline justify-content-sm-end">
													<label className="smaller" htmlFor="">Show Period:</label>
													<select className="form-control form-control-sm form-control-faded" defaultValue={"last"}>
														<option value="last">
															Last 30 days
														</option>
														<option value="week">
															This Week
														</option>
														<option value="month">
															This Month
														</option>
														<option value="today">
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
									</a>
								</div>
								
							</div> */}
							
							
							<div className="row">
								<div className="col-12 col-sm-4 col-xxl-4">
									<div className="projects-list text-center">
										<div className="project-box">
											<div className="project-head">
												<div className="project-title">
													<h5>
														Debt Overview
													</h5>
												</div>
											</div>
											<div className="project-info bss-info">
												<div className="row align-items-center">
													<div className="col-sm-12">
														<div className="el-tablo centered highlight element-box">
															<div className="">
																Total Debt
															</div>
															<div className="value">
																₦130,391,955
															</div>
														</div>

														<div className="gap-2"></div>

														<div className="el-tablo centered highlight element-box">
															<div className="">
																Due Debt
															</div>
															<div className="value">
																₦45,201,964
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-12 col-sm-4 col-xxl-4">
									<div className="projects-list text-center">
										<div className="project-box">
											<div className="project-head">
												<div className="project-title">
													<h5>
														Commissions
													</h5>
												</div>
											</div>
											<div className="project-info bss-info">
												<div className="row align-items-center">
													<div className="col-sm-12">
														<div className="el-tablo centered highlight element-box">
															<div className="">
																This Week
															</div>
															<div className="value">
																₦171,955
															</div>
														</div>

														<div className="gap-2"></div>

														<div className="el-tablo centered highlight element-box">
															<div className="">
																Balance
															</div>
															<div className="value">
																₦4,539,200
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							
								<div className="col-12 col-sm-4 col-xxl-4">
									<div className="projects-list text-center">
										<div className="project-box">
											<div className="project-head">
												<div className="project-title">
													<h5>
														Cashiers
													</h5>
												</div>
											</div>
											<div className="project-info bss-info">
												<div className="row align-items-center">
													<div className="col-sm-12">
														<div className="el-tablo centered highlight element-box">
															<div className="">
																Active
															</div>
															<div className="value">
																11
															</div>
														</div>

														<div className="gap-2"></div>

														<div className="el-tablo centered highlight element-box">
															<div className="">
																Debt
															</div>
															<div className="value">
																₦39,200
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

							</div>

							<div className="row">
								<div className="col-12 col-sm-12 col-xxl-12">
									<div class="balance-table pl-sm-2">
										<table class="table table-lightborder table-bordered table-v-compact mb-0">
											<tr>
												<td>
													<strong>2.34</strong>
													<div class="balance-label smaller lighter text-nowrap">
														Bitcoins BTC
													</div>
												</td>
												<td>
													<strong>1.74</strong>
													<div class="balance-label smaller lighter text-nowrap">
														Ripple RPX
													</div>
												</td>
												<td class="d-sm-none d-xxxxl-table-cell d-md-table-cell d-xxl-none">
													<strong>4.82</strong>
													<div class="balance-label smaller lighter text-nowrap">
														Newcoin NCN
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<strong>1.22</strong>
													<div class="balance-label smaller lighter text-nowrap">
														Litecoin LTC
													</div>
												</td>
												<td>
													<strong>1.87</strong>
													<div class="balance-label smaller lighter text-nowrap">
														Etherium ETH
													</div>
												</td>
												<td class="d-sm-none d-xxxxl-table-cell d-md-table-cell d-xxl-none">
													<strong>1.02</strong>
													<div class="balance-label smaller lighter text-nowrap">
														Dogecoin DGC
													</div>
												</td>
											</tr>
										</table>
									</div>
								</div>
							</div>
						</div>
						{/* <!--------------------
						END - Overview Tab
						--------------------> */}
						
						{/* <!--------------------
						START - Cashier Tab
						--------------------> */}
						<div className="tab-pane fade" id="cashiers" role="tabpanel" aria-labelledby="cashiers-tab">
							<div className="row">
								<div className="col-sm-12 col-lg-12 col-xxl-12">
									{/* <div className="element-balances justify-content-between mobile-full-width"> */}
									<div className="element-balances text-center mobile-full-width">
										<div className="balance balance-v2">
											<div className="balance-title">
												Cashier Debt (Total)
											</div>
											<div className="balance-value">
												<span className="">₦7,839.23</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="gap-2"></div>
							<div className="row">
								<div className="col-sm-12">
									<div className="element-wrapper">
										<h6 className="element-header">
											Cashiers
										</h6>
										<div className="element-box-tp">
											<div className="controls-above-table">
												<div className="row">
													<div className="col-sm-6">
														<a className="btn btn-sm btn-dark" href="# ">Add Cashier</a>
														<a className="btn btn-sm btn-danger" href="# ">Delete</a>
													</div>
													<div className="col-sm-6">
														<form className="form-inline justify-content-sm-end">
															<input className="form-control form-control-sm rounded bright" placeholder="Search" type="text" />
															<select className="form-control form-control-sm rounded bright" defaultValue="">
																<option value="">
																	Select Status
																</option>
																<option value="Pending">
																	Pending
																</option>
																<option value="Active">
																	Active
																</option>
																<option value="Cancelled">
																	Cancelled
																</option>
															</select>
														</form>
													</div>
												</div>
											</div>

											{/* <!--------------------
											START - Cashier Table
											---------------------> */}
											<div className="table-responsive">
												<table className="table table-bordered table-lg table-v2 table-striped">
													<thead>
														<tr>
															<th className="text-center">
																<input className="form-control" type="checkbox" style={{height: 'auto'}}/>
															</th>
															<th>
																Cashier Name
															</th>
															<th>
																Debt
															</th>
															<th>
																Status
															</th>
															<th>
																Actions
															</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td className="text-center">
																<input className="form-control" type="checkbox" />
															</td>
															<td>
																John Mayers
															</td>
															<td className="text-right">
																₦245
															</td>
															<td className="text-center">
																<div className="status-pill green" data-title="Complete" data-toggle="tooltip"></div>
															</td>
															<td className="row-actions">
																<a className="no-link-effect" href="# "><i className="os-icon os-icon-wallet-loaded"></i></a>
																<a className="no-link-effect danger" href="# "><i className="os-icon os-icon-cancel-circle"></i></a>
															</td>
														</tr>
														<tr>
															<td className="text-center">
																<input className="form-control" type="checkbox" />
															</td>
															<td>
																John Mayers
															</td>
															<td className="text-right">
																₦245
															</td>
															<td className="text-center">
																<div className="status-pill green" data-title="Complete" data-toggle="tooltip"></div>
															</td>
															<td className="row-actions">
																<a className="no-link-effect" href="# "><i className="os-icon os-icon-wallet-loaded"></i></a>
																<a className="no-link-effect danger" href="# "><i className="os-icon os-icon-cancel-circle"></i></a>
															</td>
														</tr>
														<tr>
															<td className="text-center">
																<input className="form-control" type="checkbox" />
															</td>
															<td>
																John Mayers
															</td>
															<td className="text-right">
																₦245
															</td>
															<td className="text-center">
																<div className="status-pill red" data-title="Cancelled" data-toggle="tooltip"></div>
															</td>
															<td className="row-actions">
																<a className="no-link-effect" href="# "><i className="os-icon os-icon-wallet-loaded"></i></a>
																<a className="no-link-effect danger" href="# "><i className="os-icon os-icon-cancel-circle"></i></a>
															</td>
														</tr>
														<tr>
															<td className="text-center">
																<input className="form-control" type="checkbox" />
															</td>
															<td>
																John Mayers
															</td>
															<td className="text-right">
																₦245
															</td>
															<td className="text-center">
																<div className="status-pill green" data-title="Complete" data-toggle="tooltip"></div>
															</td>
															<td className="row-actions">
																<a className="no-link-effect" href="# "><i className="os-icon os-icon-wallet-loaded"></i></a>
																<a className="no-link-effect danger" href="# "><i className="os-icon os-icon-cancel-circle"></i></a>
															</td>
														</tr>
														<tr>
															<td className="text-center">
																<input className="form-control" type="checkbox" />
															</td>
															<td>
																John Mayers
															</td>
															<td className="text-right">
																₦245
															</td>
															<td className="text-center">
																<div className="status-pill red" data-title="Cancelled" data-toggle="tooltip"></div>
															</td>
															<td className="row-actions">
																<a className="no-link-effect" href="# "><i className="os-icon os-icon-wallet-loaded"></i></a>
																<a className="no-link-effect danger" href="# "><i className="os-icon os-icon-cancel-circle"></i></a>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											{/* <!--------------------
											END - Cashier table
											---------------------> */}
											

											<div className="controls-below-table">
												<div className="table-records-info">
													Showing records 1 - 5
												</div>
												<div className="table-records-pages">
													<ul>
														<li>
															<a href="# ">Previous</a>
														</li>
														<li>
															<a className="current" href="# ">1</a>
														</li>
														<li>
															<a href="# ">2</a>
														</li>
														<li>
															<a href="# ">3</a>
														</li>
														<li>
															<a href="# ">4</a>
														</li>
														<li>
															<a href="# ">Next</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>							
						</div>
						{/* <!--------------------
						END - Cashier Tab
						--------------------> */}

						{/* <!--------------------
						START - Bonus Tab
						--------------------> */}
						<div className="tab-pane fade" id="bonus" role="tabpanel" aria-labelledby="bonus-tab">
							<div className="row">
								<div className="element-wrapper compact folded w-100">
									<div className="element-actions actions-only">
										<a className="element-action element-action-fold" href="# "><i className="os-icon os-icon-plus-circle"></i></a>
									</div>
									<h5 className="element-header">
										Daily Bonus
									</h5>
									<div className="element-box-tp" style={{display: 'none'}}>

										{/* <!--------------------
										START - Daily Bonus Table
										---------------------> */}
										<div className="table-responsive">
											<table className="table table-lg table-v2 table-striped bonus-table">
												<tbody>
													<tr>
														<td className="text-center">
															Today
														</td>
														<td>
															<strong>33%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '33%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															101 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Wednesday
														</td>
														<td>
															<strong>65%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '65%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															195 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Tuesday
														</td>
														<td>
															<strong>0%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '0%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															0 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Monday
														</td>
														<td>
															<strong>120%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '100%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															360 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Sunday
														</td>
														<td>
															<strong>50%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '50%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															150 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Saturday
														</td>
														<td>
															<strong>259%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '100%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															758 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Friday
														</td>
														<td>
															<strong>105%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '100%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															315 bets
														</td>
													</tr>
													
												</tbody>
											</table>
										</div>
										{/* <!--------------------
										END - Daily Bonus table
										---------------------> */}
									</div>
								</div>
								<div className="element-wrapper compact folded w-100">
									<div className="element-actions actions-only">
										<a className="element-action element-action-fold" href="# "><i className="os-icon os-icon-plus-circle"></i></a>
									</div>
									<h5 className="element-header">
										Sports Bet
									</h5>
									<div className="element-box-tp" style={{display: 'none'}}>

										{/* <!--------------------
										START - Sports Bet Bonus Table
										---------------------> */}
										<div className="table-responsive">
											<table className="table table-lg table-v2 table-striped bonus-table">
												<tbody>
													<tr>
														<td className="text-center">
															Today
														</td>
														<td>
															<strong>33%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '33%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															101 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Wednesday
														</td>
														<td>
															<strong>65%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '65%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															195 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Tuesday
														</td>
														<td>
															<strong>0%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '0%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															0 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Monday
														</td>
														<td>
															<strong>120%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '100%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															360 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Sunday
														</td>
														<td>
															<strong>50%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '50%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															150 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Saturday
														</td>
														<td>
															<strong>259%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '100%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															758 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Friday
														</td>
														<td>
															<strong>105%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '100%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															315 bets
														</td>
													</tr>
													
												</tbody>
											</table>
										</div>
										{/* <!--------------------
										END - Sports Bet Bonus table
										---------------------> */}
									</div>
								</div>
								<div className="element-wrapper compact folded w-100">
									<div className="element-actions actions-only">
										<a className="element-action element-action-fold" href="# "><i className="os-icon os-icon-plus-circle"></i></a>
									</div>
									<h5 className="element-header">
										Lotto Bonus
									</h5>
									<div className="element-box-tp" style={{display: 'none'}}>

										{/* <!--------------------
										START - Lotto Bonus Table
										---------------------> */}
										<div className="table-responsive">
											<table className="table table-lg table-v2 table-striped bonus-table">
												<tbody>
													<tr>
														<td className="text-center">
															Today
														</td>
														<td>
															<strong>33%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '33%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															101 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Wednesday
														</td>
														<td>
															<strong>65%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '65%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															195 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Tuesday
														</td>
														<td>
															<strong>0%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '0%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															0 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Monday
														</td>
														<td>
															<strong>120%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '100%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															360 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Sunday
														</td>
														<td>
															<strong>50%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '50%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															150 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Saturday
														</td>
														<td>
															<strong>259%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '100%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															758 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Friday
														</td>
														<td>
															<strong>105%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '100%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															315 bets
														</td>
													</tr>
													
												</tbody>
											</table>
										</div>
										{/* <!--------------------
										END - Lotto Bonus table
										---------------------> */}
									</div>
								</div>
								<div className="element-wrapper compact folded w-100">
									<div className="element-actions actions-only">
										<a className="element-action element-action-fold" href="# "><i className="os-icon os-icon-plus-circle"></i></a>
									</div>
									<h5 className="element-header">
										Virtuals Bonus
									</h5>
									<div className="element-box-tp" style={{display: 'none'}}>

										{/* <!--------------------
										START - Virtuals Bonus Table
										---------------------> */}
										<div className="table-responsive">
											<table className="table table-lg table-v2 table-striped bonus-table">
												<tbody>
													<tr>
														<td className="text-center">
															Today
														</td>
														<td>
															<strong>33%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '33%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															101 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Wednesday
														</td>
														<td>
															<strong>65%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '65%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															195 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Tuesday
														</td>
														<td>
															<strong>0%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '0%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															0 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Monday
														</td>
														<td>
															<strong>120%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '100%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															360 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Sunday
														</td>
														<td>
															<strong>50%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '50%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															150 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Saturday
														</td>
														<td>
															<strong>259%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '100%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															758 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Friday
														</td>
														<td>
															<strong>105%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '100%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															315 bets
														</td>
													</tr>
													
												</tbody>
											</table>
										</div>
										{/* <!--------------------
										END - Virtuals Bonus table
										---------------------> */}
									</div>
								</div>
								<div className="element-wrapper compact folded w-100">
									<div className="element-actions actions-only">
										<a className="element-action element-action-fold" href="# "><i className="os-icon os-icon-plus-circle"></i></a>
									</div>
									<h5 className="element-header">
										Specials Bonus
									</h5>
									<div className="element-box-tp" style={{display: 'none'}}>

										{/* <!--------------------
										START - Specials Bonus Table
										---------------------> */}
										<div className="table-responsive">
											<table className="table table-lg table-v2 table-striped bonus-table">
												<tbody>
													<tr>
														<td className="text-center">
															Today
														</td>
														<td>
															<strong>33%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '33%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															101 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Wednesday
														</td>
														<td>
															<strong>65%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '65%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															195 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Tuesday
														</td>
														<td>
															<strong>0%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '0%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															0 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Monday
														</td>
														<td>
															<strong>120%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '100%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															360 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Sunday
														</td>
														<td>
															<strong>50%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '50%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															150 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Saturday
														</td>
														<td>
															<strong>259%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '100%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															758 bets
														</td>
													</tr>
													<tr>
														<td className="text-center">
															Friday
														</td>
														<td>
															<strong>105%</strong>
														</td>
														<td className="text-center">
															<div className="fancy-progress-with-label">
																<div className="fpl-progress-w">
																	<div className="fpl-progress-i" style={{ width: '100%' }}></div>
																</div>
															</div>
														</td>
														<td className="text-center">
															315 bets
														</td>
													</tr>
													
												</tbody>
											</table>
										</div>
										{/* <!--------------------
										END - Specials Bonus table
										---------------------> */}
									</div>
								</div>
								
							</div>
						</div>
						{/* <!--------------------
						END - Bonus Tab
						--------------------> */}
					</div>

				</div>
			</div>
		);
	};
}

export default Dashboard;