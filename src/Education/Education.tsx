import React from 'react'
import './education.css'

function Education() {
  return (
    <div className='education'>
        <div className='educationDiv'>
            <div className='subTitle'>
                <div className='aboutTitle educationTitle'>Education</div>
            </div>
            <div className='subDesc'>
                <div className='schoolName'>
                    G.B. Pant Government Engineering College
                </div>
                <div className='degreeName nopadding'>
                    <p>B. Tech Computer Science and Engineering</p>
                    <p>2019 - 2023</p>
                </div>
                <div className='degreeName'>
                    CGPA: 8.54
                </div>
                <div className='schoolName'>
                    Kendriya Vidyalaya Shalimar Bagh
                </div>
                <div className='degreeName nopadding'>
                    <p>Class XII</p>
                    <p>2019</p>
                </div>
                <div className='degreeName'>
                    Percentage: 89%
                </div>
                <div className='schoolName'>
                    Kendriya Vidyalaya Shalimar Bagh
                </div>
                <div className='degreeName nopadding'>
                    <p>Class X</p>
                    <p>2017</p>
                </div>
                <div className='degreeName'>
                    CGPA: 9.8
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education