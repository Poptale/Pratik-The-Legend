import React from "react";
import Heading from "./Header/Heading";
import Name from "./Header/Name";
import Tags from "./Header/Tags";

const Nav = () => {
  return (
    <>
      <nav className="absolute flex justify-between w-full top-[8%] px-25 ">
        <Name />
        <Tags />
      </nav>
        <Heading />
    </>
  );
};

export default Nav;
