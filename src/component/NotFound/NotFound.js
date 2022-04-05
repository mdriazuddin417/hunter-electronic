import React from "react";

const NotFound = () => {
  return (
    <div className="pt-24 pb-20 mx-auto text-center md:px-12 p-4">
      <h2 className="text-5xl font-bold">Not Found Page</h2>
      <p className="text-6xl text-red-500 ">404</p>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-15 gap-4 mt-10">
        <p className="text-xl text-gray-700 text-justify shadow-lg p-4">
          Tell visitors clearly that the page they're looking for can't be
          found. Use language that is friendly and inviting. Make sure your 404
          page uses the same look and feel as the rest of your site. Consider
          adding links to your most popular articles or posts. 404 errors can be
          frustrating for users, so the main purpose of a 404 page is to turn
          the potential negative user experience of encountering an error into a
          positive one. The key to this is links. Links on 404 pages are so
          important because they give users a way out of the error page.
        </p>
        <img
          className="rounded"
          src="https://media.istockphoto.com/photos/error-page-not-found-picture-id1153372686?b=1&k=20&m=1153372686&s=170667a&w=0&h=4veHHEjI5rq2qpYWMXcHSzXfrp22SMwa79DsqqiYfAw="
          alt=""
        />
      </div>
    </div>
  );
};

export default NotFound;
