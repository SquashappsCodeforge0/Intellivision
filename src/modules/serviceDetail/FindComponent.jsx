import React from "react";
import "./FindComponent.css";

const FindComponent = ({ image, head, para }) => {
  return (
    <>
      <div className="find-container">
        <img src={image} alt="" className="find-image"/>
        <h3 className="mt-5">{head}</h3>
        <p className="text-center">{para}</p>
      </div>
    </>
  );
};
export default FindComponent;
