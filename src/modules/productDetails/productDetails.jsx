import React, { useState } from "react";
import "./productDetails.css";
import Product1img from "../../assets/images/dummy-image-portrait-1.jpg";
import Header from "../header/header";
import Footer from "../footer/footerComponent";
import Rating from "../../assets/images/Frame7.png";
import Counter from "./counter/counter";
import CommonButton from "../commonButton/commonButton";
import SectionDescribe from "./sectionDescription/sectionDescription";
import AdditionalInfo from "./additionalInformation/additionalInformation";
import Review from "./review/Review";
import ShippingDelivery from "./shippingDelivery/ShippingDelivery";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";

const ProductDetails = () => {
  const subdata = [
    {
      id: "1",
      class: "time-limit",
      para: "Order in the next 11 hours 33 minutes to get it by December 2, 2023",
    },
    { id: "2", class: "visitors", para: "Real Time 109 Visitors Right Now " },
    { id: "3", class: "spend", para: "Spend $1000 to get Free Shipping" },
  ];

  const [activeSection, setActiveSection] = useState("description");

  const handleClick = (section) => {
    setActiveSection(section);
  };
  return (
    <div className="product-details">
      <Header />
      <div className="shop-detail-breadcrumbs">
        <BreadCrumbs />
      </div>
      <div className="container pt-5">
        <div className="row pt-5"  data-aos="fade-up">
          <div
            className="col-lg-6 d-flex justify-content-center mb-5"
            style={{ height: "40rem" }}
          >
            <img src={Product1img} alt="" style={{ height: "100%" }}  data-aos="fade-up"/>
          </div>
          <div className="col-lg-6 mt-5" >
            <h1>Iphone 14 pro</h1>
            <img
              src={Rating}
              alt=""
              style={{ maxWidth: "25%" }}
              className="mt-2 mb-4"
            />
            <h5>$999</h5>
            <p className="mt-3">
              A magical new way to interact with iPhone. Groundbreaking safety
              features designed to save lives. An innovative 48MP camera for
              mind-blowing detail. All powered by the ultimate smartphone chip.
            </p>
            <div className="button-container"  data-aos="fade-up">
              <Counter />
              <CommonButton
                color="#170F58"
                fontClr="white"
                borderClr="white"
                label="Add to cart"
              />
              <CommonButton
                color="grey"
                fontClr="white"
                borderClr="black"
                label="Add to Wishlist"
              />
            </div>
            <div className="buy-now mt-4"  data-aos="fade-up">
              <CommonButton
                color="#170F58"
                fontClr="white"
                borderClr="white"
                label="Buy now"
              />
            </div>
            <div className="mt-3">
              {subdata.map((items) => (
                <div key={items.id}  data-aos="fade-up">
                  <p className={items.class}>{items.para}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="d-flex gap-5 mb-5">
          <div className="row active-styles" data-aos="fade-up">
            <div className="col-lg-3 mb-5"  >
              <h3
                onClick={() => handleClick("description")}
                className={
                  activeSection === "description" ? "active-tab" : "tab-class"
                }
              >
                Description
              </h3>
            </div>
            <div className="col-lg-3 mb-5">
              <h3
                onClick={() => handleClick("additionalinfo")}
                className={
                  activeSection === "additionalinfo"
                    ? "active-tab"
                    : "tab-class"
                }
              >
                Additional Information
              </h3>
            </div>
            <div className="col-lg-2 mb-5">
              <h3
                onClick={() => handleClick("reviews")}
                className={
                  activeSection === "reviews" ? "active-tab" : "tab-class"
                }
              >
                Reviews
              </h3>
            </div>
            <div className="col-lg-4 mb-5">
              <h3
                onClick={() => handleClick("shippingdelivery")}
                className={
                  activeSection === "shippingdelivery"
                    ? "active-tab"
                    : "tab-class"
                }
              >
                Shipping delivery
              </h3>
            </div>
            {activeSection === "description" && <SectionDescribe />}
            {activeSection === "additionalinfo" && <AdditionalInfo />}
            {activeSection === "reviews" && <Review />}
            {activeSection === "shippingdelivery" && <ShippingDelivery />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ProductDetails;
