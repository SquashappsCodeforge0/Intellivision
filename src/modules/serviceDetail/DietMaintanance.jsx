import React, { useState } from "react";
import "./DietMaintanance.css";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const DietMaintanance = ({  number , image }) => {

    const [counterOn , setCounterOn] = useState(false);

  return (
    <>
      <div className="diet-cont">
        <img src={image} alt="" className="diet-counter-image"/>
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <p className="text-center mt-2"> {counterOn && <CountUp start={0} end={number} duration={2} delay={0}/>}</p>
        </ScrollTrigger>
      </div>
    </>
  );
};
export default DietMaintanance;
