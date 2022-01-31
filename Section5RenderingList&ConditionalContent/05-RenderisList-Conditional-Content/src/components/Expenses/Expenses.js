import React, { useState } from "react"
import Card from "../UI/Card"
import "./Expenses.css"
import ExpensesChart from "./ExpensesChart"
import ExpensesFilter from "./ExpensesFilter"
import ExpenesesList from "./ExpensesList"

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022')
  const filterChangeHandler = (selectedyear) => {
    setFilteredYear(selectedyear)
    // console.log('Expenses.js');
    // console.log(selectedyear);
  }
  // filter returns a brand new array 
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })
  // const arrayedItems = filteredExpenses.map((expense) =>
  //   <ExpenseItem
  //   // {/* key will help ract identify each individual item, since every item has a unique id */}
  //     key={expense.id}
  //     title={expense.title}
  //     amount={expense.amount}
  //     date={expense.date} />)


  return (
    <div>
      {/* imitates a funciton call */}
      <Card className="expenses">
        {/* controlled component we are passing the selected prop to ExpensesFilter*/}
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {/* passing expenses prop because that is expected and we want to chart the filtered expenses */}
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenesesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses