import React from "react";
import "./WhyChooseUs.css";
import ReadMore from "../readmore/ReadMore";

const WhyChooseUs = ({ id, image, subhead, mainhead, para }) => {
  return (
    <div className="inner-sec">
      <div key={id} className="d-flex gap-4 align-items-center">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="before-icons">
          <h4>{subhead}</h4>
          <h3>{mainhead}</h3>
        </div>
      </div>
      <p className="mt-4">{para}</p>
      <ReadMore />
    </div>
  );
};
export default WhyChooseUs;
