import React from 'react'

 function CustomizeMenu() {
    return (
        <React.Fragment>
            <div className="customizing_menu" id="customizing_menu">
			<div className="head">
				<p>CHANGE STYLE</p>
				<img src="Assets/images/close_menu.png" id="close_customizing_menu" alt="close-customizing-menu"></img>
			</div>
			<ul className="styles">
				<li>
					<p>BUTON SHAPE</p>
					<div className="variants">
						<div className="shape active"></div>
						<div className="shape rounded"></div>
						<div className="shape full-rounded"></div>
					</div>
				</li>
				<li>
					<p>BUTON COLOR</p>
					<div className="variants">
						<div className="color red active"></div>
						<div className="color blue"></div>
						<div className="color orange"></div>
						<div className="color green"></div>
					</div>
				</li>
				<li>
					<p>DARK / LIGHT</p>
					<div className="variants">
						<div className="theme dark active"></div>
						<div className="theme light"></div>
					</div>
				</li>
				<li>
					<p>PARTICLE</p>
					<div className="variants">
						<div className="animation"></div>
					</div>
				</li>
			</ul>
		</div>
		<div className="customizing_button" id="customizing_button"></div>
        </React.Fragment>
    )
}
export {CustomizeMenu}
