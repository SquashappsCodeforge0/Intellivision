import React from "react";
import "./featuresPage.css";

export default function FeaturesPage({ imgSrc, head, para }) {
  return (
    <div className="features-container">
      <div className="d-flex gap-4 ">
        <img src={imgSrc} alt="" className="before-head" />
        <h3 className="head-before">{head}</h3>
      </div>
      <p className="features-para">{para}</p>
    </div>
  );
}
