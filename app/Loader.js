// components/Loader.js
import React from "react";

const Loader = () => {
  return (
    <div className="loader-container bg-black flex flex-col justify-center items-center gap-10">
      <div className="spinner"></div>
      <p className="text-white text-4xl">Welcome to PRATIK JHA'S portofolio</p>
    </div>
  );
};

export default Loader;
