// a component in react is a Javascript function
import React from "react"
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from "../UI/Card"
// props objetcs recievs the key value pairs

const ExpenseItem = (props) => {
  // // wants a default state and updated function that udpates the value
  // // this tells react that we want to update or change -> component should be re-evaluated
  // const [title, setTitle] = useState(props.title)
  // //  array destructuring 1st current state value and 2nd value is a function for updating that value
  // console.log('Expense Item is evaluated by React');
  // // this will be called when ever the expenseItem function is executed in this case we are using it 4 times so we will see 4 logs
  // // STATE is seperated on a per component bases

  // const clickHandler = () => {
  //   // calling the function is managed by react when we call it then the component function will be executed again and it updates the title when the state changes
  //   setTitle('Updated'); // setting a new value to the title
  //   console.log(title); // the original state 'title' is being changed and logged
  // }
  return (
    // easiest work around is wrapping into another div because we can only have one main element and it can have multiple elements inside
    // toLocaleString() helps format date to
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>$ {props.amount}</div>
        </div>
        {/* adds an event listener to the butotn */}
        {/* when button is clicked we want to change the title */}
      </Card>
    </li>
  )
  // <input type={'text'} className="inputPlace" placeholder="type"></input> 
}

export default ExpenseItem