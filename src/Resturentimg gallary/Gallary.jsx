import React ,{useState}from 'react'
import "./Gallary.css";
import wed  from "../image/conimg.jpg";
import Menu from  "./MenuApi";

const Gallary = () => {
    const [items,setitems]=useState(Menu);

    const kuchbhi = (fhb) => {
        const updateustate = Menu.filter((curelem)=>{
            return curelem.categtory === fhb;
        })
        setitems(updateustate);
    }
    return (<>
    <h1>Order Your Favourite Dish</h1>
    <hr/>
    <div className="menu-tab">
                <button onClick={()=>kuchbhi("breakfast")}>Breakfast</button>
                <button>Lunch</button>
                <button>Evening</button>
                <button>Dinner</button>
                <button onClick={()=>setitems(Menu)}>All</button>
            </div>

            {items.map((elem)=>{
                const {id, name, image, description, price}= elem;
                return (
                    <>
                    <div className="grid">
        <div className="Container">
       
            <div className="menu-Container">
           
            <div className="img"><img src={wed} alt="bb" />
            </div>  
                <div className="title">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <div className="titles">
                    <h2> Price : {price}</h2>
                    <button className="order">Order Now</button>
                    </div>
                    <h5>Price may vary on selected date.</h5>
                </div>
            </div>
        </div>
        </div>

                    </>
                    
                )
            })}

        

        </>
    )
}

export default Gallary;
