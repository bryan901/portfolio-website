import Header from "./components/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import WorkExperience from "./sections/WorkExperience";
import Skills from "./sections/Skills";
import './styles/App.css'
import React from 'react';


function App() {
  return (
    <div className = "app">
      <Header/>
      <div className = "sections">
          <Home/>
          <About/>
          <Skills/>
          <WorkExperience/>
          <Projects/>
      </div>
    </div>
  );
}

export default App;
