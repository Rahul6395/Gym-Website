import React from 'react';
import "./ServiceCard.css";
import { NavLink } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";

const ServiceCard = ({ icon, title }) => {
    return (
        <>
            <div className="cardContainer">
                <div className="mainCard">
                    <h6>{icon}</h6>
                    <h1>{title}</h1>
                    <p>The sea freight service has grown consider ably in recent years. We spend timetting  know.</p>
                    <NavLink className=" Navbuttons " exact activeClassName="link_active" to="/Schedule">DISCOVER MORE ABOUT US <AiOutlineArrowRight /></NavLink>
                </div>
            </div>
        </>
    )
}

export default ServiceCard;
