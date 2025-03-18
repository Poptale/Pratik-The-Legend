import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Social = () => {
  return (
    <>
      <div className="flex gap-10 ">
        <FaInstagram className="cursor-pointer" color="white" size={25} />
        <FaLinkedin className="cursor-pointer" color="white" size={25} />
        <FaGithub className="cursor-pointer" color="white" size={25} />
        <FaXTwitter className="cursor-pointer" color="white" size={25} />
      </div>
    </>
  );
};

export default Social;
