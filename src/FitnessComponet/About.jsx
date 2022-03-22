import React from 'react';
import AboutA from "./AboutA";
import Navbar from "./Navbar";
import Hbg from "./Hbg";
import program from "./AboutProgram";
import AboutProgram from './AboutProgram';
import "./AboutProgram.css";
import imgo from "../img/pro1.jpg";
import imgt from "../img/pro2.jpg";
import imgth from "../img/pro3.jpg";
import imgfo from "../img/pro4.jpg";
import Aimg from "../img/payDis.jpg";
import Footer from './Footer';
import "./Hbg.css";

const About = () => {
    return (
        <>
            <Hbg AboutImg="aboutimg" text="About Us"/>
            <Navbar/>
            <section className="aboutsec">
            <AboutProgram img={imgo} head="Personal Training Program"/>
            <AboutProgram img={imgt} head="Corporate Wellness Program"/>
            <AboutProgram img={imgth} head="Join Group Exersice Program"/>
            <AboutProgram img={imgfo} head="Healthy Diet & Suppliment"/>  
            </section>
            <AboutA />
         
            <Footer/>
        </>
    )
}

export default About;
