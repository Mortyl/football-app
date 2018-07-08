import { connect } from "react-redux";

import Players from "../Components/Players";

import {removePlayer} from "../Data/actions"

// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component
const mapStateToProps = (state, {id}) => {
	return{
    // convert the players object into an array
    	players: Object.values(state.players),
	};
};

const mapDispatchToProps = (dispatch, { id }) => {
	return {
		onDelete: () => {
			dispatch(removePlayer(id));
		}
	}
}

// connect up mapStateToProps with the Players component
// Players.jsx props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Players);