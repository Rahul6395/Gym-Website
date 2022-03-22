import React from "react";
import ReactDom  from "react-dom";
import Menubar from "./FitnessComponet/Menubar";
//import Member from "./FitnessComponet/MembershipPlans";
//import MyApp from "./Npmcoundown";
//import App from  "./FitnessComponet/App";
//import Mainapp from  "../src/GoogleKeep project/Mainapp";
//import Pika from "../src/Component/Pikachoo";
import {BrowserRouter} from "react-router-dom";
//import Menu from "../src/MenuNavbar/RouterMenu";
//import Search from "../src/MenuNavbar/Searchimg"
//import Apps from "../src/Component/Apps";
//import Gallary from "../src/Resturentimg gallary/Gallary";
ReactDom.render(
  
    <>
  <BrowserRouter>
  <Menubar/>

  </BrowserRouter> 
  
  </>
   
,document.getElementById("root")
);