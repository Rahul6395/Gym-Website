import React,{useState} from "react";
import Note from "./Note";
import App from  "./App";

const Mainapp=()=>{
const [addItem,setaddItem]=useState([]);


    const addNote=(item)=>{
     setaddItem((oldValue)=>{
         return[...oldValue,item];
     });console.log(item) 
    };

    const onDelete=(id)=>{
setaddItem((oldData)=>{
    oldData.filter((curdata,indx)=>{
        return indx !== id;
    })
})
    }
return(

    <>
        <App  passNote={addNote}/>
        
       { addItem.map((val,index)=>{
            return(
                <Note key={index} id={index} content={val.content} title={val.title}
                    deleteitem={onDelete}
                />
            )
        })}
    </>
)
}

export default Mainapp;