import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MobileScreenSlick.css";
// import "./slickCarousel.css";
import Screen1 from "../../../assets/images/image-placeholder.jpg";
// import Screen2 from "../../../assets/images/screen2.svg";
// import Screen3 from "../../../assets/images/screen3.svg";
// import Screen4 from "../../../assets/images/screen4.svg";

const MobileScreenSlick = () => {
    
  const settings = {
    //   dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const datas = [
    { id: "1", image: Screen1 },
    { id: "2", image: Screen1},
    { id: "3", image: Screen1},
    { id: "4", image: Screen1 },
    { id: "5", image: Screen1 },
  ];

  const loopCount = 5;

  const loopedData = Array(datas.length * loopCount)
    .fill()
    .map((_, index) => datas[index % datas.length]);

  return (
    <>
      <div className="mobile-screen-slick">
        <Slider {...settings}>
          {loopedData.map((items) => (
            <div className="head-image" key={items.id}>
              <img src={items.image} alt="" className="before-images" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default MobileScreenSlick;
