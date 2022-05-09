import React from "react";
import "./project.css";
import project1 from '../img/3.jpg'
function Project() {
  return (
    <div className="project">
      <div className="aboutTitle projectTitle">Projects</div>
      <div className="projectDesc">
        Following are some of my personal projects, made using various
        technologies, Check them out...
      </div>
      <div className="allProjects">
        <a href="google.com" className="projectLink">
            <div className="singleProject">
            </div>
        </a>
        <a href="google.com" className="projectLink">
            <div className="singleProject">
            </div>
        </a>
        <a href="google.com" className="projectLink">
            <div className="singleProject">
            </div>
        </a>
        <a href="google.com" className="projectLink">
            <div className="singleProject">
            </div>
        </a>
      </div>
    </div>
  );
}

export default Project;
