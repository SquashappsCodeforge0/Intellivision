import React from "react";
import "./trainingPackages.css";
import CommonButton from "../commonButton/commonButton";

const TrainingPackages = ({ head, image, subpara1, subpara2, subpara3 , price}) => {
  return (
    <>
      <div className="training-packages-container mb-5">
          <div className="tp-head-sec">
            <h3 className="text-center">{head}</h3>
            <h3 className="text-center mt-3">${price}</h3>
          </div>
          <div className="tp-image-sec">
            <img src={image} alt="" />
          </div>
          <div className="tp-subpara">
            <p>{subpara1}</p>
          </div>
          <div className="tp-subpara">
            <p>{subpara2}</p>
          </div>
          <div className="tp-subpara">
            <p>{subpara3}</p>
          </div>
          <div className="button-pop d-flex justify-content-center p-4">
          <CommonButton label="Buy now" color="#170F58" borderClr="#170F58" fontClr="white"/>
          </div>
          
        </div>

    </>
  );
};
export default TrainingPackages;
