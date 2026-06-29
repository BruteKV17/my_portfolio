"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 2.2 // Delay after loader completes
      }
    }
  };

  const lineVariants = {
    initial: { y: "100%" },
    animate: {
      y: 0,
      transition: { duration: 1.2, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] }
    }
  };

  const metadataVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number], delay: 2.8 }
    }
  };

  const lines = [
    "making",
    "AI products",
    "dashboards",
    "and digital",
    "systems."
  ];

  const handleScrollToWork = () => {
    const target = document.querySelector("#work");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="top" 
      className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 bg-transparent overflow-hidden"
    >
      {/* Decorative subtle grid lines */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-5">
        <div className="border-r border-primary-text" />
        <div className="border-r border-primary-text" />
        <div className="border-r border-primary-text" />
        <div className="border-none" />
      </div>

      {/* Main typographic header */}
      <div className="flex-grow flex flex-col justify-center max-w-[1400px] mx-auto w-full z-10">
        <motion.h1
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="font-display font-bold tracking-tighter text-primary-text lowercase text-[12.5vw] md:text-[8vw] lg:text-[7.5vw] leading-[0.88] select-none text-left"
        >
          {lines.map((line, idx) => (
            <div key={idx} className="overflow-hidden text-reveal-mask block">
              <motion.span
                variants={lineVariants}
                className="inline-block origin-bottom transform-gpu"
              >
                {line}
              </motion.span>
            </div>
          ))}
        </motion.h1>
      </div>

      {/* Hero Metadata & Scroll Indicator */}
      <div className="max-w-[1400px] mx-auto w-full mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-end z-10">
        {/* Left/Middle Metadata: Asymmetric block */}
        <motion.div
          variants={metadataVariants}
          initial="initial"
          animate="animate"
          className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12"
        >
          <div className="flex flex-col gap-2">
            <span className="font-sans text-[10px] tracking-[0.2em] text-muted-text uppercase">Role</span>
            <span className="font-sans text-sm text-secondary-text font-medium leading-relaxed">
              AI Product Designer<br />& Frontend Builder
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-sans text-[10px] tracking-[0.2em] text-muted-text uppercase">Location</span>
            <span className="font-sans text-sm text-secondary-text font-medium leading-relaxed">
              Based in India
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-sans text-[10px] tracking-[0.2em] text-muted-text uppercase">Availability</span>
            <span className="font-sans text-sm text-secondary-text font-medium leading-relaxed">
              Available for product,<br />design & frontend work
            </span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={metadataVariants}
          initial="initial"
          animate="animate"
          className="md:col-span-4 flex justify-start md:justify-end"
        >
          <button
            onClick={handleScrollToWork}
            className="group flex items-center gap-3 text-left focus:outline-none cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-border-custom group-hover:bg-hover-bg group-hover:border-hover-bg transition-all duration-500">
              <ArrowDown className="w-4 h-4 text-primary-text group-hover:text-hover-text transition-colors duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-[10px] tracking-[0.25em] text-muted-text group-hover:text-primary-text transition-colors uppercase">
                scroll
              </span>
              <span className="font-sans text-[9px] tracking-[0.1em] text-muted-text opacity-80 group-hover:opacity-100 transition-opacity uppercase">
                to explore
              </span>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
