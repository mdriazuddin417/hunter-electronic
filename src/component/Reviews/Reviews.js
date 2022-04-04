import React from "react";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div>
      <h2 className="text-center my-4 text-5xl text-purple-800">
        All Customer Review
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 rounded shadow-lg bg-white pt-20 pb-24 ">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
