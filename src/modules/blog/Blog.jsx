import React from "react";
import "./Blog.css";
import Header from "../header/header";
import Footer from "../footer/footerComponent";
import Comments from "../home/comments/comments";
import BlogImg1 from "../../assets/images/dummy-placeholder.png";
import BlogImg2 from '../../assets/images/dummy-placeholder.png';
import BlogImg3 from "../../assets/images/dummy-placeholder.png";
import BlogImg4 from "../../assets/images/dummy-placeholder.png";
import BlogImg5 from "../../assets/images/dummy-placeholder.png";
import BlogImg6 from "../../assets/images/dummy-placeholder.png";
import { useNavigate } from "react-router-dom";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";

const Blog = () => {
  const reviews = [
    {
      id: "1",
      image: BlogImg1,
      head: "A Comprehensive Guide",
      para: "Lorem ipsum dolor sit consecteturadipiscing doeiusmod tempor incididunt quisnostrud exercitation ullamco laboris",
      day: '27',
      month: 'Jan'
    },
    {
      id: "2",
      image: BlogImg2,
      head: "From Concepts to Reality",
      para: "Lorem ipsum dolor sit consecteturadipiscing doeiusmod tempor incididunt quisnostrud exercitation ullamco laboris",
      day: '27',
      month: 'Jan'
    },
    {
      id: "3",
      image: BlogImg3,
      head: "Maximizing Productivity",
      para: "Lorem ipsum dolor sit consecteturadipiscing doeiusmod tempor incididunt quisnostrud exercitation ullamco laboris",
      day: '27',
      month: 'Jan'
    },
    {
      id: "4",
      image: BlogImg4,
      head: "The Ultimate Guide",
      para: "Lorem ipsum dolor sit consecteturadipiscing doeiusmod tempor incididunt quisnostrud exercitation ullamco laboris",
      day: '27',
      month: 'Jan'
    },
    {
      id: "5",
      image: BlogImg5,
      head: "Tips for Productivity",
      para: "Lorem ipsum dolor sit consecteturadipiscing doeiusmod tempor incididunt quisnostrud exercitation ullamco laboris",
      day: '27',
      month: 'Jan'
    },
    {
      id: "6",
      image: BlogImg6,
      head: "Exploring the Efficiency",
      para: "Lorem ipsum dolor sit consecteturadipiscing doeiusmod tempor incididunt quisnostrud exercitation ullamco laboris",
      day: '27',
      month: 'Jan'
    },
  ];

  const navigate = useNavigate();
  return (
    <>
      <Header />

      <div className="blog-container" >
        <div className="blog-breadcrumbs">
          <BreadCrumbs />
        </div>
        <div className="container">
          <div className="row mt-5">
            {reviews.map((items) => (
              <div className="col-lg-4 mb-5 blogs" key={items.id} onClick={() => navigate("/blog-details")} data-aos="fade-up">
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
      <Footer />
    </>
  );
};
export default Blog;
