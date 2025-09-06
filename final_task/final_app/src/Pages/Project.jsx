import React, { useState } from 'react';

const Project = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative w-full h-auto min-h-screen overflow-hidden text-white font-sans bg-center bg-cover"
      style={{ backgroundImage: "url('Images/Projectimg2.jpg')" }}
    >
      <div className="relative z-20 p-4 sm:p-6 md:p-12">
        <h1 className="text-2xl sm:text-4xl md:text-5xl m-0">Project Name</h1>
        <h3 className="font-normal mt-1 sm:mt-2 mb-4 sm:mb-6 text-base sm:text-lg md:text-xl">
          Client Name
        </h3>

        {!isOpen ? (
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 text-2xl sm:text-3xl md:text-4xl bg-white bg-opacity-20 rounded-full text-white border-none cursor-pointer transition duration-300 hover:bg-opacity-40"
            onClick={() => setIsOpen(true)}
            aria-label="Open details"
          >
            +
          </button>
        ) : (
          <div className="bg-white bg-opacity-10 p-4 sm:p-6 md:p-8 rounded-2xl w-full max-w-[95%] sm:max-w-[90%] mt-6 sm:mt-8 backdrop-blur-md relative">
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 text-2xl sm:text-3xl md:text-4xl bg-white bg-opacity-20 rounded-full text-white border-none cursor-pointer transition duration-300 hover:bg-opacity-40"
              onClick={() => setIsOpen(false)}
              aria-label="Close details"
            >
              ×
            </button>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
              <img
                src="Images/Projectimg2.jpg"
                alt="Project"
                className="w-full sm:w-[300px] md:w-[400px] rounded-2xl object-cover"
              />
              <div>
                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
                  Share information on a previous project here to attract new clients. Provide
                  a brief summary, time frame, goals, and outcome.
                </p>
                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mt-4">
                  Add details about why this project was created, the challenges faced, and how
                  they were solved. Include media if needed.
                </p>
                <strong className="inline-block mt-4 font-bold cursor-pointer text-white text-sm sm:text-base md:text-lg">
                  Learn More &gt;&gt;
                </strong>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
