import "./globals.css";

export const metadata = {
  title: "Portfolio website",
  description: "This is a website of the legent Pratik Jha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen w-full">
        {children}
      </body>
    </html>
  );
};