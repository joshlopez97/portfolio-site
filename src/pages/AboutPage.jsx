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
            Hello, my name is Josh. I'm a software engineer based out of Mountain View, CA.
          </p>
          <p>
            I graduated in 2019 with a B.S. in Computer Science from UC Irvine. During school and afterwards, I kept
            my skills sharp by working on many <a href={this.props.links.github}>personal projects</a> with other
            students and colleages. These were the most enjoyable projects to work on because I got to see my own ideas
            & requirements turn into actual applications. I also got a chance to do some software engineering as an
            intern and consultant. Moving to these roles as a student was an incredible opportunity to not only
            strengthen my skills as a developer, but also practice other skills like drafting a design doc, reading
            documentation, discussing trade-offs in a design decision, etc. These things really showed me how much
            constant learning is involved in this field, which is a huge reason I enjoy doing it so much.
          </p>
          <p>
            As a software engineer, my main focus is application development, particularly web applications. However, I
            generally enjoy working on any projects that provide unique challenges and opportunites to learn.
            Outside of software engineering, I really enjoy exercising, reading books, and discovering new music.
          </p>
          <p> Currently, I'm working as a Software Engineer at <a href={this.props.links.amazon}>Amazon</a>.
            Here, I'm able to work on new features and improvements to Kindle E-reader software.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutPage;