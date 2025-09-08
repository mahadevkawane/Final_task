import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-5 left-4 right-4 bg-[#FF875C] rounded-[25px] px-6 py-3 z-50 flex items-center justify-between">
      <ul className="hidden md:flex text-white font-medafor text-[20px] font-normal p-2.5 ml-auto mr-96">
        <li className="hover:underline cursor-pointer flex items-center">
          <a href="#home">Home</a>
        </li>
      </ul>

      <div className="md:hidden ml-auto text-white text-2xl cursor-pointer" onClick={() => setIsOpen(true)}>
        &#9776;
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-start pt-20 z-50 bg-black/50">
          <div className="relative bg-green-600 rounded-xl w-11/12 max-w-md p-8 flex flex-col items-center shadow-lg">
            <button className="absolute top-3 right-3 text-3xl font-bold text-white" onClick={() => setIsOpen(false)}>
              &times;
            </button>
            <ul className="flex flex-col space-y-6 text-2xl font-bold text-white text-center">
              <li className="hover:underline cursor-pointer">
                <a href="#home">Home</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

const App = () => {
  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-no-repeat bg-left-top"
        style={{
          backgroundImage: "url('Images/image1.jpg')",
        }}
      >
        <Navbar />

        <div className="absolute top-[80px] md:top-[100px] flex flex-col items-start px-4 sm:px-5 md:px-8 text-white ml-0 md:ml-8 z-10 w-full max-w-[280px] md:max-w-none">
          <h1 className="text-[28px] sm:text-[36px] md:text-[72px] lg:text-[120px] leading-tight sm:leading-tight md:leading-[80px] lg:leading-[115px] font-san max-w-xs sm:max-w-md md:max-w-3xl mt-4">
            I am a Sample Website
          </h1>

          <p className="text-[14px] sm:text-[16px] md:text-[28px] lg:text-[42px] leading-relaxed sm:leading-relaxed md:leading-[38px] lg:leading-[45px] mt-4 md:mt-6 w-full sm:w-[280px] md:w-[400px] font-sans font-normal mb-6 md:mb-10 p-2 sm:p-3">
            I'm a Sample Website, Create me as same as I am, Don't Do any Mistakes.
          </p>

          <button className="mt-auto mb-6 md:mb-10 bg-[#FF37E1] hover:bg-[#199b54] text-black hover:text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full shadow-lg text-[16px] sm:text-[20px] md:text-[28px] font-sans font-medium transition duration-300 pt-2 sm:pt-3">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
