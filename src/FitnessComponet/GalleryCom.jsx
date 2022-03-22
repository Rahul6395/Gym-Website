import React from "react";
import "./GlleryCom.css";
import GalleryImg from "./GalleryImg";
import vid from "../img/video1.mp4";
import vide from "../img/video11.mp4";
import post from "../img/lady.jpg";
import post1 from "../img/payDis1.jpg";
import one from "../img/wone.jpg";
import two from "../img/wtwo.jpg";
import three from "../img/wthree.jpg";
import four from "../img/wfour.jpg";


const GalleryCom = () => {
  return (
    <>
      <div className="gallContainer">
        <div className="gallChield">
          <div className="gallTitle">
            <h1>Workout Gallery</h1>
          </div>
          <div className="imgComp">
            <GalleryImg  img={one}/>
            <GalleryImg img={two} />
            <GalleryImg  img={four}/>
          </div>
          <div className="video">
            <video src={vid} controls poster={three}></video>
            <video src={vide}  controls poster={post}></video>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default GalleryCom;
