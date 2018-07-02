import React, {Component} from 'react'


export default class Form extends Component { 
	// Add a class constructor that assigns the initial this.state:
	constructor(props){
	super(props)
	this.state = {
		array: [],
		value: ''
	}

	//bind function to the component instance
	
	this.handleClick = this.handleClick.bind(this)
	this.handleChange = this.handleChange.bind(this)
	}

	//create handleClick method for when button is clicked to dispatch an action
	handleClick(e){
		this.setState({
			array: this.state.array.concat(this.state.value),
			value: ''
		})
		e.preventDefault();
	}

	handleChange(event){
		this.setState({
			value: event.target.value
		})
	}

	//create handleChange method with an event argument which changes the state when text is written into input form

 
	//render method to render the component to screen through JSX and babel translation
	render() {
		const playerNames = this.state.array.map((d, index) => <li key={index}>{d}</li>);
		return(
		<div className="container">
			<form className="form-group">
				<label> Player Name: </label>
					<input onChange= {this.handleChange} value={this.state.value} />
					<ol>{playerNames}</ol>
					<button type="button" className="btn btn-primary" onClick={this.handleClick}> Assign player </button>
			</form>
		</div>
		)
	}
}



