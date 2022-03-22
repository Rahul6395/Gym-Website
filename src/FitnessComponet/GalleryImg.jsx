import React from 'react';
import "./GlleryCom.css";


const GalleryImg = (props) => {
    return (
        <div className="gallImgCon">
        <div className="galleryimg">
        <img src={props.img} alt="dsd"/>
        </div>
        </div>
    )
}

export default GalleryImg;
