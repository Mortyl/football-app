import React, {Component} from 'react'


// export default class Form extends Component { 
// 	// Add a class constructor that assigns the initial this.state:
// 	constructor(props){
// 	super(props)
// 	this.state = {
// 		firstArray: [],
// 		secondArray: [],
// 		value: '',
// 	}

// 	//bind function to the component instance
	
// 	this.handleClick = this.handleClick.bind(this)
// 	this.handleChange = this.handleChange.bind(this)
// 	}

// 	//create handleClick method for when button is clicked to dispatch an action
// 	handleClick(e){
// 	let firstArray = this.state.firstArray
// 	let secondArray = this.state.secondArray

// //splits the player list into two different 5 person columns
// 		if (firstArray.length < 5) {
// 			this.setState({
// 				firstArray: firstArray.concat(this.state.value)
// 			});
// 		} else {
// 			this.setState({
// 				secondArray: secondArray.concat(this.state.value)
// 			});
// 		}

// 		//resets the the value in state to '' so that the entered name gets removed after pressing the submit button
// 		this.setState({
// 			value: ''
// 		})

// 		//prevents the page from refreshing on submit of name
// 			e.preventDefault();
// 		}

// 	handleChange(event){
// 		this.setState({
// 			value: event.target.value
// 		})
// 	}

// 	//create handleChange method with an event argument which changes the state when text is written into input form

 
// 	//render method to render the component to screen through JSX and babel translation
// 	//assigning two variables with the value of a map array iterator function which maps over the array in state.array value and creates a <p> element for each item
// 	render() {
// 		let firstCol = this.state.firstArray.map((d, index) => <li style={styles.player} key={index}>{d}</li>);
// 		let secondCol = this.state.secondArray.map((d, index) => <li style={styles.player} key={index}>{d}</li>);
// 		let firstArray = this.state.firstArray;
// 		let secondArray = this.state.secondArray;

// 		return(
// 		<div  style={styles.item} className=".container-fluid">
// 			<form className="form-group">
// 				<div className="row">
// 				<h4 className="col-3"> Player Name: </h4>
// 					<input className="col-6" onChange= {this.handleChange} value={this.state.value} />
// 					{/* disabled the add player button if either there is no value in the input box 
// 					OR greater than / equal to 10 players current in the arrays*/}
// 					<button disabled={!this.state.value || (firstArray.length + secondArray.length >= 10)} type="button" className="btn btn-dark col-3" onClick={this.handleClick}> Add Player </button>
// 				</div>
// 				<div className="row">
// 					<div className="col" >
// 						<p>
// 							{firstCol}
// 						</p>
// 					</div>
// 					<div className="col">
// 						<p>
// 							{secondCol}
// 						</p>
// 					</div>
// 				</div> 
// 				<div className="container d-flex justify-content-around">
// 					<button className="btn btn-dark "> Create Teams </button>
// 					<button className="btn btn-dark "> Reset </button>
// 				</div>
					
				
// 			</form>
// 		</div>
// 		)
// 	}

// }

// const styles = {
// 	item: {
// 	    backgroundColor: "olivedrab",
// 	    border: "solid"
// 	},
// 	player: {
// 		border:"solid",
// 		borderColor: "green"
// 	}

// }

// shows a list of articles
const Players = ({ players }) => (
    <React.Fragment>
        { /* check there are articles to show */ }
        { players.length ?
            <ul className="list-group">
                { /* map over each article and display a list item for each one */ }
                { players.map(player => (
                    <li className="list-group-item" key={ players.id }>
                    {player.name}
    

 
                    </li>
                ))}
            </ul>
            :
            <p>No articles found</p>
        }
    </React.Fragment>
);

export default Players;






