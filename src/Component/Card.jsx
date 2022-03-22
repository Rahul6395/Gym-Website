import React from "react";
import { NavLink } from "react-router-dom";


const card=(props)=>{
    return(
        <>
        


        <div className="Cards">
                 <img src={props.imgsrc} alt="img1"/>
                 <div className="serTitle">
                     <h2>{props.title}</h2>
                     <p>Some quick examples text to build on the card title and make up the bulk of the card's content.</p>
                     <NavLink to={props.visited} className="sernav">Check Now</NavLink>
                 </div>
             </div>
        </>
    )
}

export default card;