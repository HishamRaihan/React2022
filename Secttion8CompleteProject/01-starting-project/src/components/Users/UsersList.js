import React from "react";
import Card from "../UI/Card";
import classes from './UsersList.module.css'

const UsersList = props => {
  return (
    // we will rely on props to get our users data
    // this will hold an array of user data
    <Card className={classes.users}>
    <ul>
      {/* map wiull map the array of users to an array of jsx elements */}
      {props.users.map((user) => (
        // array of user objects where every user has a name property and age
        <li key={user.id}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
    </Card>
  )

}

export default UsersList