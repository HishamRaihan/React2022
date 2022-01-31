import React from "react"
import './Card.css'

function Card(props){
  const classes = 'card ' + props.className
  // any value added to classname prop is added to the div thats on the card
return <div className={classes}>{props.children}</div>
}

export default Card