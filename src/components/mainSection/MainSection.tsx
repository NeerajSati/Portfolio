import React from 'react'
import './mainSection.css'
import developerImg from '../../img/Developer.gif';
import NavBar from '../NavBar/NavBar'
import {GrLinkedin} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'
import {BsArrowDownCircle} from 'react-icons/bs'
function MainSection() {
  return (
    <div className='mainSection'>
        <div className='floatContent'>
        <NavBar/>
        <div className='welcomeContent'>
            <div className='welcomeInner'>
                <div>
                    <img className='devImg' src={developerImg} alt="Dev"></img>
                </div>
                <div className='mainWelcome'>
                    Hello there, This is Neeraj Sati
                </div>
                <div className='someLines'>
                    A pre-final year undergrad, passionate about web development and programming.
                </div>
                <div className='connect'>
                    <p><a href="https://www.linkedin.com/in/neeraj-sati/" target="_blank" rel="noreferrer"><GrLinkedin/></a></p>
                    <p><a href='https://github.com/NeerajSati' target="_blank" rel="noreferrer"><BsGithub/></a></p>
                    <p><a href='https://leetcode.com/NeerajSati/' target="_blank" rel="noreferrer"><SiLeetcode/></a></p>
                    <p><a href='https://auth.geeksforgeeks.org/user/neerajsati123' target="_blank" rel="noreferrer"><SiGeeksforgeeks/></a></p>
                </div>
            </div>
        </div>
        <div className="bottomFloat">
            <a href="#about"><p className="floatIcon"><BsArrowDownCircle/></p></a>
        </div>
        </div>
    </div>
  )
}

export default MainSection