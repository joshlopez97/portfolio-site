import React, {Component} from 'react';
import '../styles/experience.css';
import LinkIcon from "../components/LinkIcon";
import FadedIn from "../components/FadedIn"

class ExperiencePage extends Component {
  constructor(props) {
    super(props);
    Object.assign(this, this.props.navigationFunctions);
    console.log(this.props)
  }

  render() {
    return (
      <div className="experience page">
        <h1 className="page-header">Work Experience</h1>
        <WorkExperience
          company={"Amazon"}
          topDate={"November 2019 - Current"}
          clickAction={this.goToAmazon}>
          <PositionInfo title="Software Development Engineer"
                        date="November 2019 - Current">
            <li>Ship new features and improvements to Kindle E-reader software</li>
          </PositionInfo>
        </WorkExperience>
        <WorkExperience
          company={"Proofpoint"}
          topDate={"June 2019 - September 2019"}
          clickAction={this.goToProofpoint}>
          <PositionInfo title="Software Engineer"
                        date={"June 2019 - September 2019"}>
            <li>Optimize and improve analytics application that filters and analyzes customer security data</li>
            <li>Developed and maintained Java backend services; frequently working Kafka, S3, Elasticsearch, MariaDB,
              and mySQL data
            </li>
            <li>Deployed features and services using Kubernetes, Jenkins, Puppet, and Docker</li>
          </PositionInfo>
        </WorkExperience>
        <WorkExperience
          company={"ID Tech"}
          topDate={"September 2018 - January 2019"}
          clickAction={this.goToIdtech}>
          <PositionInfo title="Software Engineer (Contract)"
                        date={"September 2018 - January 2019"}>
            <li>Contracted to work on small team to build a mobile terminal management system for customers to manage
              payment devices remotely
            </li>
            <li>Built application using Node.js and Express and wireframes using Balsamiq</li>
            <li>App pulls device status information in real-time and allows for users to perform remote firmware
              updates, remote reboots, identify device info from the barcode of a device (using <a
                href={this.props.links.quaggajs}>QuaggaJS</a>), and much more
            </li>
          </PositionInfo>
        </WorkExperience>
        <WorkExperience
          company={"Proofpoint"}
          topDate={"June 2018 - September 2018"}
          clickAction={this.goToProofpoint}>
          <PositionInfo title={"Software Engineer Intern"}
                        date={"June 2018 - September 2018"}>
            <li>Implemented data pipeline responsible for processing massive amounts of customer data for Proofpoint's
              TAP Dashboard product
            </li>
            <li>Investigated and addressed data issues breaking downstream services that consumed from Kafka rest
              proxies and S3 buckets
            </li>
            <li>Built data schema monitoring and validation library using Java, Guice, Jackson, and Maven and
              implemented into multiple services
            </li>
          </PositionInfo>
          <PositionInfo title={"DevOps Engineer Intern"}
                        date={"June 2017 - September 2017"}>
            <li>Developed web application for searching and accessing thousands of Confluence resources</li>
            <li>Used Flask, WSGI, NGINX, and Atlassian APIs to build backend and HTML, CSS, & Javascript for frontend
            </li>
            <li>Additional development on fixing & improving infrastructure tools, mainly using Python & PHP</li>
          </PositionInfo>
        </WorkExperience>
      </div>
    );
  }
}

const WorkExperience = props => {
  const {company, topDate, clickAction, children} = props;
  const triggerID = `${company.replace(/\s/g, "-")}-${topDate.replace(/\s/g, "-")}`;
  console.log(triggerID);
  return (
    <FadedIn triggerID={triggerID}>
      <div className="job box">
        <div className="company-header">
          <h5 className="company" onClick={clickAction}>{`${company} `}<LinkIcon/></h5>
          <span className="date top-date">{topDate}</span>
        </div>
        <div className="positions">{children}</div>
      </div>
    </FadedIn>
  );
};

const PositionInfo = props => {
  const {title, date, children} = props;
  return (
    <div className="position-holder">
      <div className="position-header">
        <span className="job-title">{title}</span>
        <span className="date">{date}</span>
      </div>
      <ul className="job-description">
        {children}
      </ul>
    </div>
  );
};

export default ExperiencePage;