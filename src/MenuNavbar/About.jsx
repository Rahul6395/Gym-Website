import React from "react";
import { Link } from "react-router-dom";

const About=(props)=>{
    return(<>
    {/* <h1>this about Page</h1>
    <h2>Lorem100
    tis is About Page{props.name}
    </h2> */}

    <Link to="reactjs"><h1>react js course</h1></Link>

    <Link to="nodejs"><h1>node js course</h1></Link>
    </>
    )
}

export default About;