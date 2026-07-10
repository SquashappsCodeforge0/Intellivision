import React from "react";
import "./Products.css";
import CommonButton from "../commonButton/commonButton";
import { useNavigate } from "react-router-dom";

const Products = ({ image, productName, price, rating }) => {
  const navigate = useNavigate();
  return (
    <div className="products-container">
      <img src={image} alt="" onClick={() => navigate("/shop-details")} />
      <img
        src={rating}
        alt=""
        className="mt-4 mb-3"
        style={{ maxWidth: "40%" }}
      />
      <h4> {productName}</h4>
      <h5>${price}</h5>
      <div className="buy-and-cart-btn">
        <CommonButton color="white" fontClr="black" label="Buy now" />
        <CommonButton color="#170F58" fontClr="white" label="Add to cart" />
      </div>
    </div>
  );
};
export default Products;
