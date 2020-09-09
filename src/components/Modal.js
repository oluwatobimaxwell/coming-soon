import React, {Component} from 'react'
import {Inputdiv} from './Input'

class Modal extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			email:"",
			name:"",
			message:""
	   }
	}
	changedhandler=(event)=>{
        /* the name of the input has to be the same name in state */
        this.setState({
            [event.target.name] : event.target.value
        })
	}
	submitform(event){
        event.preventDefault()
    }
	
	render() {
		
		return (
			<React.Fragment>
            <div className="modal" id="modal" data-mcs-theme="minimal-dark">
			<div className="modal-close" id="closeModalButton">
				<svg className="closeIcon">
				  	<use href="Assets/images/close.svg#closeIcon"></use>
				</svg>
			</div>
			<div className="modal-content row" >
				<div className="info six-sm four-md columns">
					<h2 className="title">INFO</h2>
					<p className="sub-title">SIMTO INC.</p>
					<p className="content">Mauris blandit aliquet elit,
						eget tincidunt nibh pulvinar</p>
					<a href="tel:+380967003467" className="content">+380 96 700 3467</a>
					<a href="mailto:octrace@gmail.com" className="content" >octrace@gmail.com</a>

				</div>
				<div className="form six-sm four-md columns">
					<h2 className="title">CONTACT</h2>
					<form name="form" action="#" noValidate>
					<Inputdiv>
						<input type="text" name="name" id="name" placeholder="NAME" onChange={this.changedhandler} value={this.state.name}></input>
					</Inputdiv>
					<Inputdiv>
						<input type="email" name="email" id="email" placeholder="E-MAIL" onChange={this.changedhandler} value={this.state.email}></input>
					</Inputdiv>
					<Inputdiv >
						<textarea name="message" id="message" placeholder="MESSAGE" onChange={this.changedhandler} value={this.state.message}></textarea>
					</Inputdiv>
					<Inputdiv >
						<button type="submit" onClick={this.submitform}>SEND</button>
					</Inputdiv>
					</form>
					<p className="form-success-description">Your mail has been sent. Thanks for your message.</p>
				</div>
				
			</div>
		</div>
            
        </React.Fragment>
		)
	}
}

export {Modal}
