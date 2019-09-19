import React, {Component} from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact page">
        <h1 className="page-header">Get in touch!</h1>
        <div className="contact-info">
          <p>Feel free to message me with any opportunites!</p>
          <a href="mailto:josh@joshlopez.co">Email</a>
          <a href="https://linkedin.com/in/josh-lopez1/">LinkedIn</a>
        </div>
      </div>
    );
  }
}

export default Contact;