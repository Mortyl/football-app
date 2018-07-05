import { connect } from "react-redux";

import Form from "../Components/Form";

// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component
const mapStateToProps = state => ({
	
    // convert the articles object into an array
    players: Object.values(state.players),
});

// connect up mapStateToProps with the Form component
// Form.jsx props are now controlled by this file
export default connect(mapStateToProps)(Form);