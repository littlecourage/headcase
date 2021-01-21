import React from 'react';
import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaAngellist, FaLinkedin, FaUserCircle } from "react-icons/fa";

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meet: false
    }
    this.handleMeet = this.handleMeet.bind(this);
  }

  handleMeet(e) {
    e.preventDefault();
    let meetStatus = !this.state.meet
    this.setState({meet: meetStatus})
  }

  render() {
    return !this.state.meet ? (
      <div className="profile-container">
        <img className="background" src={window.profileBackground} alt="patterened background"/>
        <div className="profile-content">
          <div className="links">
            <NavLink to="/about">About Headcase</NavLink>
            <button onClick={this.handleMeet}>Meet Christine</button>
            <button onClick={this.props.logout}>Log Out</button>
          </div>
        </div>
        <div className="media-links">
          <a href="https://github.com/littlecourage/headcase"
            className="about-link"
            target="_blank">GitHub <FaGithub />
          </a>
          <a href="https://angel.co/u/christine-adams-5"
            className="about-link"
            target="_blank">AngelList <FaAngellist />
          </a>
          <a href="https://littlecourage.github.io/"
            className="about-link"
            target="_blank">Portfolio <FaUserCircle />
          </a>
          <a href="https://www.linkedin.com/in/christine-adams-180646123/"
            className="about-link"
            target="_blank">LinkedIn <FaLinkedin />
          </a>
        </div>
      </div>
    ) : (
      <div className="profile-container">
        <img className="background" src={window.profileBackground} alt="patterened background" />
        <div className="profile-content">
          <div className="info">
            <h2>Christine Adams</h2>
            <div className="headshot">
              <img src={window.headshot} alt="photo of Christine Adams, headcase developer"/>
            </div>
            <div className="profile-links">
                <a href="https://github.com/littlecourage" className="about-link" target="_blank"><FaGithub /></a>
                <a href="https://angel.co/u/christine-adams-5" className="about-link" target="_blank"><FaAngellist /></a>
                <a href="https://www.linkedin.com/in/christine-adams-180646123/" className="about-link" target="_blank"><FaLinkedin/></a>
                <a href="https://littlecourage.github.io/" className="about-link" target="_blank"><FaUserCircle /></a>
            </div>
            <p>
              Christine Adams is a software engineer who is passionate about combining
              creativity and code. She's a lifelong puzzle enthusiast and artist,
              and these days programming is her medium of choice. Christine is
              a graduate of App Academy, an intense 1000+ hour immerseive bootcamp with a less
              than 3% acceptance rate. She's skilled in React, Redux, JavaScript, Node.js,
              Ruby on Rails, PostgreSQL, Mongo.db, Express, p5.js, CSS, and HTML.
            </p>
            <button onClick={this.handleMeet}>&nbsp;Back</button>
          </div>
        </div>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);