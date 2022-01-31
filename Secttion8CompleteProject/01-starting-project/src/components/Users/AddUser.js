import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css'

const AddUser = props => {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  // want to render something on the screen that allows user to
  // enter a name, age and a button to confirm

  const addUserHandler = (event) => {
    event.preventDefault()
    // validating the input
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
      return
    }
    // force converts the string into a number
    if(+enteredAge <1){
      return
    }
    // forwarding the pieces of data to the App component on every click on the Add User Btn
    props.onAddUser(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')

  }
  const userNameChangeHandler = event => {
    setEnteredUsername(event.target.value)
  }
  const ageNameChangeHandler = event => {
    setEnteredAge(event.target.value)
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={enteredUsername}
          onChange={userNameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
         {/* value will be updated after submitted */}
        <input type="number" id="age" value={enteredAge}
          onChange={ageNameChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser