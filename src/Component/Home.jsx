import React from "react";
import homeimg from "../image/homeimg.jpg";
import Common from "./CommonHomSer";

const Home=()=>{
    return(
        <>
      <Common title="Grow your business with" visit="/Services" visittitle="Get Started" imgsrc={homeimg} />
        </>
    )
}

export default Home;