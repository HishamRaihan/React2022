import React from "react";
import classes from './Button.module.css'



const Button = props => {
  return (
    <button
      // button classes styling
      className={classes.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {/* content between tags */}
      {props.children}
    </button>
  )
}

export default Button