import React from "react";
import "./Courses.css";
import CommonButton from "../../commonButton/commonButton";
import { useNavigate } from "react-router-dom";

const Courses = ({image , head , para}) => {

    const navigate = useNavigate();
   
  return (
    <>
      <div className="course-container" onClick={() => navigate('/service-details')}>
        <img src={image} alt="" className="course-image"/>
        <h3 className="mt-3">{head}</h3>
        <p className="mb-5">{para}</p>
        <CommonButton color="#170F58" fontClr="white" borderClr="#170F58" label="2 Courses"/>
      </div>
    </>
  );
};
export default Courses;
