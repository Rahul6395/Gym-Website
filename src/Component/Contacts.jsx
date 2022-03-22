import React,{useState} from "react";

const Contacts=()=>{
    const [text,setText]=useState({FullName:"",MobilNo:"",Emailid:"",msg:""});

    const changeHandler=(event)=>{
const{value,name}=event.target;
setText((pre)=>{
    return{...pre,[name]:value,};
});
    };
    const FormSubmit =(e)=>{
e.preventDefault();
alert(`${text.FullName} ${text.MobilNo} ${text.Emailid} ${text.msg}`);
setText(" ");
    }
    return(
        <>
         <div className="conContainer">
             <div className="conChield">
             <h1>Contacts</h1>
             <form onSubmit={FormSubmit}>
             <label>Full Name</label>
                 <input type="text"  value={text.FullName}  autoComplete="off" name="FullName" placeholder="Enter your name"   onChange={changeHandler}/>
             <label>Mobile No.</label>
                 <input type="number"  value={text.MobilNo} autoComplete="off" name="MobilNo" placeholder="+91"  onChange={changeHandler}/>
             <label>Email Id</label>
                 <input type="email"  value={text.Emailid}  autoComplete="off"name="Emailid" placeholder="Enter your Email id"  onChange={changeHandler}/>
                 <label>Message</label>
                 <textarea  value={text.msg} name="msg" autoComplete="off" placeholder="Message" cols="2" rows="2" onChange={changeHandler}></textarea>
                
            <button type="submit">Submit Now</button>
            </form>
             </div>
             
         </div>
        </>
    )
}

export default Contacts;