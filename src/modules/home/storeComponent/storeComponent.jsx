import React from "react";
import './storeComponent.css'
import CommonButton from "../../commonButton/commonButton";

export default function StoreComponent({ head, para, imgSrc }) {
  return (
    <div className="store-container">
      {/* {<div className="row"> */}
        <div className="col text-center pb-3"> 
          <img src={imgSrc} alt="" className="mt-3"/>
          <h3 className="text-center mt-4">{head}</h3>
          <p className="text-center mt-4">{para}</p>
          <CommonButton
                  fontClr="#FFFFFF"
                  color="#170F58"
                  label="Download Now"
                />
         {/* </div> */}
      </div> 
    </div>
  );
}
