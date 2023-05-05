import Image from "next/image";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import BeforeAfterImage from "./BeforeAfterImage";
import ImageSlider from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

export interface CarouselProps {
  items: {
    image: string;
    title: string;
    description: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevItem = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const nextItem = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => prevItem(),
    onSwipedRight: () => nextItem(),
    trackMouse: true,
  });

  const getItemClassName = (index: number) => {
    const position = (index - currentIndex + items.length) % items.length;
    if (position === 0) {
      return "translate-x-0 opacity-100";
    } else if (position === 1) {
      return "translate-x-full opacity-50";
    } else if (position === items.length - 1) {
      return "-translate-x-full opacity-50";
    } else {
      return "opacity-0";
    }
  };

  return (
    <div {...handlers} className="relative flex h-96 w-full justify-center overflow-hidden ">
      <div className="relative flex w-full items-start justify-center">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={`absolute mb-12 w-full sm:w-2/3 transform px-12 transition-transform duration-500 ${getItemClassName(
                index
              )}`}
            >
              <div className="relative h-56 w-96 overflow-hidden ">
                  <Image
                    draggable={false}
                    className="h-full w-full object-cover"
                    src={item.image}
                    width={300}
                    height={200}
                    unoptimized
                    alt={item.title}
                  />
              </div>
              <h4 className="font-heading mb-3 mt-6 text-xl font-bold">
                {item.title}
              </h4>
              <p className="mb-0 leading-loose text-gray-500">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
      <button
        onClick={prevItem}
        className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-md bg-gray-300 bg-opacity-50 p-2"
      >
        <svg
          className="h-6 w-6 text-gray-700"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711L8.41421 10L11.7071 13.2929C12.0976 13.6834 12.0976 14.3166 11.7071 14.7071C11.3166 15.0976 10.6834 15.0976 10.2929 14.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289Z"
          />
        </svg>
      </button>
      <button
        onClick={nextItem}
        className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-md bg-gray-300 bg-opacity-50 p-2"
      >
        <svg
          className="h-6 w-6 text-gray-700"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.29289 5.29289C7.90237 5.68342 7.90237 6.31658 8.29289 6.70711L11.5858 10L8.29289 13.2929C7.90237 13.6834 7.90237 14.3166 8.29289 14.7071C8.68342 15.0976 9.31658 15.0976 9.70711 14.7071L13.7071 10.7071C14.0976 10.3166 14.0976 9.68342 13.7071 9.29289L9.70711 5.29289C9.31658 4.90237 8.68342 4.90237 8.29289 5.29289Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
