import React from "react";
import Header from "../header/header";
import Footer from "../footer/footerComponent";
import "./About.css";
// import ReadMore from "./readmore/ReadMore";
import CEOimg from "../../assets/images/Placeholder-profile.jpg";
import ManagingDirectorImg from "../../assets/images/Placeholder-profile.jpg";
import TeamLeader1Img from "../../assets/images/Placeholder-profile.jpg";
import TeamLeader2Img from "../../assets/images/Placeholder-profile.jpg";
import TeamLeader3Img from "../../assets/images/Placeholder-profile.jpg";
import Support1Img from "../../assets/images/Placeholder-profile.jpg";
import Support2Img from "../../assets/images/Placeholder-profile.jpg";
import Support3Img from "../../assets/images/Placeholder-profile.jpg";
import AboutTestimonial from "./aboutTestimonial/aboutTestimonial";
import WhyChooseUs from "./whyChooseUs/WhyChooseUs";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
const About = () => {
  const choosingData = [
    {
      id: "1",
      subhead: "Experienced",
      mainhead: "Professionals",
      image:
        "https://dtconsultancy.wpengine.com/wp-content/uploads/2017/06/service-color-icon2.png",
      para: "Unlike other Frameworks which try to cover everything, It has been built specifically for wordpress.",
    },
    {
      id: "2",
      subhead: "Querry",
      mainhead: " Solved",
      image:
        "https://dtconsultancy.wpengine.com/wp-content/uploads/2017/06/service-color-icon4.png",
      para: "Unlike other Frameworks which try to cover everything, It has been built specifically for wordpress.",
    },

    {
      id: "3",
      subhead: "Quick",
      mainhead: "Turnaround",
      image:
        "	https://dtconsultancy.wpengine.com/wp-content/uploads/2017/06/service-color-icon3.png",
      para: "Unlike other Frameworks which try to cover everything, It has been built specifically for wordpress.",
    },

    {
      id: "4",
      subhead: "Response",
      mainhead: " time",
      image:
        "https://dtconsultancy.wpengine.com/wp-content/uploads/2017/06/service-color-icon1.png",
      para: "Unlike other Frameworks which try to cover everything, It has been built specifically for wordpress.",
    },
  ];

  const ourTeam = [
    {
      id: "1",
      position: "CEO",
      image: CEOimg,
      name: "Katherine Pierce",
      para: "Lorem ipsum dolor sit consecteturadipiscing doeiusmod tempor ",
    },
    {
      id: "2",
      position: "Managing Director",
      image: ManagingDirectorImg,
      name: "Caroline Fobes",
      para: "Lorem ipsum dolor sit consecteturadipiscing doeiusmod tempor ",
    },
  ];

  const teamLeaders = [
    {
      id: "1",
      image: TeamLeader1Img,
      name: "Hayley Marshall",
      para: "Lorem ipsum dolor sit consecteturadipiscing  ",
    },
    {
      id: "2",
      image: TeamLeader2Img,
      name: "Rabekha Mikaelson",
      para: "Lorem ipsum dolor sit consecteturadipiscing  ",
    },
    {
      id: "3",
      image: TeamLeader3Img,
      name: "Davina Claire",
      para: "Lorem ipsum dolor sit consecteturadipiscing  ",
    },
  ];
  const supportTeam = [
    {
      id: "1",
      image: Support1Img,
      name: "Freya Mikaelson",
      para: "Lorem ipsum dolor sit consecteturadipiscing  ",
    },
    {
      id: "2",
      image: Support2Img,
      name: "Hope Mikaelson",
      para: "Lorem ipsum dolor sit consecteturadipiscing  ",
    },
    {
      id: "3",
      image: Support3Img,
      name: "Alice Evans",
      para: "Lorem ipsum dolor sit consecteturadipiscing  ",
    },
  ];

  return (
    <>
      <Header />
      <div className="about-us">
        <div className="about-breadcrumb">
          <BreadCrumbs />
        </div>
        <div className="container pt-5">
          <h2 className="text-center mt-4 " data-aos="fade-up">Reasons for choosing us</h2>
          <p className="mt- text-center mb-3" data-aos="fade-up">
            Innovate , change and transform
          </p>
          <div
            className="row reason-section justify-content-center"
            style={{ marginTop: "3rem" }}
          >
            {choosingData.map((items) => (
              <div className="col-lg-6 col-md-12" key={items.id} data-aos="fade-up">
                <WhyChooseUs
                  image={items.image}
                  subhead={items.subhead}
                  mainhead={items.mainhead}
                  para={items.para}
                />
              </div>
            ))}
          </div>

          {/* Team section  */}

          <div className="team-section">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="text-center" data-aos="fade-up">our team</h2>
                <p className="mt-4 text-center mb-5" data-aos="fade-up">
                  Together we achieve more
                </p>
              </div>
              {ourTeam.map((items) => (
                <div className="col-lg-6" key={items.id} >
                  <h3 className="text-center mb-5" data-aos="fade-up">{items.position}</h3>
                  <div className="team-image " data-aos="fade-up">
                    <img src={items.image} alt="" style={{height:"100%"}}/>
                    <div className="content">
                      <h4 className="text-center" style={{ width: "80%" }}>
                        {items.name}
                      </h4>
                      <p className="text-center" style={{ width: "50%" }}>
                        {items.para}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* team leaders  */}
              <h2 className="text-center mb-5 mt-5" data-aos="fade-up">Team leaders</h2>
              {teamLeaders.map((items) => (
                <div className="col-lg-4" key={items.id} data-aos="fade-up">
                  <div className="team-image" data-aos="fade-up">
                    <img src={items.image} alt="" />
                    <div className="content team-leaders">
                      <h6 className="text-center" style={{ width: "80%" }}>
                        {items.name}
                      </h6>
                      <p className="text-center" style={{ width: "50%" }}>
                        {items.para}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <h2 className="text-center mb-5 mt-5" data-aos="fade-up">The support team</h2>
              {supportTeam.map((items) => (
                <div className="col-lg-4" key={items.id}  >
                  <div className="team-image" data-aos="fade-up">
                    <img src={items.image} alt="" />
                    <div className="content support-team">
                      <h6 className="text-center" style={{ width: "80%" }}>
                        {items.name}
                      </h6>
                      <p className="text-center" style={{ width: "50%" }}>
                        {items.para}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <AboutTestimonial />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About;
