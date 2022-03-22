import React from 'react'
import AAimg from "../img/AboutB.jpg";
import { NavLink } from 'react-router-dom';
import "./AboutA.css";

const AboutA = (props) => {
    return (
        <>
           <div className="AboutAcontainer">
               <div className="AboutAchield">
                   <div className="AboutAimg">
                    <img src={AAimg} alt="AAimg" />
                   </div>
                   <div className="AboutAtitle">
                        <h2><span className="beforeAbout"></span>ABOUT OUR GYM</h2>
                        <h1>SAFE BODY BUILDING PROPER SOLUTIONS THAT SAVES OUR VALUABLE TIME!</h1>
                        <h4>Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replication of the designers is intended.</h4>
                        <p>Brook presents your services with flexible, convefnient and chient anipurpose layouts. You can select your favorite layouts.</p>
                        <NavLink className=" responsive respons" exact activeClassName="link_active"  to="/Newmember">BECAME MEMBER</NavLink>
                   </div>
               </div>
           </div> 
           
        </>
    )
}

export default AboutA;
