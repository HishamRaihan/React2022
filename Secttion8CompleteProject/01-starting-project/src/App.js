import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  // we will lift the users state up to this component because it is where AddUser and UsersList meet array of users
  const [usersList, setUsersList] = useState([])

const addUserHandler =(userName, userAge) =>{
  // update state relys on previous state we need to use the function form becauise the function will get the latest snapshot when react performs state update
  setUsersList((prevUsersList) =>{
    // copy all elements from prevusersList
    // making a new js object for each user
    return [...prevUsersList, {name: userName, age: userAge, id: Math.random().toString()}]
  })
}
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {/* need to set the users props because that is what we're recieving */}
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
