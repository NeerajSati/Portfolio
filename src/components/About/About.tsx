import React from 'react'
import './about.css'
import helloGuy from '../../img/helloGuy.gif'
function About() {
  return (
    <div className='about' id='about'>
        <div className='aboutDiv'>
            <div className='aboutTitle'>
                About Me
            </div>
            <div className='aboutInfo'>
            <p>Hi! I'm Neeraj Sati, currently working as Frontend Engineer in Adventum Student Living.</p>
            <p>I have good problem-solving and analytical skills, and have solved about 1000 programming problems on various coding platforms with contest rating of about 1900 on Leetcode.</p>
            <p>I have knowledge of various Programming Languages like C++, Javascript, React Js, Mongo DB, Express Js, Node Js, HTML, CSS, Typescript, etc.</p>
            <p>If I'm AFK, then I might be listening to music, sketching, watching movies, doing house chores or just overthinking 🥲.</p>
            <p>I have completed by B.Tech in Computer Science & Engineering from GGS Indraprastha University, Delhi.</p>
            </div>
        </div>
        <div className='aboutImgDiv'>
            <img className='guyImg' src={helloGuy} alt="GuyGif"/>
        </div>
    </div>
  )
}

export default About