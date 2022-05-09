import React from "react";
import "./project.css";
import googleClone from "../../img/googleClone.jpg";
import primeClone from "../../img/primeClone.jpg";
import blogspot from "../../img/blogspot.jpg";
import memorizer from "../../img/memorizer.jpg";
function Project() {
  return (
    <div className="project">
      <div className="aboutTitle projectTitle">Projects</div>
      <div className="projectDesc">
        Following are some of my personal projects, made using various
        technologies, Check them out...
      </div>
      <div className="allProjects">
        <div className="projectGrid">
          <a href="https://github.com/NeerajSati/google-clone" className="projectLink">
            <img
              alt="projectImage"
              src={googleClone}
              className="projectImg"
            ></img>
            <div className="singleProject">Google Clone</div>
          </a>
          <a href="https://github.com/NeerajSati/BlogSpot" className="projectLink">
            <img alt="projectImage" src={blogspot} className="projectImg"></img>
            <div className="singleProject">BlogSpot</div>
          </a>
          <a href="https://github.com/NeerajSati/PrimeVideosClone" className="projectLink">
            <img
              alt="projectImage"
              src={primeClone}
              className="projectImg"
            ></img>
            <div className="singleProject">PrimeVideos Clone</div>
          </a>
          <a href="https://github.com/NeerajSati/memorizer" className="projectLink">
            <img
              alt="projectImage"
              src={memorizer}
              className="projectImg"
            ></img>
            <div className="singleProject">Memorizer Game</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
