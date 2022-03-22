import React from "react";

const Todoli =(props) =>{

    

return (
        <>
        <div className="crossDiv">
         <button className="crossicon"
          onClick={()=>{props.onSelect(props.id);}}>X</button>
    <li>{props.mapprops} </li>
   </div>
    </>)
};




export default Todoli;