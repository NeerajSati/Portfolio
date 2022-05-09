import React,{useState} from 'react'
import './navBar.css'

function NavBar() {
  
  const [navChange, setNavchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 600){
       setNavchange(true);
     }
     else{
       setNavchange(false);
     }
  };  
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <div className={ !navChange ? "navBar" : "navBar navSolid"}>
        <div className="navContent">
            <div className="navItem">HOME</div>
            <div className="navItem">ABOUT</div>
            <div className="navItem">SKILLS</div>
            <div className="navItem">PROJECT</div>
            <div className="navItem">REACH OUT</div>
        </div>
    </div>
  )
}

export default NavBar