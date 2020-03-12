import React, {Component} from 'react';
import '../styles/projects.css';
import FadedIn from "../components/FadedIn";

class ProjectsPage extends Component {
  render() {
    return (
      <div className="projects page">
        <h1 className="page-header">Projects</h1>
        <Project
          title={"GradeTip"}
          link={this.props.links.gradetip_repo}
          github={this.props.links.gradetip_repo}
          site={this.props.links.gradetip}
          path={this.props.files.gradetip_banner}
          languages={["Python", "Flask", "Redis", "JavaScript", "HTML/CSS"]}>
          <p>Document sharing platform and forum for college students developed as part of a small business
            idea. Users can interact with other users in the form of text posts, replies, and likes on their school's
            page. Users can also upload PDF documents of study resources for sale to other students. All content on the
            site must be approved by moderators before being publicly available to prevent copyright issues.</p>
        </Project>
        <Project
          title={"Pathfinder Visualizer"}
          link={this.props.links.pathfinder_repo}
          github={this.props.links.pathfinder_repo}
          site={this.props.links.pathfinder}
          path={this.props.files.pathfinder_banner}
          languages={["React", "JavaScript", "Graph Algorithms"]}>
          <p>This application provides visualizations of pathfinding algorithms on undirected graphs, showing node
            exploration and the shortest path found. The graph's are randomly generated nodes and paths on a screen-sized
            matrix. Check out a demo of this application <a href={this.props.links.pathfinder}>here</a>.
            This project was a great way to brush up on my algorithms for interview prepping and also learning more ReactJS.
          </p>
        </Project>
        <Project
          title={"MovieNight"}
          link={this.props.links.movienight_repo}
          github={this.props.links.movienight_repo}
          path={this.props.files.movienight_banner}
          languages={["Java", "SQL", "JavaScript", "HTML/CSS"]}>
          <p>Movie browsing and shopping site composed of several Java microservices and databases. Users can perform
            simple and advanced queries and filters for movie-related data, add movies to their cart, checkout using
            PayPal,
            along with hidden admin tasks for privileged users. The site is simply a proof of concept and not meant
            for real use; payment requests use Paypal sandbox for demo purposes.</p>
        </Project>
        <Project
          title={"Portfolio Website"}
          link={this.props.links.portfolio_repo}
          github={this.props.links.portfolio_repo}
          path={this.props.files.portfolio_banner}
          languages={["ReactJS", "JavaScript"]}>
          <p>React website built to showcase my experience and projects in a less restrictive format than a
            resume. This project also helped me improve my React knowledge.</p>
        </Project>
        <Project
          title={"ViVOstate TMS"}
          link={this.props.links.vivostate}
          site={this.props.links.vivostate}
          path={this.props.files.vivostate_banner}
          languages={["Node.js", "Express", "JavaScript", "HTML/CSS"]}>
          <p>Mobile web application built for ID Tech with Node.js and Express that enables customers to easily
            monitor
            and control their ID Tech payment devices and chip readers. The app pulls device status information in
            real-time and
            allows for users to perform remote firmware updates, remote reboots, identify device info from the barcode
            of a device
            (using <a href={this.props.links.quaggajs}>QuaggaJS</a>), and much more.</p>
        </Project>
        <Project
          title={"iDiet"}
          link={this.props.links.idiet_repo}
          github={this.props.links.idiet_repo}
          path={this.props.files.idiet_banner}
          languages={["Node.js", "Express", "JavaScript", "HTML/CSS"]}>
          <p>Mobile web application that produces weekly diet plans based on the Harris-Benedict equation for
            recommended calories, while also keeping within a specified financial budget. The food suggestions are
            continuously improved based on past user behavior and level of physical activity (integrated with FitBit
            API).
            We also integrated with Facebook's API to allow users to share their diet plans with their friends.
            Application is built using Express and Node.js with a mySQL database.</p>
        </Project>
        <Project
          title={"FireEscape"}
          link={this.props.links.malmo_repo}
          github={this.props.links.malmo_repo}
          site={this.props.links.malmo}
          path={this.props.files.malmo_banner}
          languages={["Machine Learning", "Q-Learning", "Tensorflow", "Python", "Malmo"]}>
          <p>Machine learning project as part of our team's submissions to Microsoft's Malmo Collaborative AI
            Challenge, where we train an agent in Minecraft to make non-trivial decisions on risk / reward scenarios
            in an obstacle course game. Our model used deep Q-learning and Q-networks (Tensorflow) to optimize the
            performance of the agent
            in the game.</p>
        </Project>
        <Project
          title={"Poisson Reconstruction"}
          link={this.props.links.poission_repo}
          github={this.props.links.poission_repo}
          path={this.props.files.poisson_banner}
          languages={["MATLAB", "Computer Vision", "Image Processing"]}>
          <p>Computer vision project in which a set of images taken under special lighting conditions are composited
            to a 3D mesh that is colored and rendered into a full-scale 3D model of the original object using Poisson
            surface reconstruction and bounded box pruning. The pipeline is composed of MATLAB scripts and functions
            that perform the image processing.</p>
        </Project>
      </div>
    );
  }
}

const Project = props => {
  const {
    link,
    site,
    github,
    title,
    languages,
    path,
    children
  } = props;
  const triggerID = title.replace(/\s/g, '-');
  return (
    <FadedIn triggerID={triggerID}>
      <div onClick={() => goTo(link)} className="project box">
        <div className="project-header">
          <div className="project-icons-and-title-holder">
            <div className="external-link-icon-holder">
              <a className={(!!site ? "project-link" : "hidden")} href={site}>
                <svg className="project-link-icon website" xmlns="http://www.w3.org/2000/svg" role="img" x="0px" y="0px"
                     viewBox="0 0 15 15">
                  <path
                    d="M14.982,7C14.736,3.256,11.744,0.263,8,0.017V0H7.5H7v0.017C3.256,0.263,0.263,3.256,0.017,7H0v0.5 V8h0.017C0.263,11.744,3.256,14.736,7,14.982V15h0.5H8v-0.018c3.744-0.246,6.736-3.238,6.982-6.982H15V7.5V7H14.982z M4.695,1.635 C4.212,2.277,3.811,3.082,3.519,4H2.021C2.673,2.983,3.599,2.16,4.695,1.635z M1.498,5h1.758C3.122,5.632,3.037,6.303,3.01,7H1.019 C1.072,6.296,1.238,5.623,1.498,5z M1.019,8H3.01c0.027,0.697,0.112,1.368,0.246,2H1.498C1.238,9.377,1.072,8.704,1.019,8z M2.021,11h1.497c0.292,0.918,0.693,1.723,1.177,2.365C3.599,12.84,2.673,12.018,2.021,11z M7,13.936 C5.972,13.661,5.087,12.557,4.55,11H7V13.936z M7,10H4.269C4.128,9.377,4.039,8.704,4.01,8H7V10z M7,7H4.01 c0.029-0.704,0.118-1.377,0.259-2H7V7z M7,4H4.55C5.087,2.443,5.972,1.339,7,1.065V4z M12.979,4h-1.496 c-0.293-0.918-0.693-1.723-1.178-2.365C11.4,2.16,12.327,2.983,12.979,4z M8,1.065C9.027,1.339,9.913,2.443,10.45,4H8V1.065z M8,5 h2.73c0.142,0.623,0.229,1.296,0.26,2H8V5z M8,8h2.99c-0.029,0.704-0.118,1.377-0.26,2H8V8z M8,13.936V11h2.45 C9.913,12.557,9.027,13.661,8,13.936z M10.305,13.365c0.483-0.643,0.885-1.447,1.178-2.365h1.496 C12.327,12.018,11.4,12.84,10.305,13.365z M13.502,10h-1.758c0.134-0.632,0.219-1.303,0.246-2h1.99 C13.928,8.704,13.762,9.377,13.502,10z M11.99,7c-0.027-0.697-0.112-1.368-0.246-2h1.758c0.26,0.623,0.426,1.296,0.479,2H11.99z"/>
                </svg>
              </a>
              <a className={(!!github ? "project-link" : "hidden")} href={github}>
                <svg className="project-link-icon github" xmlns="http://www.w3.org/2000/svg" role="img"
                     viewBox="0 0 438.549 438.549">
                  <path
                    d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"/>
                </svg>
              </a>
            </div>
            <h5 className="project-title">{title}</h5>
          </div>
          <div className="languages-holder">
            {languages.map((language) => <span key={language} className="project-language">{language}</span>)}
          </div>
        </div>
        <img className="project-image" src={path} alt=""/>
        <div className="project-summary">
          {children}
        </div>
      </div>
    </FadedIn>
  );
};

function goTo(link)
{
  window.location = link;
}

export default ProjectsPage;