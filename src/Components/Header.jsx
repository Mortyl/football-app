import React from 'react'

//functionable component used to render because state is not needed
const Header = () => {
	return(
	<React.Fragment>
	<div className="container ">
		<div className="d-flex justify-content-center">
			<h2>5-a-side Football team creator!</h2>
		</div>
	</div>
	<div className="container">
		<div className="d-flex justify-content-center">
			<img style={styles.image} src={require("../Images/pitch.png")}  alt="football pitch" />
		</div>
	</div>
	</React.Fragment>
		)
}

//basic styling for header component

const styles = {
	image: {
	    width: 700,
	    height: 500,
	    alignContent: "center",
	    border: "solid",
	},
}


export default Header