import React from 'react';
import { NavLink } from 'react-router-dom';
import "./JoinSection.css";

const JoinSection = () => {
    return (
        <>
            <div className="joinsecContainer">
              <div className="joinsecBox">
              <div className="joinsecTitle">
                  <h1>Join this month and get 2 months FREE</h1>
                  <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. </p>
                  </div>
                  <div className="joinsbtn">
                  <NavLink className="responsive response joined " exact activeClassName="link_active"  to="/Contact">JOIN WITH US</NavLink>
                  </div>
          </div>
          </div> 
        </>
    )
}

export default JoinSection;