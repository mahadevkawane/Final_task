import React, { useRef, useState, useEffect } from "react";

const SmoothZigZagOutsideText = () => {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);

  const textAtCurveEdges = [
    { number: "1,034", label: "Initial Data", x: 40, y: 200, side: "right" },
    { number: "2", label: "Processed Data", x: 30, y: 400, side: "left" },
    { number: "54", label: "Filtered Output", x: 35, y: 600, side: "right" },
    { number: "25", label: "Final Shape", x: 30, y: 800, side: "left" },
    { number: "12", label: "Done!", x: 32, y: 1000, side: "right" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY < lastScrollY ? "up" : "down";
      setScrollDirection(direction);
      setLastScrollY(currentScrollY);
      setScrollY(currentScrollY);

      if (direction === "up") {
        setVisibleItems((prevVisible) => {
          const newVisible = [...prevVisible];
          textAtCurveEdges.forEach((item, idx) => {

            if (
              !newVisible.includes(idx) &&
              currentScrollY + window.innerHeight > item.y + 100
            ) {
              newVisible.push(idx);
            }
          });
          return newVisible;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[200vh] bg-gradient-to-b from-teal-100 to-purple-200 overflow-hidden"
    >
      {textAtCurveEdges.map((item, idx) => {
        const offsetX = item.side === "right" ? 60 : -60;
        const isVisible = visibleItems.includes(idx);

        return (
          <div
            key={idx}
            className="absolute z-10 text-left max-w-[150px] transition-opacity duration-700 ease-in-out"
            style={{
              left: `calc(${item.x}% + ${offsetX}px)`,
              top: `${item.y}px`,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              opacity: isVisible ? 1 : 0,
              pointerEvents: isVisible ? "auto" : "none",
            }}
          >
            <h1 className="text-8xl sm:text-5xl font-light text-gray-900 whitespace-nowrap underline decoration-2 decoration-emerald-400">
              {item.number}
            </h1>
            <p className="text-sm text-gray-600 mt-1">{item.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SmoothZigZagOutsideText;
