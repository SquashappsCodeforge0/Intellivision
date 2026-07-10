import React, { useEffect } from "react";
import './mobScreensSwiper.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Screen1 from "../../../assets/images/screen1.svg";
import Screen2 from "../../../assets/images/screen2.svg";
import Screen3 from "../../../assets/images/screen3.svg";
import Screen4 from "../../../assets/images/screen4.svg";


export default function ScreenSlicker() {
    
    const settings = {
    //   dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,
      responsive: [
        {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
    ]
    //   centerMode: true,
    //   centerPadding: "15px"
    };
  
    const datas = [
      { id: "1", image: Screen1},
      { id: "2", image: Screen2 },
      { id: "3", image: Screen3},
      { id: "4", image: Screen4 },
      { id: "5", image: Screen2 },
    ];
  
    const loopCount = 5; 
  
    const loopedData = Array(datas.length * loopCount)
      .fill()
      .map((_, index) => datas[index % datas.length]);
  
    return (
      <div className="slick">
        <Slider {...settings}>
          {loopedData.map((items) => (
            <div className="d-flex" key={items.id}>
              <img src={items.image} alt="" className="before-images"/>
            </div>
          ))}
        </Slider>
      </div>
    );
  }