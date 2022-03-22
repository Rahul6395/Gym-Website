import React from "react";
import Home from  "./Home";
import Services from  "./Services";
import Abouts from  "./Abouts";
import Contacts from  "./Contacts";
import { Switch , Route , NavLink , Redirect } from "react-router-dom";
//import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const ThapaNavbar =()=>{
    return(
        <>
<div className="navContainer">
<div className="navLinks">

<h1>ReactFirstProjects</h1>

<div className="Navlink">
<NavLink exact activeClassName="link_active"  to="/" className="linkf">Home </NavLink>
 <NavLink activeClassName="link_active" to="/Services" className="linkf">Services </NavLink>
 <NavLink activeClassName="link_active" to="/Abouts" className="linkf" >Abouts</NavLink>
 <NavLink activeClassName="link_active" to="/Contacts" className="linkf" > Contacts </NavLink>
 </div>
</div>
</div>


<Switch>
<Route exact path="/" component={Home}/>
<Route path="/Services" component={Services}/>
<Route path="/Abouts" component={Abouts}/>
<Route path="/Contacts" component={Contacts}/>
<Redirect to="/"/>
</Switch>
        </>
    )
}

export default ThapaNavbar;