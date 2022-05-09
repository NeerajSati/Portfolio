import React from "react";
import "./skills.css";
import {SiCplusplus,SiReact,SiNodedotjs,SiMongodb,SiHtml5,SiCss3,SiJavascript,SiTypescript} from 'react-icons/si';

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skillsDiv">
        <div className="aboutTitle">Skills</div>
        <div className="skillDivs">
          <div className="leftDiv">
            <div className="skillInd">
              <p><SiCplusplus className="skillIcon"/> C++</p>
              <div className="progressBar">
                <div className="progress size-80"></div>
              </div>
            </div>
            <div className="skillInd">
              <p><SiReact className="skillIcon"/>React Js</p>
              <div className="progressBar blueBar">
                <div className="progress size-90"></div>
              </div>
              <div className="skillInd">
                <p><SiNodedotjs className="skillIcon"/>Node Js</p>
                <div className="progressBar">
                  <div className="progress size-80"></div>
                </div>
              </div>
              <div className="skillInd">
                <p><SiMongodb className="skillIcon"/>Mongo DB</p>
                <div className="progressBar">
                  <div className="progress size-80"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="rightDiv">
            <div className="skillInd">
              <p>HTML<SiHtml5 className="skillIcon"/></p>
              <div className="progressBar">
                <div className="progress size-90"></div>
              </div>
            </div>
            <div className="skillInd">
              <p>CSS<SiCss3 className="skillIcon"/></p>
              <div className="progressBar">
                <div className="progress size-90"></div>
              </div>
            </div>
              <div className="skillInd">
                <p>Javascript<SiJavascript className="skillIcon"/></p>
                <div className="progressBar">
                  <div className="progress size-75"></div>
                </div>
              </div>
              <div className="skillInd">
                <p>Typescript <SiTypescript className="skillIcon"/></p>
                <div className="progressBar">
                  <div className="progress size-80"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
