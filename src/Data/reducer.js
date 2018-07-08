let lastID = 5;

const createPlayer = ({ name, rating }) => {
    lastID += 1;
    return {
        id: lastID,
        name: name,
        rating: rating
    };
};

const addPlayer = (state, action) => {
    let newPlayer = createPlayer(action);

    return {
        ...state,
        players: {
            ...state.players,
            [newPlayer.id]: newPlayer,
        },
    };
};

const removePlayer = (state, { id }) => {
    console.log(id)
    let {...updated } = state.players;
    delete updated[id];

    return {
        ...state,
        players: updated,
    };
};

const resetPlayers = (state, action) => {
    return { 
        ...state,
        players: [],
    }; 
};

const createTeams = (state, action) => {
    return state
};

const reducer = (state, action) => {
    switch (action.type) {
    	case "addPlayer": return addPlayer(state, action);
        case "removePlayer": return removePlayer(state, action);
        case "resetPlayers": return resetPlayers(state, action);
        case "createTeams": return createTeams(state, action);
        default: return state;
    }
};

export default reducer