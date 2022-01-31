import React from "react"
import { Component } from "react"

// This is the same component as a function component
// const Car = (props) =>(
//   <h2>I have a {props.carName} and it was {props.cost}</h2>
// )

// this is the way to write a class component
class Car extends Component {
  render() {
    return <h2> Im driving a {this.props.carName}and its was {this.props.cost}</h2>
  }
}

export default Car
