import React from 'react';
import { Link } from 'react-router-dom'

const Greeting = ({ currentUser, logout }) => {

  const sessionLinks = () => {
    return (
        <header className="header" id="header">
          <Link to="/">
            <img 
              src={window.logoUrl} 
              alt="headspace logo" 
              className="header-logo" 
              id ="header_logo" />
          </Link>
          <div>
            <nav className="header-nav">
              <Link to="/login" className="login-link">LOG IN</Link>
              &nbsp;
              <Link to="/signup" className="signup-link">Start free trial</Link>
            </nav>
          </div>
      </header>
    )
  }

  const userGreeting = () => {
    let name;
    if (currentUser.first_name === 'Demo') {
      name = "DEMO USER";
    } else {
      name = currentUser.first_name.toUpperCase();
    }
    return (
      <header className="user_header">
        <Link to="/">
          <img
            src={window.logoUrl}
            alt="headspace logo"
            className="header-logo-small"
            id="header_logo" />
        </Link>
        <nav className="user_nav">
          <button className="home">HOME</button>
          &nbsp;
          <button>DISCOVER</button>
          &nbsp;
          <button onClick={logout}>LOG OUT</button>
          &nbsp;
          <span className="profile_link">{`${name}`}&emsp;
            <img 
              src={window.profilePicUrl} 
              alt="profile pic" 
              className="profile_pic" 
            />
          </span>

        </nav>
      </header>
    )
  }


  if (currentUser) {
    return userGreeting();
  } else {
    return sessionLinks();
  }

}


export default Greeting;