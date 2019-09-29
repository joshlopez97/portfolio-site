import React, {Component} from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact page">
        <h1 className="page-header">Get in touch</h1>
        <div className="contact-info box">
          <div className="contact-info-section">
            <div className="contact-entry">
              Email:
            </div>
            <div className="contact-entry">
              LinkedIn:
            </div>
            <div className="contact-entry">
              Phone Number:
            </div>
          </div>
          <div style={{textAlign: "right"}} className="contact-info-section">
            <div className="contact-entry">
              <a href="mailto:josh@joshlopez.co">josh@joshlopez.co</a>
            </div>
            <div className="contact-entry">
              <a href="https://linkedin.com/in/josh-lopez1/">josh-lopez-1</a>
            </div>
            <div className="contact-entry">
              <a href="/Resume.pdf">See on resume</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;