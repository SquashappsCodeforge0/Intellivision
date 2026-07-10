import React from "react";
import "./fourthSection.css";
import Review1 from "../../../assets/images/dummy-image-landscape-1.jpg";
import Review2 from "../../../assets/images/dummy-image-landscape-1.jpg";
import Review3 from "../../../assets/images/dummy-image-landscape-1.jpg";
import Comments from "../comments/comments";
import CommonButton from "../../commonButton/commonButton";
import EmailLogo from "../../../assets/images/emailLogo.svg";
import LocationLogo from "../../../assets/images/locationLogo.svg";
import Footer from "../../footer/footerComponent";

export default function Section4() {
  const reviews = [
    {
      id: "1",
      image: Review1,
      head: "A Comprehensive Guide",
      para: "Lorem ipsum dolor sit consecteturadipiscing doeiusmod tempor incididunt quisnostrud exercitation ullamco laboris",
      day: '27',
      month: 'Jan'
    },
    {
      id: "2",
      image: Review2,
      head: "From Concepts to Reality",
      para: "Lorem ipsum dolor sit consecteturadipiscing doeiusmod tempor incididunt quisnostrud exercitation ullamco laboris",
      day: '27',
      month: 'Jan'
    },
    {
      id: "3",
      image: Review3,
      head: "Maximizing Productivity",
      para: "Lorem ipsum dolor sit consecteturadipiscing doeiusmod tempor incididunt quisnostrud exercitation ullamco laboris",
      day: '27',
      month: 'Jan'
    },
  ];

  return (
    <>
      <div className="section12">
        <div className="container">
          <div className="row d-flex justify-content-center ">
            <div className="col-lg-6" data-aos="fade-down">
              <h1 className="text-center mt-3">Latest Insights</h1>
              <p className="mt-3 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris{" "}
              </p>
            </div>
          </div>
          <div className="row mt-5">
            {reviews.map((items) => (
              <div className="col-lg-4 mb-4  cursor-pointer" data-aos="fade-up" key={items.id}>
                <Comments
                  imgSrc={items.image}
                  head={items.head}
                  para={items.para}
                  day={items.day}
                  month={items.month}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section13 text-left">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="form-container">
                <h3>Ready to get started?</h3>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control mt-4"
                      id="name"
                      aria-describedby="emailHelp"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control mt-4"
                      id="email"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="form-check"></div>
                  <div className="form-group mb-4">
                    <textarea
                      className="form-control mb-5"
                      id="exampleFormControlTextarea1"
                      rows="9"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <CommonButton
                    fontClr="#FFFFFF"
                    color="#170F58"
                    label="Get started now"
                  />
                </form>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <h1>Embark on Your Next Chapter</h1>
              <p className="mt-3">
                Lorem ipsum dolor sit consectetur dolor sit amet, dolor
                consectetur adipiscing sed doeiusmodut labore enim ad minim
                dolor veniam nostrud exercitation dolor sit, consectetur
                adipiscing dolor adipiscing doeiusmod enim tempor incididunt ut
                labore minim veniam, nostrud{" "}
              </p>
              <CommonButton
                fontClr="#FFFFFF"
                color="#170F58"
                label="Get Started Now"
              />
              <div className="lining"></div>
              <div className="mt-2">
                <div className="row ">
                  <div className="col">
                    <div className="d-flex align-center gap-4">
                      <img src={EmailLogo} alt="" style={{ width: "auto" }} />
                      <div>
                        <h3 className="mt-4">Company Location</h3>
                        <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="d-flex align-center gap-4">
                      <img
                        src={LocationLogo}
                        alt=""
                        style={{ width: "auto" }}
                      />
                      <div>
                        <h3 className="mt-4">Email</h3>
                        <p>
                          <a
                            href="mailto:lawson@example.com"
                            className="email-link"
                          >
                            alma.lawson@example.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
