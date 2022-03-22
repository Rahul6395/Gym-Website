import React from "react";
import { NavLink } from "react-router-dom";

const Common =(props)=>{
    return(
        <>
          <div className="homeContainer">
            <div className="containerChield">
             <h1>{props.title}</h1> 
             <h1 className="homeheading">ReactWebsites</h1> 
             <p>We are team of talanted developer making websites</p>
             <NavLink to={props.visit} >{props.visittitle}</NavLink>
            </div>

            <div className="homeimg">
                <img src={props.imgsrc}  alt="homeheaderimg"/>
            </div>
        </div>
        <h5 className="homeTitle">@2021 React. All Rights | Term and Condition</h5>
        </>
    )
}

export default Common;