import React from "react";
import classes from './Button.module.css';
const Button = (props) => {
    return (
        <button className={`${classes.button} ${props.className}`} onClick={props.onClick} onClose={props.onClose} disabled={props.disabled}>{props.children}</button>
    )
};  

export default Button;