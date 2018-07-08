import { connect } from "react-redux";
import Action from "../Components/Action";
import { addPlayer, resetPlayers, createTeams } from "../Data/actions";


const mapDispatchToProps = dispatch => {
    return {
        // onSubmit is a function which dispatches an action "addPlayer"
        onSubmit: data => {
            dispatch(addPlayer(data));
        },

        // createTeams is a function which dispatches an action "createTeams"
        createTeams: (data) => {
        	dispatch(createTeams(data));
        },

        // resetPlayers is a function which dispatches an action "resetPlayers"
        resetPlayers: (data) => {
            dispatch(resetPlayers(data));
        },

    };

};


// connect up mapDispatchToProps with the Action component
// has to be the second argument - the first is for mapStateToProps
// Action props are now controlled by this file
export default connect(null, mapDispatchToProps)(Action);