import React from "react";
import "./EnrollSection.css";

const EnrollSection = ({ image, head, para }) => {
  return (
    <>
      <div className="enroll-section">
        <div className="mini-section">
        <img src={image} alt="" className="enroll-section-img"/>
        <h4 className="mt-4 mb-3">{head}</h4>
        <p className="text-center">{para}</p>
        </div>
        <div className="know-more">
        <h5 className="mt-3 mb-3">Know more</h5>
        </div>
       
      </div>
     
    </>
  );
};
export default EnrollSection;
