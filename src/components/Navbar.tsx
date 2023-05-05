import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between w-full py-2 text-black bg-white shadow-lg ">
      <div className="flex flex-wrap items-center justify-between w-full px-3">
        <Link className="relative h-16 w-44 " href="/">
          <Image
            className="h-full w-full object-scale-down"
            src="/logo.webp"
            fill
            alt="logo"
            sizes="(max-width: 639px) 100vw, (max-width: 1079px) 100vw, 1079px"
          />
        </Link>
        <a className="text-xl font-bold" href="tel:+380 67 777 77 77">
          +380 67 777 77 77
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
