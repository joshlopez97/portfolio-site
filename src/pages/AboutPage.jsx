import React, {Component} from 'react';
import '../styles/about.css';

class AboutPage extends Component {
  render() {
    return (
      <div className="about page">
        <h1 className="page-header">About Me</h1>
        <div className="me-holder">
          <div className="me"/>
        </div>
        <div className="about-text">
          <p>
            Hi, my name is Josh. I'm a software engineer based out of Mountain View, CA.
          </p>
          <p>
            I graduated in 2019 with a B.S. in Computer Science from UC Irvine. Shortly after graduating, I
            joined <a href={this.props.links.amazon}>Amazon</a>'s Kindle team. Here, I'm develop robust applications and
            frameworks to support Kindle E-reader software.
          </p>
          <p>
            My work as a software engineer has generally been full-stack and backend, working frequently with ReactJS,
            Java, mySQL, and some Python / C++.
            Outside of software engineering, I really enjoy exercising, reading books, and discovering new music.
          </p>
          <p>
          </p>
        </div>
      </div>
    );
  }
}

export default AboutPage;