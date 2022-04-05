import React from "react";

const Blogs = () => {
  return (
    <div className="md:px-12  p-4 md:pt-20 md:pb-24 mx-auto">
      <h2 className="text-5xl text-center text-blue-900 font-bold">
        Question Mark
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 my-10 gap-5">
        <div className="review-cart">
          <h1 className="text-xl font-semibold text-indigo-900">
            What is Context API ?
          </h1>
          <p className="text-gray-500 py-10 text-justify">
            The Context API is a component structure provided by React
            Framework, which enables us to share certain forms of data at all
            levels of the application. It aims to solve the problem of prop
            drilling. This allows you to load data between components without
            any hesitation. All you have to do is call. As a result, there is no
            problem in the code
          </p>
        </div>
        <div className="review-cart">
          <h1 className="text-xl font-semibold text-indigo-900">
            What is Semantic Tag ?
          </h1>
        </div>
        <div className="review-cart">
          <h1 className="text-xl font-semibold text-indigo-900">
            What is inline, block and Inline-block Element ?
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
