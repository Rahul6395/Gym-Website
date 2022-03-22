import React from "react";
import Aboutimg from "../image/aboutimg.jpg";
import Common from "./CommonHomSer";

const Abouts=()=>{
    return(
        <>
        
         
      <Common title="Welcome to About page" visit="/Contacts" visittitle="Contact Now" imgsrc={Aboutimg} />
        </>
    )
}

export default Abouts;