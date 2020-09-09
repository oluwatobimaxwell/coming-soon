import React from 'react'

  function Content() {
    return (
        <React.Fragment>
            <div className="wrapper" id="content">
			<div className="content">
				<svg className="logo">
				  <use href="Assets/images/logo.svg#logo"></use>
				</svg>
				<h1 className="title">UNDER CONSTRUCTION</h1>
				<p className="description">Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
				<button className="red space button" id="modalButon">CONTACT</button>
			</div>
			
		</div>
        </React.Fragment>
    )
}
export {Content}