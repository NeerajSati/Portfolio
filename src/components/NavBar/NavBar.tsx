import React,{useState} from 'react'
import './navBar.css'

function NavBar() {
  
  const [navChange, setNavchange] = useState(false);
  const changeNavbar = () =>{
     if(window.scrollY >= 550){
       setNavchange(true);
     }
     else{
       setNavchange(false);
     }
  };  
  window.addEventListener('scroll', changeNavbar);
  return (
    <div className={ !navChange ? "navBar" : "navBar navSolid"}>
        <div className="navContent">
            <a href="#main"><div className="navItem">HOME</div></a>
            <a href="#about"><div className="navItem">ABOUT</div></a>
            <a href="#skills"><div className="navItem">SKILLS</div></a>
            <a href="#project"><div className="navItem">PROJECTS</div></a>
            <a href="#footer"><div className="navItem">REACH OUT</div></a>
        </div>
    </div>
  )
}

export default NavBar