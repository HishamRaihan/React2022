import React from "react";
import classes from './Card.module.css'

const Card = (props) =>{
  return(
// merging external class with our internally defined class
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  )
}

export default Card