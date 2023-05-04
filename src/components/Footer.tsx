import React from "react";


const Footer: React.FC = ({}) => {
  return (
    <footer className="text-center text-white bg-neutral-200 dark:bg-neutral-600">
      <div className="container pt-9"></div>

      <div className="p-4 text-center bg-neutral-300 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        © 2023 Copyright:
        <span className="text-neutral-800 dark:text-neutral-400">
          {" "}
          Jet & Co
        </span>
      </div>
    </footer>
  );
};

export default Footer;
