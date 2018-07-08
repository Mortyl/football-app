export const addPlayer = ({ name, rating }) => {
	console.log(name)
    return {
        type: "addPlayer",
        name: name, 
        rating: rating
    };
};

export const removePlayer = id => {
	return {
		type: "removePlayer",
		id: id
	}
}

export const resetPlayers = ({name, rating}) => {
	return {
		type: "resetPlayers",
		name: name,
		rating: rating
	}
}

export const createTeams = ({name, rating}) => {
	return {
		type: "createTeams",
		name: name,
		rating: rating
	}
}