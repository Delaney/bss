import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import $ from 'jquery';
// import axios from 'axios'

/* Pages */
import Dashboard from './pages/Dashboard';

/* Components */
import StatusInTopbar from './components/StatusInTopbar';

/* Sidebar Components */
import PayToBabaIjebuForm from './components/sidebar/PayToBabaIjebuForm';
import RegisterCashierForm from './components/sidebar/RegisterCashierForm';
import QueryBetSlipForm from './components/sidebar/QueryBetSlipForm';
import SuspendCashierForm from './components/sidebar/SuspendCashierForm';

// 	render() {
// 		return (
// 			<div className="App">
// 				<header className="">
// 					<h3>React SPA</h3>
// 				</header>
// 				<div className="container">
// 					{this.state.users.map((user) => (
// 						<div className="card" key={user.id}>
// 							<div className="card-body">
// 								<h5 className="card-title">{user.name}</h5>
// 								<h6 className="card-subtitle mb-2 text-muted">
// 									{user.email}             
// 								</h6>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		)
// 	}
// }

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			user: localStorage.getItem('agent') ? JSON.parse(localStorage.getItem('agent')) : {Username: '', SessionID: '', AgentNo: ''},
			stat: Math.floor(Math.random() * 100) % 2
		}

		this.logout = this.logout.bind(this);
	}
	
	componentDidMount(){
		if (!localStorage.getItem('agent')){
			window.location.href="/login.html";
		}

		$(function(){
			$(".fpl-progress-i").each(function() {
				let width = $(this).css('width');

				if (width === "100%"){
					$(this).css({
						'background-image': 'linear-gradient(-270deg,#28a745 0,#000 98%)',
						'background-color': '#28a745'
					});
				}
			});
		});
	}

	logout(){
		localStorage.removeItem('agent');
		this.setState({
			user: {Username: '', SessionID: '', AgentNo: ''}
		});
		window.location.href = "/login.html";
	}

	loading(val){
		document.getElementById('loading_page').className = val ? "on" : "";
	}

	render() {
		return (
			<div className="all-wrapper with-side-panel solid-bg-all">
				<div id="loading_page">
					<div>
						<img className="hvr-pulse" src="img/premier-bet-logo-small.png" alt=""/>
					</div>
				</div>
				<div className="layout-w">

					{/* <!--------------------
					START - Mobile Menu
					--------------------> */}
					<div className="menu-mobile menu-activated-on-click color-scheme-dark">
						<div className="mm-logo-buttons-w">
							<a className="mm-logo" href="index.html">
								<img src="img/premier-bet-logo-small.png" alt=""/>
							</a>
							<div className="mm-buttons">
								<div className="content-panel-open">
									<div className="os-icon os-icon-hamburger-menu-1"></div>
								</div>
								<div className="mobile-menu-trigger">
									<div className="os-icon os-icon-hamburger-menu-1"></div>
								</div>
							</div>
						</div>
						<div className="menu-and-user">
							<div className="logged-user-w">
								<div className="avatar-w">
									<img alt="" src="img/user.png"/>
								</div>
								<div className="logged-user-info-w">
									<div className="logged-user-name">
										{this.state.user.Username}
									</div>
									<div className="logged-user-role">
										{this.state.user.AgentNo}
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!--------------------
					END - Mobile Menu
					--------------------> */}
					
					<div className="content-w bss-content">
						
						{/* <!--------------------
						START - Top Bar
						--------------------> */}
						<div className="top-bar color-scheme-dark">
							<div className="logo-w">
								<a className="logo" href="index.html">
									<img src="img/premier-bet-logo-small.png" alt=""/>
								</a>
							</div>
							<div className="fancy-selector-w">
								<div className="fancy-selector-current">
									<div className="fs-img">
										<img alt="" src="img/card4.png"/>
									</div>
									<div className="fs-main-info">
										<div className="fs-name">
											<span>WEMA</span>
											{/* <strong>BTC</strong> */}
										</div>
										<div className="fs-sub">
											<span>Wallet Balance:</span><strong>₦5,304</strong>
										</div>
									</div>
									<div className="fs-selector-trigger">
										<i className="os-icon os-icon-arrow-down4"></i>
									</div>
								</div>
								<div className="fancy-selector-options">
									<div className="fancy-selector-option">
										<div className="fs-img">
											<img alt="" src="img/card2.png"/>
										</div>
										<div className="fs-main-info">
											<div className="fs-name">
												<span>Heritage</span>
												{/* <strong>ETH</strong> */}
											</div>
											<div className="fs-sub">
												<span>Wallet Balance:</span><strong>₦5,304</strong>
											</div>
										</div>
									</div>
									<div className="fancy-selector-option active">
										<div className="fs-img">
											<img alt="" src="img/card4.png"/>
										</div>
										<div className="fs-main-info">
											<div className="fs-name">
												<span>Bitcoin Portfolio</span><strong>BTC</strong>
											</div>
											<div className="fs-sub">
												<span>Wallet Balance:</span><strong>₦8,274</strong>
											</div>
										</div>
									</div>
									<div className="fancy-selector-actions text-right">
										<a className="btn btn-dark" href="# "><i className="os-icon os-icon-ui-22"></i><span>Add Wallet</span></a>
									</div>
								</div>
							</div>

							{/* <!--------------------
							START - Top Menu Controls
							--------------------> */}

							<div className="top-menu-controls">
								{/* <div className="element-search autosuggest-search-activator">
									<input placeholder="Start typing to search..." type="text"/>
								</div> */}

								<StatusInTopbar status={this.state.stat}></StatusInTopbar>
								
								{/* <!--------------------
								START - Settings Link in secondary top menu
								--------------------> */}
								<div className="top-icon top-settings os-dropdown-trigger os-dropdown-position-left">
									<i className="os-icon os-icon-ui-46"></i>
									<div className="os-dropdown">
										<div className="icon-w">
											<i className="os-icon os-icon-ui-46"></i>
										</div>
										<ul>
											<li>
												<a href="users_profile_small.html"><i className="os-icon os-icon-ui-49"></i><span>Profile Settings</span></a>
											</li>
											<li>
												<a href="users_profile_small.html"><i className="os-icon os-icon-grid-10"></i><span>Billing Info</span></a>
											</li>
											<li>
												<a href="users_profile_small.html"><i className="os-icon os-icon-ui-44"></i><span>My Invoices</span></a>
											</li>
											<li>
												<a href="users_profile_small.html"><i className="os-icon os-icon-ui-15"></i><span>Cancel Account</span></a>
											</li>
										</ul>
									</div>
								</div>
								{/* <!--------------------
								END - Settings Link in secondary top menu
								--------------------> */}
								
								{/* <!--------------------
								START - User avatar and menu in secondary top menu
								--------------------> */}
								<div className="logged-user-w">
									<div className="logged-user-i">
										<div className="avatar-w">
											<img alt="" src="img/user.png"/>
										</div>
										<div className="logged-user-menu color-style-bright">
											<div className="logged-user-avatar-info">
												<div className="avatar-w">
													<img alt="" src="img/user.png"/>
												</div>
												<div className="logged-user-info-w">
													<div className="logged-user-name">
														{this.state.user.Username}
													</div>
													<div className="logged-user-role">
														{this.state.user.AgentNo}
													</div>
												</div>
											</div>
											<div className="bg-icon">
												<i className="os-icon os-icon-wallet-loaded"></i>
											</div>
											<ul>
												<li>
													<a href="apps_email.html"><i className="os-icon os-icon-mail-01"></i><span>Incoming Mail</span></a>
												</li>
												<li>
													<a href="users_profile_big.html"><i className="os-icon os-icon-user-male-circle2"></i><span>Profile Details</span></a>
												</li>
												<li>
													<a href="users_profile_small.html"><i className="os-icon os-icon-coins-4"></i><span>Billing Details</span></a>
												</li>
												<li>
													<a href="# "><i className="os-icon os-icon-others-43"></i><span>Notifications</span></a>
												</li>
												<li>
													<a href="# " onClick={this.logout}><i className="os-icon os-icon-signs-11"></i><span>Logout</span></a>
												</li>
											</ul>
										</div>
									</div>
								</div>
								{/* <!--------------------
								END - User avatar and menu in secondary top menu
								--------------------> */}

							</div>
							{/* <!--------------------
							END - Top Menu Controls
							--------------------> */}

						</div>
						{/* <!--------------------
						END - Top Bar
						--------------------> */}

						<div className="content-panel-toggler">
							<i className="os-icon os-icon-grid-squares-22"></i><span>Sidebar</span>
						</div>
						<div className="content-i">
							<div className="content-box">
								
								{/* <!--------------------
								START - React Router Base
								-------------------->*/}
								<BrowserRouter>
									<Switch>
										{/* <Route exact path="/" component={
											localStorage.getItem('agent') ? Dashboard : window.location.href="/login.html" } />
										} /> */}
										<Route
											exact path="/"
											render={(props) =>
												<Dashboard {...props} setLoad={this.loading} user={JSON.parse(localStorage.getItem('agent'))}/>} />
										} />
									</Switch>
								</BrowserRouter>
								{/* <!--------------------
								END - React Router Base
								-------------------->*/}

							</div>

							{/* <!--------------------
							START - Sidebar
							--------------------> */}
							<div className="content-panel bss-panel compact color-scheme-dark">
								<div className="content-panel-close">
									<i className="os-icon os-icon-close"></i>
								</div>

								<div className="element-wrapper compact folded">
									<div className="element-actions actions-only">
										<h6 className="element-header element-action element-action-fold">
											Pay to Baba Ijebu
										</h6>
										<p className="element-sub-header element-action element-action-fold">Deposit straight to Baba Ijebu from here!</p>
										<div className="element-icon element-action element-action-fold">
											<i className="untouchable entypo-icon-credit-card"></i>
										</div>
									</div>
									<div className="element-box-tp" style={{display: 'none'}}>
										<PayToBabaIjebuForm></PayToBabaIjebuForm>
									</div>
								</div>
								
								<div className="element-wrapper compact folded">
									<div className="element-actions actions-only">
										<h6 className="element-header element-action element-action-fold">
											Transaction History
										</h6>
										<p className="element-sub-header element-action element-action-fold">View recent sales history</p>
										<div className="element-icon element-action element-action-fold">
											<i className="untouchable entypo-icon-text-document"></i>
										</div>									
									</div>
									<div className="element-box-tp" style={{display: 'none'}}>
										<table className="table table-compact smaller text-faded mb-0">
											<thead>
												<tr>
													<th>
														Type
													</th>
													<th className="text-center">
														Date
													</th>
													<th className="text-right">
														Amount
													</th>
													<th className="text-right">
														Fee
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<span>BTC</span><i className="os-icon os-icon-repeat icon-separator"></i><span>USD</span>
													</td>
													<td className="text-center">
														01.08
													</td>
													<td className="text-right text-bright">
														$25.38
													</td>
													<td className="text-right text-danger">
														-$1.23
													</td>
												</tr>
												<tr>
													<td>
														<span>RPX</span><i className="os-icon os-icon-repeat icon-separator"></i><span>ETH</span>
													</td>
													<td className="text-center">
														01.07
													</td>
													<td className="text-right text-bright">
														$15.21
													</td>
													<td className="text-right text-danger">
														-$1.13
													</td>
												</tr>
												<tr>
													<td>
														<span>LTC</span><i className="os-icon os-icon-repeat icon-separator"></i><span>BTC</span>
													</td>
													<td className="text-center">
														01.05
													</td>
													<td className="text-right text-bright">
														$17.43
													</td>
													<td className="text-right text-danger">
														-$2.14
													</td>
												</tr>
												<tr>
													<td>
														<span>PRX</span><i className="os-icon os-icon-repeat icon-separator"></i><span>LTC</span>
													</td>
													<td className="text-center">
														01.05
													</td>
													<td className="text-right text-bright">
														$23.18
													</td>
													<td className="text-right text-danger">
														-$3.17
													</td>
												</tr>
												<tr>
													<td>
														<span>ETH</span><i className="os-icon os-icon-repeat icon-separator"></i><span>USD</span>
													</td>
													<td className="text-center">
														01.04
													</td>
													<td className="text-right text-bright">
														$35.42
													</td>
													<td className="text-right text-danger">
														-$3.12
													</td>
												</tr>
												<tr>
													<td>
														<span>BTC</span><i className="os-icon os-icon-repeat icon-separator"></i><span>ETH</span>
													</td>
													<td className="text-center">
														01.02
													</td>
													<td className="text-right text-bright">
														$72.62
													</td>
													<td className="text-right text-danger">
														-$4.15
													</td>
												</tr>
												<tr>
													<td>
														<span>RPX</span><i className="os-icon os-icon-repeat icon-separator"></i><span>USD</span>
													</td>
													<td className="text-center">
														12.29
													</td>
													<td className="text-right text-bright">
														$25.38
													</td>
													<td className="text-right text-danger">
														-$1.23
													</td>
												</tr>
												<tr>
													<td>
														<span>ETH</span><i className="os-icon os-icon-repeat icon-separator"></i><span>BTC</span>
													</td>
													<td className="text-center">
														12.28
													</td>
													<td className="text-right text-bright">
														$52.11
													</td>
													<td className="text-right text-danger">
														-$4.72
													</td>
												</tr>
											</tbody>
										</table>
										<a className="centered-load-more-link smaller" href="# "><span>Load More Transactions</span></a>
									</div>
								</div>
								
								<div className="element-wrapper compact folded">
									<div className="element-actions actions-only">
										<h6 className="element-header element-action element-action-fold">
											Bonus Completion
										</h6>
										<p className="element-sub-header element-action element-action-fold">Keep track of bonuses</p>
										<div className="element-icon element-action element-action-fold">
											<i className="untouchable entypo-icon-thumbs-up"></i>
										</div>								
									</div>
									<div className="element-box-tp" style={{display: 'none'}}>
										<h6>Sports Bet</h6>
										<div className="fancy-progress-with-label">
											<div className="fpl-label">
												65%
											</div>
											<div className="fpl-progress-w">
												<div className="fpl-progress-i" style={{ width: '65%' }}></div>
											</div>
										</div>

										<h6>Daily Sales</h6>
										<div className="fancy-progress-with-label">
											<div className="fpl-label">
												24%
											</div>
											<div className="fpl-progress-w">
												<div className="fpl-progress-i" style={{ width: '24%' }}></div>
											</div>
										</div>

										<h6>Lotto Bonus</h6>
										<div className="fancy-progress-with-label">
											<div className="fpl-label">
												92%
											</div>
											<div className="fpl-progress-w">
												<div className="fpl-progress-i" style={{ width: '92%' }}></div>
											</div>
										</div>

										<h6>Completed Example</h6>
										<div className="fancy-progress-with-label">
											<div className="fpl-label">
												100%
											</div>
											<div className="fpl-progress-w">
												<div className="fpl-progress-i" style={{ width: '100%' }}></div>
											</div>
										</div>
									</div>
								</div>
							
								<div className="element-wrapper compact folded">
									<div className="element-actions actions-only">
										<h6 className="element-header element-action element-action-fold">
											Register a Cashier
										</h6>
										<p className="element-sub-header element-action element-action-fold">Quick registration</p>	<div className="element-icon element-action element-action-fold">
											<i className="untouchable entypo-icon-add-user"></i>
										</div>							
									</div>
									<div className="element-box-tp" style={{display: 'none'}}>
										<RegisterCashierForm></RegisterCashierForm>
									</div>
								</div>

								<div className="element-wrapper compact folded">
									<div className="element-actions actions-only">
										<h6 className="element-header element-action element-action-fold">
											Suspend a Cashier
										</h6>
										<p className="element-sub-header element-action element-action-fold">Quick registration</p>	<div className="element-icon element-action element-action-fold">
											<i className="untouchable entypo-icon-uninstall"></i>
										</div>								
									</div>
									<div className="element-box-tp" style={{display: 'none'}}>
										<SuspendCashierForm></SuspendCashierForm>
									</div>
								</div>

								<div className="element-wrapper compact folded">
									<div className="element-actions actions-only">
										<h6 className="element-header element-action element-action-fold">
											Query Betslip
										</h6>
										<p className="element-sub-header element-action element-action-fold">Quick registration</p>	<div className="element-icon element-action element-action-fold">
											<i className="untouchable entypo-icon-news"></i>
										</div>								
									</div>
									<div className="element-box-tp" style={{display: 'none'}}>
										<QueryBetSlipForm></QueryBetSlipForm>
									</div>
								</div>

							</div>
							{/* <!--------------------
							END - Sidebar
							--------------------> */}
						</div>
					</div>
				</div>
				<div className="display-type"></div>
				<div className="footer-w">
					<div className="fade3"></div>
					<div className="os-container">
						<div className="deep-footer">
							2019 &copy; Swift Mini by High Tech Synergy.                 
						</div>
					</div>
				</div>
			</div>
		)
	}
}

// App.propTypes = {
// 	agent:PropTypes.object.isRequired,

// 	requiredFunc: PropTypes.func.isRequired,
// }

export default App
