import React from "react";
import Card from "./Card";
import cardapi from "./CardApi";


const Services=()=>{
    return(
        <>
         <h2 className="serheading"> Our Services</h2>
        <div className="servicesContainer">
        <div className="sercontainerChield">
        {
            cardapi.map((val,ind)=>{
            return<Card key={ind} imgsrc={val.imgsrc} title={val.title} visited={val.visited}/>
            
        })}
         </div>
         
        </div>
        </>
    )
}

export default Services;