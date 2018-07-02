import React, {Component} from 'react'
import Output from "./Output"


export default class Form extends Component { 
	// Add a class constructor that assigns the initial this.state:
	constructor(props){
	super(props)
	this.state = {
		firstArray: [],
		secondArray: [],
		value: '',
	}

	//bind function to the component instance
	
	this.handleClick = this.handleClick.bind(this)
	this.handleChange = this.handleChange.bind(this)
	}

	//create handleClick method for when button is clicked to dispatch an action
	handleClick(e){
	let firstArray = this.state.firstArray
	let secondArray = this.state.secondArray

//splits the player list into two different 5 person columns
		if (firstArray.length < 5) {
			this.setState({
				firstArray: firstArray.concat(this.state.value)
				});
		} else {
			this.setState({
				secondArray: secondArray.concat(this.state.value)
				});

		}

			this.setState({
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
	{/* assigning two variables with the value of a map array iterator function which maps over the array in state.array value and creates a <p> element for each item */}
		const firstCol = this.state.firstArray.map((d, index) => <li style={styles.item} key={index}>{d}</li>);
		const secondCol = this.state.secondArray.map((d, index) => <li style={styles.item} key={index}>{d}</li>);
		return(
		<div className="container">
			<form className="form-group">
				<div className="row">
				<h3 className="col-3"> Player Name: </h3>
					<input className="col-6" onChange= {this.handleChange} value={this.state.value} />
					<button className="col-3" type="button" className="btn btn-primary" onClick={this.handleClick}> Create player </button>
				</div>
				<div className="row">
					<div className="col" >
					<h2> Team 1 </h2>
						<ol>
							{firstCol}
						</ol>
					</div>
					<div className="col">
					<h2> Team 2 </h2>
						<ol>
							{secondCol}
						</ol>
					</div>
				</div> 

			<button> Create Teams </button>
					
				
			</form>
		</div>
		)
	}

}

const styles = {
  item: {
    color: "Black",
    border: "solid"
  },
}





