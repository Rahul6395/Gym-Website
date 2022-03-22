import React from 'react';
import "./GymTrainer.css";

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaWhatsapp,
  } from "react-icons/fa";
  

const GymTrainerHoverEffect = ({img,name}) => {
    return (
        <div className="HoverGymCon">
           <div className="trainerImg">
            <img src={img} alt="ewe" />
            
            <div className="trainerHover">
              <h3>Cretive Derector</h3>
              <h2>{name}</h2>
              <p>
                Body Building, the original LES MILLS barbell class, will
                sculpt, tone and strengthen your entire body, fast!
              </p>
              <ul>
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaWhatsapp />
                </li>
              </ul>
            </div> 
          </div>  
        </div>
    )
}

export default GymTrainerHoverEffect;
