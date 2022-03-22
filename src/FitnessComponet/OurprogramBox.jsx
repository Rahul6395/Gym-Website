import React from 'react';
import "./OurProgram.css"

const OurprogramBox = (props) => {
    return (
        <><div className={`Boxparent ${props.style}`} style={{backgroundColor:"black"}}>
         <div className="proBox" >
         
             <h1 className="iconHe">{props.icons}</h1>
             <h2 className="boxhea">{props.heading}</h2>
             <p>We have a wide choice of classes that are a great complement to any training programme.</p>
         </div>   
         </div>
         
         
        </>
    )
}

export default OurprogramBox;
