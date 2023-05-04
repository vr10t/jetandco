import React, { useState, useRef, useCallback } from "react";

interface BeforeAfterImageProps {
  beforeImage: string;
  afterImage: string;
}

const BeforeAfterImage: React.FC<BeforeAfterImageProps> = ({
  beforeImage,
  afterImage,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      const newPosition = (x / width) * 100;
      setSliderPosition(newPosition);
    },
    []
  );

  return (
    <div
      ref={sliderRef}
      onMouseMove={handleMouseMove}
      onMouseDown={e=>e.stopPropagation()}

      className="relative h-64 w-full overflow-hidden"
      draggable={false}
    >
      <img draggable={false} src={beforeImage} alt="Before" className="absolute inset-0 h-full w-full" />
      <div
      draggable={false}
        className="absolute bg-cover bottom-0 right-0 top-0"
        style={{
          width: `${100 - sliderPosition}%`,
          backgroundImage: `url(${afterImage})`,
        }}
      ></div>
      <div
        className="absolute bottom-0 top-0 bg-gray-200"
        style={{
          left: `calc(${sliderPosition}% - 0.5rem)`,
          width: "1rem",
        }}
      ></div>
    </div>
  );
};

export default BeforeAfterImage;
