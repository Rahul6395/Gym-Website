import React from 'react';
import "./PayDiscount.css";
import { NavLink } from 'react-router-dom';
import { FcOk } from "react-icons/fc";
import paydis from "../img/payDis2.jpg";

const PayDiscount = () => {
    return (
        <>
           <div className="payContainer">
           <div className="payChield">
               
               <div className="imgpay">
                   <img src={paydis} alt="paydis" />
               </div>
               <div className="payTitle">
                   <h1 className="payHading">
                       Pay now and get a 25% <strong>Discount</strong>
                   </h1>
                   <ul className="payUl">
                       <li><span><FcOk/></span>Lorem ipsum dolor sit amet,consectetur adipiscin elit.</li>
                       <li><span><FcOk/></span>Lorem ipsum dolor sit amet,consectetur adipiscin elit.</li>
                       <li><span><FcOk/></span>Lorem ipsum dolor sit amet,consectetur adipiscin elit.</li>
                   </ul>
                   <NavLink className="responsive  respons navPay" exact activeClassName="link_active"  to="/Newmember">BECAME MEMBER</NavLink>
               </div>
           </div>
           </div> 
        </>
    )
}

export default PayDiscount;
