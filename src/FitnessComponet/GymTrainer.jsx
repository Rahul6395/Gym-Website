import React from "react";
import GymTrainerHoverEffect from "./GymTrainerHoverEffect";
import "./GymTrainer.css";
import img1 from "../img/hover1.jpg";
import img2 from "../img/hover2.jpg";
import img3 from "../img/photo1.jpg";

const GymTrainer = () => {
  return (
    <>
      <div className="trainerContainer">
        <div className="trainerChield">
          <div className="trainerTitle ourProhed">
            <h1>Our Trainer</h1>
            <p>
              Our fitness experts can help you discover new training techniques.
            </p>
          </div>
          <div className="trainerImgContainer">
         <GymTrainerHoverEffect img={img1} name="Martin Alex"/> 
         
         <GymTrainerHoverEffect img={img2} name="Hayley Kim"/> 
         
         <GymTrainerHoverEffect img={img3} name="Victor Freites"/> 
         </div>
        </div>
      </div>
    </>
  );
};

export default GymTrainer;
