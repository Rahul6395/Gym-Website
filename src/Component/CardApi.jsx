import web from  "../image/homeimg.jpg";
import app from  "../image/aboutimg.jpg";
import soft from  "../image/conimg.jpg";
import digital from  "../image/serimg.jpg";
import android from  "../image/homeimg.jpg";
import marketing from  "../image/aboutimg.jpg";

let cardapi = [
    {
        imgsrc:web,
        title:"Web development",
        visited:"/Contacts",
    },
 {
      imgsrc: app,
      title:"App development"
      ,visited:"/Contacts",

    },
    {
        imgsrc: soft,
        title:"Software development",
        visited:"/Contacts",
      },
      {
        imgsrc: digital,
        title:"Digital development",
        visited:"/Contacts",
      },
      {
        imgsrc: android,
        title:"Android development",
        visited:"/Contacts",
      },
      {
        imgsrc: marketing,
        title:"Marketing development",
        visited:"/Contacts",
      }
]

export default cardapi;