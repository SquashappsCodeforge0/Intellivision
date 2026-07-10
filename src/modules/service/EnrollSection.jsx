import React from "react";
import "./EnrollSection.css";

const EnrollSecion = ({logo}) => {
  return (
    <>
      <div className="image-container   ">
        <img src={logo} alt="" className="image-inside"/>
      </div>
    </>
  );
};
export default EnrollSecion;
