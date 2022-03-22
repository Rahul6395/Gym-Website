import React from "react";

const Note=(props)=>{
    const deleteNote=()=>{
          props.deleteitem(props.id);
    }
    return(
<>
    <div className="mainNote">
    <h2 className="noteh2">{props.title}</h2><br/>
    <p className="notepara">{props.content}</p>
    <button className="cutbutton" onClick={deleteNote}>X</button>
    </div>
    
</>
)
}

export default Note;