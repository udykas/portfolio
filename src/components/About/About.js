import React from 'react';
import './About.css';
import profile from '../../assets/profile-pic.jpg';

function About() {

  return(
    <div id="about" className="about-section-container">
      <div className="about-header">
        <h1>About</h1>
      </div>
      <div className="about-content">
        <div className="about-img-container">
          <img className="profile-pic" src={profile} alt="Alex Dykas Headshot" />
        </div>
        <div className="about-description">
          <p>I’m a front-end developer based out of Boston, MA. I create intuitive, accessible, and fast websites using a wide variety of JavaScript frameworks and libraries. I strive to make the code I work on more readable, modular and performant. For the past two years I was working for Virtusa building highly technical web applications for Engineers and Project Managers at Pratt & Whitney; And before that, I spent a year studying Web Development and Computer Science at the Lambda School and mentoring other students looking to get their first job after graduation.</p>
          <p>I value not only the chance to build my own skills in and outside of work, but also the ability to help others improve their craft. I aspire to lead a team of developers one day and to create educational content on my own website to give back to a community that’s given me so much.</p>
        </div>
      </div>
    </div>
  )
}

export default About;