import React from 'react';
import "./Contact.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Contact = () => {
    return (<>
    <Navbar/>
        <div className='contactCon'>
        <div className='contactConChield'>
           <div className="contactBox">
           <h1 className='contactText'>Contact Us</h1>
               <form className='contactForm'>
                   <input type="text" placeholder='Full Name' required/>
                   <input type="email" placeholder='Email' required/>
                   <input type="number" placeholder='phone Number' required/>
                   <textarea placeholder='Message' rows="2" cols="5"/>
                   <input type="submit" placeholder="submit" className='submitbtnCon'/>
               </form>
           </div>
        </div>  
        </div>
        <Footer/>
        </>
    )
}

export default Contact;
