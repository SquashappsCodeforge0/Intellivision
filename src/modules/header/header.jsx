import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import LOGO from "../../assets/images/LOGO.svg";
import "./header.css";
import "../../assets/css/main.css";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const closeNavbar = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    if (navbarToggler && navbarCollapse.classList.contains("show")) {
      navbarToggler.click();
    }
  };

  return (
    <nav className="navbar navBg navbar-expand-xl">
      <div className="container">
        <div className="nav-contain" onClick={() => { navigate("/"); closeNavbar(); }}>
          <img src={LOGO} alt="logo" />
          <span className="ralewayFont">INTELLI VISION</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav navBarData ms-auto navbar-nav-scroll">
            <li className="nav-item">
              <Link onClick={closeNavbar} className="nav-link colorForNavFont" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeNavbar} className="nav-link colorForNavFont" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a onClick={closeNavbar} className="nav-link colorForNavFont" href="/#features">
                Features
              </a>
            </li>
            <li className="nav-item dropdown">
              <Link
                onClick={closeNavbar}
                className="nav-link colorForNavFont dropdown-toggle"
                to="#pages"
                id="pagesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages
              </Link>
              <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                <Link className="dropdown-item" to="/shop">
                  Shop
                </Link>
                <Link className="dropdown-item" to="/blog">
                  Blog
                </Link>
                <Link className="dropdown-item" to="/service">
                  Service
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <a onClick={closeNavbar} className="nav-link colorForNavFont" href="/#screenshots">
                Screenshots
              </a>
            </li>
            <li className="nav-item">
              <a onClick={closeNavbar} className="nav-link colorForNavFont" href="/#process">
                Process
              </a>
            </li>
            <li className="nav-item">
              <a onClick={closeNavbar} className="nav-link colorForNavFont" href="/#pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <Link onClick={closeNavbar} className="nav-link colorForNavFont" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
