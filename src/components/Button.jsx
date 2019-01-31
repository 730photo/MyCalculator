import React from 'react';
import './Button.css'; 

//tells us that it is an operator
const isOperator = val => {
    return !isNaN(val) || val === "." || val === "="
}

export const Button = props => 
    <div className={`button-wrapper ${
        isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}
    >
        {/* pass the opening tag and the closing tag of out button component and whatever is in the middle will be passed in here */}
        {props.children}
    </div>


