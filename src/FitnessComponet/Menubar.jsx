import React ,{useState}from 'react';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Schedule from "./Schedule";
import Services from "./Schedule";
import { Switch, Route, Redirect } from 'react-router-dom';
import Newmember from './Newmember';


 

const Menubar = () => {



    return (
        <>
 

         <Switch>
             <Route exact  path="/" component={Home}></Route>
             <Route  exact path="/About" component={About}></Route>
             <Route  exact path="/Contact" component={Contact}></Route>
             <Route  exact path="/Gallery" component={Gallery}></Route>
             <Route  exact path="/Schedule" component={Schedule}></Route>
             <Route  exact path="/Services" component={Services}> </Route>
             <Route  exact path="/Newmember" component={Newmember}></Route>
             <Redirect to="/"></Redirect>
         </Switch>   
        </>
    )
}

export default Menubar;
