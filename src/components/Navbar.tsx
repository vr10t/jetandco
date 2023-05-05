import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-white py-2 text-black shadow-lg ">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
          <Link className="relative h-16 w-44 " href="/">
            <Image className="object-scale-down w-full h-full" src="/logo.png" fill alt="logo" />
            </Link>
        <a className="text-xl font-bold" href="tel:+380 67 777 77 77">
          +380 67 777 77 77
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
