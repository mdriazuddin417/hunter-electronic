import React from "react";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          <Rating
            initialRating={ratings}
            emptySymbol={<FontAwesomeIcon icon={faStar} />}
            fullSymbol={
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
            }
            readonly
          ></Rating>
        </p>
      </div>
    </div>
  );
};

export default Review;
