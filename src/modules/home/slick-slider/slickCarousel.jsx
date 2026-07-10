import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slickCarousel.css'
import PaperBird from '../../../assets/images/paperbird-logo.svg'
import ModernCity from '../../../assets/images/moderncity-logo.svg'
import Alpha from '../../../assets/images/alpha-logo.svg'
import WoodFloor from '../../../assets/images/woodfloor-logo.svg'

const SlickCarousel = () => {
  const settings = {
    //   dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,
      // centerMode:true,
      // centerPadding:'10%',
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
    };
  
    const datas = [
      {id: '1', image: PaperBird },
      {id: '2', image : ModernCity},
      {id: '3' , image : Alpha},
      {id: '4' , image: WoodFloor}
    ]
    const loopCount = 5; 
  
    const loopedData = Array(datas.length * loopCount)
      .fill()
      .map((_, index) => datas[index % datas.length]);
  
  return(
    <div className="slick">
    <Slider {...settings}>
      {loopedData.map((items) => (
        <div className="head-image" key={items.id}>
          <img src={items.image} alt="" className="before-images" />
        </div>
      ))}
    </Slider>
  </div>

  )
}
export default SlickCarousel;