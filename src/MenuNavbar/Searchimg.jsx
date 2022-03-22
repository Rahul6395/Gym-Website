import React, {useState} from "react";
import Result from "./Imgresult";
 
const Search =()=>{
    const[img, setImg] = useState();

const Handler=(e)=>{
const sech = e.target.value;
setImg(sech);
}
    return(<>

    <input type="search" placeholder="search anything" onChange={Handler} value={img} />
    <Result name={img} />
    </>)
}

export default Search;