import React from 'react';
import OurprogramBox from './OurprogramBox';
import "./OurProgram.css";
import video1 from "../img/video11.mp4";
import {FaDumbbell} from "react-icons/fa"
import { RiMentalHealthLine } from "react-icons/ri";
import { GrYoga,GrAccessibility } from "react-icons/gr";
import { BsFillPlayCircleFill } from "react-icons/bs";


const OurProgram = () => {
const bgcolor={
    background: "#9d69d8",
    background: "#62b3d3",
    background: "#5acd57",
    background: "#ed5e4c"

}


    return (
        <>
         <div className="ourProCon">
             <div className="ourProChie">
                 <div className="ourProTitle">
                 <div className="ourProhed">
                 
                     <h1>Our Program</h1>
                     <p>Our fitness experts can help you discover new training techniques 
                     and exercises that offer a dynamic and efficient full-body workout.</p>
                    </div>
                     <div className="ourProBox">
                         <OurprogramBox style="bg1" icons={<FaDumbbell/>} heading="Weight Lifting"/>
                         <OurprogramBox icons={<GrAccessibility/>} heading="Body Building"/>
                         <OurprogramBox icons={<RiMentalHealthLine/>} heading="Healthy"/>
                         <OurprogramBox icons={<GrYoga/>} heading="Yoga"/>
                     </div>  
                 </div>
                 <div className="ourProVideoCon">
                 <video  className="playBtn" ><source  src=""/>
                 <BsFillPlayCircleFill className="playIcon"/>
                 </video>
{/* 
                 <iframe  classNamw="ourProVideoCon" width="1660" height="600" src="https://www.youtube.com/embed/gey73xiS8F4" 
                 title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture" allowfullscreen> <BsFillPlayCircleFill className="playIcon"/></iframe> */}

                 </div>
             </div>
         </div>   
        </>
    )
}

export default OurProgram;
