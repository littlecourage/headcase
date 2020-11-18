import React from 'react';
import { Link } from 'react-router-dom'

const Greeting = ({ currentUser, logout }) => {

  const sessionLinks = () => {
    return (
      <nav className="header-nav">
        <Link to="/login" className="login-link">LOG IN</Link>
        &nbsp;
        <Link to="/signup" className="signup-link">Sign Up</Link>
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