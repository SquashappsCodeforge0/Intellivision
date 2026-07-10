import React, { useEffect, useState } from "react";
import "./subNavbar.css";

const Navigation = ({ activeTab, onTabClick }) => {
  const [isSticky, setSticky] = useState("");

  const handleScroll = () => {
    setSticky(window.scrollY > 400);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
      <div className={`subnav-container ${isSticky ? "fixed" : ""}`}>
        <h5
          onClick={() => onTabClick("whatIsIt")}
          className={activeTab === "whatIsIt" ? "active" : "non-active"}
        >
          What is it
        </h5>
        <h5
          onClick={() => onTabClick("whyIsBest")}
          className={activeTab === "whyIsBest" ? "active" : "non-active"}
        >
          Why is it best
        </h5>
        <h5
          onClick={() => onTabClick("pictureGallery")}
          className={activeTab === "pictureGallery" ? "active" : "non-active"}
        >
          Picture Gallery
        </h5>
        <h5
          onClick={() => onTabClick("dietMaintenance")}
          className={activeTab === "dietMaintenance" ? "active" : "non-active"}
        >
          Diet Maintenance
        </h5>
        <h5
          onClick={() => onTabClick("clientsWords")}
          className={activeTab === "clientsWords" ? "active" : "non-active"}
        >
          Client's Words
        </h5>
      </div>
  );
};

export default Navigation;
