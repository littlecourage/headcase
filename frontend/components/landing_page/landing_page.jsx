import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';

const LandingPage = ({ currentUser }) => {

      return (
        <div className="landingContainer">

        <div className="landingText">
          <h1>Be kind to your mind</h1>

          <p>Less stressed. More resilient. Happier. It all starts 
            with just a few minutes a day.
          </p>

          <Link to="/signup">
            Start Your Journey
          </Link>
          <br/>
          <span><a href="https://github.com/littlecourage/headcase" target="_blank" ><FaPlay /></a>&emsp;See how it works</span>

        </div>

        <img 
          src={window.backgroundUrl} 
          className="landingImage"
          alt="background image"/>


      </div>
    )
  


}


export default LandingPage;