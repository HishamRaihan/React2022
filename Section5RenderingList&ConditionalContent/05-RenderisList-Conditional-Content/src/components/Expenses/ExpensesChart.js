import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) =>{

  // expect every dataPoint to be an object
  const chartDataPoints = [
    {label: 'Jan', value: 0},
    {label: 'Feb', value: 0},
    {label: 'Mar', value: 0},
    {label: 'Apr', value: 0},
    {label: 'May', value: 0},
    {label: 'Jun', value: 0},
    {label: 'Jul', value: 0},
    {label: 'Aug', value: 0},
    {label: 'Sep', value: 0},
    {label: 'Oct', value: 0},
    {label: 'Nov', value: 0},
    {label: 'Dec', value: 0}
  ]
  // using for of loop because expenses is an array
  for(const expense of props.expenses){
    // date is an object and we can use getMonth that returns a month
    const expenseMonth = expense.date.getMonth() // starting at 0 = January
    // value gets updated with the += shortcut
    chartDataPoints[expenseMonth].value += expense.amount
  }
  return <Chart dataPoints={chartDataPoints} />
}

export default ExpensesChart