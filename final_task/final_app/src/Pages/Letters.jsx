import React, { useState } from "react";
import { motion } from "framer-motion";

const letterData = {
  A: { bg: "Images/ABackground.jpg", img: "Images/Aimage.png" },
  B: { bg: "Images/BBackground.jpg", img: "Images/Bimage.png" },
  C: { bg: "Images/CBackground.jpg", img: "Images/Cimage.png" },
  D: { bg: "Images/DBackground.jpg", img: "Images/Dimage.png" },
  E: { bg: "Images/EBackground.jpg", img: "Images/Eimage.png" },
  F: { bg: "Images/FBackground.jpg", img: "Images/Fimage.png" },
};

const App = () => {
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [hoveredLetter, setHoveredLetter] = useState(null);

  const displayLetter = hoveredLetter || selectedLetter;

  return (
    <div className="flex flex-col h-screen font-sans relative border-t border-black">
      <div className="flex flex-col-reverse md:flex-row flex-1">
        <div
          className="flex-1 relative flex items-center justify-center overflow-hidden min-h-[300px]"
          style={{ perspective: "1500px" }}
        >
          <img
            src={letterData[displayLetter].bg}
            alt={`${displayLetter} background`}
            className="absolute inset-0 w-full h-full object-contain object-center"
          />

          <motion.img
            src={letterData[displayLetter].img}
            alt={displayLetter}
            className="w-64 h-64 sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] object-contain"
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "visible",
              transformOrigin: "50% 50%",
            }}
            animate={{ rotateY: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          />
        </div>

        <div className="flex-1 flex flex-col w-full md:w-1/2 border-l md:border-black border-t md:border-t-0">
          <div className="grid grid-cols-3 grid-rows-2 flex-1 gap-0.5">
            {Object.keys(letterData).map((letter) => (
              <button
                key={letter}
                onMouseEnter={() => setHoveredLetter(letter)}
                onMouseLeave={() => setHoveredLetter(null)}
                onClick={() => setSelectedLetter(letter)}
                className={`flex items-center justify-center transition-colors duration-300
                  ${
                    letter === displayLetter
                      ? "bg-white text-black"
                      : "bg-black text-white hover:bg-white hover:text-black"
                  }`}
              >
                <span
                  className={`transition-all duration-300 font-bold ${
                    letter === displayLetter || hoveredLetter === letter
                      ? "text-5xl sm:text-6xl"
                      : "text-3xl sm:text-4xl"
                  }`}
                >
                  {letter}
                </span>
              </button>
            ))}
          </div>

          <div className="hidden md:block bg-black px-4 py-4 h-auto md:h-52 border-t-2">
            <h2 className="text-[#9B6EFF] font-bold text-xl sm:text-2xl">
              A-Z PROJECT
            </h2>
            <p className="text-white text-base sm:text-lg md:text-xl font-normal max-w-sm mt-2">
              It’s over to you. Download our library of transparent video letters
              and add them to your next project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
