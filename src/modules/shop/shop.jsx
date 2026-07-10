import React from "react";
import "./shop.css";
import Header from "../header/header";
import Footer from "../footer/footerComponent";
// import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
import Product1 from "../../assets/images/dummy-image-landscape-1.jpg";
// import Product2 from "../../assets/images/Elegant smartphone composition (no bg).png";
import Products from "../products/Products";
import Rating from "../../assets/images/Frame7.png";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";

const Shop = () => {
  const displayProducts = [
    {
      id: "1",
      image: Product1,
      rating: Rating,
      productName: "Iphone 14 pro",
      price: "999",
    },
    {
      id: "2",
      image: Product1,
      rating: Rating,
      productName: "Iphone 13",
      price: "999",
    },
    {
      id: "3",
      image: Product1,
      rating: Rating,
      productName: "Iphone 13 pro",
      price: "999",
    },
    {
      id: "4",
      image: Product1,
      rating: Rating,
      productName: "Apple Airbuds",
      price: "999",
    },
    {
      id: "5",
      image: Product1,
      rating: Rating,
      productName: "Iphone 12",
      price: "999",
    },
    {
      id: "6",
      image: Product1,
      rating: Rating,
      productName: "Iphone 11 pro",
      price: "999",
    },
  ];

  const navigate = useNavigate()
  return (
    <div>
      <Header />
      <div className="shop-section">
      <div className="products-breadcrumbs">
          <BreadCrumbs/>
          </div>
        <div className="container">
          <InputGroup className="mb-3 d-flex justify-content-end" data-aos="fade-up">
            <FormControl
              placeholder="Search..."
              aria-label="Search"
              aria-describedby="basic-addon2"
              className="search-button"
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
             
            >
              Search
            </Button>
          </InputGroup>
          <div className="row">
            {displayProducts.map((items) => (
              <div className="col-lg-4 mb-5" onClick={()=> navigate('/shop-details')} key={items.id} data-aos="fade-up">
                <Products
                  image={items.image}
                  rating={items.rating}
                  productName={items.productName}
                  price={items.price}
                />
              </div>
            ))}
          </div>
          <nav aria-label="...">
            <ul className="pagination justify-content-center mt-4">
              <li className="page-item disabled">
                <a className="page-link" href="#previous">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#1">
                  1
                </a>
              </li>
              <li className="page-item active" aria-current="page">
                <a className="page-link" href="#2">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#3">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#next">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Shop;
