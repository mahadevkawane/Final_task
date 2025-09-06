import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ParallaxScrollRows = () => {
  const sectionRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const [sectionHeight, setSectionHeight] = useState(window.innerHeight);
  const [gradientOffset, setGradientOffset] = useState(60);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const calculateHeight = () => {
      if (sectionRef.current && row1Ref.current && row2Ref.current) {
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        const lastBoxRow1 = row1Ref.current.lastElementChild;
        const lastBoxRow2 = row2Ref.current.lastElementChild;
        const row1MaxTranslate =
          lastBoxRow1.offsetLeft + lastBoxRow1.offsetWidth / 2 - viewportWidth / 2;
        const row2MaxTranslate =
          lastBoxRow2.offsetLeft + lastBoxRow2.offsetWidth / 2 - viewportWidth / 2;
        setSectionHeight(
          viewportHeight + Math.max(row1MaxTranslate, row2MaxTranslate)
        );
      }
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const scrollY = window.scrollY;
      let relativeScroll = scrollY - sectionTop;
      if (relativeScroll < 0) relativeScroll = 0;

      const maxScroll = sectionHeight - window.innerHeight;
      if (relativeScroll > maxScroll) relativeScroll = maxScroll;

      const progress = relativeScroll / maxScroll;

      setGradientOffset(50 - progress * 50);
      const viewportWidth = window.innerWidth;
      const row1LastBox = row1Ref.current.lastElementChild;
      const row2LastBox = row2Ref.current.lastElementChild;

      const row1MaxTranslate =
        row1LastBox.offsetLeft + row1LastBox.offsetWidth / 2 - viewportWidth / 2;
      const row2MaxTranslate =
        row2LastBox.offsetLeft + row2LastBox.offsetWidth / 2 - viewportWidth / 2;

      row1Ref.current.style.transform = `translateX(-${progress * row1MaxTranslate}px)`;
      row2Ref.current.style.transform = `translateX(${progress * row2MaxTranslate}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionHeight]);

  return (
    <div
      ref={sectionRef}
      style={{
        height: sectionHeight,
        background: `radial-gradient(at ${gradientOffset}% 50%, #f0b6c1, transparent)`,
        backgroundRepeat: "no-repeat",
        transition: "background-position 0.1s linear",
      }}
      className="w-full relative hidden md:block"
    >
      <div
        ref={ref}
        className="sticky top-0 w-full h-screen flex flex-col justify-center items-center space-y-5 overflow-hidden"
      >
        <div className="w-full overflow-hidden">
          <h2 className="text-2xl font-serif text-center mb-6">Sample Numbers</h2>
          <h2 className="text-3xl font-serif text-center mb-6">Row No. 1</h2>
          <div ref={row1Ref} className="flex space-x-6 transition-transform duration-200 ease-out">
            <Box number="73" controls={controls} />
            <Box number="89" controls={controls} />
            <Box number="102" controls={controls} />
            <Box number="+110" controls={controls} />
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <h2 className="text-2xl font-serif text-center mb-6">Sample Numbers</h2>
          <h2 className="text-3xl font-serif text-center mb-6">Row No. 2</h2>
          <div ref={row2Ref} className="flex space-x-6 transition-transform duration-200 ease-out">
            <Box number="61" controls={controls} />
            <Box number="73" controls={controls} />
            <Box number="89" controls={controls} />
            <Box number="+102" controls={controls} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Box = ({ number, controls }) => {
  const bounceVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 12 } },
  };

  return (
    <motion.div
      variants={bounceVariant}
      initial="hidden"
      animate={controls}
      className="flex-shrink-0 w-130 h-40 flex flex-col justify-start place-items-start rounded-3xl border border-black pb-10shadow-lg"
    >
      <span className="text-8xl font-semibold pt-0">
        {number}
        <span className="text-4xl pl-32 pr-10">Unit</span>
      </span>
    </motion.div>
  );
};

export default ParallaxScrollRows;
