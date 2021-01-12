import React from 'react';
import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import { NavLink } from 'react-router-dom';

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