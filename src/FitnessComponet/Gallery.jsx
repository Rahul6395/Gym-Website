import React,{useState} from 'react';
import Navbar from "./Navbar";
import  "./Hbg.css";
import "./Gallery.css";
import GallComImg from "./GallComImg"
import Gallone from "../img/gall2.jpg";
import Galltwo from "../img/gall3.jpg";
import Gallthree from "../img/gall4.jpg";
import Gallfour from "../img/gall5.jpg";
import Gallfive from "../img/gall6.jpg";
import Gallsix from "../img/gall7.jpg";
import Gallseven from "../img/gall8.jpg";
import Galleight from "../img/gall9.jpg";
import Gallnine from "../img/gall10.jpg";
import Gallten from "../img/gall11.jpg";
import Gallele from "../img/gall12.jpg";
import Galltwe from "../img/gall13.jpg";
import GallComVideo from "./GallComVideo";
import Vidone from "../img/video1.mp4";
import Vidtwo from "../img/video11.mp4";
import gallsix from "../img/gall16.jpg";
import gallsev from "../img/gall17.jpg";
import JoinUs from './JoinUs';
import Footer from './Footer';


const Gallery = () => {
const[change,setChange]=useState(true);

const image=()=>{
setChange(true);
}
const videoo=()=>{
    setChange(false);
 }
    return (
        <>
           <div className="Galleryimg"></div>
            <Navbar/>

            <div className="imgvidContainer">
            <div className="navButton">
                <h1 className="imgh" onClick={image}>Images</h1>
                <h1 className="vidh" onClick={videoo}>Videos</h1>
            </div>
            </div>
{change?
            <div className="ImgSeeContainer">
            <div className="ImgSee">
                <GallComImg imgbtn={Gallone}/>
                <GallComImg imgbtn={Galltwo}/>
                <GallComImg imgbtn={Gallthree}/>
                <GallComImg imgbtn={Gallfour}/>
                <GallComImg imgbtn={Gallfive}/>
                <GallComImg imgbtn={Gallsix}/>
                <GallComImg imgbtn={Gallseven} />
                <GallComImg imgbtn={Galleight}/>
                <GallComImg imgbtn={Gallnine}/>
                <GallComImg imgbtn={Gallten}/>
                <GallComImg imgbtn={Gallele}/>
                <GallComImg imgbtn={Galltwe}/>
            </div></div>
            :
            <div className="videoCon">
            <div className="VideoSee">
                <GallComVideo gallvideo={Vidtwo} posters={gallsix}/>
                <GallComVideo gallvideo={Vidone} posters={gallsev}/>
            </div>
            </div>
}
<JoinUs/>
<Footer/>
        </>
    )
}

export default Gallery;
