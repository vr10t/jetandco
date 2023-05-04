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

      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Navbar />
        <main className="flex flex-1 flex-col items-center justify-center px-20 text-center">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
