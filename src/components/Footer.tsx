import React from "react";

const Footer: React.FC = ({}) => {
  return (
    <footer className="text-gray-700 bg-gray-50 body-font border-t-2">
      <div className="bg-black/10">
        <div className="w-full px-5 py-6 mx-auto grid grid-cols-1 sm:grid-cols-3 ">
          <div className="flex items-center justify-center w-full font-medium title-font sm:justify-start ">
            {/* FaMapMarkerAlt */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <title>Location</title>
              <path 
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"
              />
              <circle fill="currentColor" cx={12} cy={10} r={3} />

            </svg>
            <span className="ml-3 ">Hemel Hempstead, Hertfordshire</span>
          </div>
          <p className="flex justify-center mt-4 text-sm text-center text-gray-700 sm:ml-6 sm:mt-0">
            © 2023 Jet & Co. - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
