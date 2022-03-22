import React,{useEffect, useState} from "react";
import ReactDom from "react-dom";
import axios from "axios";

const Pika=()=>{

    const [value, setvalue] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();
    const [weight, setWeight] = useState();

    useEffect(()=>{
        async function getData(){
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
            setName(response.data.name);
            setMoves(response.data.moves.length);
            setWeight(response.data.weight);
           console.log(response)
        }
        getData();
    });

    return(
    <>
<h1>You coose value <span style={{color:"red"}}>{value}</span> </h1>
<h1>Pokemon Name <span style={{color:"red"}}>{name}</span> </h1>
<h1>Pokemon <span style={{color:"blue"}}> {moves} Moves</span> </h1>
<h1>Pokemon Weight <span style={{color:"green"}}> {weight} </span> </h1>

<select value={value} onChange={(event)=>{setvalue(event.target.value);}}>
 <optgroup>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13">13</option>
    <option value="14">14</option>
    <option value="15">15</option>
    <option value="16">16</option>
    </optgroup>
</select>

    </>
    )
}

export default Pika;