import React, {Component} from 'react'


export default class Form extends Component { 
	// Add a class constructor that assigns the initial this.state:
	constructor(props){
	super(props)
	this.state = {
		value: ''
	}
}
 
//render method to render the component to screen through JSX and babel translation
	render() {
		return(
		<div className="container">
			<form className="form-group">
				<input type="text"/>
				<button className="btn btn-primary" type="button"> Submit </button>	
			</form>
		</div>
		)
	}
}