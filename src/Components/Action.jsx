import React from "react";

import Form from "./Form/Form";

// the fields the form should have, allows us to easily add more fields
const fields = [
    { name: "name", value: "", placeholder:"Name", style:"col-6", type:"text"},
    {name: "rating", value: "", placeholder:"Skill", style:"col-2", type:"number"}
];

// the action component
const Action = ({ onSubmit, createTeams, resetPlayers }) => (
    <React.Fragment>
    <div className ="container">
        <h2>Add Player</h2>

        <Form className="panel-body" create={createTeams} reset={resetPlayers} onSubmit={ onSubmit } fields={ fields } button="Confirm" />
    </div>
    </React.Fragment>
);

export default Action;
