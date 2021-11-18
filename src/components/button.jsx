import React from "react";
import "./button.css";

//Determ if isnt a number and "." "=" sign to evaluate diffrent style
const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
};

const Button = props => (
    <div className={`button-wrapper ${isOperator(props.children) ? null : "operator"}`} onClick={() => props.handleClick(props.children)}>
        {props.children}
    </div>
);

export default Button;