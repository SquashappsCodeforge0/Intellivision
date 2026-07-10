import React from "react";
import "./Service.css";
import Header from "../header/header";
import Footer from "../footer/footerComponent";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
import CommonButton from "../commonButton/commonButton";
import CloudImg from "../../assets/images/cloud.svg";
import Design from '../../assets/images/design.svg'
import Visualization from '../../assets/images/visualization.svg'
import Presentation from '../../assets/images/presentation.svg'
import Security from '../../assets/images/security.svg'
import Support from '../../assets/images/support.svg'
import Courses from "./courses/Courses";
import TrainingPackages from "./trainingPackages";
import MobileUsage1 from "../../assets/images/dummy-placeholder.png";
import MobileUsage2 from "../../assets/images/dummy-placeholder.png";
import MobileUsage3 from "../../assets/images/dummy-placeholder.png";
import EnrollSecion from "./EnrollSection";
import FacebookImg from "../../assets/images/enroll-fb.svg";
import TwitterImg from "../../assets/images/enroll-twit.svg";
import GithubImg from "../../assets/images/enroll-github.svg";
import LinkdinImg from "../../assets/images/enorll-linkdin.svg";

const Service = () => {
  const courseDatas = [
    {
      id: "1",
      image: CloudImg,
      head: "CLOUD STORAGE",
      para: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: "2",
      image: Design,
      head: "QUALITY DESIGN",
      para: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: "3",
      image: Visualization,
      head: "VISUALIZATION",
      para: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: "4",
      image: Presentation,
      head: "PRESENTATION",
      para: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: "5",
      image: Security,
      head: "SECURITY",
      para: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: "6",
      image: Support,
      head: "SUPPORT",
      para: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
  ];


  const tpHeadData = [
    {
      id: "1",
      head: "mobile usage",
      image: MobileUsage1,
      subp1: "basic requirements",
      subp2: "additional requirements",
      subp3: "Normal needs",
      price: "90",
    },
    {
      id: "2",
      head: "Support",
      image: MobileUsage2,
      subp1: "basic requirements",
      subp2: "additional requirements",
      subp3: "Normal needs",
      price: "90",
    },
    {
      id: "3",
      head: "Presentation",
      image: MobileUsage3,
      subp1: "basic requirements",
      subp2: "additional requirements",
      subp3: "Normal needs",
      price: "90",
    },
  ];

  const enrollData = [
    { id: "1", image: FacebookImg },
    { id: "2", image: TwitterImg },
    { id: "3", image: LinkdinImg },
    { id: "4", image: GithubImg },
  ];
  return (
    <>
      <div className="services-container">
        <Header />
        <div className="service-breadcrumb">
          <BreadCrumbs />
        </div>

        <div className="container pt-3">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-7">
              <h2>All these Services for you</h2>
              <h6>JUST PICK WHAT YOU NEED TO LEARN</h6>
            </div>
            <div className="row mb-5">
              {courseDatas.map((items) => (
                <div className="col-lg-4 mt-5 text-center" key={items.id}>
                  <Courses
                    image={items.image}
                    head={items.head}
                    para={items.para}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="row d-flex justify-content-center pt-3">
            <div className="col-lg-7 ">
              <h2>Convenient Learning Methods</h2>
              <h6>FOR FREE. HOW TO LEARN</h6>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur eius commodi velit debitis delectus perspiciatis
                molestias dolorem dolorum nobis iure laboriosam harum
                voluptatibus in, ipsa corrupti sit odio suscipit quo?
              </p>
            </div>
          </div>
        </div>
        <div className="left-right-contents">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-center mb-5">
                <h3>Want to know what is best for you</h3>
                <a href="#view-catogories">View categories</a>
              </div>
              <div className="col-lg-6 text-center">
                <h3>Take a look at popular collection</h3>
                <a href="#view-catogories">View collections</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-5">
          <div className="row d-flex justify-content-center ">
            <div className="col-lg-7 ">
              <h2>Lowest Pricing Possible</h2>
              <h6>FOR FREE. HOW TO LEARN</h6>
              <p className="mt-4 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur eius commodi velit debitis delectus perspiciatis
                molestias dolorem dolorum nobis iure laboriosam harum
                voluptatibus in, ipsa corrupti sit odio suscipit quo?
              </p>
            </div>
          </div>
          <div className="row mb-3">
            {tpHeadData.map((items) => (
              <div className="col-lg-4" key={items.id}>
                <TrainingPackages
                  head={items.head}
                  image={items.image}
                  subpara1={items.subp1}
                  subpara2={items.subp2}
                  subpara3={items.subp3}
                  price={items.price}
                />
              </div>
            ))}
          </div>
          <div className="start-journey">
            <h2>Start a Journey. Enroll Now</h2>
            <h6 className="mb-5">LEARN SOMETHING WHEREVER YOU ARE</h6>
            <div className="join-us-btn">
            <CommonButton
              label="Join us now"
              borderClr="#170F58"
              color="#170F58"
              fontClr="white"
            />
            </div>
          </div>
          <div className="row d-flex justify-content-center ">
            <div className="col-lg-6">
              <h2>Direct links</h2>
              <h6 className="mb-5">become a part by enrolling</h6>
            </div>
          </div>
          <div className="row mb-5">
            {enrollData.map((items) => (
              <div className="col-lg-3 d-flex justify-content-center" key={items.id}>
                <EnrollSecion logo={items.image} />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Service;
