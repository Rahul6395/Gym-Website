import React from 'react';
import Hbg from './Hbg';
import Navbar from './Navbar';
import "./MembershipPlans.css";
import Membership from "./MembershipPlans";
import ServicePlan from "./SevicePlan";
import PayDiscount from './PayDiscount';
import Footer from "./Footer"
import { GiMuscleUp, GiPowderBag, GiBodyBalance, GiWeightLiftingUp } from "react-icons/gi";

const Schedule = () => {
    return (<>
        
        <div className='Serviced'></div>
        <div>
            <Navbar />
            <div className="whatWeCon">
                <h1 className='whatDoText'>What We<span className='doSpanText'> Do?</span></h1>
                <div className='whatWeChield'>
                    <ServicePlan title="Build Muscle" planIcons={<GiMuscleUp />} />
                    <ServicePlan title="Protein Plan" planIcons={<GiPowderBag />} />
                    <ServicePlan title="Body Improve" planIcons={<GiBodyBalance />} />
                    <ServicePlan title="Cardio Fitness" planIcons={<GiWeightLiftingUp />} />
                </div></div>
            <PayDiscount />

            <div className="PlanTitle">
                <h1 className='planTexts'>Membership Plans</h1>
                <div className='membershipContainer'> <Membership planeName="STANDARD" planePrice="15" cardColor="purple" />
                    <Membership planeName="POPULAR" planePrice="20" cardColor="orange" />
                    <Membership planeName="GOLDEN" planePrice="35" cardColor="skyblue" />
                    <Membership planeName="PROFESSIONAL" planePrice="50" cardColor="green" />
                </div></div>
            <Footer />
        </div>
        </>  )
}

export default Schedule;
