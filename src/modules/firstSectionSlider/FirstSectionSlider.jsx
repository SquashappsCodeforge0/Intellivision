import React, { useState } from "react";
import Slider from "react-slick";
import './FirstSectionSlider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobileLogo from '../../assets/images/dummy-image-portrait-1.jpg';
import AppleStoreIcon from "../../assets/images/Apple icon.svg";
import PlayStoreIcon from "../../assets/images/Play store Icon.svg";
import StoreButton from "../../modules/home/downloadButton/download";
import { register } from "swiper/element/bundle";

register();




const FirstSectionSlicker = () => {

  const datas = [
    {
      id: "1",
      head: "Discover the Future: Welcome to Intelli Vision",
      para:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo tempor",
      image: MobileLogo,
    },
    {
      id: "2",
      head: "Discover the Future: Welcome to Intelli Vision",
      para:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo tempor",
      image: MobileLogo,
    },
    {
      id: "3",
      head: "Discover the Future: Welcome to Intelli Vision",
      para:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo tempor",
      image: MobileLogo,
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade:true,
    speed: 1000,
    arrows: true,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: 0,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <Slider {...settings}>
      {datas.map((items) => (
        <div key={items.id} className="slick-slide">
          <div className="row" style={{alignItems:"center"}}>
            <div className="col-lg-7 col-md-12 mb-5" data-aos="fade-up">
              <h1>{items.head}</h1>
              <p>{items.para}</p>
              <div className="store-download-buttons">
                      <StoreButton
                        imgSrc={AppleStoreIcon}
                        storeName="Apple Store"
                      />
                      <StoreButton
                        imgSrc={PlayStoreIcon}
                        storeName="Play Store"
                      />
                    </div>
            </div>
            <div className="col-lg-5 col-md-12" data-aos="fade-up">
              <img src={items.image} alt="" />
            </div>

          </div>
        </div>
      ))}
    </Slider>
  );
};

export default FirstSectionSlicker;
