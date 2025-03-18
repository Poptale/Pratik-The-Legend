import React from "react";
import Heading from "./SmallComponents/Heading";
import Paragraph from "./SmallComponents/Paragraph";
import Works from "./SmallComponents/Works";

const Connecting = () => {
  return (
    <div className=" flex h-[100vh] w-full flex-col bg-zinc-950 items-center pb-20">
      <Heading />
      <Paragraph />
      <Works />
    </div>
  );
};

export default Connecting;
