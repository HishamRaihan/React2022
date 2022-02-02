import React from "react";
import classes from './Card.module.css'

const Card = (props) =>{
  return(
// merging external class with our internally defined class
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    // card should output 
    // props.children will give us the content that is passed through the opening and closing tags of the card component
  )
}

export default Card