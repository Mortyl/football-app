import React from "react";

// a simple Input component only allowing a 1-10 skill entry and passing down multiple props from the form component
export default ({ name, className, value, onChange, style, placeholder, type }) => (
		<div className={style}>
        <input min="1" max="10" type={ type } placeholder={ placeholder } id={ name } onChange={ onChange } value={ value } className="form-control" />
        </div>
);

