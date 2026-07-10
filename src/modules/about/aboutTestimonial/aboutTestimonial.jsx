import React from "react";
import Darell from "../../../assets/images/Placeholder-profile.jpg";
import Dianne from "../../../assets/images/Placeholder-profile.jpg";
import Albert from "../../../assets/images/Placeholder-profile.jpg";
import Ralph from "../../../assets/images/Placeholder-profile.jpg";
import Brooklyn from "../../../assets/images/Placeholder-profile.jpg";
import Marvin from "../../../assets/images/Placeholder-profile.jpg";
// import Reviews from "../../home/reviews/review";
import "./aboutTestimonial.css";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { register } from "swiper/element/bundle";
// Import Swiper React components

register();

const AboutTestimonial = () => {
  const reviews = [
    {
      id: "1",
      image: Darell,
      name: "Darrell Steward",
      Designation: "Web Designer",
      para: "Lorem ipsum dolor sit consectetur dolor sit amet, consectetur adipiscing elit, sed doeiusmodut labore enim ad minim veniam, quis nostrud exercitationdolor sit amet, consectetur adipiscing adipiscing doeiusmod tempor incididunt ut labore minim veniam, quis nostrud exercitation.",
    },
    {
      id: "2",
      image: Dianne,
      name: "Dianne Russell",
      Designation: "App Developer",
      para: "Lorem ipsum dolor sit consectetur dolor sit amet, consectetur adipiscing elit, sed doeiusmodut labore enim ad minim veniam, quis nostrud exercitationdolor sit amet, consectetur adipiscing adipiscing doeiusmod tempor incididunt ut labore minim veniam, quis nostrud exercitation.",
    },
    {
      id: "3",
      image: Albert,
      name: "Albert Flores",
      Designation: "Marketing Coordinator",
      para: "Lorem ipsum dolor sit consectetur dolor sit amet, consectetur adipiscing elit, sed doeiusmodut labore enim ad minim veniam, quis nostrud exercitationdolor sit amet, consectetur adipiscing adipiscing doeiusmod tempor incididunt ut labore minim veniam, quis nostrud exercitation.",
    },
    {
      id: "4",
      image: Ralph,
      name: "Ralph Edwards",
      Designation: "Web Designer",
      para: "Lorem ipsum dolor sit consectetur dolor sit amet, consectetur adipiscing elit, sed doeiusmodut labore enim ad minim veniam, quis nostrud exercitationdolor sit amet, consectetur adipiscing adipiscing doeiusmod tempor incididunt ut labore minim veniam, quis nostrud exercitation.",
    },
    {
      id: "5",
      image: Brooklyn,
      name: "Brooklyn Simmons",
      Designation: "App Developer",
      para: "Lorem ipsum dolor sit consectetur dolor sit amet, consectetur adipiscing elit, sed doeiusmodut labore enim ad minim veniam, quis nostrud exercitationdolor sit amet, consectetur adipiscing adipiscing doeiusmod tempor incididunt ut labore minim veniam, quis nostrud exercitation.",
    },
    {
      id: "6",
      image: Marvin,
      name: "Marvin McKinney",
      Designation: "Marketing Coordinator",
      para: "Lorem ipsum dolor sit consectetur dolor sit amet, consectetur adipiscing elit, sed doeiusmodut labore enim ad minim veniam, quis nostrud exercitationdolor sit amet, consectetur adipiscing adipiscing doeiusmod tempor incididunt ut labore minim veniam, quis nostrud exercitation.",
    },
  ];
  return (
    <>
      <div className="container contactPage-testimonial">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 mb-5">
            <h2 className="text-center mt-5" data-aos="fade-up">what our clients say about us</h2>
            <p className="mt-4 text-center mb-5" data-aos="fade-up">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor incididunt ut labore Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris
            </p>
          </div>
        </div>
        <div className="mb-5 pb-5">
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            spaceBetween={60}
            pagination={false}
            autoplay={true}
            autoplaySpeed={2000}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              499: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },

              992: {
                slidesPerView: 3,
              },

              1024: {
                slidesPerView: 3,
              },
              1340: {
                slidesPerView: 3,
              },
            }}
          >
            {reviews.map((items) => (
              <SwiperSlide>
                <div
                  className="col-lg-12 text-center carousal-item "
                  key={items.id}
                >
                  <img src={items.image} alt="" style={{width:"50%"}}/>
                  <h4 className="mt-3 mb-3">{items.name}</h4>
                  <h6 className="mb-5">{items.Designation}</h6>
                  <p className="text-center">{items.para}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default AboutTestimonial;
