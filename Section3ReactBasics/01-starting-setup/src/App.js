import React from "react"
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
      {/* <GundamIterableFunction></GundamIterableFunction> */}
      {/* <Car carName={'Ford Bronco'} cost={'31,000'} /> */}

    </div>
  );
}

export default App;
// will be our root component being rendered in our starting file index.js
// nested components will be in App.js