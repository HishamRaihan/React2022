import React from "react";
import Card from "../UI/Card";
import classes from './UsersList.module.css'

const UsersList = props => {
  return (
    // we will rely on props to get our users data
    // this will hold an array of user data
    <Card className={classes.users}>
    <ul>
      {/* using props to get our array of users data */}
      {/* map will map the array of users to an array of jsx elements */}
      {props.users.map((user) => (
        // array of user objects where every object user has a name property and age
        <li key={user.id}>
          {user.name} ({user.age} years old)
        </li>
        // should have a key because its the item we repeat the key should be unique
      ))}
    </ul>
    </Card>
  )

}

export default UsersList