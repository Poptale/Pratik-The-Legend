"use client";
import { useState, useEffect } from "react";
import Loader from "./Loader";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Simulate loading effect (remove if unnecessary)
    setTimeout(() => setLoading(false), 1000);

    // Mobile detection
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Show loader first, then decide between mobile or desktop view
  if (loading) return <Loader />;
  return isMobile ? <MobileMessage /> : <>{children}</>;
}

// Mobile UI Message Component
function MobileMessage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-white text-center px-6 bg-black">
      <h1 className="text-3xl font-bold mb-4">⚠️ Oops!</h1>
      <p className="text-lg">
        You need a <span className="text-blue-400">desktop</span> to view{" "}
        <span className="text-blue-400">Pratik Jha’s Portfolio</span>.
      </p>
      <p className="mt-2 text-sm text-gray-400">
        Try opening this on a **laptop or PC** for the best experience.
      </p>
    </div>
  );
}
