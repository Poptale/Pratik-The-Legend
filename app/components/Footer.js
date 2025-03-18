import React from "react";
import Social from "./Footer/Social";
import Resume from "./Footer/Resume";

const Footer = () => {
  return (
    <div className="absolute bottom-[10%] w-full flex justify-between items-center px-25">
      <Social />
      <Resume />
    </div>
  );
};

export default Footer;
