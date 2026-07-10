import React from "react";
import "./ContactMethods.css";

const ContactMethods = ({ image, method, medium1, medium2 }) => {
  return (
    <div className="text-center contact-method-container text-white">
      <img src={image} alt="" className="image-cont" />
      <h3>{method}</h3>
      <div className="d-flex align-items-center justify-content-center mt-4 opacity-50">
        <h6>{medium1}</h6>
      </div>
      <div className="d-flex align-items-center justify-content-center opacity-50">
        <h6 className="mb-5">{medium2}</h6>
      </div>
    </div>
  );
};
export default ContactMethods;
