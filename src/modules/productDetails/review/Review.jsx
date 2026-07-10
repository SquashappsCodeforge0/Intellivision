import React, { useState } from "react";
import "./Review.css";
import CommonButton from "../../commonButton/commonButton";

const Review = () => {
  // const starsSequence = [ 5];

  const maxStars = 5; // Define the maximum number of stars
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (starIndex) => {
    setSelectedStars(starIndex + 1); // Index is 0-based, so add 1 to get the selected star count
  };

  const starsSequence = Array.from({ length: maxStars }, (_, index) => (
    <i
      key={index}
      className={`fas fa-star star-icon ${index < selectedStars ? 'selected' : ''}`}
      onClick={() => handleStarClick(index)}
    ></i>
  ));
  return (
    <>
      <div className="add-review">
        <h5>Add a review</h5>
        <p className="mt-3 fst-italic">
          Your email address will not be published. <br />
          Required fields are marked <i className="fas fa-star"></i>
        </p>
      </div>
      <div className="rating-section">
        <h5>Your rating</h5>
        <div className="stars-container">
        {starsSequence.map((star, index) => (
        <React.Fragment key={index}>
          {star}
          {index < maxStars - 1 && <div className="gap"></div>}
        </React.Fragment>
      ))}
        </div>
        <div className="your-review">
          <h5 className="important">
            Your review <i className="fas fa-star"></i>
          </h5>
          <textarea type="text-area" className="form-control mt-4" id="text-area" />
          <div className="name-email">
            <div style={{ minWidth: "48%" }}>
              <h5 for="firstName" className="form-label">
                Name
                <i className="fas fa-star"></i>
              </h5>
              <input type="email" className="form-control" id="firstName" />
            </div>
            <div className="mb-3" style={{ minWidth: "48%" }}>
              <h5 for="lastName" className="form-label">
                Email
                <i className="fas fa-star"></i>
              </h5>
              <input type="email" className="form-control" id="lastName" />
            </div>
          </div>
          <div className="d-flex gap-3 mt-4 mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <h5>
              Save my name, email, and website in this browser for the next time
              I comment.
            </h5>
          </div>
          <div className="contact-common-button">
            <CommonButton color="#170F58" label="Submit" fontClr="white" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Review;
