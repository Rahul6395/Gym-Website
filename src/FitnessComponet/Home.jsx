import React from 'react';
import "./Home.css";
import Hbg from "./Hbg"
import AboutA from './AboutA';
import { NavLink } from 'react-router-dom';
import Ourservices from './OurServices';
import OurProgram from './OurProgram';
import JoinUs from './JoinUs';
import GymTrainer from './GymTrainer';
import GalleryCom from './GalleryCom';
import Navbar from "./Navbar";

import Footer from "./Footer";


const Home = () => {
    return (
        <><Navbar/>
    <div className="HomeContainer">
     <div className="headerTitle">       
        <h2 className="hhover"><span className="before"></span>WITH PATRICK POTTER</h2>
        <h1>BUILD PERFACT BODY SHAPE FOR GOOD AND HEALTHY LIFE.</h1>
        <NavLink className="   responsive NavTitle" exact activeClassName="link_active"  to="/Newmember">BECAME MEMBER</NavLink>
        </div>
        </div>
     
   <Hbg/>      
<AboutA/>
<Ourservices/>

<OurProgram/>
<JoinUs/>
<GymTrainer/>
<GalleryCom/>

<Footer/>

        </>
    )
}

export default Home;
