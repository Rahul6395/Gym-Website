import React from "react";
import { useHistory, useLocation, useParams } from "react-router";

import { Link } from "react-router-dom";

const Contact=()=>{
    
    // const {fname, lname} = useParams();
    // const location=useLocation();
    // console.log(location);
    // const history = useHistory();
    // console.log(history);

    return(
    <>
    {/* <h1>this Contact Page</h1>
    <p>this is a contact {fname}{lname} page</p>
    {fname === "rahul"? "WelCome Rahul" : "Please Login"}
    <p>My  Location is {location.pathname}</p>
    <button onClick={()=>history.goBack()}>back</button> */}


<h1>WelCome to course{props.match.params.coursename}</h1>


     </>   
        )
}

export default Contact;