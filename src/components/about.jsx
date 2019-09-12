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
            learning new things and delivering <span className="emphasis">high quality applications</span>.</p>
          <p> My main focus is customer-facing web and application development. I'm especially interested
            in the product-side of things. I love learning what the customer needs from a product and getting
            to help decide the best way to meet those needs.
          </p>
          <p> Currently, I'm working as a Software Engineer at <a href="https://www.proofpoint.com/us">Proofpoint</a>.
            Here,
            I'm able to build and maintain software for Proofpoint's TAP Dashboard product.
          </p>
        </div>
      </div>
    );
  }
}

export default About;