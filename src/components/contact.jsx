import React, {Component} from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact page">
        <h1 className="page-header">Get in touch</h1>
        <div className="contact-info">
          <div className="contact-entry">Email:&nbsp; <a href="mailto:josh@joshlopez.co">josh@joshlopez.co</a></div>
          <div className="contact-entry">LinkedIn:&nbsp; <a href="https://linkedin.com/in/josh-lopez1/">josh-lopez-1</a></div>
          <div className="contact-entry">Phone Number:&nbsp; <a href="/JoshLopezResume.pdf">See resume</a></div>
        </div>
      </div>
    );
  }
}

export default Contact;