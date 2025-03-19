import ClientLayout from "./ClientLayout";
import "./globals.css";
import Head from "next/head";



 export const metadata = {
   title: "Portfolio website",
   description: "This is a website of the legent Pratik Jha",
   icons: {
     icon: '/Icon.png',
   }
 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/Icon.png" />
      </Head>
      <body className="h-screen w-full bg-black">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
};
