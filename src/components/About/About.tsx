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
            <p>I am Neeraj Sati, a final year Engineering undergrad at G.B. Pant Government Engineering College. I am currently practicing Data Structures and algorithms and active in web development. </p>
            <p></p>I have knowledge of various Programming Languages like C++, Javascript, React Js, Mongo DB, Express Js, Node Js, HTML, CSS, Typescript, etc. I aspire to become a Software Development Engineer.
 
            <p>If I'm AFK, then I might be listening to music, sketching, watching movies, doing house chores or just overthinking 🥲.</p>
            </div>
        </div>
        <div className='aboutImgDiv'>
            <img className='guyImg' src={helloGuy} alt="GuyGif"/>
        </div>
    </div>
  )
}

export default About