import React from 'react';
import './App.css';
import './home.css';
import './content.css';
import Home from "./components/home";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";


function App() {
  return (
    <div className="app-container">
      <Home/>
      <div className="content pageholder">
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
