import React from 'react';
import About from './About/About';
import './App.css';
import Education from './Education/Education';
import Footer from './Footer/Footer';
import MainSection from './mainSection/MainSection';
import Project from './Project/Project';
import Skills from './Skills/Skills';

function App() {
  return (
    <div className="App">
      <MainSection/>
      <About/>
      <Education/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
