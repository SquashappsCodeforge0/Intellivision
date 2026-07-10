import React from "react";
import PageNotFoundimg from "../../assets/images/page-not-found.svg";
import Header from "../header/header";
import Footer from "../footer/footerComponent";
import "./PageNotFound.css";
import CommonButton from "../commonButton/commonButton";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <img src={PageNotFoundimg} alt="" className="page-not-found" />
      <div
        className="d-flex mx-auto mb-5" style={{maxWidth:"max-content"}}
        onClick={() => navigate("/")}
      >
        <CommonButton
          label="Go Back Home"
          color="#170F58"
          borderClr="#170F58"
          fontClr="white"
        />
      </div>

      <Footer />
    </div>
  );
};
export default PageNotFound;
