import React from 'react';
import "./Gallery.css";


const GallComImg = (props) => {
    return (
        <>
           <div className="imgCom">
           <img src={props.imgbtn} alt={props.imgbtn}/>
               
           </div> 
        </>
    )
}

export default GallComImg
