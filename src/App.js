import React from 'react';
import './App.css';
import './home.css';
import './content.css';

let Scroll = require('react-scroll');
let Element = Scroll.Element;
let scroller = Scroll.animateScroll;

function App() {
  return (
    <div className="app-container">
      <div id="top" className="navigation top">
        <div className="line right"/>
        <div className="navlinks">
          <span onClick={goToContact}>Contact</span>
          <span onClick={goToProjects}>Projects</span>
          <span onClick={goToExperience}>Experience</span>
          <span onClick={goToAbout}>About</span>
        </div>
        <div className="line left"/>
      </div>
      <div id="bottom" className="navigation bottom">
        <div className="line right"/>
        <div className="quicklinks">
          <svg onClick={goToGithub} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 438.549 438.549">
            <path
              d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"/>
          </svg>
          <svg onClick={goToLinkedIn} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 430.117 430.117">
            <path
              d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z"/>
          </svg>
        </div>
        <div className="line left"/>
      </div>
      <div className="home pageholder">
        <div className="header-holder">
          <div className="header-text">Josh Lopez</div>
          <div className="header-subtext">Full-stack software engineer <span id="blink">_</span></div>
        </div>
      </div>
      <div className="content pageholder">
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
        <div className="experience page">
          <h1 className="page-header">Work Experience</h1>
          <div className="job">
            <h5 className="company">Proofpoint</h5>
            <div className="job-info">
              <span className="job-title">Software Engineer</span>
              <span className="date">June 2019 - Current</span>
            </div>
            <ul className="job-description">
              <li>Optimize and improve analytics application that aggregates and processes massive amounts of customer
                data
              </li>
              <li>Develop and maintain Java backend services; frequently working Kafka, S3,
                Elasticsearch, MariaDB, and mySQL data
              </li>
              <li>Deploy features and bugfixes using Kubernetes, Jenkins, Puppet, and Docker</li>
            </ul>
          </div>
          <div className="job">
            <h5 className="company">ID Tech</h5>
            <div className="job-info">
              <span className="job-title">Software Engineer</span>
              <span className="date">September 2018 - January 2019</span>
            </div>
            <ul className="job-description">
              <li>Contracted to work on small team to build a mobile terminal management system for customers to manage
                payment devices remotely
              </li>
              <li>Built application using Node.js and Express and wireframes using Balsamiq</li>
              <li>App pulls device status information in real-time and
                allows for users
                to perform remote firmware updates, remote reboots, identify device info from the barcode of a device (using <a
                  href="https://serratus.github.io/quaggaJS/">QuaggaJS</a>), and much more
              </li>
            </ul>
          </div>
          <div className="job">
            <h5 className="company">Proofpoint</h5>
            <div className="job-info">
              <span className="job-title">Software Engineer Intern</span>
              <span className="date">June 2018 - September 2018</span>
            </div>
            <ul className="job-description">
              <li>Worked on Proofpoint's TAP Dashboard product, which I eventually continued to work on as a full-time
                software engineer
              </li>
              <li>Investigated issues breaking downstream services that consumed from Kafka rest proxies and S3
                buckets
              </li>
              <li>Built data schema monitoring and validation library using Java, Guice, Jackson, and Maven and
                implemented into existing pipeline of services
              </li>
            </ul>
            <div>
              <span className="job-title">DevOps Engineer Intern</span>
              <span className="date">June 2017 - September 2017</span>
            </div>
            <ul className="job-description">
              <li>Developed web application for searching and accessing thousands of Confluence resources</li>
              <li>Used Flask, WSGI, NGINX, and Atlassian APIs to build backend and HTML, CSS, & Javascript for
                frontend
              </li>
              <li>Additional development on fixing & improving infrastructure tools, mainly using Python & PHP</li>
            </ul>
          </div>
        </div>
        <div className="projects page">
          <Element name="projects"/>
          <h1 className="page-header">Projects</h1>
          <a href="https://gradetip.com" className="project">
            <h5>GradeTip<i className="fa fa-external-link"/></h5>
            <img className="project-image" src="/gradetip.png"/>
            <p>Document sharing platform and forum for college students developed as part of a small business
              idea. Users can interact with other users in the form of text posts, replies, and likes on their school's
              page. The intention is to allow students to ask for help/advice on courses. Users can also upload PDF
              documents
              of study resources for sale to other students, which creates a partially blurred PNG preview of
              the first page in the document for the listing. All content on the site must be approved by moderators
              before being publicly
              available to prevent copyright issues.</p>
          </a>
          <a href="https://idtechproducts.com/products/unattended-payments/vivostate-terminal-management-system/"
             className="project">
            <h5>ViVOstate TMS<i className="fa fa-external-link"/></h5>
            <img className="project-image" src="/idtech.png"/>
            <p>Mobile web application built for ID Tech with Node.js and Express that enables customers to easily monitor and
              control
              their ID Tech payment devices and chip readers. The app pulls device status information in real-time and
              allows for users
              to perform remote firmware updates, remote reboots, identify device info from the barcode of a device (using <a
                href="https://serratus.github.io/quaggaJS/">QuaggaJS</a>), and much more.</p>
          </a>
          <a href="https://github.com/joshlopez97/MovieNight" className="project">
            <h5>MovieNight<i className="fa fa-external-link"/></h5>
            <img className="project-image" src="/movienight.png"/>
            <p>Movie browsing and shopping site composed of several Java microservices and databases. Users can perform
              simple and advanced
              queries for movie or actor data, rate movies, add movies to shopping cart, checkout, along with hidden
              admin tasks for
              privileged users. The site is simply a proof of concept and not meant for real use; payment requests use
              Paypal sandbox
              for demo purposes.</p>
          </a>
          <a href="https://github.com/joshlopez97/iDiet" className="project">
            <h5>iDiet<i className="fa fa-external-link"/></h5>
            <img className="project-image" src="/idiet.png"/>
            <p>Mobile web application that produces weekly diet plans based on the Harris-Benedict equation for
              recommended
              calories,
              while also keeping within a specified financial budget. The food suggestions are continuously improved
              based on past user behavior and level of physical
              activity (integrated with FitBit API). We also integrated with Facebook's API to allow users to share
              their diet plans with their friends. Application is built
              using Express and Node.js with a mySQL database.</p>
          </a>
          <a href="https://joshlopez97.github.io/FireEscape/" className="project">
            <h5>FireEscape<i className="fa fa-external-link"/></h5>
            <img className="project-image" src="/malmo.png"/>
            <p>Machine learning project as part of our team's submissions to Microsoft's Malmo Collaborative AI
              Challenge, where we train an agent
              in Minecraft to make non-trivial decisions on risk / reward scenarios in an obstacle course game. Our
              model used deep Q-learning and Q-networks to optimize the performance of the agent in the game.</p>
          </a>
          <a href="https://github.com/joshlopez97/Poisson-Reconstruction" className="project">
            <h5>Poisson Reconstruction<i className="fa fa-external-link"/></h5>
            <img className="project-image" src="/poisson.png"/>
            <p>Computer vision project in which a set of images taken under special lighting conditions are composited
              to a 3D mesh that is colored and rendered into a full-scale 3D model of the original object using Poisson
              surface reconstruction and bounded box pruning. The pipeline is composed of MATLAB scripts and functions
              that perform the image processing.
            </p>
          </a>
        </div>
        <div className="contact page">
          <h1 className="page-header">Get in touch!</h1>
          <div className="contact-info">
            <p>Feel free to message me with any opportunites!</p>
            <a href="mailto:joshlopez97@gmail.com">Email</a>
            <a href="https://linkedin.com/in/josh-lopez1/">LinkedIn</a>
          </div>
        </div>
        <div className="footer">
          Website built by Josh Lopez. All rights reserved
        </div>
      </div>
    </div>
  );
}

function goToGithub() {
  window.location = "https://github.com/joshlopez97";
}

function goToLinkedIn() {
  window.location = "https://www.linkedin.com/in/josh-lopez1/";
}

function goToProjects() {
  scrollTo("projects");
}

function scrollTo(pageName, duration = 1500)
{
  let pos = document.getElementsByClassName(`${pageName} page`)[0].getBoundingClientRect().top + window.pageYOffset - 40;
  scroller.scrollTo(pos, {
    duration: duration,
    smooth: true
  });
}

function goToExperience() {
  scrollTo("experience");
}

function goToAbout() {
  scrollTo("about", 1000);
}

function goToContact() {
  let pos = document.getElementsByClassName(`footer`)[0].getBoundingClientRect().top - window.innerHeight + window.pageYOffset;
  scroller.scrollTo(pos, {
    duration: 1500,
    smooth: true
  });
}

export default App;
