import React from "react";
import "./services.css";

export default function Services({ head, para, imgSrc }) {
  return (
    <>
      <div className="services">
        <h4 className="mt-4">{head}</h4>
        <p className="text-center mt-4 mb-5">{para}</p>
      </div>
      <div className="img-contain">
        <img src={imgSrc} alt="" />
      </div>
    </>
  );
}
