// components/ClientLayout.js (Client Component)
"use client";
import { useState, useEffect } from "react";
import Loader from "./Loader";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration (remove if unnecessary)
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return <>{loading ? <Loader /> : children}</>;
}
