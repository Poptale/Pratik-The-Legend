"use client";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import React from "react";
import Cyl from "./components/Cyl";
import Background from "./components/Background";
import Arrow from "./components/Arrow";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Connecting from "./components/Page2/Connecting";
import Connecting2 from "./components/Page3/Connecting2";
import Connect from "./components/Page4/Connect";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const lenis = new Lenis({
    autoRaf: true,
    duration: 5,
    lerp: 10,
  });

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  return (
    <div>
      <Cursor />
      <div className="h-screen w-full sticky top-0">
        <Nav />
        <Background />
        <Cyl />
        <Footer />
        <Arrow />
      </div>

      <div className="page2 overflow-hidden sticky -top-[100vh]">
        <Connecting />
      </div>

      <div className="page3 h-[400vh] sticky -top-[100vh]">
        <Connecting2 />
      </div>
    </div>
  );
};

export default Page;
