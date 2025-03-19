'use client'
import "./globals.css";
import Head from "next/head";
import { useState, useEffect } from "react";
import Loader from "./Loader";



// export const metadata = {
//   title: "Portfolio website",
//   description: "This is a website of the legent Pratik Jha",
//   icons: {
//     icon: '/Icon.png',
//   }
// };

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration (remove if unnecessary)
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/Icon.png" />
      </Head>
      <body className="h-screen w-full bg-black">
        {loading ? <Loader /> : children}
      </body>
    </html>
  );
};
