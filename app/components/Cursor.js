"use client"; // Required for Next.js 13+ (app directory)

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
      const handleMouseMove = (e) => {
        if (cursorRef.current) {
          cursorRef.current.animate(
            { transform: `translate(${e.clientX}px, ${e.clientY}px)` },
            { duration: 1000, fill: "forwards" }
          );
        }
      };
  
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

  return (
    <div ref={cursorRef}
      className="cursor pointer-events-none h-13 w-13 rounded-full bg-[#f3d6f7] mix-blend-difference shadow-[0_0_25px_10px_rgba(255,0,0,1)] shadow-[#d68dd4] fixed z-[100000000000000000000000000000000000000000000000000000000] -translate-1/2 top-0 left-0 "
    />
  );
}
