import React, { useState } from "react";
import "./ServiceDetail.css";
import serviceDetail1 from "../../assets/images/dummy-image-landscape-1.jpg";
import serviceDetail2 from "../../assets/images/dummy-image-landscape-1.jpg";
import serviceDetail3 from "../../assets/images/dummy-image-landscape-1.jpg";
import Header from "../header/header";
import Footer from "../footer/footerComponent";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
import WhyIsItBest from "../../assets/images/dummy-image-portrait-1.jpg";
import CarouselImg1 from "../../assets/images/dummy-image-landscape-1.jpg";
import CarouselImg2 from "../../assets/images/dummy-image-landscape-1.jpg";
import CarouselImg3 from "../../assets/images/dummy-image-landscape-1.jpg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DietMaintanance from "./DietMaintanance";

import UsersImg from "../../assets/images/user-solid.svg";
import ClockImg from "../../assets/images/clock-solid.svg";
// import AwardImg from '../../assets/images/award-solid.svg'
import EnrollSectionImg from "../../assets/images/steam-symbol.svg";
import Hardware from "../../assets/images/hardware.svg";
import Software from "../../assets/images/software.svg";
import Hybrid from "../../assets/images/hybrid-networking.svg";
import Award from "../../assets/images/award-fill.svg";
import EnrollSection from "./EnrollSection";
import Darell from "../../assets/images/Placeholder-profile.jpg";
import Dianne from "../../assets/images/Placeholder-profile.jpg";
import Albert from "../../assets/images/Placeholder-profile.jpg";
import Ralph from "../../assets/images/Placeholder-profile.jpg";
import Brooklyn from "../../assets/images/Placeholder-profile.jpg";
import fbLogo from "../../assets/images/fb-mini.svg";
import twitterLogo from "../../assets/images/twit-mini.svg";
import linkdinLogo from "../../assets/images/linkdin-mini.svg";
import TrainingAmenitiesImg1 from "../../assets/images/dummy-image-portrait-1.jpg";
import TrainingAmenitiesImg2 from "../../assets/images/dummy-image-portrait-1.jpg";
import Marvin from "../../assets/images/Placeholder-profile.jpg";
import SearchIcon from "../../assets/images/magnifying-glass-solid (1).svg";
import Desktop from "../../assets/images/desktop.svg";
import Profile from "../../assets/images/profile.svg";
import Shield from "../../assets/images/shield.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import {Autoplay} from 'swiper/modules'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { register } from "swiper/element/bundle";
import SwiperComponent from "./swiperComponent";
import FindComponent from "./FindComponent";
import SubNavBar from "./subNavbar";
// import { tab } from "@testing-library/user-event/dist/tab";

register();

const ServiceDetails = () => {
  const whatIsItSection = [
    { id: "1", image: serviceDetail1 },
    { id: "2", image: serviceDetail2 },
    { id: "3", image: serviceDetail3 },
  ];

  const whyisitBest = [
    { id: "1", para: "Makes the body slenderer and the figure more beautiful" },
    { id: "2", para: "Effectively reduces cellulite problems" },
    {
      id: "3",
      para: "Cleanses the body of waste substances and repairs blood and lymphatic circulation",
    },
    {
      id: "4",
      para: "Makes the skin smoother, more elastic, softer and revitalises dry skin",
    },
    { id: "5", para: "Reduces muscular and joint pains" },
  ];

  const carouselData = [
    { id: "1", image: CarouselImg1 },
    { id: "2", image: CarouselImg2 },
    { id: "3", image: CarouselImg3 },
  ];

  const trainingData = [
    {
      id: "1",
      head: "Filling type",
      para: "Saline, Silicone Gel, or Highly Cohesive Silicone “Gummy Bear” Implants. Neither is “best,” but there are some differences in cost, feel, and incision requirements that you need to consider. Your cosmetic surgeon will help you find the right implant type for you.",
    },
    {
      id: "2",
      head: "Shape",
      para: "Saline, Silicone Gel, or Highly Cohesive Silicone “Gummy Bear” Implants. Neither is “best,” but there are some differences in cost, feel, and incision requirements that you need to consider. Your cosmetic surgeon will help you find the right implant type for you.",
    },
    {
      id: "3",
      head: "Profile",
      para: "Saline, Silicone Gel, or Highly Cohesive Silicone “Gummy Bear” Implants. Neither is “best,” but there are some differences in cost, feel, and incision requirements that you need to consider. Your cosmetic surgeon will help you find the right implant type for you.",
    },
    {
      id: "4",
      head: "Size",
      para: "Saline, Silicone Gel, or Highly Cohesive Silicone “Gummy Bear” Implants. Neither is “best,” but there are some differences in cost, feel, and incision requirements that you need to consider. Your cosmetic surgeon will help you find the right implant type for you.",
    },
  ];

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

  const dietData = [
    { id: "1", image: UsersImg, number: "7254", head: "Happy clients" },
    { id: "2", image: Award, number: "1276", head: "Awards won" },
    { id: "3", image: ClockImg, number: "32658", head: "  Hours worked" },
  ];

  const enrollSection = [
    {
      id: "1",
      image: EnrollSectionImg,
      head: "Pilates Intensive",
      para: "Enroll Now",
    },
    {
      id: "2",
      image: Hardware,
      head: "Hardware",
      para: "Enroll Now",
    },
    {
      id: "3",
      image: Software,
      head: "Software",
      para: "Enroll Now",
    },
    {
      id: "4",
      image: Hybrid,
      head: "Hybrid",
      para: "Enroll Now",
    },
  ];

  const trainingAmenities = [
    {
      id: "1",
      image: TrainingAmenitiesImg1,
      name: "Klaus mikaelson",
      designation: "Developer",
      logos: [fbLogo, twitterLogo, linkdinLogo],
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "2",
      image: TrainingAmenitiesImg2,
      name: "Elijah mikaelson",
      designation: "Tester",
      logos: [fbLogo, twitterLogo, linkdinLogo],
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const findData = [
    {
      id: "1",
      image: Shield,
      head: "Concrete Security",
      para: "Quisque volutpat mattis eros nullam malesuada",
    },
    {
      id: "2",
      image: Desktop,
      head: "Dynamic Interface",
      para: "Quisque volutpat mattis eros nullam malesuada",
    },
    {
      id: "3",
      image: Profile,
      head: "Workflow Guidance",
      para: "Quisque volutpat mattis eros nullam malesuada",
    },
  ];

  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tab) => {
    const element = document.getElementById(tab);
    setActiveTab(tab);
    console.log(tab);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="service-details-container">
        <Header />
        <div className="service-detail-breadcrumb">
          <BreadCrumbs />
        </div>
        <div className="container">
          <SubNavBar activeTab={activeTab} onTabClick={handleTabClick} />
          <div className="row">
            {whatIsItSection.map((items) => (
              <div className="col-lg-4 mb-5" key={items.id}>
                <img src={items.image} alt="" />
              </div>
            ))}
          </div>
          <div className="pt-5 pb-5" id="whatIsIt">
            <h2>What is it?</h2>
            <p className="mt-4">
              Duas molestias excepturi sint occaecati cupiditate non provident,
              similique sunt in culpa qui officia deserunt mollitia animi, id
              est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio.. Duas molestias excepturi sint occaecati
              cupiditate non provident, similique sunt in culpa qui officia
              deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
              quidem rerum facilis est et expedita distinctio. Duas molestias
              excepturi sint occaecati cupiditate non provident, similique sunt
              in culpa qui officia deserunt mollitia animi, id est laborum et
              dolorum fuga. Et harum quidem rerum facilis est et expedita
              distinctio.. Duas molestias excepturi sint.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-7" id="whyIsBest">
              <h2>Why is it best?</h2>
              <p className="mt-4">
                Duas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia
                animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis est et expedita distinctio.. Duas molestias excepturi
                sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum
                fuga.
              </p>
              <ul className="why-is-it-best">
                {whyisitBest.map((items) => (
                  <li key={items.id}>{items.para}</li>
                ))}
              </ul>
            </div>
            <div className="col-lg-5">
              <img src={WhyIsItBest} alt="" />
            </div>
          </div>
          <div className="picture-gallery pt-5 mt-3" id="pictureGallery">
            <h2>Picture Gallery</h2>
            <Carousel
              showIndicators={true}
              showStatus={false}
              autoPlay={true}
              infiniteLoop={true}
            >
              {carouselData.map((items) => (
                <div key={items.id}>
                  <img src={items.image} alt="" />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="fitness-training pt-5">
            <h2>Fitness Training</h2>
            <ul className="mt-4">
              {trainingData.map((items) => (
                <li key={items.id}>
                  <h4>{items.head}</h4>
                  <p>{items.para}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="diet-maintanance" id="dietMaintenance">
            <h2>Diet Maintenance</h2>
            <p>
              Duas molestias excepturi sint occaecati cupiditate non provident,
              similique sunt in culpa qui officia deserunt mollitia animi, id
              est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio.. Duas molestias excepturi sint occaecati
              cupiditate non provident, similique sunt in culpa qui officia
              deserunt mollitia animi, id est laborum et dolorum fuga. molestias
              excepturi sint.
            </p>
            <div className="row pt-5">
              {dietData.map((items) => (
                <div
                  className="col-lg-4 col-md-12 mb-5 d-flex align-items-center flex-column"
                  key={items.id}
                >
                  <DietMaintanance image={items.image} number={items.number} />
                  <h5 className="mt-4">{items.head}</h5>
                </div>
              ))}
            </div>
            <p>
              Duas molestias excepturi sint occaecati cupiditate non provident,
              similique sunt in culpa qui officia deserunt mollitia animi, id
              est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio.. Duas molestias excepturi sint occaecati
              cupiditate non provident, similique sunt in culpa qui
            </p>
          </div>
          <div>
            <div className="row pb-5">
              {enrollSection.map((items) => (
                <div className="col-lg-3 col-md-12 mb-5" key={items.id}>
                  <EnrollSection
                    image={items.image}
                    head={items.head}
                    para={items.para}
                  />
                </div>
              ))}
              <p className="mt-4">
                Duas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia
                animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis est et expedita distinctio.. Duas molestias excepturi
                sint occaecati cupiditate non provident, similique sunt in culpa
                qui
              </p>
            </div>
            <div className="training-amenities">
              <h2>Training Amenities</h2>
              <div className="row pt-5 pb-5">
                {trainingAmenities.map((items) => (
                  <div className="col-lg-6 pb-5 " key={items.id}>
                    <div className="image-underline">
                      <img
                        src={items.image}
                        alt=""
                        className="training-eminity-img"
                      />
                      <div
                        className="items-container"
                        style={{ marginLeft: "1rem" }}
                      >
                        <h3>{items.name}</h3>
                        <p>{items.designation}</p>
                        <div className="logos">
                          <div className="d-flex gap-4">
                            {items.logos.map((data) => (
                              <img
                                src={data}
                                alt=""
                                className="logos-con"
                                key={items.id}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="mt-3">{items.para}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <p>
                  Duas molestias excepturi sint occaecati cupiditate non
                  provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio.. Duas
                  molestias excepturi sint occaecati cupiditate non provident,
                  similique sunt in culpa qui officia deserunt mollitia animi,
                  id est laborum et dolorum fuga. molestias excepturi sint.
                </p>
              </div>
            </div>
          </div>
          <div className="row pb-3">
            {findData.map((items) => (
              <div className="col-lg-4 pb-5" key={items.id}>
                <FindComponent
                  image={items.image}
                  head={items.head}
                  para={items.para}
                />
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-center mb-5" id="clientsWords">
              Client's words
            </h2>
            <Swiper
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={1}
              dots={false}
              pagination={false}
              autoplay={true}
              autoplaySpeed={2000}
              navigation={true}
            >
              {reviews.map((items) => (
                <SwiperSlide>
                  <div
                    className="col-lg-12 text-center carousal-item"
                    key={items.id}
                  >
                    <SwiperComponent
                      image={items.image}
                      name={items.name}
                      para={items.para}
                      designation={items.Designation}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default ServiceDetails;
