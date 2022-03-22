import Ract,{useState} from 'react';
import './index.css';
import Net from "./Netflix";
import netObj from "./NetflixObj";
import Todoli from "./Todoli";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const App = () =>{
   const[incre,setincre]=useState(0);
   const inCrement=()=>{
setincre(incre+1);
   }
   const deCrement=()=>{
     
     incre == 0?alert("Zero is Last Value"):setincre(incre-1);
  }
  return(
   <>
     <div className="mainTodo">
     <div className="cardTodo"><br/>
     <h1>{incre}</h1>
     <Button  variant="contained" onClick={inCrement}><AddIcon/></Button>
     <Button   variant="contained" className="buttonUi" color="success" onClick={deCrement}><RemoveIcon/></Button>
     <Button
        variant="contained"
        color="secondary"
        
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
     </div>
     </div>
   </> 
  )
}

// const App=()=>{        // T O D O   L I S T

//  const[item,setItem]=useState("");
//  const[clickItem,setClickItem]=useState([]);

// const onChangeHandler=(event)=>{
// setItem(event.target.value);
// }
// const buttonClick=()=>{
// setClickItem((preValue)=>{
//   console.log([...preValue,item]);
// return[...preValue,item]; //?????????
// });setItem("");
// }

// const listDelete=(id)=>{   //todoli me event onclick
//   console.log("delete");
// setClickItem((preValue)=>{
//   return preValue.filter((arr,ind)=>{
// return ind !== id;
//   })
// })

// } 

//   return(
//     <>
//       <div className="mainTodo">
//       <div className="cardTodo"><br/>
//         <h1>TODO List</h1><br/><br/>
//         <input type="text" placeholder="Enter Your List" value={item} onChange={onChangeHandler}/>
//         <button className="plusIcon" onClick={buttonClick}>+</button><br/><br/>

//       <ul> 
//       { clickItem.map((itemmap,index)=>{
//        return <Todoli  mapprops={itemmap} id={index} key={index} onSelect={listDelete}/>
//         })
//       }
//         </ul>
//       </div>

//       </div>
//     </>
//   )
// }


// function App() {
  
// let ate = new Date();
// let hour = ate.getHours();
// let text ="";
// let colors ={};
// if(hour >= 1 && hour <= 12){
// text = "Good Morning";
// colors.color="green";
// }else if(hour >= 12 && hour <= 16){
//   text = "Good AfterNoon";
//   colors.color="orange";
// }else if(hour >= 12 && hour <= 19){
//     text = "Good Evenings";
//     colors.color="Blue";
// }else{text = "Good Night";
// colors.color="black";}

//   return (
//     <>
//     <div>
//  <h1 className="head">Hello Sir ,<em style={colors}>{text}</em> </h1>
//   </div>
//   </>}

// netflixxxxxxxxxxxx


// const App = ()=>(
//   <>
//   {netObj.map((value) => {
//     return(
//     <Net 
//         key  = {value.id}
//         imgadd={value.imgadd}
//         pgh={value.pgh}
//          movieName = {value.movieName}
//         link={value.link} />
//        )
//   })}
// </>
//  ) ;




// const App =()=>{

//   const [showText,setshowText]=useState({fName:"",lName:"" ,Email:""});
  
// const changeText = ()=>{

// }
// const changeValue=(event)=>{
// //const newValue= event.target.value;
// //const newName= event.target.name;
//  const {value, name}=event.target;
// //console.log(event.target);
// //console.log(newName);

// setshowText((previousValue)=>{
//   console.log(previousValue);
//   return{
//     ...previousValue,[name]:value,
//   }
// //   var a="b";
// // var c={[a]:"d"};
// // console.log(c);

// //itna if else likhne ki jarurat nhi h ager hum ye likh dete h to [name]:value;

// // if(name === "fName"){
// //   return{fName:value,
// //   lName:previousValue.lName,
// //   Email:previousValue.Email,
// //   }
// // }else if(name === "lName"){
// //   return{fName:previousValue.fName,
// //   lName:value,
// //   Email:previousValue.Email,
// //   }
// // }else if(name === "Email"){
// //   return{fName:previousValue.fName,
// //   lName:previousValue.lName,
// //   Email:value,
// //   }
// // }
// })
// }

// return(
// <><div>
// <h1>Hello{showText.fName}{showText.lName}{showText.Email}</h1>
// <input type="text" name = "fName" placeholder="Enter Your FirstName" value={showText.fName} onChange={changeValue}></input><br></br>
// <input type="text" name = "lName" placeholder ="Enter Your LastName"  value={showText.lName} onChange={changeValue}></input><br></br>
// <input type="text" name = "Email" placeholder ="Enter Your Email"  value={showText.Email} onChange={changeValue}></input><br></br>
// <button onClick={changeText}>Click Me</button>
// </div>

// </>


// )
// }

     


       
export default App;
