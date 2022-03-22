import React from 'react';
import "./JoinUs.css";
import { NavLink } from 'react-router-dom';

const JoinUs = () => {
    return (
        <>
          <div className="joinContainer">
              <div className="joinBox">
              <div className="joinTitle">
                  <h1>GET UPTO 50% DISCOUNT</h1>
                  <h2>START YOUR JOURNEY WITH OUR EXCITING OFFERS </h2>
                  <NavLink className="responsive response join " exact activeClassName="link_active"  to="/Newmember">JOIN WITH US</NavLink>
              </div>
          </div>
          </div>  
        </>
    )
}

export default JoinUs;
