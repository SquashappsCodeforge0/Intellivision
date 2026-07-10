import React, { useEffect } from "react";
import "./thirdSection.css";
import SmileEmoji from "../../../assets/images/smilie.svg";
import FeaturesPage from "../featuresComponent/featuresPage";
import Mask from "../../../assets/images/Mask group.svg";
import HeadPhoneImg from "../../../assets/images/headphones.svg";
import ThreeDImg from "../../../assets/images/3D.svg";
import MobCenter from "../../../assets/images/dummy-image-portrait-1.jpg";
import ASFimg from "../../../assets/images/asf.svg";
import Paint from "../../../assets/images/paint.svg";
import ProductivityImg from "../../../assets/images/dummy-image-portrait-1.jpg";
import Purchase from "../purchaseComponents/purchase";
import Productivity from "../productivitySection/productivity";
import ShareImg from "../../../assets/images/share.svg";
import TruckImg from "../../../assets/images/truck.svg";
import PuzzleImg from "../../../assets/images/puzzle.svg";

export default function Section3() {
  const features1 = [
    {
      id: "1",
      Image: SmileEmoji,
      head: "Custom Shortcuts",
      para: "Leo in vitae turpis massa sed. Magna fringilla urna porttitor rhoncus dolor purus. Dictumst quisque sagittis ",
    },
    {
      id: "2",
      Image: Mask,
      head: "Customize",
      para: "Leo in vitae turpis massa sed. Magna fringilla urna porttitor rhoncus dolor purus. Dictumst quisque sagittis ",
    },
    {
      id: "3",
      Image: HeadPhoneImg,
      head: "Help and Support",
      para: "Leo in vitae turpis massa sed. Magna fringilla urna porttitor rhoncus dolor purus. Dictumst quisque sagittis ",
    },
  ];

  const features2 = [
    {
      id: "1",
      Image: ThreeDImg,
      head: "Highest Quality",
      para: "Leo in vitae turpis massa sed. Magna fringilla urna porttitor rhoncus dolor purus. Dictumst quisque sagittis ",
    },
    {
      id: "2",
      Image: ASFimg,
      head: "Merge Files",
      para: "Leo in vitae turpis massa sed. Magna fringilla urna porttitor rhoncus dolor purus. Dictumst quisque sagittis ",
    },
    {
      id: "3",
      Image: Paint,
      head: "Theme Uniformity ",
      para: "Leo in vitae turpis massa sed. Magna fringilla urna porttitor rhoncus dolor purus. Dictumst quisque sagittis ",
    },
  ];

  const ProductivityData = [
    {
      id: "1",
      image: ShareImg,
      head: "Efficiency Amplified",
      para: "In dictum non consectetur a. Adipiscing at in tellus integer feugiat scelerisque eleifend mi in nulla",
      customClass: "custom-class-1",
    },
    {
      id: "2",
      image: PuzzleImg,
      head: "Maximizing Output",
      para: "Volutpat blandit aliquam etiam erat velit scelerisque elementum nisi quis eleifend quam adipiscing vitae ",
      customClass: "custom-class-2",
    },
    {
      id: "3",
      image: TruckImg,
      head: "Organizational Tools",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing mod tempor incididunt inim veniam, nost exercitation ullamco",
      customClass: "custom-class-3",
    },
  ];

  const PurchaseData = [
    { id: "1", price: "49" },
    { id: "2", price: "49" },
    { id: "3", price: "49" },
  ];

  return (
    <>
      <div className="section9" id="features">
        <div className="container">
          <div className="row d-flex justify-content-center pt-5">
            <div className="col-lg-6 " data-aos="fade-down">
              <h2 className="text-center">Discover The Features</h2>
              <p className="mt-4 text-center mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </div>
          <div className="row d-flex gap- justify-content-end">
            <div className="col-lg-4">
              <div className="row">
                <div className="col" data-aos="fade-up">
                  {features1.map((items) => (
                    <FeaturesPage
                      imgSrc={items.Image}
                      head={items.head}
                      para={items.para}
                      key={items.id}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-4 mx-auto d-flex justify-content-center mb-5 pb-4">
              <img src={MobCenter} alt=""/>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col" data-aos="fade-up">
                  {features2.map((items) => (
                    <FeaturesPage
                      imgSrc={items.Image}
                      head={items.head}
                      para={items.para}
                      key={items.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section10">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-md-12" data-aos="fade-down">
              <h2 className="text-center mt-5">Productivity Concept</h2>
              <p className="mt-2 text-center mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-7 col-md-12 ">
              <div className="productivity-Bg mb-5" data-aos="fade-up">
                <div className="productivity" >
                  {ProductivityData.map((items, index) => (
                    <div key={items.id} className={items.customClass}>
                      <Productivity
                        key={index}
                        image={items.image}
                        head={items.head}
                        para={items.para}
                        customClass={items.customClass}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 d-flex justify-content-center" data-aos="fade-up">
              <img src={ProductivityImg} alt="" className="mt-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="section11" id="pricing">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-7" data-aos="fade-down">
              <h2 className="text-center mt-4">Choose Your Plan</h2>
              <p className="mt-4 text-center mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </div>
          <div className="row mt-5">
            {PurchaseData.map((items , index) => (
              <div className="col-lg-4 col-md-12" data-aos="fade-up" key={items.id}>
                <div className={`${index === 1 ? 'otherClass' : 'purchase-Container'}`}>
                  <Purchase price={items.price} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
