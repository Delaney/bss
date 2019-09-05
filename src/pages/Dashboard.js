import React, { Component } from 'react';
import classNames from 'classnames/bind';
import $ from 'jquery';

import styles from './styles/Dashboard.module.css';

class Dashboard extends Component {
	
	state = {
		prog1: Math.floor(Math.random() * 100) + 1,
		prog2: Math.floor(Math.random() * 100) + 1,
		prog3: Math.floor(Math.random() * 100) + 1,
		prog4: Math.floor(Math.random() * 100) + 1
	}

	render() {

		$(function() {
			$(".bonusProgress").each(function() {
				console.log(this);

				var value = $(this).attr('data-value');
				var left = $(this).find('.bonusProgressLeft');
				var right = $(this).find('.bonusProgressRight');

				console.log(`Values: ${value}, ${left}, ${right}`);

				if (value > 0) {
					if (value <= 50) {
						right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
					} else {
						right.css('transform', 'rotate(180deg)')
						left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
					}
				}

				if (value >= 100) {
					right.removeClass('border-bss').addClass('border-success');
					left.removeClass('border-bss').addClass('border-success');
				}
			});

			function percentageToDegrees(percentage) {
				return percentage / 100 * 360
			}
		});

		let progressClass = classNames({
			[`${styles['progress']}`]: true,
			'bonusProgress': true
		});

		let progressValueClass = classNames({
			[`${styles['progress-value']}`]: true,
			'w-100 h-100 rounded-circle d-flex align-items-center justify-content-center': true
		});

		let progressBarLeft = classNames({
			[`${styles['progress-bar']}`]: true,
			'bonusProgressLeft border-bss': true
		});

		let progressBarRight = classNames({
			[`${styles['progress-bar']}`]: true,
			'bonusProgressRight border-bss': true
		});

		return (
			<div>
				<div className="os-tabs-w">
					<div className="os-tabs-controls os-tabs-complex">
						<ul className="nav nav-tabs">
							<li className="nav-item">
								<a aria-expanded="false" className="nav-link" data-toggle="tab" href="#summary">
									<span className="tab-label">Summary</span>
								</a>
							</li>
							<li className="nav-item">
								<a aria-expanded="false" className="nav-link active" data-toggle="tab" href="#bonus">
									<span className="tab-label">Bonuses</span>
								</a>
							</li>
						</ul>
					</div>

					<div className="tab-content" id="myTabContent">

						{/* <!--------------------
						START - Summary Tab
						--------------------> */}
						<div className="tab-pane fade" id="summary" role="tabpanel" aria-labelledby="summary-tab">
							
							<div className="row">
								<div className="col-12 col-sm-4 col-xxl-4">
									<div className="projects-list text-center">
										<div className="project-box">
											<div className="project-head">
												<div className="project-title">
													<h5>
														Debt Summary
													</h5>
												</div>
											</div>
											<div className="project-info bss-info">
												<div className="row align-items-center">
													<div className="col-sm-12">

														<div className="el-tablo centered highlight element-box">
															<div className="fw700">
																Due Debt
															</div>
															<div className="value fw700">
																₦45,201,964
															</div>
														</div>
														
														<div className="gap d-none d-sm-block"></div>

														<div className="gap-3 d-sm-none"></div>
														
														<div className="el-tablo centered highlight element-box trend-in-corner smaller">
															<div className="fw300">
																Total Debt
															</div>
															<div className="value">
																₦130,391,955
															</div>
															<div className="trending trending-up">
																<span>12%</span>
																<i className="os-icon os-icon-arrow-up6"></i>
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
															<div className="fw700">
																Commission Balance
															</div>
															<div className="value fw700">
																₦4,539,200
															</div>
														</div>

														<div className="gap d-none d-sm-block"></div>

														<div className="gap-3 d-sm-none"></div>
														
														<div className="el-tablo centered highlight element-box trend-in-corner smaller">
															<div className="fw300">
																This Week
															</div>
															<div className="value">
																₦171,955
															</div>
															<div className="trending trending-down">
																<span>12%</span>
																<i className="os-icon os-icon-arrow-down6"></i>
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
															<div className="fw700">
																Debt
															</div>
															<div className="value fw700">
																₦39,200
															</div>
														</div>

														<div className="gap d-none d-sm-block"></div>

														<div className="gap-3 d-sm-none"></div>
														
														<div className="el-tablo centered highlight element-box trend-in-corner smaller">
															<div className="fw300">
																Active
															</div>
															<div className="value">
																11
															</div>
														</div>

													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

							</div>

							{/* <div className="row">
								<div className="col-12 col-sm-12 col-xxl-12">
									<div className="projects-list text-center">
										<div className="project-box">
											<div className="project-head">
												<div className="project-title">
													<h5>
														Bonuses
													</h5>
												</div>
											</div>
											<div className="project-info bss-info">
												<table className="table table-borderless table-v-compact mb-0">
													<tbody>
														<tr>
															<td>
																<div className="el-tablo centered highlight element-box">
																	<div className="">
																		Sports Bet
																	</div>
																	<div className="value">
																		₦9,200
																	</div>
																</div>
															</td>
															<td>
															<div className="el-tablo centered highlight element-box">
																	<div className="">
																		Lotto Bet
																	</div>
																	<div className="value">
																		₦49,700
																	</div>
																</div>
															</td>
															<td>
																<div className="el-tablo centered highlight element-box">
																	<div className="">
																		Virtual Bet
																	</div>
																	<div className="value">
																		₦1,600
																	</div>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
												<a className="centered-load-more-link color-bss" href="# "><span>More</span></a>
											</div>
										</div>
									</div>
								</div>
							</div> */}
						
							<div className="row">
								<div className="col-sm-12">
									<div className="element-wrapper">
										<h3 className="element-header">
											Cashiers
										</h3>
										<div className="element-box-tp">
											<div className="controls-above-table">
												<div className="row">
													<div className="col-sm-6">
														<a className="btn btn-sm btn-dark" href="# ">Add Cashier</a>
														<a className="btn btn-sm btn-bss" href="# ">Delete</a>
													</div>
													<div className="col-sm-6">
														<form className="form-inline justify-content-sm-end">
															<input className="form-control form-control-sm rounded bright" placeholder="Search" type="text" />
															<select className="form-control form-control-sm rounded bright" defaultValue="">
																<option value="">
																	Select Status
																</option>
																<option value="Active">
																	Active
																</option>
																<option value="Suspended">
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
																<a className="no-link-effect" href="# "data-target="#onboardingFormModal" data-toggle="modal"><i className="os-icon os-icon-wallet-loaded"></i></a>
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
																<a className="no-link-effect" href="# "data-target="#onboardingFormModal" data-toggle="modal"><i className="os-icon os-icon-wallet-loaded"></i></a>
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
																<a className="no-link-effect" href="# "data-target="#onboardingFormModal" data-toggle="modal"><i className="os-icon os-icon-wallet-loaded"></i></a>
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
																<a className="no-link-effect" href="# "data-target="#onboardingFormModal" data-toggle="modal"><i className="os-icon os-icon-wallet-loaded"></i></a>
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
																<a className="no-link-effect" href="# "data-target="#onboardingFormModal" data-toggle="modal"><i className="os-icon os-icon-wallet-loaded"></i></a>
																<a className="no-link-effect danger" href="# "><i className="os-icon os-icon-cancel-circle"></i></a>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											{/* <!--------------------
											END - Cashier table
											---------------------> */}

											{/* <!--------------------
											START - Fund Cashier modal
											---------------------> */}										
											<div aria-hidden="true" className="onboarding-modal modal fade" id="onboardingFormModal" role="dialog" tabIndex="-1">
												<div className="modal-dialog modal-centered" role="document">
													<div className="modal-content text-center">
														<button aria-label="Close" className="close" data-dismiss="modal" type="button">
															<span className="close-label">Skip Intro</span>
															<span className="os-icon os-icon-close"></span>
														</button>
														<div className="onboarding-content with-gradient">
															<h4 className="onboarding-title">
																Fund Cashier Wallet
															</h4>
															{/* <div className="onboarding-text">
																In this example you can see a form where you can request some additional information from the customer when they land on the app page.
															</div> */}
															<form>
																<div className="form-row">
																	<div className="col-sm-6">
																		<div className="form-group">
																			<label htmlFor="">Your Full Name</label>
																			<input className="form-control" placeholder="Enter amount" type="text"/>
																		</div>
																	</div>
																	<div className="col-sm-6">
																		<div className="form-group">
																			<label htmlFor="">Source Wallet</label>
																			<select className="form-control" defaultValue="">
																				<option value="">
																					Select a wallet...
																				</option>
																				<option>
																					Providus
																				</option>
																				<option>
																					Business Owner
																				</option>
																				<option>
																					Other
																				</option>
																			</select>
																		</div>
																	</div>
																</div>
																<button className="btn btn-bss btn-lg" type="submit">Fund Now</button>
															</form>
														</div>
													</div>
												</div>
											</div>
											{/* <!--------------------
											END - Fund Cashier modal
											---------------------> */}

										</div>
									</div>
								</div>
							</div>							

						</div>
						{/* <!--------------------
						END - Overview Tab
						--------------------> */}
					
						{/* <!--------------------
						START - Bonus Tab
						--------------------> */}
						<div className="tab-pane fade show active" id="bonus" role="tabpanel" aria-labelledby="bonus-tab">

							<div className="row">
								<div className="col-12">
									<form className="form-inline justify-content-sm-end">
										<select className="form-control form-control-sm rounded" defaultValue="this">
											<option value="this">
												This Month
											</option>
											<option value="last">
												Last Month
											</option>
											<option value="last-two">
												Last 2 Months
											</option>
										</select>
									</form>
								</div>
							</div>
							<div className="gap-3"></div>

							<div className="row">

								<div className="col-12 col-sm-4 col-xxl-4">
									<a className="no-link-effect" href="# ">
									<div className="projects-list text-center">
										<div className="project-box">
											<div className="project-head">
												<div className="project-title">
													<h5>
														Daily Bonus
													</h5>
												</div>
											</div>
											<div className="project-info bss-info">
												<div className="row align-items-center">
													<div className="col-sm-12">
														<div className={progressClass} data-value={this.state.prog1}>
															<span className={styles['progress-left']}>
																<span className={progressBarLeft}></span>
															</span>
															<span className={styles['progress-right']}>
																<span className={progressBarRight}></span>
															</span>
															<div className={progressValueClass}>
																<div>{this.state.prog1}<sup>%</sup></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									</a>
								</div>

								<div className="col-12 col-sm-4 col-xxl-4">
									<div className="projects-list text-center">
										<div className="project-box">
											<div className="project-head">
												<div className="project-title">
													<h5>
														Lotto Bonus
													</h5>
												</div>
											</div>
											<div className="project-info bss-info">
												<div className="row align-items-center">
													<div className="col-sm-12">
														<div className={progressClass} data-value={this.state.prog2}>
															<span className={styles['progress-left']}>
																<span className={progressBarLeft}></span>
															</span>
															<span className={styles['progress-right']}>
																<span className={progressBarRight}></span>
															</span>
															<div className={progressValueClass}>
																<div>{this.state.prog2}<sup>%</sup></div>
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
														Sports Bonus
													</h5>
												</div>
											</div>
											<div className="project-info bss-info">
												<div className="row align-items-center">
													<div className="col-sm-12">
														<div className={progressClass} data-value="100">
															<span className={styles['progress-left']}>
																<span className={progressBarLeft}></span>
															</span>
															<span className={styles['progress-right']}>
																<span className={progressBarRight}></span>
															</span>
															<div className={progressValueClass}>
																<div>100<sup>%</sup></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* <div className="col-12 col-sm-4 col-xxl-4">
									<div className="projects-list text-center">
										<div className="project-box">
											<div className="project-head">
												<div className="project-title">
													<h5>
														Virtuals Bonus
													</h5>
												</div>
											</div>
											<div className="project-info bss-info">
												<div className="row align-items-center">
													<div className="col-sm-12">
														<div className={progressClass} data-value={this.state.prog4}>
															<span className={styles['progress-left']}>
																<span className={progressBarLeft}></span>
															</span>
															<span className={styles['progress-right']}>
																<span className={progressBarRight}></span>
															</span>
															<div className={progressValueClass}>
																<div>{this.state.prog4}<sup>%</sup></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div> */}
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