import React, { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      // this is pulling out all the key value pairs from expenseData in expenseForm
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    // console.log(expenseData);
    // passing expenseData to onAddExpense that is linked inside the App component
    props.onAddExpense(expenseData)
  }
  const startEditingHandler = () => {
    setIsEditing(true)
  }
  const stopEdititingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {/* getting props from a child component this is how the child component can pass data up to NewExpense*/}
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEdititingHandler} />}
    </div>
  )
}

export default NewExpense