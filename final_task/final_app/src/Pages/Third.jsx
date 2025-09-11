import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ThirdSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const pathRef = useRef(null);
  const [pathPoints, setPathPoints] = useState([]);
  const [isMobileView, setIsMobileView] = useState(false);

  const pathScrollOffset = useTransform(scrollYProgress, [0, 1], [0, 1000]);

  const visibilityTransforms = [
    useTransform(scrollYProgress, [0.05, 0.15], [0, 1]),
    useTransform(scrollYProgress, [0.25, 0.35], [0, 1]),
    useTransform(scrollYProgress, [0.5, 0.6], [0, 1]),
    useTransform(scrollYProgress, [0.7, 0.8], [0, 1]),
  ];

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathPoints([
        pathRef.current.getPointAtLength(length * 0.2),
        pathRef.current.getPointAtLength(length * 0.45),
        pathRef.current.getPointAtLength(length * 0.7),
        pathRef.current.getPointAtLength(length * 0.95),
      ]);
    }
  }, []);

  // Use a useEffect to apply overflow-x: hidden to the body
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    // Clean up the style when the component unmounts
    return () => {
      document.body.style.overflowX = "";
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        height: isMobileView ? "200vh" : "300vh",
        background: "linear-gradient(to bottom, #4e8373, #6d9b8f)",
        position: "relative",
        // Keeping this as a safety measure, but the body style is the key fix
        overflowX: "hidden", 
      }}
    >
      <svg
        viewBox={isMobileView ? "0 0 1200 1600" : "0 0 1200 2400"}
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
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
            strokeDashoffset: pathScrollOffset,
          }}
        />

        <defs>
          <radialGradient id="glow" r="50%" cx="50%" cy="50%">
            <stop offset="0%" stopColor="purple" stopOpacity="1" />
            <stop offset="100%" stopColor="purple" stopOpacity="0" />
          </radialGradient>
          <symbol id="icon-star" viewBox="0 0 24 24">
            <polygon
              points="12,2 15,10 23,10 17,15 19,23 12,18 5,23 7,15 1,10 9,10"
              fill="url(#glow)"
            />
          </symbol>
        </defs>

        {pathPoints.length > 0 &&
          pathPoints.map((point, index) => (
            <g key={index} transform={`translate(${point.x}, ${point.y})`}>
              <motion.use
                href="#icon-star"
                width="60"
                height="60"
                x="-30"
                y="-30"
                style={{ opacity: visibilityTransforms[index] }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
              <motion.text
                style={{ opacity: visibilityTransforms[index] }}
                x="50"
                y="5"
                fontSize="110"
                fontFamily="serif"
                fill="black"
              >
                {["1,034", "2", "54", "25"][index]}
              </motion.text>
              <motion.text
                style={{ opacity: visibilityTransforms[index] }}
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