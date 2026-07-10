import React from "react";
import Header from "../header/header";
import Footer from "../footer/footerComponent";
import GoogleMap from "../googleMap/googleMap";
import "./contactPage.css";
import ContactMethods from "./contactMethods/ContactMethods";
import Location from "../../assets/images/blue-loc.svg";
import CommonButton from "../commonButton/commonButton";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";

export default function ContactPage() {
  const contactMethods = [
    {
      id: "1",
      image: Location,
      method: "Talk to us",
      medium1: "1224 2234 LAW  ",
      medium2: "1224 2235 225",
    },
    {
      id: "2",
      image: Location,
      method: "Mail us @",
      medium1: "admin@intelli.com",
      medium2: "support@intelli.com",
    },
    {
      id: "3",
      image: Location,
      method: "Our location",
      medium1: "625 Road, Kattaghat",
      medium2: "LA 14536, USA",
    },
  ];
  return (
    <>
      <div>
        <Header />
        <div className="Form-section">
          <div className="contact-breadcrumb">
            <BreadCrumbs />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 jusitfy-content-center">
                <h2 className="text-center"data-aos="fade-up">Enquiry Form</h2>
                <h6 className="text-center" data-aos="fade-up">Its now easy to contact us</h6>
                <form className="mt-5">
                  <div className="d-flex justify-content-center name-sec">
                    <div className="mb-3" data-aos="fade-up">
                      <label for="firstName" className="form-label">
                        First Name
                      </label>
                      <input type="email" className="form-control" id="firstName" />
                    </div>
                    <div className="mb-3" data-aos="fade-up">
                      <label for="lastName" className="form-label">
                        Last Name
                      </label>
                      <input type="text" className="form-control" id="lastName" />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center  name-sec">
                    <div className="mb-3" data-aos="fade-up">
                      <label for="email" className="form-label">
                        E-mail
                      </label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="mb-3" data-aos="fade-up">
                      <label for="Phone" className="form-label">
                        Phone
                      </label>
                      <input type="text" className="form-control" id="Phone" />
                    </div>
                  </div>
                  <div className="mb-3 mt-5 justify-content-center" data-aos="fade-up">
                    <label for="exampleFormControlTextarea1" className="form-label">
                      Enter your message
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="10"
                      style={{ maxWidth: "50%", minWidth: "50%" }}
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-center" data-aos="fade-up">
                    <CommonButton
                      fontClr="white"
                      color="#170F58"
                      label="Submit"
                      borderClr="#170F58"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* contact us  */}

          <div className="contact-method">
            <div className="container mb-5">
              <div className="row justify-content-center mt-5" >
                <h2 data-aos="fade-up">Reach us through</h2>
                <h6 className="text-center" data-aos="fade-up">Our response time will get you surprised</h6>
                {contactMethods.map((items) => (
                  <div className="col-lg-4" key={items.id} data-aos="fade-up">
                    <ContactMethods
                      image={items.image}
                      method={items.method}
                      medium1={items.medium1}
                      medium2={items.medium2}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-up">
              <GoogleMap />
            </div>
            <div style={{marginTop:"-1rem"}}>
            <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
