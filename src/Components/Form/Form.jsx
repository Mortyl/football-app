import React, {Component} from "react";
import Input from "./Input";

export default class Form extends Component { 
	// Add a class constructor that assigns the initial this.state:
	constructor(props) {
		super(props);

		this.state = {
			fields: props.fields.slice(),
		}

		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(e, i) {
	    const fields = this.state.fields.slice();
	    fields[i].value = e.target.value;
	    this.setState({ fields: fields });
    }

	//create handleSubmit method for when data is submitted to dispatch an action
	handleSubmit(e) {
		e.preventDefault();

		const data = this.state.fields.reduce((data, {name, value}) => {
			data[name] = value;
			return data;
		}, {});

		this.props.onSubmit(data);

		//clear fields 
		this.setState({
            fields: this.state.fields.map(field => {
                return {
                    ...field,
                    value: "",
                };
            }),
        });
	}

    isDisabled() {
        return !this.state.fields.every(({ value }) => value);
    }

	//create handleChange method with an event argument which changes the state when text is written into input form

 
	//render method to render the component to screen through JSX and babel translation
		render() {
		const {button, create, reset} = this.props;

		return(
			<div  style={styles.item} className="container">
				<form onSubmit={this.handleSubmit} className="form-group">
					<div className="container">
						<div className="row">
						
						{this.state.fields.map(({name, value, style, placeholder, type}, i ) => (
							
							<Input 
								style= {style}
								type={type}
								placeholder={placeholder}
								key = { i }
								value={ value }
								name = { name }
								onChange={ e => this.handleChange(e, i)}
							/>
							
						))}

							<button disabled={this.isDisabled()} className="btn btn-dark col-4"> {button} </button>
						</div>
					</div>
				</form>
				<div className="container d-flex justify-content-around">
					<button onClick={create} className="btn btn-dark "> Create Teams </button>
					<button onClick={reset} className="btn btn-dark "> Reset </button>
				</div>
			</div>
		);
	}

}

//basic styling for form component

const styles = {
	item: {
	    backgroundColor: "olivedrab",
	    border: "solid"
	},
	player: {
		border:"solid",
		borderColor: "green"
	}

}






