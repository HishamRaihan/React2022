import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css'

const AddUser = props => {
  // array destructering because useState uses an array with two elements
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState()
  // want to render something on the screen that allows user to
  // enter a name, age and a button to confirm
  // first element of the returned array is the current snapshot and everytime the component re-renders when it updates then that will hold the latest, set holds the funtion

  const addUserHandler = (event) => {
    event.preventDefault()
    // validating the input
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)'
      })
      // error state snapshot will hold this error
      return
    }
    // force converts the string into a number
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)'
      })
      // need to clear the error state inorder to remove backdrop
      return
    }
    // forwarding the pieces of data to the App component on every click on the Add User Btn function being passsed to onAddUser
    props.onAddUser(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
    console.log(enteredUsername, enteredAge);
  }
  const userNameChangeHandler = event => {
    // bind to userName input
    setEnteredUsername(event.target.value)
    // setting to what the user currently entered target being the input and value is what the currently entered value
  }
  const ageNameChangeHandler = event => {
    setEnteredAge(event.target.value)
  }
  const errorHandler = () => {
    setError(null)
  }
  return (
    <div>
      {/* react does not allow 2 side by side jsx components being rendered. So we need to wrap in a div need to wrap in curlys b/c its a js expression with jsx element */}
      {error && <ErrorModal title={error.title} message={error.message}
       onHandleError={errorHandler} />}
      {/* // card is our own  */}
      <Card className={classes.input}>
        {/* want to pass the pointer so when form is being submitted */}
        <form onSubmit={addUserHandler}>
          {/* jsx for attribute to a label */}
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={enteredUsername}
            onChange={userNameChangeHandler} />
          <label htmlFor="age">Age (Years)</label>
          {/* value will be updated after submitted */}
          <input type="number" id="age" value={enteredAge}
            onChange={ageNameChangeHandler} />
          {/*  */}
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser