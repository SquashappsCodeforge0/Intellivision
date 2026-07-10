import React from "react";
import "./review.css";
import MiniFb from "../../../assets/images/fb-mini.svg";
import MiniTwit from "../../../assets/images/twit-mini.svg";
import MiniLinkdin from "../../../assets/images/linkdin-mini.svg";

export default function Reviews({ imgSrc, name, designation, para }) {
  return (
    <>
      <div className="review-container">
        <img src={imgSrc} alt="" className="mb-3" style={{maxWidth:"40%"}}/>
        <h3 className="mb-2 name-sec" >{name}</h3>
        <h6 className="mb-4 designation">{designation}</h6>
        <p className="text-center mb-4">{para}</p>
        <div className="d-flex justify-content-center gap-3">
          <img src={MiniFb} alt="" className="image-hov" />
          <img src={MiniTwit} alt="" className="image-hov" />
          <img src={MiniLinkdin} alt="" className="image-hov" />
        </div>
      </div>
    </>
  );
}
