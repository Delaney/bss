import React, { Component } from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';
import $ from 'jquery';
import * as helpers from 'helpers-of-js';

import SuspendedPill from '../components/SuspendedPill';

import styles from './styles/Dashboard.module.css';

class Dashboard extends Component {

	constructor(props){
		super (props)

		this.state = {
			user: props.user,
			prog1: Math.floor(Math.random() * 100) + 1,
			prog2: Math.floor(Math.random() * 100) + 1,
			prog3: Math.floor(Math.random() * 100) + 1,
			prog4: Math.floor(Math.random() * 100) + 1,
			bonus: '',
			loading: false,
			currentDebt: '',
			dueDebt: '',
			commissionThisWeek: '',
			commissionBalance: '',
			cashierDebt: '',
			cashierNo: '',
			cashierList: [],
			url: 'https://bss.babaijebu.ng/bss/api'
		}
	}

	componentDidMount(){
		this.props.setLoad(true);

		let req = {
			SessionID: this.state.user.SessionID,
			Type: "ALL"
		}

		axios.post(`${this.state.url}/all`, req).then(response => {
			// console.log(response.data);
			this.setState({
				currentDebt: response.data.Table.filter(obj => obj.NAME === "CURRENT_DEBT")[0].VALUE,
				dueDebt: response.data.Table.filter(obj => obj.NAME === "DUE_DEBT")[0].VALUE,
				commissionBalance: response.data.Table.filter(obj => obj.NAME === "COMMISSION_BALANCE")[0].VALUE,
				commissionThisWeek: response.data.Table.filter(obj => obj.NAME === "COMMISSION_THIS_WEEK")[0].VALUE,
				cashierDebt: response.data.Table.filter(obj => obj.NAME === "CASHIER_DEBT")[0].VALUE,
				cashierNo: response.data.Table.filter(obj => obj.NAME === "NO_OF_CASHIER")[0].VALUE,
				cashierList: response.data.Table1
			});
			this.props.setLoad(false);
		});

		// axios.post(`${url}/bss`, {SessionID: this.state.user.SessionID, Type: "LIST_OF_CASHIERS"}).then(response => {
		// 	console.log(response);
		// 	console.log(response.data);
		// })

		// axios.post(`${url}/feed`, {SessionID: this.state.user.SessionID}).then(response => {
		// 	console.log(response);
		// 	console.log(response.data);
		// })
	}

	/* * * * * * * * * *
	 *
	 * START: METHODS
	 * 
	 * * * * * * * * * */
	bonusModal(e) {
		this.setState({
			bonus: e.currentTarget.dataset.bonus
		});
	};

	firstLetterUpper(str){
		return str.split('')[0].toUpperCase() + str.slice(1)
	}

	formatAmount(s) {
		var i = parseFloat(s);
		if (isNaN(i)) { i = 0.00; }
		var minus = '';
		if (i < 0) { minus = '-'; }
		i = Math.abs(i);
		i = parseInt((i + .005) * 100);
		i = i / 100;
		// eslint-disable-next-line
		s = new String(i);
		if (s.indexOf('.') < 0) { s += '.00'; }
		if (s.indexOf('.') === (s.length - 2)) { s += '0'; }
		s = minus + s;
		s = s.replace(/./g, function (c, i, a) {
			return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
		});
		return s;
	}

	loading(val){
		document.getElementById('soa_loading_page').className = val ? "on" : "";
	}

	showSOA(type){
		this.loading(true);
		axios.post(`${this.state.url}/feed`, {SessionID: this.state.user.SessionID, Type: type}).then(response => {
			console.log(response);
			console.log(response.data);
			const tables = response.data.Table3;

			$('#soa_title').html(response.data.Table1[0].REPORT_TITLE);
			let tableHeader = `
				<tr>
					<th>Date</th>
					<th>Op. Bal</th>
					<th>Lotto Sales</th>
					<th>Sports Bet</th>
					<th>Virtual Sales</th>
					<th>Total Sales</th>
					<th>Winnings</th>
					<th>Comm. Applied</th>
					<th>Refund</th>
					<th>Cash</th>
					<th>Reversal</th>
					<th>Cl. Bal</th>
				</tr>
			`;

			for (const table of tables) {
				tableHeader += `
					<tr>
						<td>${table.DATE}</td>
						<td class="text-right">₦${table.OPENING_BALANCE}</td>
						<td class="text-right">₦${table.VIRTUAL_LOTTO_SALES}</td>
						<td class="text-right">₦${table.SPORTS_BOOK_SALES}</td>
						<td class="text-right">₦${table.VIRTUAL_SALES}</td>
						<td class="text-right">₦${table.NET_SALES}</td>
						<td class="text-right">₦${table.WINNINGS_PAYMENT}</td>
						<td class="text-right">₦${table.VIRTUAL_LOTTO_SALES_COMMISSION + table.SPORTS_BOOK_SALES_COMMISSION + table.VIRTUAL_SALES_COMMISSION}</td>
						<td class="text-right">₦${table.CASH_REFUND}</td>
						<td class="text-right">₦${table.CASH_RECEIPT}</td>
						<td class="text-right">₦${table.CASH_REVERSAL}</td>
						<td class="text-right">₦${table.CLOSING_BALANCE}</td>
					</tr>
				`;
			}

			$('#soa_table tbody').html(tableHeader);

			this.loading(false);
		}).catch(function (error) {
			console.log(error);
			console.log("Is Not Work");
			$('#soa_table tbody').html("<h3 class='text-center'>Something went wrong. Please try again.</h3>");
			this.loading(false);
		});
	}

	/* * * * * * * * * *
	 *
	 * END: METHODS
	 * 
	 * * * * * * * * * */

	render() {

		helpers.el('body').className = "menu-position-side menu-side-left full-screen-with-content-panel full-screen";
		
		$(function() {
			helpers.matchHeight('.projects-list.bss-list .project-head');
			
			$(".bonusProgress").each(function() {
				var value = $(this).attr('data-value');
				var left = $(this).find('.bonusProgressLeft');
				var right = $(this).find('.bonusProgressRight');

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
								<a aria-expanded="false" className="nav-link active" data-toggle="tab" href="#summary">
									<span className="tab-label">Summary</span>
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
						START - Summary Tab
						--------------------> */}
						<div className="tab-pane fade show active" id="summary" role="tabpanel" aria-labelledby="summary-tab">
							
							<div className="row">
								<div className="col-12 col-sm-4 col-xxl-4">
									<div className="projects-list bss-list text-center">
										<div className="project-box" onClick={() => this.showSOA("DEBT")} data-target="#soaModal" data-toggle="modal" data-bonus="DEBT">
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
															<div className="font-weight-bold">
																Due Debt
															</div>
															<div className="value font-weight-bold">
																{/* ₦45,201,964 */}
																₦{this.state.dueDebt == null ? '0.00' : this.formatAmount(this.state.dueDebt)}
															</div>
														</div>
														
														<div className="gap d-none d-sm-block"></div>

														<div className="gap-3 d-sm-none"></div>
														
														<div className="el-tablo centered highlight element-box trend-in-corner smaller">
															<div className="font-weight-light">
																Total Debt
															</div>
															<div className="value font-weight-light">
																{/* ₦130,391,955 */}
																₦{this.state.currentDebt == null ? '0.00' : this.formatAmount(this.state.currentDebt)}
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
									<div className="projects-list bss-list text-center">
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
															<div className="font-weight-bold">
																Commission Balance
															</div>
															<div className="value font-weight-bold">
																{/* ₦4,539,200 */}
																₦{this.state.commissionBalance == null ? '0.00' : this.formatAmount(this.state.commissionBalance)}
															</div>
														</div>

														<div className="gap d-none d-sm-block"></div>

														<div className="gap-3 d-sm-none"></div>
														
														<div className="el-tablo centered highlight element-box trend-in-corner smaller">
															<div className="font-weight-light">
																This Week
															</div>
															<div className="value font-weight-light">
																{/* ₦171,955 */}
																₦{this.state.commissionThisWeek == null ? '0.00' : this.formatAmount(this.state.commissionThisWeek)}
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
									<div className="projects-list bss-list text-center">
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
															<div className="font-weight-bold">
																Debt
															</div>
															<div className="value font-weight-bold">
																{/* ₦39,200 */}
																₦{this.state.cashierDebt == null ? '0.00' : this.formatAmount(this.state.cashierDebt)}
															</div>
														</div>

														<div className="gap d-none d-sm-block"></div>

														<div className="gap-3 d-sm-none"></div>
														
														<div className="el-tablo centered highlight element-box trend-in-corner smaller">
															<div className="font-weight-light">
																Active
															</div>
															<div className="value font-weight-light">
																{this.state.cashierNo}
															</div>
															<div className="trending trending-same">
																<span>0%</span>
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
															<th className="text-right">
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

													{this.state.cashierList.length ?
													<tbody>
														{this.state.cashierList.map((cashier) => (
															<tr key={cashier.SUB_AGENT_NUMBER}>
																<td className="text-center">
																	<input className="form-control" type="checkbox" />
																</td>
																<td className="text-center">
																	{this.firstLetterUpper(cashier.SUB_AGENT_FIRST_NAME)} {this.firstLetterUpper(cashier.SUB_AGENT_LAST_NAME)}
																</td>
																<td className="text-right">
																	₦245
																</td>
																<td className="text-center">
																	<SuspendedPill status={cashier.SUSPEND_SUB_AGENT} />
																</td>
																<td className="row-actions">
																	<a className="no-link-effect" href="# "data-target="#onboardingFormModal" data-toggle="modal"><i className="os-icon os-icon-wallet-loaded"></i></a>
																	<a className="no-link-effect danger" href="# "><i className="os-icon os-icon-cancel-circle"></i></a>
																</td>
															</tr>
														))}
													</tbody> :
													<tbody>
														<tr><td>No cashiers available</td></tr>
													</tbody>}
												</table>
											</div>
											{/* <!--------------------
											END - Cashier table
											---------------------> */}

											{/* <!--------------------
											START - Fund Cashier modal
											---------------------> */}										
											<div aria-hidden="true" className="onboarding-modal modal fade" id="onboardingFormModal" role="dialog" tabIndex="-1">
												<div className="modal-dialog modal-centered modal-lg" role="document">
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

							{/* <!--------------------
							START - Statement of Account Modal
							---------------------> */}										
							<div aria-hidden="true" className="onboarding-modal modal fade" id="soaModal" role="dialog" tabIndex="-1">
								<div className="modal-dialog modal-centered modal-lg soa-modal" role="document">
									<div className="modal-content text-center">
										<button aria-label="Close" className="close" data-dismiss="modal" type="button">
											<span className="os-icon os-icon-close"></span>
										</button>
										<div id="soa_loading_page">
											<div>
												<img className="hvr-pulse" src="img/premier-bet-logo-small.png" alt=""/>
												<div className="gap-2"></div>
												<h2>Loading...</h2>
											</div>
										</div>
										<div className="onboarding-content with-gradient">
											<h4 className="onboarding-title" id="soa_title">TITLE</h4>
											<div className="row">
												<div className="col-12">
													
													<div className="element-wrapper w-100">
														<div className="element-box-tp">

															<div className="row">
																<div className="col-12">
																	{/* <!--------------------
																	START - Statement of Account Table
																	---------------------> */}
																	<div className="table-responsive">
																		<table className="table table-lg table-v2 table-striped table-bordered" id="soa_table">
																			<thead></thead>
																			<tbody></tbody>
																		</table>
																	</div>
																	{/* <!--------------------
																	END - Statement of Account table
																	---------------------> */}
																</div>
															</div>
													
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* <!--------------------
							END - Statement of Account Modal
							---------------------> */}
						</div>
						{/* <!--------------------
						END - Summary Tab
						--------------------> */}
					
						{/* <!--------------------
						START - Bonus Tab
						--------------------> */}
						<div className="tab-pane fade" id="bonus" role="tabpanel" aria-labelledby="bonus-tab">

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
									<a className="no-link-effect color-black" onClick={(e) => this.bonusModal(e)} href="# " data-target="#bonusModal" data-toggle="modal" data-bonus="Daily Bonus">
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
																	<div className="h4 font-weight-bold">{this.state.prog1}<sup className="">%</sup></div>
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
									<a className="no-link-effect color-black" onClick={(e) => this.bonusModal(e)} href="# " data-target="#bonusModal" data-toggle="modal" data-bonus="Lotto Bonus">
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
																	<div className="h4 font-weight-bold">{this.state.prog2}<sup className="">%</sup></div>
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
									<a className="no-link-effect color-black" onClick={(e) => this.bonusModal(e)} href="# " data-target="#bonusModal" data-toggle="modal" data-bonus="Sports Bonus">
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
																	<div className="h4 font-weight-bold">100<sup className="">%</sup></div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</a>
								</div>
							</div>

							{/* <!--------------------
							START - Bonus Modal
							---------------------> */}										
							<div aria-hidden="true" className="onboarding-modal modal fade" id="bonusModal" role="dialog" tabIndex="-1">
								<div className="modal-dialog modal-centered modal-lg" role="document">
									<div className="modal-content text-center">
										<button aria-label="Close" className="close" data-dismiss="modal" type="button">
											<span className="os-icon os-icon-close"></span>
										</button>
										<div className="onboarding-content with-gradient">
											<h4 className="onboarding-title">
												{this.state.bonus}
											</h4>
											<div className="row">
												<div className="col-12">
													
													<div className="element-wrapper w-100">
														<div className="element-box-tp">

															<div className="row">
																<div className="col-12">
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
													
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* <!--------------------
							END - Bonus Modal
							---------------------> */}

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