import React from "react";
import "./project.css";
import project1 from "../img/3.jpg";
function Project() {
  return (
    <div className="project">
      <div className="aboutTitle projectTitle">Projects</div>
      <div className="projectDesc">
        Following are some of my personal projects, made using various
        technologies, Check them out...
      </div>
      <div className="allProjects">
          <div className="firstProjects">
          <a href="google.com" className="projectLink">
            <img alt="projectImage" src={project1} className="projectImg"></img>
            <div className="singleProject">Google Clone</div>
          </a>
          <a href="google.com" className="projectLink">
            <img alt="projectImage" src={project1} className="projectImg"></img>
            <div className="singleProject">BlogSpot</div>
          </a>
          </div>
          <div className="secondProjects">
          <a href="google.com" className="projectLink">
            <img alt="projectImage" src={project1} className="projectImg"></img>
            <div className="singleProject">PrimeVideos Clone</div>
          </a>
          <a href="google.com" className="projectLink">
            <img alt="projectImage" src={project1} className="projectImg"></img>
            <div className="singleProject">Memorizer Game</div>
          </a>
          </div>
        </div>
    </div>
  );
}

export default Project;
