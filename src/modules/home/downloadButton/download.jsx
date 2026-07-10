import React from "react";
import "./download.css";

export default function downloadButton({
  onclick,
  imgSrc,
  altText,
  storeName,
}) {
  return (
    <>
    <div className="download-buttons-container">
      <a href="#a" className="butn butn__new">
        {" "}
        <img src={imgSrc} alt={altText} className="store-image" />
        <div>
          <h6>Download on</h6>
          <h4>{storeName}</h4>
        </div>
      </a>
      </div>
    </>
  );
}
