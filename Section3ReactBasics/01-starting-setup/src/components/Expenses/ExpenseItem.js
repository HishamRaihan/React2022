// a component in react is a Javascript function
import React from "react"
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from "../UI/Card"
// props objetcs recievs the key value pairs

const ExpenseItem = (props) => {
  return (
    // easiest work around is wrapping into another div because we can only have one main element and it can have multiple elements inside
    // toLocaleString() helps format date to
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>$ {props.amount}</div>
      </div>
    </Card>
  )
  // <input type={'text'} className="inputPlace" placeholder="type"></input> 
}

export default ExpenseItem