import React, { useEffect, useState, useRef } from "react";

const HurdlesSection = () => {
  const [scaleMultiplier, setScaleMultiplier] = useState(1);
  const lastScrollTop = useRef(window.scrollY || 0);
  const ticking = useRef(false);

  const MIN_SCALE = 1;
  const MAX_SCALE = 1.3;
  const SCALE_STEP = 0.005;

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || 0;
          const direction = scrollTop > lastScrollTop.current ? "down" : "up";

          setScaleMultiplier((prev) => {
            if (direction === "down") {
              const next = prev + SCALE_STEP;
              return next > MAX_SCALE ? MAX_SCALE : next;
            } else {
              const next = prev - SCALE_STEP;
              return next < MIN_SCALE ? MIN_SCALE : next;
            }
          });

          lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const images = [
    { scale: 1, translateZ: 0, offsetX: 0, zIndex: 4 },
    { scale: 0.85, translateZ: -50, offsetX: -12, zIndex: 3 },
    { scale: 0.7, translateZ: -100, offsetX: -24, zIndex: 2 },
    { scale: 0.55, translateZ: -150, offsetX: -36, zIndex: 1 },
  ];

  return (
    <section
      className="flex flex-col items-center justify-start px-4 py-16 text-center relative overflow-x-hidden"
      style={{
        background: "linear-gradient(to bottom, #02ad8b, #fafafa)",
        minHeight: "1200px",
        perspective: "900px",
      }}
    >
      <h3 className="text-6xl text-white font-medium mt-10 mb-8 max-w-sm">
        ABOUT THE RACE
      </h3>
      <p className="text-white text-xl leading-relaxed max-w-xl mb-10">
        This is a race of yourself to yourself. <br />
        Fight the race! Develop the website. <br />
        Complete the task. <br />
        As a developer, it's <strong>Not That Hard</strong>.
      </p>

      <div
        className="relative w-full h-[650px] mt-2 sm:mt-4 md:mt-20 flex justify-center items-end overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "bottom center",
          transform: `scale(${scaleMultiplier})`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {images.map(({ scale, translateZ, offsetX, zIndex }, index) => (
          <img
            key={index}
            src="/Images/Netpole.png"
            alt={`Hurdle ${index + 1}`}
            className="absolute bottom-0"
            style={{
              left: `calc(50% + ${offsetX}px)`,
              transform: `translateX(-50%) translateZ(${translateZ}px) scale(${scale})`,
              transformOrigin: "bottom center",
              zIndex,
              opacity: 1,
              backgroundColor: "transparent",
              position: "absolute",
              maxWidth: "100%",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HurdlesSection;
