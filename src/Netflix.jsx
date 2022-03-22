import React from "react";
import "./index.css";

function Net(props){
   // console.log(props);
    return(
        <>
        
    <div className="mainDiv">
    <div className="card">
    <div className="Cards">
    <img src={props.imgadd} alt="img"/>
    
<div className="title">
    <span>{props.pgh}</span>
    <h2>{props.movieName}</h2>
    <a href={props.link}target="_blank"><button>WATCH NOW</button></a>
</div>
    </div>
    </div>
    </div>
    </>)
}

export default Net;