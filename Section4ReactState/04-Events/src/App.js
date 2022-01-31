import React from "react"
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";


const App = () => {
  // the way to do it with Javascript
  // const para = document.createElement('p')
  // para.textContent = 'This is also visible!'
  // document.getElementById('root').append(para)
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense => {
    console.log('In App.js');
    console.log(expense);
  })
  return (
    <div>
      {/* functiion pointer passed as an argument */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      {/* <GundamIterableFunction></GundamIterableFunction> */}
      {/* <Car carName={'Ford Bronco'} cost={'31,000'} /> */}

    </div>
  );
}

export default App;
// will be our root component being rendered in our starting file index.js
// nested components will be in App.js
import React from "react"
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  // the way to do it with Javascript
  // const para = document.createElement('p')
  // para.textContent = 'This is also visible!'
  // document.getElementById('root').append(para)
  const addExpenseHandler = (expense => {
    // ... on the existing expenses to pull out all the existing 
    setExpenses([expense, ...expenses])
  })

  return (
    <div>
      {/* functiion pointer passed as an argument */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      {/* <GundamIterableFunction></GundamIterableFunction> */}
      {/* <Car carName={'Ford Bronco'} cost={'31,000'} /> */}

    </div>
  );
}

export default App;
// will be our root component being rendered in our starting file index.js
// nested components will be in App.js