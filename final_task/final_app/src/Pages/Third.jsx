import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ThirdSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Adjust offset to remove extra space
  });
  const pathRef = useRef(null);
  const [points, setPoints] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // Make dots move with scroll
  const dashOffset = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  
  const opacities = [
    useTransform(scrollYProgress, [0.05, 0.15], [0, 1]),
    useTransform(scrollYProgress, [0.25, 0.35], [0, 1]),
    useTransform(scrollYProgress, [0.5, 0.6], [0, 1]),
    useTransform(scrollYProgress, [0.7, 0.8], [0, 1]),
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      setPoints([
        pathRef.current.getPointAtLength(len * 0.2),
        pathRef.current.getPointAtLength(len * 0.45),
        pathRef.current.getPointAtLength(len * 0.7),
        pathRef.current.getPointAtLength(len * 0.95),
      ]);
    }
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        height: isMobile ? "200vh" : "300vh", // Adjusted height for mobile
        background: "linear-gradient(to bottom, #4e8373, #6d9b8f)",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <svg
        viewBox={isMobile ? "0 0 1200 1600" : "0 0 1200 2400"} // Adjusted viewBox for mobile
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {/* Dotted path */}
        <motion.path
          ref={pathRef}
          d="
            M 100 0
            C 500 400, 800 500, 550 750
            C 350 950, 900 1200, 1100 1350
            C 1250 1550, 950 1750, 700 1900
            C 500 2050, 400 2150, 600 2400
          "
          stroke="black"
          strokeWidth="6"
          fill="none"
          strokeDasharray="10 20"
          strokeLinecap="round"
          style={{
            strokeDashoffset: dashOffset, // makes dots scroll
          }}
        />
        <defs>
          <radialGradient id="glow" r="50%" cx="50%" cy="50%">
            <stop offset="0%" stopColor="purple" stopOpacity="1" />
            <stop offset="100%" stopColor="purple" stopOpacity="0" />
          </radialGradient>
          <symbol id="star" viewBox="0 0 24 24">
            <polygon
              points="12,2 15,10 23,10 17,15 19,23 12,18 5,23 7,15 1,10 9,10"
              fill="url(#glow)"
            />
          </symbol>
        </defs>
        {/* Stars + text fixed */}
        {points.length > 0 &&
          points.map((p, i) => (
            <g key={i} transform={`translate(${p.x}, ${p.y})`}>
              <motion.use
                href="#star"
                width="60"
                height="60"
                x="-30"
                y="-30"
                style={{ opacity: opacities[i] }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
              <motion.text
                style={{ opacity: opacities[i] }}
                x="50"
                y="5"
                fontSize="110"
                fontFamily="serif"
                fill="black"
              >
                {["1,034", "2", "54", "25"][i]}
              </motion.text>
              <motion.text
                style={{ opacity: opacities[i] }}
                x="50"
                y="45"
                fontSize="20"
                fontFamily="sans-serif"
                fill="black"
              >
                Sample Data about Sample Things
              </motion.text>
            </g>
          ))}
      </svg>
    </section>
  );
}