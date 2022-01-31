import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  //   // when we go with this approach then all three states need to be updated at once and not just one
  // const [userInput, setUserInput] = useState({
  //   enteredTitle :'',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })
  // const titleChangeHandler = (event) =>{
  //   event.preventDefault()
  //   // depending on previous state to cpoy in the existing values then override a value with a new one
  //   // when ever you update state when depending on the previous state we need to use an alternate form of that funciton
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredTitle: event.target.value }
  //   })

  // }
  // const amountChangeHandler =(event)=>{
  //   event.preventDefault()
  // //  this allows for it to always be on the updated state
  //     setUserInput((prevState) =>{
  // return {...prevState, enteredAmount: event.target.value}
  //     })

  // }
  // const dateChangeHandler =(event)=>{
  //   event.preventDefault()

  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredDate: event.target.value }
  //   })

  // }
  const titleChangeHandler = (event) => {
    // event.target.value -> we get the current value that we are inputing
    setEnteredTitle(event.target.value);
    // storing it into the setEnteredTitle variable
  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
    console.log(event);

  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }

  // function that will have all the enteredData and passed to the form for update
  const submitHandler = (event) => {
    event.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // two way binding adding value to the input element
    // feed the state back to the input so that when change the state we also change the input
    // allows to gather user input then change it
    props.onSaveExpenseData(expenseData)
    // this will clear the values we have in the form after submitting
    // tied to values on each input
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }
  const cancelButton = props.onCancel

  return <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="text" min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min='1989-01-01' max='2024-12-31' value={enteredDate} onChange={dateChangeHandler} />
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelButton}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </div >
  </form>
}

export default ExpenseForm