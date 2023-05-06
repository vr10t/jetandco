// Navbar.tsx

import Image from "next/image";
import React, { useState } from "react";

type Props = {
  links: { label: string; href: string }[];
};

const Navbar: React.FC<Props> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full px-6 py-2">
      <div className="flex flex-wrap items-center justify-between">
        <div className="mr-6 flex w-32 flex-shrink-0 items-center">
          <div className="relative h-16 w-full">
            <Image
              src="/logo.webp"
              fill
              className="object-contain"
              alt="logo"
              sizes="(max-width: 640px) 100vw, 640px"
            />
          </div>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center rounded border px-3 py-2 hover:border-black"
            onClick={toggleMenu}
          >
            <svg
              className="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } block w-full flex-grow lg:flex lg:w-auto lg:items-center`}
        >
          <div className="lg:flex-grow lg:text-center">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="mr-4 mt-4 block hover:text-black lg:mt-0 lg:inline-block"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="hidden lg:block">
          <a href="tel:555-555-5555" className="">
            555-555-5555
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
