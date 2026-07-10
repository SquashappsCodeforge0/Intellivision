import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider({datas}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
     {datas.map((items) => (
        <div className="col-lg-3 d-flex gap-2" key={items.id}>
          <img src={items.image} alt="" className="before-images" />
          <h2>{items.head}</h2>
        </div>
     ))}
    </Slider>
  );
}