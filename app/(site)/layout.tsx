import "../globals.css";
import type { Metadata } from "next";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Mba james Portfolio App",
  description:
    "A nextjs and sanity.io project designed to TEACH HOW TO INTEGRATE SANITY AND NEXT JS TOGETHER",
  other: {
    "theme-color": "#fff",
    "color-scheme": "Black and White",
    "og:image": "https://www.pexels.com/photo/javascript-code-1972464",
    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark dark:bg-black">
        {" "}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
