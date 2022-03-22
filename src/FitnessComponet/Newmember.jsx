import React from 'react';
import "./Newmember.css";
import Navbar from "./Navbar"
import Footer from "./Footer"

import Hbg from "./Hbg"

const Newmember = () => {
    return (
        <div>
        <Navbar/>
             <section className="loginImg">
                <div className="loginBox">
                <form className='loginForm' >
                <h1 className='loginHeading'>Login</h1>
                <label className='emailLabel'>Email</label>
                    <input type="email" placeholder='Enter your email...'/>
                    <label className='passwordLabel'>Password</label>
                    <input type="password" placeholder='Enter your password...' />
                    <button type="submit" className='loginButton'>Login</button><br></br>
        
                </form>
           
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Newmember;
