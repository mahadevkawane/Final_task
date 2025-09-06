import React from "react";

const App = () => {
  const leftTexts = ["Sample Text 1", "Sample Text", "Sample Text"];
  const rightTexts = ["Sample Text", "Sample Text", "Sample Text"];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4"
      style={{
        background: `radial-gradient(
          circle at top left,
          #4d5057 60%,
          #587ba6 90%,
          #8972d6 100%
        )`,
      }}
    >
      <div className="w-full max-w-5xl px-6 relative mb-12">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[7rem] font-semibold mb-6 tracking-tight leading-snug">
            Accomplish Anything in Developing
          </h1>
          <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl">
            This is the space to introduce the Services section. Briefly describe the
            types of services offered and highlight any special benefits or features.
          </p>
        </div>
      </div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="flex flex-col gap-6 items-start w-full sm:w-80">
          {leftTexts.map((text, idx) => (
            <div key={idx} className="flex flex-col items-start w-full">
              <div className="flex items-center space-x-3">
                <span className="text-black">
                  <svg
                    className="w-8 h-6 md:w-10 md:h-7"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-black text-lg md:text-xl font-semibold">
                  {text}
                </span>
              </div>
              <hr className="border-t-2 border-white w-[95%] mt-1" />
            </div>
          ))}
        </div>

        <div className="flex-shrink-0 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 flex items-center justify-center relative">
          <img
            src="Images/logo33.svg"
            alt="Logo"
            className="w-full h-full object-contain"
            style={{ filter: "grayscale(100%)" }}
          />
          <img
            src="Images/logo3.png"
            alt="Small Logo"
            className="absolute w-20 h-20 sm:w-24 sm:h-24 object-contain"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

        <div className="flex flex-col gap-6 items-start w-full sm:w-80">
          {rightTexts.map((text, idx) => (
            <div key={idx} className="flex flex-col items-start w-full">
              <div className="flex items-center space-x-3 justify-start">
                <span className="text-black">
                  <svg
                    className="w-8 h-6 md:w-10 md:h-7"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-black text-lg md:text-xl font-semibold">
                  {text}
                </span>
              </div>
              <hr className="border-t-2 border-white w-[95%] mt-1" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <button
          className="px-8 py-3 text-lg font-bold text-black rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          style={{
            background: "linear-gradient(90deg, #10B981, #059669)",
          }}
        >
          Create Now!
        </button>
      </div>
    </div>
  );
};

export default App;
