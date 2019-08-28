{/* <!--------------------
				START - Color Scheme Toggler
				--------------------> */}
				<div className="floated-colors-btn second-floated-btn">
					<div className="os-toggler-w">
						<div className="os-toggler-i">
							<div className="os-toggler-pill"></div>
						</div>
					</div>
					<span>Dark </span><span>Colors</span>
				</div>
				{/* <!--------------------
				END - Color Scheme Toggler
				--------------------> */}
				
				{/* <!--------------------
				START - Demo Customizer
				--------------------> */}
				<div className="floated-customizer-btn third-floated-btn">
					<div className="icon-w">
						<i className="os-icon os-icon-ui-46"></i>
					</div>
					<span>Customizer</span>
				</div>
				<div className="floated-customizer-panel">
					<div className="fcp-content">
						<div className="close-customizer-btn">
							<i className="os-icon os-icon-x"></i>
						</div>
						<div className="fcp-group">
							<div className="fcp-group-header">
								Menu Settings
							</div>
							<div className="fcp-group-contents">
								<div className="fcp-field">
									<label for="">Menu Position</label><select className="menu-position-selector">
										<option value="left">
											Left
										</option>
										<option value="right">
											Right
										</option>
										<option value="top">
											Top
										</option>
									</select>
								</div>
								<div className="fcp-field">
									<label for="">Menu Style</label><select className="menu-layout-selector">
										<option value="compact">
											Compact
										</option>
										<option value="full">
											Full
										</option>
										<option value="mini">
											Mini
										</option>
									</select>
								</div>
								<div className="fcp-field with-image-selector-w">
									<label for="">With Image</label><select className="with-image-selector">
										<option value="yes">
											Yes
										</option>
										<option value="no">
											No
										</option>
									</select>
								</div>
								<div className="fcp-field">
									<label for="">Menu Color</label>
									<div className="fcp-colors menu-color-selector">
										<div className="color-selector menu-color-selector color-bright selected"></div>
										<div className="color-selector menu-color-selector color-dark"></div>
										<div className="color-selector menu-color-selector color-light"></div>
										<div className="color-selector menu-color-selector color-transparent"></div>
									</div>
								</div>
							</div>
						</div>
						<div className="fcp-group">
							<div className="fcp-group-header">
								Sub Menu
							</div>
							<div className="fcp-group-contents">
								<div className="fcp-field">
									<label for="">Sub Menu Style</label><select className="sub-menu-style-selector">
										<option value="flyout">
											Flyout
										</option>
										<option value="inside">
											Inside/Click
										</option>
										<option value="over">
											Over
										</option>
									</select>
								</div>
								<div className="fcp-field">
									<label for="">Sub Menu Color</label>
									<div className="fcp-colors">
										<div className="color-selector sub-menu-color-selector color-bright selected"></div>
										<div className="color-selector sub-menu-color-selector color-dark"></div>
										<div className="color-selector sub-menu-color-selector color-light"></div>
									</div>
								</div>
							</div>
						</div>
						<div className="fcp-group">
							<div className="fcp-group-header">
								Other Settings
							</div>
							<div className="fcp-group-contents">
								<div className="fcp-field">
									<label for="">Full Screen?</label><select className="full-screen-selector">
										<option value="yes">
											Yes
										</option>
										<option value="no">
											No
										</option>
									</select>
								</div>
								<div className="fcp-field">
									<label for="">Show Top Bar</label><select className="top-bar-visibility-selector">
										<option value="yes">
											Yes
										</option>
										<option value="no">
											No
										</option>
									</select>
								</div>
								<div className="fcp-field">
									<label for="">Above Menu?</label><select className="top-bar-above-menu-selector">
										<option value="yes">
											Yes
										</option>
										<option value="no">
											No
										</option>
									</select>
								</div>
								<div className="fcp-field">
									<label for="">Top Bar Color</label>
									<div className="fcp-colors">
										<div className="color-selector top-bar-color-selector color-bright selected"></div>
										<div className="color-selector top-bar-color-selector color-dark"></div>
										<div className="color-selector top-bar-color-selector color-light"></div>
										<div className="color-selector top-bar-color-selector color-transparent"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!--------------------
				END - Demo Customizer
				--------------------> */}
				
				{/* <!--------------------
				START - Chat Popup Box
				--------------------> */}
				<div className="floated-chat-btn">
					<i className="os-icon os-icon-mail-07"></i><span>Demo Chat</span>
				</div>
				<div className="floated-chat-w">
					<div className="floated-chat-i">
						<div className="chat-close">
							<i className="os-icon os-icon-close"></i>
						</div>
						<div className="chat-head">
							<div className="user-w with-status status-green">
								<div className="user-avatar-w">
									<div className="user-avatar">
										<img alt="" src="img/avatar1.jpg"/>
									</div>
								</div>
								<div className="user-name">
									<h6 className="user-title">
										John Mayers
									</h6>
									<div className="user-role">
										Account Manager
									</div>
								</div>
							</div>
						</div>
						<div className="chat-messages">
							<div className="message">
								<div className="message-content">
									Hi, how can I help you?
								</div>
							</div>
							<div className="date-break">
								Mon 10:20am
							</div>
							<div className="message">
								<div className="message-content">
									Hi, my name is Mike, I will be happy to assist you
								</div>
							</div>
							<div className="message self">
								<div className="message-content">
									Hi, I tried ordering this product and it keeps showing me error code.
								</div>
							</div>
						</div>
						<div className="chat-controls">
							<input className="message-input" placeholder="Type your message here..." type="text"/>
							<div className="chat-extra">
								<a href="# "><span className="extra-tooltip">Attach Document</span><i className="os-icon os-icon-documents-07"></i></a><a href="# "><span className="extra-tooltip">Insert Photo</span><i className="os-icon os-icon-others-29"></i></a><a href="# "><span className="extra-tooltip">Upload Video</span><i className="os-icon os-icon-ui-51"></i></a>
							</div>
						</div>
					</div>
				</div>
				{/* <!--------------------
				END - Chat Popup Box
				--------------------> */}