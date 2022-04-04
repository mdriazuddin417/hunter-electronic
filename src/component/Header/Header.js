import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="bg-purple-300 flex justify-between  px-12 py-4 items-center text-2xl">
      <Link to={"/"}>Hunter Electronic</Link>
      <nav className="flex gap-5 ">
        <CustomLink to={"/home"}>Home</CustomLink>
        <CustomLink to={"/reviews"}>Reviews</CustomLink>
        <CustomLink to={"/blogs"}>Blogs</CustomLink>
        <CustomLink to={"/about"}>About</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
