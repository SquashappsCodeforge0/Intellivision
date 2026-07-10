import React from "react";
import UnderConstructionImg from "../../assets/images/construction.jpg";
import Header from "../header/header";
import Footer from "../footer/footerComponent";
import './UnderConstruction.css'
import FlipperTimer from "./FlipperTimer";
import { useNavigate } from "react-router-dom";



const UnderConstruction = () => {
    const navigate = useNavigate()
  return (
    <>
      <Header />
      <div className="mt-5 mb-5 pt-5">
        <h2 className="text-center">Site is under construction</h2>
        <h5 className="text-center  mb-5 opacity-75"> Will be back in</h5>
      <FlipperTimer/>
      </div>
      <img src={UnderConstructionImg} alt="" className="under-construction-img" onClick={() => navigate('/')}/>
      
      <Footer />
    </>
  );
};
export default UnderConstruction;
