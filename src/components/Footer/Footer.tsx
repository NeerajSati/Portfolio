import React from 'react'
import './footer.css'
import {GrLinkedin} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {MdAlternateEmail} from 'react-icons/md'
import {SiCodechef} from 'react-icons/si'
import laptopGuy from '../../img/Laptop.gif'

function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className="aboutTitle footerTitle">
          Reach Out
      </div>
                <div className='footerConnect'>
                    <p><a href="https://www.linkedin.com/in/neeraj-sati/" target="_blank" rel="noreferrer"><GrLinkedin className='connectIcon'/></a></p>
                    <p><a href='https://github.com/NeerajSati' target="_blank" rel="noreferrer"><BsGithub className='connectIcon'/></a></p>
                    <p><a href='mailto:neeraj.sati123@gmail.com' target="_blank" rel="noreferrer"><MdAlternateEmail className='connectIcon'/></a></p>
                    <p><a href='https://leetcode.com/NeerajSati/' target="_blank" rel="noreferrer"><SiLeetcode className='connectIcon'/></a></p>
                    <p><a href='https://www.codechef.com/users/neeraj_sati' target="_blank" rel="noreferrer"><SiCodechef className='connectIcon'/></a></p>
                    <p><a href='https://auth.geeksforgeeks.org/user/neerajsati123' target="_blank" rel="noreferrer"><SiGeeksforgeeks className='connectIcon'/></a></p>
                    <p><a href='https://twitter.com/satineeraj17' target="_blank" rel="noreferrer"><AiOutlineTwitter className='connectIcon'/></a></p>
                    <p><a href='https://www.instagram.com/neerajsati17' target="_blank" rel="noreferrer"><BsInstagram className='connectIcon'/></a></p>
                </div>
                
        <div className='footerImgDiv'>
            <img className='footerImg' src={laptopGuy} alt="GuyGif"/>
        </div>
    </div>
  )
}

export default Footer