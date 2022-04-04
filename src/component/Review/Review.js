import React from "react";
import "./Review.css";
const Review = ({ review }) => {
  const { name, about, picture, ratings } = review;
  return (
    <div className="review-cart mx-auto ">
      <div className="review-img">
        <img src={picture} alt="" />
      </div>

      <div>
        <p className="text-xl font-semibold py-4">{name}</p>
        <p className="text-gray-600 capitalize text-justify">{about}</p>
        <p>
          <strong>Ratings:</strong> {ratings}
        </p>
      </div>
    </div>
  );
};

export default Review;
