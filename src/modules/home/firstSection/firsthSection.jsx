import React, { useState } from "react";

import Header from "../../header/header";
import "./firsthSection.css";
import Services from "../servicesComponent/services";
import Desktop from "../../../assets/images/desktop.svg";
import Profile from "../../../assets/images/profile.svg";
import Shield from "../../../assets/images/shield.svg";
import PlayButton from "../../../assets/images/play.svg";
import CommonButton from "../../commonButton/commonButton";
import VideoPopup from "../videoPopup/videoPopup";
import AppleStore from "../../../assets/images/AppleStore.svg";
import PlayStore from "../../../assets/images/playStore.svg";
import Windows from "../../../assets/images/windows.svg";
import StoreComponent from "../storeComponent/storeComponent";
import studentsImg from "../../../assets/images/dummy-image-portrait-1.jpg";
import FirstSectionSlicker from "../../firstSectionSlider/FirstSectionSlider";

export default function Section1() {
  const [isVideoPopupOn, setisVideoPopupOn] = useState(false);

  const openVideoPopup = () => {
    setisVideoPopupOn(true);
  };

  const closeVideoPopup = () => {
    setisVideoPopupOn(false);
  };

  const store = [
    {
      id: "1",
      image: AppleStore,
      head: "App Store",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing labore Ut enim minim veniam,quis nostrud exercitation",
    },
    {
      id: "2",
      image: PlayStore,
      head: "Play Store",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing labore Ut enim minim veniam,quis nostrud exercitation",
    },
    {
      id: "3",
      image: Windows,
      head: "Windows",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing labore Ut enim minim veniam,quis nostrud exercitation",
    },
  ];

  const serviceData = [
    {
      id: "1",
      head: "Dynamic Interface",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor incididunt inim veniam, nostrud exercitation ullamco ",
      image: Desktop,
    },
    {
      id: "2",
      head: "Fast Support",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor incididunt inim veniam, nostrud exercitation ullamco ",
      image: Profile,
    },
    {
      id: "3",
      head: "Concrete Security",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor incididunt inim veniam, nostrud exercitation ullamco ",
      image: Shield,
    },
  ];
  return (
    <>
      {/* section one  */}
      <Header />
      <div className="section1">
        <div className="container py-5" style={{maxWidth:"90%"}}>
          <FirstSectionSlicker/>
        </div>
      </div>

      {/* section two  */}

      <div className="container section2 ">
        <div className="row pt-5 d-flex justify-content-center mb-4">
          <div className="col-lg-8" data-aos="fade-up">
            <h2 className="text-center">Services We Provide</h2>
            <p className="mt-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              tempor
            </p>
          </div>
        </div>
        <div className="row">
          {serviceData.map((items) => (
            <div className="col-lg-4" data-aos="fade-up" key={items.id}>
              <Services
                para={items.para}
                head={items.head}
                imgSrc={items.image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="section3" id="process">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-5" data-aos="fade-up">
              <h2>Our Story And Mission</h2>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor ut labore Ut enim ad minim veniam, quis nostrud
                exercitation ullamco dolor sit amet, consectetur adipiscing
                eiusmod tempor veniam, nostrud exercitation ullamco{" "}
              </p>
              <div className="d-flex gap-5">
                <ul className="mt-5">
                  <li className="selection">Maecenas tempus</li>
                  <li className="selection">Amet adipiscing </li>
                  <li className="selection">Tellus condimentum</li>
                  <li className="selection">eget condimentum </li>
                  <li className="selection">Maecenas tempus</li>
                  <li className="selection">Amet adipiscing </li>
                </ul>
                <ul className="mt-5">
                  <li className="selection">Maecenas tempus</li>
                  <li className="selection">Amet adipiscing </li>
                  <li className="selection">Tellus condimentum</li>
                  <li className="selection">eget condimentum </li>
                  <li className="selection">Maecenas tempus</li>
                  <li className="selection">Amet adipiscing </li>
                </ul>
              </div>
              <div className="d-flex gap-4 button-class">
                <CommonButton
                  fontClr="#FFFFFF"
                  color="#170F58"
                  label="Get started now"
                />
                <CommonButton
                  fontClr="#170F58"
                  borderClr="2px solid #170F58"
                  label="Learn More"
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 d-flex flex-column justify-content-center"
              data-aos="fade-up"
            >
              <img src={studentsImg} alt="" className="studentsImg" />
              <img
                src={PlayButton}
                alt="playButton"
                onClick={openVideoPopup}
                className="img-fluid playButton"
              />
              <VideoPopup isOpen={isVideoPopupOn} onClose={closeVideoPopup} />
            </div>
          </div>
        </div>
      </div>
      <div className="section4">
        <div className="container">
          <div className="row pt-5 d-flex justify-content-center">
            <div className="col-lg-8" data-aos="fade-down">
              <h2 className="text-center mt-5">Start Your Journey, Download The App Now</h2>
              <p className="mt-5 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris{" "}
              </p>
            </div>
          </div>
          <div
            className="row stores d-flex justify-content-center"
            data-aos="fade-up"
          >
            {store.map((items) => {
              return (
                <div className="col-lg-4 text-center" key={items.id}>
                  <StoreComponent
                    imgSrc={items.image}
                    head={items.head}
                    para={items.para}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
