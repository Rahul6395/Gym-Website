import React,{useState} from "react";
import "./Uppericon.css";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const UpperIcon = () => {
   const [showIcon, setShowIcon] = useState(false);

  // up show & hide icon
  
     window.addEventListener("scroll", () => {
       if (window.pageYOffset >= 1800) {
         setShowIcon(true);
       } else {
         setShowIcon(false);
       }
     });
   

  // pageUp iconbuton
  const pageUp = () => {
    window.scroll(0, 0);
  };
  return (
    <div>
      <div className="iconcontainer">
        {/* pageUpicon Show &hide icon */}
        <i onClick={pageUp} className={showIcon ? "upIcon" : "hideIcon"}>
          <BsFillArrowUpCircleFill />
        </i>
      </div>
    </div>
  );
};

export default UpperIcon;
