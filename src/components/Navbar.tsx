// Navbar.tsx

import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  links: { label: string; href: string }[];
};

const Navbar: React.FC<Props> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(links);

  return (
    <nav className="py-2 px-6 w-full">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center w-32 flex-shrink-0 mr-6">
          <div className="relative h-16 w-full">
            <Image src="/logo.webp" layout="fill" objectFit="contain" alt="logo" />
            </div>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded hover:border-black"
            onClick={toggleMenu}
          >
            <svg
              className="fill-current h-3 w-3"
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
            isOpen ? 'block' : 'hidden'
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="lg:flex-grow lg:text-center">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="hidden lg:block">
          <a
            href="tel:555-555-5555"
            className=""
          >
          555-555-5555
          </a>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
