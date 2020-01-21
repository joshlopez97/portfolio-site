import React, {Component} from 'react';
import './about.css';

class About extends Component {
  render() {
    return (
      <div className="about page">
        <h1 className="page-header">About Me</h1>
        <div className="me-holder">
          <div className="me"/>
        </div>
        <div className="about-text">
          <p>Hello, welcome to my website! I'm a software engineer based out of Mountain View, CA with a
            passion for
            learning new things and bringing value to software-based products.</p>
          <p> My main focus is application-level development, particularly in web applications. Overall, I love finding ways
            to improve a customer's experience with a product and find new ways to make the user experience as great as it can be.
            I've gotten to be part of this process in web, mobile, and embedded application development.
          </p>
          <p> Currently, I'm working as a Software Engineer at <a href="https://www.amazon.com/Amazon-Kindle-Ereader-Family">Amazon</a>.
            Here,
            I'm able to work on new features and improvements to Kindle E-reader software.
          </p>
        </div>
      </div>
    );
  }
}

export default About;