import React from 'react';
import "./Hbg.css";


const Hbg = (props) => {
    return (
        <>
          <div className={`appb ${props.AboutImg}`}><h1 className="hbtext">{props.text}</h1></div>
          
          
        </>
    )
}

export default Hbg;
