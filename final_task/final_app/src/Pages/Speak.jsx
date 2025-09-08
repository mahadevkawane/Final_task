import React, { useState, useEffect, useRef } from "react";

const speakers = [
  { name: "Harry Williams", title: "Director of Mobile Gaming, Fixer", image: "Images/img17.jpg" },
  { name: "Akira Lee", title: "Director of Mobile Gaming, Fixer", image: "Images/img18.jpg" },
  { name: "Veronika Zakharova", title: "Director of Mobile Gaming, Fixer", image: "Images/img19.jpg" },
  { name: "Ann Jacobs", title: "Director of Mobile Gaming, Fixer", image: "Images/img20.jpg" },
  { name: "Lissa Cross", title: "Director of Mobile Gaming, Fixer", image: "Images/img21.jpg" },
  { name: "Murty Yang", title: "Director of Mobile Gaming, Fixer", image: "Images/img22.jpg" },
  { name: "Sheldon Smith", title: "Director of Mobile Gaming, Fixer", image: "Images/img23.jpg" },
  { name: "Jason Guhl", title: "Director of Mobile Gaming, Fixer", image: "Images/img24.jpg" },
];

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

const Speakers = () => {
  const [scrollY, setScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const headerObserver = new IntersectionObserver(
      ([entry]) => setHeaderVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (headerRef.current) headerObserver.observe(headerRef.current);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (headerRef.current) headerObserver.unobserve(headerRef.current);
    };
  }, []);

  const renderCard = (speaker, idx, side, totalPairs, sectionRect) => {
    if (!sectionRect) return null;

    const sectionTop = sectionRect.top + window.scrollY;
    const sectionHeight = sectionRect.height;
    const globalProgress = clamp((scrollY - sectionTop) / sectionHeight, 0, 1);

    const pairIndex = totalPairs - 1 - Math.floor(idx / 2);
    const step = 1 / totalPairs;
    const start = step * pairIndex;

    const localProgress = clamp((globalProgress - start) / step, 0, 1);
    const isMobile = window.innerWidth < 640;
    const scaleX = isMobile ? 1 : 1 - localProgress * 0.3;

    return (
      <div
        key={idx}
        className="flex items-center justify-between w-full px-2 sm:px-4 lg:px-6 transition-transform duration-100"
        style={{
          transform: `scaleX(${scaleX})`,
          transformOrigin: side === "left" ? "right center" : "left center",
        }}
      >

        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28 rounded-xl object-cover flex-shrink-0"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/112x112/E5E7EB/525252?text=NA";
            }}
          />
          <div className="min-w-0">
            <p className="text-sm sm:text-base lg:text-xl font-medium truncate">
              {speaker.name}
            </p>
            <p className="text-gray-500 text-xs sm:text-sm lg:text-base truncate">
              {speaker.title}
            </p>
          </div>
        </div>


        <button
          type="button"
          className="ml-auto text-[10px] sm:text-xs lg:text-sm 
            text-gray-700 border border-gray-300 rounded-full 
            px-2 py-1 sm:px-4 sm:py-2 
            hover:bg-black hover:text-white transition-colors duration-300"
        >
          LinkedIn
        </button>
      </div>
    );
  };

  const sectionRect = sectionRef.current?.getBoundingClientRect();
  const leftSpeakers = speakers.filter((_, i) => i % 2 === 0);
  const rightSpeakers = speakers.filter((_, i) => i % 2 !== 0);
  const totalPairs = Math.max(leftSpeakers.length, rightSpeakers.length);

  return (
    <section
      ref={sectionRef}
      className="min-h-[100vh] flex flex-col justify-center items-center bg-white font-[DM Sans] w-full px-2 sm:px-6 lg:px-12"
    >

      <h1
        ref={headerRef}
        className={`text-2xl sm:text-8xl lg:text-6xl font-semibold text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-300 ${headerVisible ? "blur-0 opacity-100" : "blur-[1px] opacity-80"
          }`}
      >
        Speakers
      </h1>


      <div className="grid grid-cols-2 gap-x-3 sm:gap-x-8 lg:gap-x-16 gap-y-4 sm:gap-y-10 w-full max-w-7xl">

        <div className="flex flex-col gap-y-4 sm:gap-y-10">
          {leftSpeakers.map((speaker, idx) =>
            renderCard(speaker, idx * 2, "left", totalPairs, sectionRect)
          )}
        </div>


        <div className="flex flex-col gap-y-4 sm:gap-y-10">
          {rightSpeakers.map((speaker, idx) =>
            renderCard(speaker, idx * 2 + 1, "right", totalPairs, sectionRect)
          )}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
