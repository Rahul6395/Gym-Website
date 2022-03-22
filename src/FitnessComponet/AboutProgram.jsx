import React from 'react'
import "./AboutProgram.css";

const AboutProgram = (props) => {
    return (
        <>
        <section className="abProCont">
            <div className="anProChield">
                <img src={props.img} alt={props.img} />
                <h1 className="proHeading">{props.head}</h1>
            </div>
        </section>
        </>
    )
}

export default AboutProgram
