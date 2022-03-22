import React,{useState} from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import UpperIcon from "./UpperIcon";
import "./Menubar.css";
import {NavLink} from "react-router-dom";
import Menubar from "./Menubar";

const Navbar = () => {

    const  [showHamburger,setShowHamburger]=useState(false);
    const  [fixedNav,setFixedNav]=useState(false);
    

const fixedNave=()=>{
    console.log(window.scrollY)
    if(window.pageYOffset >= 160){
           setFixedNav(true); 
   }else{
    setFixedNav(false) ;  
}
}
 window.addEventListener('scroll',fixedNave)

    return (
        <>
           <UpperIcon/>      
<div className={fixedNav?"NavContainerFixed":"NavContainer"}>
<div className="NavHeader">

<NavLink className="NavLink" exact  activeClassName="link_active" to="/"><h1 className="Logo">T<span className="Logot">Fitness</span></h1> </NavLink>
{/* HAmburger */}
<p onClick={()=> setShowHamburger(!showHamburger)}>{showHamburger?  <FaTimes/> : <GiHamburgerMenu/>}</p>

<div className={showHamburger?"NavLinkss mobile_navbar":"NavLinkss"}>

<NavLink className="NavLink" exact  activeClassName="link_active" to="/">Home </NavLink>
<NavLink  className="NavLink" exact activeClassName="link_active"  to="/About">About</NavLink>
{/* <NavLink className="NavLink" exact activeClassName="link_active"  to="/Services">Services</NavLink> */}
<NavLink className="NavLink" exact activeClassName="link_active"  to="/Schedule">Service</NavLink>
<NavLink className="NavLink" exact activeClassName="link_active"  to="/Gallery">Gallery</NavLink>
<NavLink className="NavLink" exact activeClassName="link_active"  to="/Contact">Contact</NavLink>
<NavLink className="NavLink Navbutton" exact activeClassName="link_active"  to="/Newmember">BECAME MEMBER</NavLink>
</div>
</div>
</div>
  
        </>
    )
}

export default Navbar
