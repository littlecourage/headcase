import React from 'react';
import { FaGithub, FaAngellist, FaLinkedin, FaUserCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      <div className="filler">
        <div className="social-links">
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
      <div className="image-container">
        <img src={window.aboutBackground} alt="illustration of gears"/>
      </div>
      <div className="text">
        <h1>About This Project</h1>
        <p>headcase is a single page web app clone of the meditation site
            <a href="https://www.headspace.com/" className="about-link" target="_blank">headspace</a>
          created by <a href="https://littlecourage.github.io/" target="_blank">Christine Adams</a>.
        </p>
        <p>It was built with a Ruby on Rails backend and a React/Redux frontend.</p>
        <a href="https://github.com/littlecourage/headcase" className="git-link" target="_blank">Checkout the GitHub</a>.
      </div>
      <div className='audio-about'>
        <img src={window.listening} alt="illustration of someone with headphones on" />
        <h3>The Meditations</h3>
        <p>The meditation clips used are courtesy of&nbsp;
          <a href="https://www.audiodharma.org/" target="_blank">AudioDharma</a> 
          &nbsp;and the Insight Meditation Center in Redwood, California.</p>
      </div>
    </div>
  )
}


export default About;