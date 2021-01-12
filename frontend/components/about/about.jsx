import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <div className="filler">
      </div>
      <div className="image-container">
        <img src={window.aboutBackground} alt="illustration of gears"/>
      </div>
      <div className="text">
        <h1>About This Project</h1>
        <p>headcase is a single page web app clone of the meditation site
            <a href="https://www.headspace.com/" className="about-link" target="_blank">headspace</a>
          built by <a href="https://littlecourage.github.io/" target="_blank">Christine Adams</a>.
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