import React from "react";
import { Outlet } from "react-router";
import useReviews from "../../hooks/useReviews";
const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-12 h-[100vh] flex flex-col justify-center items-center ">
      <div className=" grid gap-5 md:grid-cols-2 grid-cols-1">
        <div className="md:order-1 order-2">
          <h1 className="text-4xl text text-purple-800 font-bold uppercase py-3">
            Electronic device is very Wonderful
          </h1>
          <p className="text-xl text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            veniam nulla necessitatibus perspiciatis consequatur. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Voluptate veniam nulla
            necessitatibus perspiciatis consequatur.{" "}
          </p>
        </div>
        <div className="md:order-2 order-1 flex-shrink-0">
          <img src="https://media.istockphoto.com/photos/mobile-computing-devices-with-blue-wave-background-picture-id185278319?b=1&k=20&m=185278319&s=170667a&w=0&h=QJ6k_XxNbbozz0SCRV_QABbXcCxyyxxb_f6NBgEky6A=" />
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default HomePage;
