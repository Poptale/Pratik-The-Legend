import React from "react";
import Heading from "./Heading";
import Para from "./Para";
import Ball from "../About/Ball";
const Connecting = () => {
  return (
    <>
      <div className="h-[200vh] bg-[#000000] text-white">
        <Heading />
        <div className="flex justify-evenly items-center h-full w-full">
          <Para />
          <div className="h-[150vh] w-full absolute -translate-1/2 top-[37.5%] left-[50%] ">
            <Ball />
          </div>
        </div>
      </div>
    </>
  );
};

export default Connecting;
