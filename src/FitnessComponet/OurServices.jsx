import React from 'react';
import "./OurServices.css";
import ServiceCard from './ServiceCard';
import {FaDumbbell,FaHeartbeat} from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";


const Ourservices = () => {
    return (
        <>
           <div className="ourSerContainer">
               <div className="ourSerChield">
                   <div className="ourTitle">
                   <h2><span className="beforeOurser"></span>OUR SERVICES FOR YOU</h2>
                 <h1>PUSH YOUR LIMITS <br/>FORWARD WE OFFER TO YOU</h1>
                   </div>
                   <section className="cardFlex">
                   <ServiceCard icon={<FaDumbbell/>} title="GYM EQUIMENT"/>       
                   <ServiceCard icon= {<FaHeartbeat/>} title="HEALTY CARING"/>       
                   <ServiceCard icon={<AiOutlineFieldTime/>}  title="GYM STRATEGIES"/>       
                   </section>       
               </div>
               
           </div>
        

        </>
    )
}

export default Ourservices;
