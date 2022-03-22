import React from "react";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import { Route , Switch, Link, Redirect } from "react-router-dom";

const Menu=()=>{
    return(
        <>
{/*         
     <About/>
     <Contact/> */}

     
     {/* <Link to="/">About </Link><br></br>
     <Link to="/contact/adom/stew">Contact </Link>
     
     <Switch>
     <Route exact path="/" component={()=><About name="about nam props se pass kiya h"/>}/> //
     <Route path="/contact/:fname/:lname" render={()=><Contact />}/>
  <Route path="" component={()=><Error/>}/>   Agar um apne page me 404 error nhi dikhana chahte h to redirect 
     ka use kr skte h. Agar url me vo exxist nhi krta h to ak hi page set kr dete h 

     <Redirect to="/"/>
     </Switch> */}

         </>
    );
};

export default Menu;