import React from 'react';
import "./SevicePlan.css"
import {FaDumbbell} from "react-icons/fa";

const SevicePlan = (props) => {
  return (
    <div className='serPlanCon'>
    <div className='serPlanChield'>
      <div className='serPlanBox'>
         <div className='serPlanIconBox'>
         <span className='planIcon'>{props.planIcons}</span>
         </div>
         
          <div className='serPlanContent'>
              <h1 className='serPlanTitle'>{props.title}</h1>
              <p className='serPlanPgh'>The sea freight service has grown consider ably in recent years</p>
              <button className='serPlanBtn'>Learn more</button>
          </div>
      </div>


    </div>

    </div>
  )
}

export default SevicePlan