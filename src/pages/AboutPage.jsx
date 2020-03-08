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
            I graduated in 2019 with a B.S. in Computer Science from UC Irvine. During school, I was able to work on
            countless projects from the design phase all the way to the release phase. In my internships and other work
            experience, I was able to work on larger scale projects where I faced new challenges that helped me grow my
            confidence quite a bit as a software engineer. To this day, the most important thing I've learned (as cliche
            as it sounds) is to never stop learning and be humble. The relevant skills needed for a job, the
            requirements for a project, or the deadline for a deliverable may all change drastically without much
            notice. That's why I think it's important to be able to learn and adapt in any context to be a strong
            software engineer.
          </p>
          <p>
            My main focus is application-level development, particularly in web applications. However, I generally enjoy
            working on any projects that provide unique challenges and opportunites to learn. Outside of software
            engineering, I really enjoy exercising, reading books, and discovering new music.
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