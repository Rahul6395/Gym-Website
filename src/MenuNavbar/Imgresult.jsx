import React from "react";

 
const Result =(props)=>{
    const src=`https://source.unsplash.com/300x300/? ${props.name}`
    return(<>
<img src={src} alt="unplash"/>
    </>)
}

export default Result;