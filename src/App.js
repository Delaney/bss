import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
// import axios from 'axios'

import Dashboard from './pages/Dashboard'
// import SecondPage from './pages/SecondPage'
// import ThirdPage from './pages/ThirdPage'
// import './App.css'

// class App extends Component {
// 	state = {
// 		data: [],
// 		users: []
// 	}
// 	componentDidMount(){
// 		const url = `${API_URL}/users/`
// 		axios.get(url).then(response => response.data).then((data) => {
// 			this.setState({ users: data })
// 			console.log(this.state.users)
// 		})
// 	}
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
// 				<Switch>
// 					<Route exact path="/" component={HomePage} />
// 					<Route path="/second" component={SecondPage} />
// 					<Route path="/third" component={ThirdPage} />
// 				</Switch>
// 			</div>
// 		)
// 	}
// }

class App extends Component {
	state = {

	}

	render() {
		return (
			<div className="all-wrapper with-side-panel solid-bg-all">
				<div className="layout-w">

					{/* <!--------------------
					START - Mobile Menu
					--------------------> */}
					<div className="menu-mobile menu-activated-on-click color-scheme-dark">
						<div className="mm-logo-buttons-w">
							<a className="mm-logo" href="index.html">
								<img src="img/logo.png" alt=""/>
								<span>Clean Admin</span>
								</a>
							<div className="mm-buttons">
								<div className="content-panel-open">
									<div className="os-icon os-icon-grid-circles"></div>
								</div>
								<div className="mobile-menu-trigger">
									<div className="os-icon os-icon-hamburger-menu-1"></div>
								</div>
							</div>
						</div>
						<div className="menu-and-user">
							<div className="logged-user-w">
								<div className="avatar-w">
									<img alt="" src="img/avatar1.jpg"/>
								</div>
								<div className="logged-user-info-w">
									<div className="logged-user-name">
										Maria Gomez
									</div>
									<div className="logged-user-role">
										Administrator
									</div>
								</div>
							</div>

							{/* <!--------------------
							START - Mobile Menu List
							--------------------> */}
							<ul className="main-menu">
								<li className="has-sub-menu">
									<a href="index.html">
										<div className="icon-w">
											<div className="os-icon os-icon-layout"></div>
										</div>
										<span>Dashboard</span></a>
									<ul className="sub-menu">
										<li>
											<a href="index.html">Dashboard 1</a>
										</li>
										<li>
											<a href="apps_crypto.html">Crypto Dashboard <strong className="badge badge-danger">Hot</strong></a>
										</li>
										<li>
											<a href="apps_support_dashboard.html">Dashboard 3</a>
										</li>
										<li>
											<a href="apps_projects.html">Dashboard 4</a>
										</li>
										<li>
											<a href="apps_bank.html">Dashboard 5</a>
										</li>
										<li>
											<a href="layouts_menu_top_image.html">Dashboard 6</a>
										</li>
									</ul>
								</li>
								<li className="has-sub-menu">
									<a href="layouts_menu_top_image.html">
										<div className="icon-w">
											<div className="os-icon os-icon-layers"></div>
										</div>
										<span>Menu Styles</span></a>
									<ul className="sub-menu">
										<li>
											<a href="layouts_menu_side_full.html">Side Menu Light</a>
										</li>
										<li>
											<a href="layouts_menu_side_full_dark.html">Side Menu Dark</a>
										</li>
										<li>
											<a href="layouts_menu_side_transparent.html">Side Menu Transparent <strong className="badge badge-danger">New</strong></a>
										</li>
										<li>
											<a href="apps_pipeline.html">Side &amp Top Dark</a>
										</li>
										<li>
											<a href="apps_projects.html">Side &amp; Top</a>
										</li>
										<li>
											<a href="layouts_menu_side_mini.html">Mini Side Menu</a>
										</li>
										<li>
											<a href="layouts_menu_side_mini_dark.html">Mini Menu Dark</a>
										</li>
										<li>
											<a href="layouts_menu_side_compact.html">Compact Side Menu</a>
										</li>
										<li>
											<a href="layouts_menu_side_compact_dark.html">Compact Menu Dark</a>
										</li>
										<li>
											<a href="layouts_menu_right.html">Right Menu</a>
										</li>
										<li>
											<a href="layouts_menu_top.html">Top Menu Light</a>
										</li>
										<li>
											<a href="layouts_menu_top_dark.html">Top Menu Dark</a>
										</li>
										<li>
											<a href="layouts_menu_top_image.html">Top Menu Image <strong className="badge badge-danger">New</strong></a>
										</li>
										<li>
											<a href="layouts_menu_sub_style_flyout.html">Sub Menu Flyout</a>
										</li>
										<li>
											<a href="layouts_menu_sub_style_flyout_dark.html">Sub Flyout Dark</a>
										</li>
										<li>
											<a href="layouts_menu_sub_style_flyout_bright.html">Sub Flyout Bright</a>
										</li>
										<li>
											<a href="layouts_menu_side_compact_click.html">Menu Inside Click</a>
										</li>
									</ul>
								</li>
								<li className="has-sub-menu">
									<a href="apps_bank.html">
										<div className="icon-w">
											<div className="os-icon os-icon-package"></div>
										</div>
										<span>Applications</span></a>
									<ul className="sub-menu">
										<li>
											<a href="apps_email.html">Email Application</a>
										</li>
										<li>
											<a href="apps_support_dashboard.html">Support Dashboard</a>
										</li>
										<li>
											<a href="apps_support_index.html">Tickets Index</a>
										</li>
										<li>
											<a href="apps_crypto.html">Crypto Dashboard <strong className="badge badge-danger">New</strong></a>
										</li>
										<li>
											<a href="apps_projects.html">Projects List</a>
										</li>
										<li>
											<a href="apps_bank.html">Banking <strong className="badge badge-danger">New</strong></a>
										</li>
										<li>
											<a href="apps_full_chat.html">Chat Application</a>
										</li>
										<li>
											<a href="apps_todo.html">To Do Application <strong className="badge badge-danger">New</strong></a>
										</li>
										<li>
											<a href="misc_chat.html">Popup Chat</a>
										</li>
										<li>
											<a href="apps_pipeline.html">CRM Pipeline</a>
										</li>
										<li>
											<a href="rentals_index_grid.html">Property Listing <strong className="badge badge-danger">New</strong></a>
										</li>
										<li>
											<a href="misc_calendar.html">Calendar</a>
										</li>
									</ul>
								</li>
								<li className="has-sub-menu">
									<a href="# ">
										<div className="icon-w">
											<div className="os-icon os-icon-file-text"></div>
										</div>
										<span>Pages</span></a>
									<ul className="sub-menu">
										<li>
											<a href="misc_invoice.html">Invoice</a>
										</li>
										<li>
											<a href="rentals_index_grid.html">Property Listing <strong className="badge badge-danger">New</strong></a>
										</li>
										<li>
											<a href="misc_charts.html">Charts</a>
										</li>
										<li>
											<a href="auth_login.html">Login</a>
										</li>
										<li>
											<a href="auth_register.html">Register</a>
										</li>
										<li>
											<a href="auth_lock.html">Lock Screen</a>
										</li>
										<li>
											<a href="misc_pricing_plans.html">Pricing Plans</a>
										</li>
										<li>
											<a href="misc_error_404.html">Error 404</a>
										</li>
										<li>
											<a href="misc_error_500.html">Error 500</a>
										</li>
									</ul>
								</li>
								<li className="has-sub-menu">
									<a href="# ">
										<div className="icon-w">
											<div className="os-icon os-icon-life-buoy"></div>
										</div>
										<span>UI Kit</span></a>
									<ul className="sub-menu">
										<li>
											<a href="uikit_modals.html">Modals <strong className="badge badge-danger">New</strong></a>
										</li>
										<li>
											<a href="uikit_alerts.html">Alerts</a>
										</li>
										<li>
											<a href="uikit_grid.html">Grid</a>
										</li>
										<li>
											<a href="uikit_progress.html">Progress</a>
										</li>
										<li>
											<a href="uikit_popovers.html">Popover</a>
										</li>
										<li>
											<a href="uikit_tooltips.html">Tooltips</a>
										</li>
										<li>
											<a href="uikit_buttons.html">Buttons</a>
										</li>
										<li>
											<a href="uikit_dropdowns.html">Dropdowns</a>
										</li>
										<li>
											<a href="uikit_typography.html">Typography</a>
										</li>
									</ul>
								</li>
								<li className="has-sub-menu">
									<a href="# ">
										<div className="icon-w">
											<div className="os-icon os-icon-mail"></div>
										</div>
										<span>Emails</span></a>
									<ul className="sub-menu">
										<li>
											<a href="emails_welcome.html">Welcome Email</a>
										</li>
										<li>
											<a href="emails_order.html">Order Confirmation</a>
										</li>
										<li>
											<a href="emails_payment_due.html">Payment Due</a>
										</li>
										<li>
											<a href="emails_forgot.html">Forgot Password</a>
										</li>
										<li>
											<a href="emails_activate.html">Activate Account</a>
										</li>
									</ul>
								</li>
								<li className="has-sub-menu">
									<a href="# ">
										<div className="icon-w">
											<div className="os-icon os-icon-users"></div>
										</div>
										<span>Users</span></a>
									<ul className="sub-menu">
										<li>
											<a href="users_profile_big.html">Big Profile</a>
										</li>
										<li>
											<a href="users_profile_small.html">Compact Profile</a>
										</li>
									</ul>
								</li>
								<li className="has-sub-menu">
									<a href="# ">
										<div className="icon-w">
											<div className="os-icon os-icon-edit-32"></div>
										</div>
										<span>Forms</span></a>
									<ul className="sub-menu">
										<li>
											<a href="forms_regular.html">Regular Forms</a>
										</li>
										<li>
											<a href="forms_validation.html">Form Validation</a>
										</li>
										<li>
											<a href="forms_wizard.html">Form Wizard</a>
										</li>
										<li>
											<a href="forms_uploads.html">File Uploads</a>
										</li>
										<li>
											<a href="forms_wisiwig.html">Wisiwig Editor</a>
										</li>
									</ul>
								</li>
								<li className="has-sub-menu">
									<a href="# ">
										<div className="icon-w">
											<div className="os-icon os-icon-grid"></div>
										</div>
										<span>Tables</span></a>
									<ul className="sub-menu">
										<li>
											<a href="tables_regular.html">Regular Tables</a>
										</li>
										<li>
											<a href="tables_datatables.html">Data Tables</a>
										</li>
										<li>
											<a href="tables_editable.html">Editable Tables</a>
										</li>
									</ul>
								</li>
								<li className="has-sub-menu">
									<a href="# ">
										<div className="icon-w">
											<div className="os-icon os-icon-zap"></div>
										</div>
										<span>Icons</span></a>
									<ul className="sub-menu">
										<li>
											<a href="icon_fonts_simple_line_icons.html">Simple Line Icons</a>
										</li>
										<li>
											<a href="icon_fonts_feather.html">Feather Icons</a>
										</li>
										<li>
											<a href="icon_fonts_themefy.html">Themefy Icons</a>
										</li>
										<li>
											<a href="icon_fonts_picons_thin.html">Picons Thin</a>
										</li>
										<li>
											<a href="icon_fonts_dripicons.html">Dripicons</a>
										</li>
										<li>
											<a href="icon_fonts_eightyshades.html">Eightyshades</a>
										</li>
										<li>
											<a href="icon_fonts_entypo.html">Entypo</a>
										</li>
										<li>
											<a href="icon_fonts_font_awesome.html">Font Awesome</a>
										</li>
										<li>
											<a href="icon_fonts_foundation_icon_font.html">Foundation Icon Font</a>
										</li>
										<li>
											<a href="icon_fonts_metrize_icons.html">Metrize Icons</a>
										</li>
										<li>
											<a href="icon_fonts_picons_social.html">Picons Social</a>
										</li>
										<li>
											<a href="icon_fonts_batch_icons.html">Batch Icons</a>
										</li>
										<li>
											<a href="icon_fonts_dashicons.html">Dashicons</a>
										</li>
										<li>
											<a href="icon_fonts_typicons.html">Typicons</a>
										</li>
										<li>
											<a href="icon_fonts_weather_icons.html">Weather Icons</a>
										</li>
										<li>
											<a href="icon_fonts_light_admin.html">Light Admin</a>
										</li>
									</ul>
								</li>
							</ul>
							{/* <!--------------------
							END - Mobile Menu List
							--------------------> */}

							<div className="mobile-menu-magic">
								<h4>
									Light Admin
								</h4>
								<p>
									Clean Bootstrap 4 Template
								</p>
								<div className="btn-w">
									<a className="btn btn-white btn-rounded" href="https://themeforest.net/item/light-admin-clean-bootstrap-dashboard-html-template/19760124?ref=Osetin" target="_blank" rel="noopener noreferrer">Purchase Now</a>
								</div>
							</div>
						</div>
					</div>
					{/* <!--------------------
					END - Mobile Menu
					--------------------> */}
					
					{/* <!--------------------
					START - Main Menu
					--------------------> */}
					<div className="menu-w menu-activated-on-hover menu-has-selected-link selected-menu-color-light color-scheme-dark color-style-default sub-menu-color-dark menu-position-side menu-side-left menu-layout-mini sub-menu-style-over">
						<div className="logo-w">
							<a className="logo" href="index.html">
								<div className="logo-element"></div>
								<div className="logo-label">
									Clean Admin
								</div>
							</a>
						</div>
						<div className="logged-user-w avatar-inline">
							<div className="logged-user-i">
								<div className="avatar-w">
									<img alt="" src="img/avatar1.jpg"/>
								</div>
								<div className="logged-user-info-w">
									<div className="logged-user-name">
										Maria Gomez
									</div>
									<div className="logged-user-role">
										Administrator
									</div>
								</div>
								<div className="logged-user-toggler-arrow">
									<div className="os-icon os-icon-chevron-down"></div>
								</div>
								<div className="logged-user-menu color-style-bright">
									<div className="logged-user-avatar-info">
										<div className="avatar-w">
											<img alt="" src="img/avatar1.jpg"/>
										</div>
										<div className="logged-user-info-w">
											<div className="logged-user-name">
												Maria Gomez
											</div>
											<div className="logged-user-role">
												Administrator
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
											<a href="# "><i className="os-icon os-icon-signs-11"></i><span>Logout</span></a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<h1 className="menu-page-header">
							Page Header
						</h1>
						<ul className="main-menu">
							<li className="sub-header">
								<span>Layouts</span>
							</li>
							<li className="selected has-sub-menu">
								<a href="index.html">
									<div className="icon-w">
										<div className="os-icon os-icon-layout"></div>
									</div>
									<span>Dashboard</span></a>
								<div className="sub-menu-w">
									<div className="sub-menu-header">
										Dashboard
									</div>
									<div className="sub-menu-icon">
										<i className="os-icon os-icon-layout"></i>
									</div>
									<div className="sub-menu-i">
										<ul className="sub-menu">
											<li>
												<a href="index.html">Dashboard 1</a>
											</li>
											<li>
												<a href="apps_crypto.html">Crypto Dashboard <strong className="badge badge-danger">Hot</strong></a>
											</li>
											<li>
												<a href="apps_support_dashboard.html">Dashboard 3</a>
											</li>
											<li>
												<a href="apps_projects.html">Dashboard 4</a>
											</li>
											<li>
												<a href="apps_bank.html">Dashboard 5</a>
											</li>
											<li>
												<a href="layouts_menu_top_image.html">Dashboard 6</a>
											</li>
										</ul>
									</div>
								</div>
							</li>
							<li className=" has-sub-menu">
								<a href="layouts_menu_top_image.html">
									<div className="icon-w">
										<div className="os-icon os-icon-layers"></div>
									</div>
									<span>Menu Styles</span></a>
								<div className="sub-menu-w">
									<div className="sub-menu-header">
										Menu Styles
									</div>
									<div className="sub-menu-icon">
										<i className="os-icon os-icon-layers"></i>
									</div>
									<div className="sub-menu-i">
										<ul className="sub-menu">
											<li>
												<a href="layouts_menu_side_full.html">Side Menu Light</a>
											</li>
											<li>
												<a href="layouts_menu_side_full_dark.html">Side Menu Dark</a>
											</li>
											<li>
												<a href="layouts_menu_side_transparent.html">Side Menu Transparent <strong className="badge badge-danger">New</strong></a>
											</li>
											<li>
												<a href="apps_pipeline.html">Side &amp; Top Dark</a>
											</li>
											<li>
												<a href="apps_projects.html">Side &amp; Top</a>
											</li>
											<li>
												<a href="layouts_menu_side_mini.html">Mini Side Menu</a>
											</li>
											</ul><ul className="sub-menu">
											<li>
												<a href="layouts_menu_side_mini_dark.html">Mini Menu Dark</a>
											</li>
											<li>
												<a href="layouts_menu_side_compact.html">Compact Side Menu</a>
											</li>
											<li>
												<a href="layouts_menu_side_compact_dark.html">Compact Menu Dark</a>
											</li>
											<li>
												<a href="layouts_menu_right.html">Right Menu</a>
											</li>
											<li>
												<a href="layouts_menu_top.html">Top Menu Light</a>
											</li>
											<li>
												<a href="layouts_menu_top_dark.html">Top Menu Dark</a>
											</li>
											</ul><ul className="sub-menu">
											<li>
												<a href="layouts_menu_top_image.html">Top Menu Image <strong className="badge badge-danger">New</strong></a>
											</li>
											<li>
												<a href="layouts_menu_sub_style_flyout.html">Sub Menu Flyout</a>
											</li>
											<li>
												<a href="layouts_menu_sub_style_flyout_dark.html">Sub Flyout Dark</a>
											</li>
											<li>
												<a href="layouts_menu_sub_style_flyout_bright.html">Sub Flyout Bright</a>
											</li>
											<li>
												<a href="layouts_menu_side_compact_click.html">Menu Inside Click</a>
											</li>
										</ul>
									</div>
								</div>
							</li>
							<li className="sub-header">
								<span>Options</span>
							</li>
							<li className=" has-sub-menu">
								<a href="apps_bank.html">
									<div className="icon-w">
										<div className="os-icon os-icon-package"></div>
									</div>
									<span>Applications</span></a>
								<div className="sub-menu-w">
									<div className="sub-menu-header">
										Applications
									</div>
									<div className="sub-menu-icon">
										<i className="os-icon os-icon-package"></i>
									</div>
									<div className="sub-menu-i">
										<ul className="sub-menu">
											<li>
												<a href="apps_email.html">Email Application</a>
											</li>
											<li>
												<a href="apps_support_dashboard.html">Support Dashboard</a>
											</li>
											<li>
												<a href="apps_support_index.html">Tickets Index</a>
											</li>
											<li>
												<a href="apps_crypto.html">Crypto Dashboard <strong className="badge badge-danger">New</strong></a>
											</li>
											<li>
												<a href="apps_projects.html">Projects List</a>
											</li>
											<li>
												<a href="apps_bank.html">Banking <strong className="badge badge-danger">New</strong></a>
											</li>
											</ul><ul className="sub-menu">
											<li>
												<a href="apps_full_chat.html">Chat Application</a>
											</li>
											<li>
												<a href="apps_todo.html">To Do Application <strong className="badge badge-danger">New</strong></a>
											</li>
											<li>
												<a href="misc_chat.html">Popup Chat</a>
											</li>
											<li>
												<a href="apps_pipeline.html">CRM Pipeline</a>
											</li>
											<li>
												<a href="rentals_index_grid.html">Property Listing <strong className="badge badge-danger">New</strong></a>
											</li>
											<li>
												<a href="misc_calendar.html">Calendar</a>
											</li>
										</ul>
									</div>
								</div>
							</li>
							<li className=" has-sub-menu">
								<a href="# ">
									<div className="icon-w">
										<div className="os-icon os-icon-file-text"></div>
									</div>
									<span>Pages</span></a>
								<div className="sub-menu-w">
									<div className="sub-menu-header">
										Pages
									</div>
									<div className="sub-menu-icon">
										<i className="os-icon os-icon-file-text"></i>
									</div>
									<div className="sub-menu-i">
										<ul className="sub-menu">
											<li>
												<a href="misc_invoice.html">Invoice</a>
											</li>
											<li>
												<a href="rentals_index_grid.html">Property Listing <strong className="badge badge-danger">New</strong></a>
											</li>
											<li>
												<a href="misc_charts.html">Charts</a>
											</li>
											<li>
												<a href="auth_login.html">Login</a>
											</li>
											<li>
												<a href="auth_register.html">Register</a>
											</li>
											</ul><ul className="sub-menu">
											<li>
												<a href="auth_lock.html">Lock Screen</a>
											</li>
											<li>
												<a href="misc_pricing_plans.html">Pricing Plans</a>
											</li>
											<li>
												<a href="misc_error_404.html">Error 404</a>
											</li>
											<li>
												<a href="misc_error_500.html">Error 500</a>
											</li>
										</ul>
									</div>
								</div>
							</li>
							<li className=" has-sub-menu">
								<a href="# ">
									<div className="icon-w">
										<div className="os-icon os-icon-life-buoy"></div>
									</div>
									<span>UI Kit</span></a>
								<div className="sub-menu-w">
									<div className="sub-menu-header">
										UI Kit
									</div>
									<div className="sub-menu-icon">
										<i className="os-icon os-icon-life-buoy"></i>
									</div>
									<div className="sub-menu-i">
										<ul className="sub-menu">
											<li>
												<a href="uikit_modals.html">Modals <strong className="badge badge-danger">New</strong></a>
											</li>
											<li>
												<a href="uikit_alerts.html">Alerts</a>
											</li>
											<li>
												<a href="uikit_grid.html">Grid</a>
											</li>
											<li>
												<a href="uikit_progress.html">Progress</a>
											</li>
											<li>
												<a href="uikit_popovers.html">Popover</a>
											</li>
											</ul><ul className="sub-menu">
											<li>
												<a href="uikit_tooltips.html">Tooltips</a>
											</li>
											<li>
												<a href="uikit_buttons.html">Buttons</a>
											</li>
											<li>
												<a href="uikit_dropdowns.html">Dropdowns</a>
											</li>
											<li>
												<a href="uikit_typography.html">Typography</a>
											</li>
										</ul>
									</div>
								</div>
							</li>
							<li className="sub-header">
								<span>Elements</span>
							</li>
							<li className=" has-sub-menu">
								<a href="# ">
									<div className="icon-w">
										<div className="os-icon os-icon-mail"></div>
									</div>
									<span>Emails</span></a>
								<div className="sub-menu-w">
									<div className="sub-menu-header">
										Emails
									</div>
									<div className="sub-menu-icon">
										<i className="os-icon os-icon-mail"></i>
									</div>
									<div className="sub-menu-i">
										<ul className="sub-menu">
											<li>
												<a href="emails_welcome.html">Welcome Email</a>
											</li>
											<li>
												<a href="emails_order.html">Order Confirmation</a>
											</li>
											<li>
												<a href="emails_payment_due.html">Payment Due</a>
											</li>
											<li>
												<a href="emails_forgot.html">Forgot Password</a>
											</li>
											<li>
												<a href="emails_activate.html">Activate Account</a>
											</li>
										</ul>
									</div>
								</div>
							</li>
							<li className=" has-sub-menu">
								<a href="# ">
									<div className="icon-w">
										<div className="os-icon os-icon-users"></div>
									</div>
									<span>Users</span></a>
								<div className="sub-menu-w">
									<div className="sub-menu-header">
										Users
									</div>
									<div className="sub-menu-icon">
										<i className="os-icon os-icon-users"></i>
									</div>
									<div className="sub-menu-i">
										<ul className="sub-menu">
											<li>
												<a href="users_profile_big.html">Big Profile</a>
											</li>
											<li>
												<a href="users_profile_small.html">Compact Profile</a>
											</li>
										</ul>
									</div>
								</div>
							</li>
							<li className=" has-sub-menu">
								<a href="# ">
									<div className="icon-w">
										<div className="os-icon os-icon-edit-32"></div>
									</div>
									<span>Forms</span></a>
								<div className="sub-menu-w">
									<div className="sub-menu-header">
										Forms
									</div>
									<div className="sub-menu-icon">
										<i className="os-icon os-icon-edit-32"></i>
									</div>
									<div className="sub-menu-i">
										<ul className="sub-menu">
											<li>
												<a href="forms_regular.html">Regular Forms</a>
											</li>
											<li>
												<a href="forms_validation.html">Form Validation</a>
											</li>
											<li>
												<a href="forms_wizard.html">Form Wizard</a>
											</li>
											<li>
												<a href="forms_uploads.html">File Uploads</a>
											</li>
											<li>
												<a href="forms_wisiwig.html">Wisiwig Editor</a>
											</li>
										</ul>
									</div>
								</div>
							</li>
							<li className=" has-sub-menu">
								<a href="# ">
									<div className="icon-w">
										<div className="os-icon os-icon-grid"></div>
									</div>
									<span>Tables</span></a>
								<div className="sub-menu-w">
									<div className="sub-menu-header">
										Tables
									</div>
									<div className="sub-menu-icon">
										<i className="os-icon os-icon-grid"></i>
									</div>
									<div className="sub-menu-i">
										<ul className="sub-menu">
											<li>
												<a href="tables_regular.html">Regular Tables</a>
											</li>
											<li>
												<a href="tables_datatables.html">Data Tables</a>
											</li>
											<li>
												<a href="tables_editable.html">Editable Tables</a>
											</li>
										</ul>
									</div>
								</div>
							</li>
							<li className=" has-sub-menu">
								<a href="# ">
									<div className="icon-w">
										<div className="os-icon os-icon-zap"></div>
									</div>
									<span>Icons</span></a>
								<div className="sub-menu-w">
									<div className="sub-menu-header">
										Icons
									</div>
									<div className="sub-menu-icon">
										<i className="os-icon os-icon-zap"></i>
									</div>
									<div className="sub-menu-i">
										<ul className="sub-menu">
											<li>
												<a href="icon_fonts_simple_line_icons.html">Simple Line Icons</a>
											</li>
											<li>
												<a href="icon_fonts_feather.html">Feather Icons</a>
											</li>
											<li>
												<a href="icon_fonts_themefy.html">Themefy Icons</a>
											</li>
											<li>
												<a href="icon_fonts_picons_thin.html">Picons Thin</a>
											</li>
											<li>
												<a href="icon_fonts_dripicons.html">Dripicons</a>
											</li>
											<li>
												<a href="icon_fonts_eightyshades.html">Eightyshades</a>
											</li>
											</ul><ul className="sub-menu">
											<li>
												<a href="icon_fonts_entypo.html">Entypo</a>
											</li>
											<li>
												<a href="icon_fonts_font_awesome.html">Font Awesome</a>
											</li>
											<li>
												<a href="icon_fonts_foundation_icon_font.html">Foundation Icon Font</a>
											</li>
											<li>
												<a href="icon_fonts_metrize_icons.html">Metrize Icons</a>
											</li>
											<li>
												<a href="icon_fonts_picons_social.html">Picons Social</a>
											</li>
											<li>
												<a href="icon_fonts_batch_icons.html">Batch Icons</a>
											</li>
											</ul><ul className="sub-menu">
											<li>
												<a href="icon_fonts_dashicons.html">Dashicons</a>
											</li>
											<li>
												<a href="icon_fonts_typicons.html">Typicons</a>
											</li>
											<li>
												<a href="icon_fonts_weather_icons.html">Weather Icons</a>
											</li>
											<li>
												<a href="icon_fonts_light_admin.html">Light Admin</a>
											</li>
										</ul>
									</div>
								</div>
							</li>
						</ul>
						<div className="side-menu-magic">
							<h4>
								Light Admin
							</h4>
							<p>
								Clean Bootstrap 4 Template
							</p>
							<div className="btn-w">
								<a className="btn btn-white btn-rounded" href="https://themeforest.net/item/light-admin-clean-bootstrap-dashboard-html-template/19760124?ref=Osetin" target="_blank" rel="noopener noreferrer">Purchase Now</a>
							</div>
						</div>
					</div>
					{/* <!--------------------
					END - Main Menu
					--------------------> */}

					<div className="content-w">
						
						{/* <!--------------------
						START - Top Bar
						--------------------> */}
						<div className="top-bar color-scheme-dark">
							<div className="fancy-selector-w">
								<div className="fancy-selector-current">
									<div className="fs-img">
										<img alt="" src="img/card4.png"/>
									</div>
									<div className="fs-main-info">
										<div className="fs-name">
											<span>Bitcoin Portfolio</span><strong>BTC</strong>
										</div>
										<div className="fs-sub">
											<span>Balance:</span><strong>$5,304</strong>
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
												<span>Lite Portfolio</span><strong>ETH</strong>
											</div>
											<div className="fs-sub">
												<span>Balance:</span><strong>$5,304</strong>
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
												<span>Balance:</span><strong>$8,274</strong>
											</div>
										</div>
									</div>
									<div className="fancy-selector-option">
										<div className="fs-img">
											<img alt="" src="img/card3.png"/>
										</div>
										<div className="fs-main-info">
											<div className="fs-name">
												<span>Ripple Portfolio</span><strong>RPX</strong>
											</div>
											<div className="fs-sub">
												<span>Balance:</span><strong>$1,202</strong>
											</div>
										</div>
									</div>
									<div className="fancy-selector-actions text-right">
										<a className="btn btn-primary" href="# "><i className="os-icon os-icon-ui-22"></i><span>Add Account</span></a>
									</div>
								</div>
							</div>

							{/* <!--------------------
							START - Top Menu Controls
							--------------------> */}

							<div className="top-menu-controls">
								<div className="element-search autosuggest-search-activator">
									<input placeholder="Start typing to search..." type="text"/>
								</div>

								{/* <!--------------------
								START - Messages Link in secondary top menu
								--------------------> */}

								<div className="messages-notifications os-dropdown-trigger os-dropdown-position-left">
									<i className="os-icon os-icon-mail-14"></i>
									<div className="new-messages-count">
										12
									</div>
									<div className="os-dropdown light message-list">
										<ul>
											<li>
												<a href="# ">
													<div className="user-avatar-w">
														<img alt="" src="img/avatar1.jpg"/>
													</div>
													<div className="message-content">
														<h6 className="message-from">
															John Mayers
														</h6>
														<h6 className="message-title">
															Account Update
														</h6>
													</div>
												</a>
											</li>
											<li>
												<a href="# ">
													<div className="user-avatar-w">
														<img alt="" src="img/avatar2.jpg"/>
													</div>
													<div className="message-content">
														<h6 className="message-from">
															Phil Jones
														</h6>
														<h6 className="message-title">
															Secutiry Updates
														</h6>
													</div>
												</a>
											</li>
											<li>
												<a href="# ">
													<div className="user-avatar-w">
														<img alt="" src="img/avatar3.jpg"/>
													</div>
													<div className="message-content">
														<h6 className="message-from">
															Bekky Simpson
														</h6>
														<h6 className="message-title">
															Vacation Rentals
														</h6>
													</div>
												</a>
											</li>
											<li>
												<a href="# ">
													<div className="user-avatar-w">
														<img alt="" src="img/avatar4.jpg"/>
													</div>
													<div className="message-content">
														<h6 className="message-from">
															Alice Priskon
														</h6>
														<h6 className="message-title">
															Payment Confirmation
														</h6>
													</div>
												</a>
											</li>
										</ul>
									</div>
								</div>
								{/* <!--------------------
								END - Messages Link in secondary top menu
								--------------------> */}
								
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
											<img alt="" src="img/avatar1.jpg"/>
										</div>
										<div className="logged-user-menu color-style-bright">
											<div className="logged-user-avatar-info">
												<div className="avatar-w">
													<img alt="" src="img/avatar1.jpg"/>
												</div>
												<div className="logged-user-info-w">
													<div className="logged-user-name">
														Maria Gomez
													</div>
													<div className="logged-user-role">
														Administrator
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
													<a href="# "><i className="os-icon os-icon-signs-11"></i><span>Logout</span></a>
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
								<div className="os-tabs-w">
									<div className="os-tabs-controls os-tabs-complex">
										<ul className="nav nav-tabs">
											<li className="nav-item">
												<a aria-expanded="false" className="nav-link active" data-toggle="tab" href="#tab_overview">
													<span className="tab-label">Debt Overview</span>
												</a>
											</li>
											<li className="nav-item">
												<a aria-expanded="false" className="nav-link" data-toggle="tab" href="#tab_sales">
													<span className="tab-label">Cashier Debt</span>
													<span className="tab-value">₦7,839.23</span>
												</a>
											</li>
											<li className="nav-item">
												<a aria-expanded="false" className="nav-link" data-toggle="tab" href="#tab_sales">
													<span className="tab-label">Bonuses</span>
												</a>
											</li>
										</ul>
									</div>
								</div>

								{/* <!--------------------
								React Router Base
								-------------------->*/}
								<Switch>
									<Route exact path="/" component={Dashboard} />
								</Switch>



							</div>

							{/* <!--------------------
							START - Sidebar
							--------------------> */}
							<div className="content-panel compact color-scheme-dark">
								<div className="content-panel-close">
									<i className="os-icon os-icon-close"></i>
								</div>
								<div className="element-wrapper">
									<div className="element-actions actions-only">
										<a className="element-action element-action-fold" href="# "><i className="os-icon os-icon-minus-circle"></i></a>
									</div>
									<h6 className="element-header">
										Quick Conversion
									</h6>
									<div className="element-box-tp">
										<form action="">
											<div className="row">
												<div className="col-6">
													<div className="form-group">
														<label for="">From</label>
														<select className="form-control">
															<option>
																Bitcoins
															</option>
															<option>
																Litecoins
															</option>
															<option>
																Ripple
															</option>
															<option>
																Dogecoin
															</option>
														</select>
													</div>
												</div>
												<div className="col-6">
													<div className="form-group">
														<label for="">To</label><select className="form-control">
															<option>
																USD
															</option>
															<option>
																Litecoins
															</option>
															<option>
																Ripple
															</option>
															<option>
																Dogecoin
															</option>
														</select>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-6">
													<div className="form-group">
														<label for="">Amount</label>
														<div className="input-group">
															<input className="form-control" placeholder="Amount..." type="text" value="1.37"/>
															<div className="input-group-append">
																<div className="input-group-text">
																	BTC
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-6">
													<div className="form-group">
														<label for="">Price per BTC</label>
														<div className="input-group">
															<input className="form-control" type="text" value="8,284"/>
															<div className="input-group-append">
																<div className="input-group-text">
																	USD
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<button className="btn btn-primary btn-block btn-lg"><i className="os-icon os-icon-refresh-ccw"></i><span>Transfer Now</span></button>
										</form>
									</div>
								</div>
								<div className="element-wrapper compact">
									<div className="element-actions actions-only">
										<a className="element-action element-action-fold" href="# "><i className="os-icon os-icon-minus-circle"></i></a>
									</div>
									<h6 className="element-header">
										Order History
									</h6>
									<div className="element-box-tp">
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
								<div className="element-wrapper compact">
									<div className="element-actions actions-only">
										<a className="element-action element-action-fold" href="# "><i className="os-icon os-icon-minus-circle"></i></a>
									</div>
									<h6 className="element-header">
										Profile Completion
									</h6>
									<div className="element-box-tp">
										<div className="fancy-progress-with-label">
											<div className="fpl-label">
												65%
											</div>
											<div className="fpl-progress-w">
												<div className="fpl-progress-i" style={{ width: '65%' }}></div>
											</div>
										</div>
										<div className="todo-list">
											<a className="todo-item complete" href="# ">
												<div className="ti-info">
													<div className="ti-header">
														Connect Bank Account
													</div>
													<div className="ti-sub-header">
														You have connected 2 accounts
													</div>
												</div>
												<div className="ti-icon">
													<i className="os-icon os-icon-check"></i>
												</div>
											</a><a className="todo-item complete" href="# ">
												<div className="ti-info">
													<div className="ti-header">
														Upload Tax Documents
													</div>
													<div className="ti-sub-header">
														You uploaded W-2 and 1099
													</div>
												</div>
												<div className="ti-icon">
													<i className="os-icon os-icon-check"></i>
												</div>
											</a><a className="todo-item" href="# ">
												<div className="ti-info">
													<div className="ti-header">
														Deposit Money
													</div>
													<div className="ti-sub-header">
														You can deposit from your bank
													</div>
												</div>
												<div className="ti-icon">
													<i className="os-icon os-icon-arrow-right7"></i>
												</div>
											</a>
										</div>
									</div>
								</div>
								<div className="d-xxl-none">
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
							{/* <!--------------------
							END - Sidebar
							--------------------> */}
						</div>
					</div>
				</div>
				<div className="display-type"></div>
			</div>
		)
	}
}

export default App
