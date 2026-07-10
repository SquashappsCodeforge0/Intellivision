import React from "react";
import "./testimonials.css";
import UpperRightimg from "../../../assets/images/testimonial-quotationUp.svg";
import LowerLeftimg from "../../../assets/images/testimonial-quotation.svg";

export default function Testimonials({ imgSrc, name, para }) {
  return (
    <div className="master-bg">
      <div className="child-bg">
        <div className="testimonial-cont">
          <img src={UpperRightimg} alt="" className="upper-right-img"/>
          <img src={imgSrc} alt="" className="testimonial-img" />
          <img src={LowerLeftimg} alt="" className="lower-left-img"/>
          <div className="name-para">
            <h5 className="mt-3">{name}</h5>
            <p className="text-center">{para}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
