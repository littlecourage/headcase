import React from 'react';
import { Link } from 'react-router-dom'

const Greeting = ({ currentUser, logout }) => {

  const sessionLinks = () => {
    return (
      <nav>
        <Link to="/login">Login</Link>
        &nbsp;
        <Link to="/signup">Sign Up</Link>
      </nav>
    )
  }

  const userGreeting = () => {
    return (
      <div>
        <h4>{currentUser.first_name}</h4>
        &nbsp;
        <button onClick={logout}>Log Out</button>
      </div>
    )
  }

  if (currentUser) {
    return userGreeting();
  } else {
    return sessionLinks();
  }

}


export default Greeting;