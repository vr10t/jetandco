import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <title>{title}</title>

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Navbar />
        <main className="flex max-w-full flex-col items-center justify-center text-center lg:px-20">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
