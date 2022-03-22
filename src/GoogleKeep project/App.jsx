import React,{useState} from "react";
import "./Gkeep.css";


const App=(props)=>{
    const[item,setitem]=useState({title:"",content:""});

    const changehandler=(event)=>{
        const{value,name}=event.target;
     setitem((preValue)=>{
         return{...preValue,[name]:value,}
     });
    }
    // var a="b";
    // var c={[a]:"d"};
    //  console.log(c);
    const addEvent=()=>{
        props.passNote(item);
        setitem({title:"",content:""});
    }
   
    return(
        <>
          <div className="mainG">
          <div className="child">
          <h2>Google Keep</h2>
        <br/><div className="inputField">
        <div className="forms">
        <input type="text" placeholder="Title" autoComplete="off" name="title" onChange={changehandler} value={item.title}/><br/>
        <textarea placeholder="Write a note" name="content" onChange={changehandler} value={item.content} rows="" column=""/><br/>
        <button className="addButton" onClick={addEvent}>+</button>
          </div>
          </div>
          </div>
          </div> 
           
        
        </>
    )
}

export default App;