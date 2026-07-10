import React from "react";
import './swiperComponent.css'

const SwiperComponent = ({ image, name, para , designation}) => {
  return (
    <>
      <div className="swiper-compo-container">
        <p className="text-center">{para}</p>
        <div className="swiper-image">
          <img src={image} alt="" style={{maxWidth:"12%"}}/>
        </div>
        <div>
        <h3 className="mt-4">{name} </h3>
        <p className="text-center">{designation}</p>
        </div>
        
      </div>
    </>
  );
};
export default SwiperComponent;
