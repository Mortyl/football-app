import React from 'react'

//functionable component used to render because state is not needed
const Header = () => {
	return(
	<div className="container">
		<div className="row">
			<h1>5-a-side Football team creator!</h1>
			<img src={require("../Images/pitch.jpg")} className="img-thumbnail" alt="football pitch" />
		</div>
	</div>
		)
}




export default Header