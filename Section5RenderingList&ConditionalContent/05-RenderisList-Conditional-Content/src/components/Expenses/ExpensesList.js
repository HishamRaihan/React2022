import React from "react"
import ExpenseItem from "./ExpenseItem"
import "./ExpensesList.css"

const ExpenesesList = (props) => {
  // message will be the default but if it greater than 0 then the list will get rendered
  const expenseStuff = props.items.length
  if (expenseStuff === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>

  }
  const arrayExpenses = props.items.map((expense) =>
    <ExpenseItem
      // {/* key will help ract identify each individual item, since every item has a unique id */}
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />)
    
  return <ul className="expenses-list">
    {arrayExpenses}
  </ul>


}
export default ExpenesesList