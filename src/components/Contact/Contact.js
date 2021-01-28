import React from 'react';

import './Contact.css'

function Contact(props) {
  return (
    <div id="contact" className="contact-section-container">
      <div className="contact-form">
        <h1>CONTACT</h1>
        <p>Below you can find my GitHub, LinkedIn and Email. Click on the GitHub or LinkedIn icon to find my profile.
          <br/><br/>
        Feel free to reach out to me any time!</p>
        <div className='icons'>
          <a href="https://github.com/udykas" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-2x"></i>
            <span style={{paddingLeft: '15px'}} className="label">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/alexander-dykas-934b3913b/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-2x"></i>
            <span style={{paddingLeft: '15px'}} className="label">LinkedIn</span>
          </a>
          <a href="mailto:udykas@gmail.com">
            <i className="far fa-envelope fa-2x"></i>
            <span style={{paddingLeft: '15px'}} className="label">udykas@gmail.com</span>
          </a>
        </div>
      </div>
      <footer id="footer">	
          &copy; 2021 Alex Dykas
      </footer>
    </div>
  );
}

export default Contact;