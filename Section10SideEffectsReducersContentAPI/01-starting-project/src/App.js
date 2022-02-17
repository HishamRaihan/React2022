import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
// is re executed by react automatically when the state changes 

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // executed by react, and after every component reEvaluation
  // would only run once when the app runs
  // handles side effects, arg 1 is function that should be executed
  // data fetching is ran as a side effect to avoid a loop
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn')
    // if the user loggerd in is = 1 then well set the user to logged IN
    if (storedUserLoggedInInformation === '1') {
      // even without loginHandler being triggered
      // update the state
      setIsLoggedIn(true)
    }
    // arrary of dependencies
  }, []) // since our dependecies didnt change it is only loaded once hence user is still logged in

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>

  );
}

export default App;
