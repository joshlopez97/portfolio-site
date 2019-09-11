import React, {Component} from 'react';
import './projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="projects page">
        <h1 className="page-header">Projects</h1>
        <Project info={{
          "title": "GradeTip",
          "link": "https://gradetip.com",
          "path": "/gradetip.png",
          "languages": ["Python", "Flask", "Redis", "Javascript", "HTML/CSS"],
          "summary": (<p>Document sharing platform and forum for college students developed as part of a small business
            idea. Users can interact with other users in the form of text posts, replies, and likes on their school's
            page. Users can also upload PDF documents of study resources for sale to other students. All content on the
            site must be approved by moderators before being publicly available to prevent copyright issues.</p>)
        }}/>
        <Project info={{
          "title": "MovieNight",
          "link": "https://github.com/joshlopez97/MovieNight",
          "path": "/movienight.png",
          "languages": ["Java", "SQL", "Javascript", "HTML/CSS"],
          "summary": (<p>Movie browsing and shopping site composed of several Java microservices and databases. Users can perform
            simple and advanced queries and filters for movie-related data, add movies to their cart, checkout using PayPal,
            along with hidden admin tasks for privileged users. The site is simply a proof of concept and not meant
            for real use; payment requests use Paypal sandbox for demo purposes.</p>)
        }}/>
        <Project info={{
          "title": "Portfolio Website",
          "link": "https://github.com/joshlopez97/portfolio-site",
          "path": "/portfolio.png",
          "languages": ["ReactJS", "Javascript"],
          "summary": (<p>React website built to showcase my experience and projects in a less restrictive format than a
          resume. This project also helped me improve my React knowledge.</p>)
        }}/>
        <Project info={{
          "title": "ViVOstate TMS",
          "link": "https://idtechproducts.com/products/unattended-payments/vivostate-terminal-management-system/",
          "path": "/idtech.png",
          "languages": ["Node.js", "Express", "Javascript", "HTML/CSS"],
          "summary": (<p>Mobile web application built for ID Tech with Node.js and Express that enables customers to easily monitor
             and control their ID Tech payment devices and chip readers. The app pulls device status information in real-time and
             allows for users to perform remote firmware updates, remote reboots, identify device info from the barcode of a device
             (using <a href="https://serratus.github.io/quaggaJS/">QuaggaJS</a>), and much more.</p>)
        }}/>
        <Project info={{
          "title": "iDiet",
          "link": "https://github.com/joshlopez97/iDiet",
          "path": "/idiet.png",
          "languages": ["Node.js", "Express", "Javascript", "HTML/CSS"],
          "summary": (<p>Mobile web application that produces weekly diet plans based on the Harris-Benedict equation for
            recommended calories, while also keeping within a specified financial budget. The food suggestions are
            continuously improved based on past user behavior and level of physical activity (integrated with FitBit API).
            We also integrated with Facebook's API to allow users to share their diet plans with their friends. Application
            is built using Express and Node.js with a mySQL database.</p>)
        }}/>
        <Project info={{
          "title": "FireEscape",
          "link": "https://joshlopez97.github.io/FireEscape/",
          "path": "/malmo.png",
          "languages": ["Machine Learning", "Q-Learning", "Tensorflow", "Python", "Malmo"],
          "summary": (<p>Machine learning project as part of our team's submissions to Microsoft's Malmo Collaborative AI
            Challenge, where we train an agent in Minecraft to make non-trivial decisions on risk / reward scenarios in
            an obstacle course game. Our model used deep Q-learning and Q-networks (Tensorflow) to optimize the performance of the agent
            in the game.</p>)
        }}/>
        <Project info={{
          "title": "Poisson Reconstruction",
          "link": "https://github.com/joshlopez97/Poisson-Reconstruction",
          "path": "/poisson.png",
          "languages": ["MATLAB", "Computer Vision", "Image Processing"],
          "summary": (<p>Computer vision project in which a set of images taken under special lighting conditions are composited
            to a 3D mesh that is colored and rendered into a full-scale 3D model of the original object using Poisson
            surface reconstruction and bounded box pruning. The pipeline is composed of MATLAB scripts and functions
            that perform the image processing.</p>)
        }}/>
      </div>
    );
  }
}

const Project = ({ info }) => (
  <div onClick={() => goTo(info.link)} className="project">
    <div className="project-header">
      <h5 className="project-title">{info.title}</h5>
      <h5 className="external-link-icon-holder"><i className="fa fa-external-link"/></h5>
      <div className="languages-holder">
        { info.languages.map((language) => <span key={language} className="project-language">{language}</span>) }
      </div>
    </div>
    <img className="project-image" src={info.path} alt=""/>
    <div className="project-summary">
        {info.summary}
    </div>
  </div>
);


function goTo(link)
{
  window.location = link;
}

export default Projects;