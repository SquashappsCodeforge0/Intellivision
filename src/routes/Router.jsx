import React, { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "../modules/about/About";
import Blog from "../modules/blog/Blog";
import PageNotFound from "../modules/pageNotFound/PageNotFound";
import ServiceDetails from "../modules/serviceDetail/ServiceDetail";
import UnderConstruction from "../modules/underConstruction/UnderConstruction";
import Logo from "../assets/images/LOGO.svg";

const Home = lazy(() => import("../modules/home/homeModuleContainer/home"));
const Contact = lazy(() => import("../modules/contact/contactPage"));
const Shop = lazy(() => import("../modules/shop/shop"));
const ProductDetails = lazy(() =>
  import("../modules/productDetails/productDetails")
);
const BlogDetail = lazy(() => import("../modules/blogDetail/BlogDetail"));
const Services = lazy(() => import("../modules/service/Service"));

const Router = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = async () => {
      const minimumDuration = 2000; // Minimum duration in milliseconds
      const startTime = Date.now();

      // Perform any asynchronous tasks here (if needed)

      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumDuration - elapsedTime);

      await new Promise((resolve) => setTimeout(resolve, remainingTime));
      setIsLoading(false);
    };

    delay();
  }, []);

  return (
    <Suspense
      fallback={
        isLoading && (
          <div
          className=""
            style={{
              height: "100vh",
              width: "100%",
              backgroundColor: "#170F58",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "10%",
            }}
          >
            {" "}
            <img
              src={Logo}
              alt=""
              style={{
                width: "20%",
                display: "flex",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <h1 style={{ color: "white" }} className="text-center mt-3">
              INTELLI VISION
            </h1>
          </div>
        )
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop-details" element={<ProductDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetail />} />
        <Route path="/service" element={<Services />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/underconstruction" element={<UnderConstruction />} />

        {/* 404 error page if no routes maches  */}

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
