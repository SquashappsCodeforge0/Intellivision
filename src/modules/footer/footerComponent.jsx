import React from "react";
import LOGO from "../../assets/images/LOGO.svg";
import FB from "../../assets/images/fb.svg";
import Twit from "../../assets/images/twitr.svg";
import Linkdin from "../../assets/images/linkdin.svg";
import Utub from "../../assets/images/utub.svg";
import "./footerComponent.css";
import { Link, useNavigate } from "react-router-dom";

export default function Footer({ head, para }) {
  const footerContactData = [
    {
      id: "1",
      number: "845-522-8279",
      mail: "company@example.com",
      location: "254 Route 17k suite 201 Newburgh,NY 12550",
    },
  ];

  const usefullLinks = [
    { id: "1", link: "Home", path: "/" },
    { id: "2", link: "About", path: "/about" },
    { id: "3", link: "News", path: "/" },
    { id: "4", link: "Contact", path: "/contact" },
  ];

  const companyNames = [
    { id: "1", name: "Services", path: "/service" },
    { id: "2", name: "Screenshots", path: "/about" },
    { id: "3", name: "Features", path: "/service-details" },
    { id: "4", name: "Pricing", path: "/shop" },
  ];

  const topDestinations = [
    { id: "1", location: "Testimonials", path: "/shop" },
    { id: "2", location: "Impressions", path: "/blog-details" },
    { id: "3", location: "Questions", path: "/about" },
    { id: "4", location: "Concepts", path: "/blog" },
  ];
  const navigate = useNavigate();

  return (
    <>
      <div className="footer-section">
        <div className="container">
          {/* style={{marginRight:"13rem"}} */}
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-5 mr-5">
              <div className="logo-name-sec" onClick={() => navigate("/")}>
                <img src={LOGO} alt="" />
                <span className="ralewayFont">INTELLI VISION</span>
              </div>

              {footerContactData.map((items) => (
                <div className="unordered-list">
                  <ul>
                    <li className="number">{items.number} </li>
                    <li>
                      <a href="mailto:@gmail.com" className="mail-add">
                        {items.mail}
                      </a>
                    </li>
                    <li className="per-loc">{items.location}</li>
                  </ul>
                </div>
              ))}
              <div className="social-logos">
                <img src={FB} alt="" />
                <img src={Twit} alt="" />
                <img src={Linkdin} alt="" />
                <img src={Utub} alt="" />
              </div>
            </div>

            {/* Useful Links */}

            <div className="col-lg-2 col-md-6 mb-5 second-col">
              <h3>Useful Links</h3>
              {usefullLinks.map((items) => (
                <div key={items.id} className="d-flex ">
                  <Link
                    to={items.path}
                    className="cursor-pointer"
                    style={{ textDecoration: "none" }}
                  >
                    <li>{items.link}</li>
                  </Link>
                </div>
              ))}
            </div>

            {/* Company  */}

            <div className="col-lg-2 col-md-6 mb-5">
              <h3>Company</h3>
              {companyNames.map((items) => (
                <div className="d-flex" key={items.id}>
                  <Link to={items.path}>
                    <li>{items.name}</li>
                  </Link>
                </div>
              ))}
            </div>

            {/* Top Destinations  */}

            <div className="col-lg-2 col-md-6">
              <h3>Top Destinations</h3>
              {topDestinations.map((items) => (
                <div className="d-flex" key={items.id}>
                  <Link to={items.path}>
                    <li>{items.location}</li>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="section-end">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-12 col-md-12">
              <p className="text-center">
                © Copyright Pixel Pro Creations All Rights Reserved 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
