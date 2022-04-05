import React from "react";

const Blogs = () => {
  return (
    <div className="md:px-12  p-4 md:pt-20 md:pb-24 mx-auto ">
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
          <p className="text-gray-500 py-10 text-justify">
            Semantic HTML elements are those that clearly define their meaning
            in human and machine-readable ways. It allows people at all levels
            to understand and work on websites. Elements such as (header, footer
            and article) are all considered semantic because they Accurately
            describes the purpose of the material and the type of content
            contained within them. It clearly communicates its meaning to both
            the developer and the browser. These elements clearly define its
            content.
          </p>
        </div>
        <div className="review-cart">
          <h1 className="text-xl font-semibold text-indigo-900">
            What is inline, block and Inline-block Element ?
          </h1>
          <p className="text-gray-500 py-10 text-justify">
            Block Element:They consume the entire width available regardless of
            their adequacy. They always start in a new line and have margins
            above and below them. There is no other element next to it. Inline
            Elements:Inline elements only occupy as much width as is needed,
            which allows for other elements that are inline next to it. Inline
            elements do not start from a new line and do not have top and bottom
            margins like block elements. Inline-block elements are similar to
            inline elements, except that padding and margins can be added on all
            four sides. Display in your CSS code: declare inline-block.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
