import React from 'react';
import About from './components/About/About';
import './App.css';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import MainSection from './components/mainSection/MainSection';
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App" id='main'>
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
