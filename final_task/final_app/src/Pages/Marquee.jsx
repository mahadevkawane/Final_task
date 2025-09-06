import React, { useState } from "react";

const Marquee = () => {
  const [paused, setPaused] = useState(false);

  const handleClick = () => {
    setPaused(!paused);
  };

  const items = Array(10).fill("HURDLES");

  return (
    <div
      className="w-full overflow-hidden bg-white py-3 cursor-pointer"
      onClick={handleClick}
    >
      <div
        className="flex items-center whitespace-nowrap"
        style={{
          animation: paused ? "none" : "marquee 15s linear infinite",
        }}
      >
        {items.map((text, idx) => (
          <React.Fragment key={idx}>
            <span className="text-[#02ad8b] text-4xl sm:text-5xl md:text-6xl font-bold mx-2 sm:mx-4 md:mx-6 flex-shrink-0">
              {text}
            </span>
            <img
              src="Images/Marklogo.svg"
              alt="Logo"
              className="h-10 sm:h-12 md:h-14 w-auto mx-2 sm:mx-4 md:mx-6 flex-shrink-0"
            />
          </React.Fragment>
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
};

export default Marquee;
