import React from "react"
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

const NewExpense = (props) => {

const saveExpenseDataHandler = (enteredExpenseData) =>{
  const expenseData ={
    // this is pulling out all the key value pairs from expenseData in expenseForm
    ...enteredExpenseData, 
    id: Math.random().toString()
  };
  // console.log(expenseData);
  // passing expenseData to onAddExpense that is linked inside the App component
  props.onAddExpense(expenseData)
}

  return (
  <div className="new-expense">
    {/* getting props from a child component this is how the child component can pass data up to NewExpense*/}
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
  </div>
  )
}

export default NewExpense