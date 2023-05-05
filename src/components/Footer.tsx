import React from "react";


const Footer: React.FC = ({}) => {
  return (
    <footer className="text-center w-full text-white bg-neutral-200 ">
      <div className="container pt-9"></div>

      <div className="p-4 text-center bg-neutral-200 text-neutral-900 ">
        © 2023 Copyright:
        <span className="text-neutral-800 ">
          {" "}
          Jet & Co
        </span>
      </div>
    </footer>
  );
};

export default Footer;
