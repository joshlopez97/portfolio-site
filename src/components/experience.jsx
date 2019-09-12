import React, {Component} from 'react';
import './experience.css';

class Experience extends Component {
  render() {
    return (
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
    );
  }
}

export default Experience;