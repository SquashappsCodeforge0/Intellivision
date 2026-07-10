import React from "react";
import "./comments.css";
import CommonButton from "../../commonButton/commonButton";

export default function Comments({ imgSrc, head, para, day, month }) {
  return (
    // <div className="comment-container">
    <div className="card">
      <img src={imgSrc} className="card-img-top" alt="..." />
      <div className="day-and-month">
        <h6 className="text-white" style={{marginTop:"0.5rem"}}>{day}</h6>
        <p className="text-white" style={{marginTop:"-0.7rem"}}>{month}</p>
      </div>
      <div className="card-body">
        <div className="margin-container">
          <div className="d-flex mt-4 gap-5">
            <p className="heart-bef ">45 Comments</p>
            <p className="share-bef">18 Shares</p>
          </div>
          <h6 className="mt-2">{head}</h6>
          <p className="mt-3">{para}</p>
          <CommonButton fontClr="#FFFFFF" color="#170F58" label="Read More" />
        </div>
      </div>
    </div>
  );
}
