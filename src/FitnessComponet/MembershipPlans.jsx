import React from 'react';
import "./MembershipPlans.css";
import { BsCheck } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const MembershipPlans = (props) => {
    return (
        <>
            <div className="planContainer">
                <div className="PlanChield">
                    {/* <div className="PlanTitle">
                        <h1>Membership Plans</h1>
                    </div> */}
                    <section className="planBoxContainer">
                        <section className="planBox">
                            <h2 className={`Basic ${props.cardColor}`}>{props.planeName}</h2>
                            <div className="plan_p">
                                <h1 className="PlanPrice">${props.planePrice}</h1>
                                <h3>3 Month</h3>
                            </div>
                            <ul className="planul">
                                <li className="planLi"><span><BsCheck /></span>Weight Lifting</li>
                                <li className="planLi"><span><BsCheck /></span>Cardio</li>
                                <li className="planLi"><span><BsCheck /></span>Training</li>
                                <li className="planLi"><span><BsCheck /></span>Yoga</li>
                                <li className="planLi"><span><BsCheck /></span>Zumba</li>
                            </ul>
                            <NavLink className="planButton" exact activeClassName="link_active"  to="/Newmember">Check Out</NavLink>
                          
                        </section>
                    </section>
                </div>
            </div>






        </>
    )
}

export default MembershipPlans;
