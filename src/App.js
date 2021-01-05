import React, {Component, Fragment} from 'react';
import './styles/App.css';
import './styles/home.css';
import './styles/navigation.css';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import {animateScroll} from "react-scroll/modules";
import FadedIn from "./components/FadedIn";


class App extends Component {
  constructor(props) {
    super(props);
    this.settings = {
      links: {
        github: "https://github.com/joshlopez97",
        linkedin: "https://www.linkedin.com/in/josh-lopez1/",
        email: "mailto:josh@joshlopez.co",
        resume: "/JoshLopezResume.pdf",
        amazon: "https://www.amazon.com/",
        proofpoint: "https://proofpoint.com",
        idtech: "https://idtechproducts.com",
        gradetip: "https://gradetip.com/",
        gradetip_repo: "https://github.com/joshlopez97/grade-tip",
        pathfinder: "https://joshlopez97.github.io/pathfinder-visualizer/",
        pathfinder_repo: "https://github.com/joshlopez97/pathfinder-visualizer",
        quaggajs: "https://serratus.github.io/quaggaJS/",
        movienight_repo: "https://github.com/joshlopez97/MovieNight",
        portfolio_repo: "https://github.com/joshlopez97/portfolio-site",
        vivostate: "https://idtechproducts.com/products/unattended-payments/vivostate-terminal-management-system/",
        idiet_repo: "https://github.com/joshlopez97/iDiet",
        malmo: "https://joshlopez97.github.io/FireEscape/",
        malmo_repo: "https://github.com/joshlopez97/FireEscape",
        poission_repo: "https://github.com/joshlopez97/Poisson-Reconstruction",
      },
      files: {
        resume: "/JoshLopezResume.pdf",
        gradetip_banner: "/gradetip.png",
        pathfinder_banner: "/pathfinder.gif",
        movienight_banner: "/movienight.png",
        portfolio_banner: "/portfolio.png",
        vivostate_banner: "/idtech.png",
        idiet_banner: "/idiet.png",
        malmo_banner: "/malmo.png",
        poisson_banner: "/poisson.png",
      },
      pageNames: ['about', 'experience', 'projects', 'contact'],
      scrollDurations: {
        about: 1000,
        experience: 1300,
        projects: 1600,
        contact: 2000,
      },
      scrollFunctions: {},
      navigationFunctions: {},
    };
    this.lastScrollTop = 0;
    this.scrollToPosition = this.scrollToPosition.bind(this);
    this.scrollToName = this.scrollToName.bind(this);
    this.navigateToLink = this.navigateToLink.bind(this);
    this.clearNavbarTimeout = this.clearNavbarTimeout.bind(this);

    for (const linkName in this.settings.links) {
      if (this.settings.links.hasOwnProperty(linkName)) {
        const funcName = `goTo${linkName.charAt(0).toUpperCase() + linkName.substr(1).toLowerCase()}`;
        this.settings.navigationFunctions[funcName] = () => this.navigateToLink(this.settings.links[linkName]);
      }
    }

    for (const pageName of this.settings.pageNames) {
      const funcName = `goTo${pageName.charAt(0).toUpperCase() + pageName.substr(1).toLowerCase()}`;
      this.settings.scrollFunctions[funcName] = () => this.scrollToName(pageName);
    }

    this.state = {
      showNavbar: true,
      autoScrolling: false,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.showNavbar !== nextState.showNavbar;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  autoScrollStarted = (duration) => {
    if (!this.state.autoScrolling) {
      this.setState({ autoScrolling: true }, this.hideNavbar);
      setTimeout(() => {
        this.setState({ autoScrolling: false }, this.showNavbar);
      }, duration);
    }
  };

  handleScroll = () => {
    if (!this.state.autoScrolling) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (!this.state.showNavbar && this.lastScrollTop - scrollTop > 2){
        this.showNavbar();
      }
      else if (this.state.showNavbar && scrollTop - this.lastScrollTop > 2) {
        this.hideNavbar();
      }
      this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
  };

  scrollToPosition = (positionY, duration) => {
    animateScroll.scrollTo(positionY, {
      duration: duration,
      smooth: true
    });
    this.autoScrollStarted(duration);
  };

  navBarHeight = () => document.getElementById("top").clientHeight;

  bottomOfPage = () => document.getElementsByClassName(`footer`)[0].getBoundingClientRect().top - window.innerHeight + window.pageYOffset;

  scrollToName = (pageName) => {
    const position = pageName === 'contact'
      ? this.bottomOfPage()
      : document.getElementsByClassName(`${pageName} page`)[0].getBoundingClientRect().top + window.pageYOffset - this.navBarHeight();
    this.scrollToPosition(position, this.settings.scrollDurations[pageName]);
  };

  navigateToLink = (link) => {
    window.location = link;
  };

  clearNavbarTimeout = () => {
    this.navbarTimeout = null;
  };

  showNavbar = () => {
    if (!this.navbarTimeout && !this.state.showNavbar) {
      this.setState({ showNavbar: true });
      this.navbarTimeout = setTimeout(this.clearNavbarTimeout, 500);
    }
  };

  hideNavbar = () => {
    if (!this.navbarTimeout && this.state.showNavbar) {
      this.setState({ showNavbar: false });
      this.navbarTimeout = setTimeout(this.clearNavbarTimeout, 500);
    }
  };

  render() {
    const animationDurationPx = 200,
      animationOffsetPx = -200;
    return (
      <Fragment>
        <HomePage links={this.settings.links}
                  showNavbar={this.state.showNavbar}
                  scrollToPosition={this.scrollToPosition}
                  scrollFunctions={this.settings.scrollFunctions}
        />
        <div className="content pageholder">
          <FadedIn triggerID={"about"} duration={animationDurationPx} offset={animationOffsetPx}>
            <AboutPage links={this.settings.links}/>
          </FadedIn>
          <FadedIn triggerID={"experience"} duration={animationDurationPx} offset={animationOffsetPx}>
            <ExperiencePage links={this.settings.links}
                            navigationFunctions={this.settings.navigationFunctions}/>
          </FadedIn>
          <FadedIn triggerID={"projects"} duration={animationDurationPx} offset={animationOffsetPx}>
            <ProjectsPage links={this.settings.links}
                          files={this.settings.files}/>
          </FadedIn>
          <FadedIn triggerID={"contact"} duration={animationDurationPx} offset={animationOffsetPx}>
            <ContactPage links={this.settings.links}
                         files={this.settings.files}/>
          </FadedIn>
          <Footer/>
        </div>
      </Fragment>
    );
  }
}

export default App;
