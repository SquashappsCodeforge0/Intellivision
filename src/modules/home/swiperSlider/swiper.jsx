import React from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Swiper, SwiperSlide } from "swiper/react";
import PaperBird from "../../../assets/images/pb-before.svg";
import ModernCity from "../../../assets/images/mc-before.svg";
import Alpha from "../../../assets/images/alpha&co-before.svg";

export default function SwiperSlideComponent() {
  const datas = [
    { id: "1", image: PaperBird, head: "PAPER BIRD" },
    { id: "2", image: ModernCity, head: "MODERN" },
    { id: "3", image: Alpha, head: "ALPHA & CO" },
    { id: "4", image: Alpha, head: "WOOD FLOOR" },
  ];

  return (
    <swiper-container
      slides-per-view='3'
      speed="500"
      loop="true"
      css-mode="true"
    >
      <swiper-slide>
        {datas.map((items) => (
          <div key={items.id}>
            <img src={items.image} alt="" className="before-images" />
            <h2>{items.head}</h2>
          </div>
        ))}
      </swiper-slide>
    </swiper-container>
  );
}
