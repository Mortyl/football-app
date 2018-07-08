import React from "react";


// shows a list of players
const Players = ({ players, onDelete }) => (
    <React.Fragment>
        { /* check there are players to show */ }
        { players.length ?
            <div className="container">
            <ul className="list-group">
                { /* map over each player object and display a list item for each one */ }
                { players.map((player,i) => (
                    <li className="list-group-item" key={i} >
                    {player.name} with a skill of {player.rating}.
                    <div className="btn-group btn-group-sm float-right" role="group" aria-label="Basic example">
                        <button onClick={onDelete} className="btn btn-dark "> remove </button>
                    </div>
                    </li>
                ))}
            </ul>
            </div>
            :
            <p>No players found</p>
        }
    </React.Fragment>
);

export default Players;