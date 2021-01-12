import React from 'react';
import { NavLink } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {

  const sessionLinks = () => {
    return (
        <header className="header" id="header">
          <NavLink to="/">
            <img 
              src={window.logoUrl} 
              alt="headspace logo" 
              className="header-logo" 
              id ="header_logo" />
          </NavLink>
          <div className="about-nav">
            <div>
              <a href="https://github.com/littlecourage/headcase" className="about-link" target="_blank">GitHub</a>
              <a href="https://angel.co/u/christine-adams-5" className="about-link" target="_blank">AngelList</a>
              <a href="https://littlecourage.github.io/" className="about-link" target="_blank">Portfolio</a>
              <a href="https://www.linkedin.com/in/christine-adams-180646123/" className="about-link" target="_blank">LinkedIn</a>
            <NavLink to="/about" className="about-link">About</NavLink>
            </div>
            <nav className="header-nav">
              <NavLink to="/login" className="login-link" activeClassName="signup-selected">LOG IN</NavLink>
              &nbsp;
              <NavLink to="/signup" className="signup-link" >Start free trial</NavLink>
            </nav>
          </div>
      </header>
    )
  }

  const userGreeting = () => {
    let name;
    if (currentUser.firstName === 'Demo User') {
      name = "DEMO USER";
    } else {
      name = currentUser.firstName.toUpperCase();
    }
    
    return (
      <header className="user_header">
        <NavLink to="/dashboard">
          <img
            src={window.logoUrl}
            alt="headspace logo"
            className="header-logo-small"
            id="header_logo" />
        </NavLink>
        <nav className="user_nav">
          <NavLink 
            className="headerLink" 
            activeStyle={{color: "#F4A566"}}
            to='/dashboard'>
            HOME
          </NavLink>
          &nbsp;
          <NavLink 
            to="/discover" 
            className="headerLink"
            activeStyle={{ color: "#F4A566"}}>
            DISCOVER
          </NavLink>
          &nbsp;
          {/* <button className="headerLink" onClick={logout}>LOG OUT</button>
          &nbsp; */}
          <NavLink to="/profile" className="headerLink" activeStyle={{ color: "#F4A566" }}>
              {`${name}`}&emsp;
              <img 
                src={window.profilePicUrl} 
                alt="profile pic" 
                className="profile_pic" 
              />
          </NavLink>

        </nav>
      </header>
    )
  }

  //add withRouter to have access to path property? 
  if (currentUser) {
    return userGreeting();
  } else {
    return sessionLinks();
  }

}


export default Greeting;