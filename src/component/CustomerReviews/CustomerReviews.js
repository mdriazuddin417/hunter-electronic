import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const CustomerReviews = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div>
      <h2 className="text-center my-10 text-5xl text-purple-800">
        Customer Reviews
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 rounded  bg-white">
        {reviews.slice(0, 3).map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
      <div className="flex justify-center items-center py-2">
        <Link to={"/reviews"}>
          <button className="bg-purple-500 py-2 px-4 rounded text-white  my-4 text-xl text-semibold">
            See All Reviews
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CustomerReviews;
