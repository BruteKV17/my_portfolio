"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, RotateCw, ShieldCheck, Terminal, Disc } from "lucide-react";

const IMAGES = [
  {
    src: "/profile.jpg",
    title: "Kishan Verma",
    subtitle: "Lead Portrait // AI Designer",
    loc: "28.6139 N, 77.2090 E",
    status: "ACTIVE_PORTRAIT"
  },
  {
    src: "/hackathon.jpg",
    title: "Smart India Hackathon",
    subtitle: "Product Dev // 1st Place",
    loc: "28.5355 N, 77.3910 E",
    status: "SYS_BUILD_SUCCESS"
  },
  {
    src: "/team.jpg",
    title: "Developer Meetup",
    subtitle: "Tech Presentation",
    loc: "19.0760 N, 72.8777 E",
    status: "TARGET_LOCKED"
  },
  {
    src: "/group.jpg",
    title: "Tech Community",
    subtitle: "Mentorship & Collabs",
    loc: "12.9716 N, 77.5946 E",
    status: "NODE_CONNECTED"
  }
];

export default function InteractiveProfile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Framer Motion values for 3D Tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for rotation
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    damping: 25,
    stiffness: 150
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    damping: 25,
    stiffness: 150
  });

  // Smooth springs for background glow tracking
  const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]), {
    damping: 30,
    stiffness: 120
  });
  const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]), {
    damping: 30,
    stiffness: 120
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalised position: from -0.5 to 0.5
    const normalizedX = (e.clientX - rect.left) / width - 0.5;
    const normalizedY = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(normalizedX);
    mouseY.set(normalizedY);

    // Save exact pixels relative to container for HUD display
    setCoords({
      x: Math.round(e.clientX - rect.left),
      y: Math.round(e.clientY - rect.top)
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
    // Slowly reset coordinates
    setCoords({ x: 0, y: 0 });
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (isGlitching) return;
    triggerGlitch();
    setActiveIndex((prev) => (prev + 1) % IMAGES.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (isGlitching) return;
    triggerGlitch();
    setActiveIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  };

  const triggerGlitch = () => {
    setIsGlitching(true);
    setTimeout(() => {
      setIsGlitching(false);
    }, 450);
  };

  // Entrance variants matching loader timeline
  const entranceVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Custom cubic-bezier
        delay: 2.5 // Stagger slightly after loader exits and text reveals
      }
    }
  };

  return (
    <motion.div
      variants={entranceVariants}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col items-center justify-center select-none w-full max-w-[420px] mx-auto z-20 px-4 sm:px-0"
    >
      {/* 3D Perspective Card Wrapper */}
      <div 
        style={{ perspective: 1200 }} 
        className="w-full relative flex flex-col items-center"
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleNext()}
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            transformStyle: "preserve-3d"
          }}
          className="relative w-full h-[400px] sm:h-[480px] rounded-2xl bg-[#110b24]/40 border border-violet-500/10 cursor-pointer overflow-hidden backdrop-blur-xl group transition-all duration-300 hover:border-violet-500/35 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] flex flex-col justify-between p-4"
        >
          {/* Cyber Ambient Tracking Glow (Back Layer) */}
          <motion.div
            style={{
              x: glowX,
              y: glowY,
              translateX: "-50%",
              translateY: "-50%"
            }}
            className="absolute top-0 left-0 w-80 h-80 rounded-full bg-gradient-to-r from-violet-600/15 via-fuchsia-500/10 to-cyan-500/15 blur-3xl pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100"
          />

          {/* Matrix Grid Lines Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(rgba(139,92,246,0.15)_1px,transparent_1px)] [background-size:16px_16px] mix-blend-overlay" />

          {/* HUD Target Crosshairs - Animates on Hover */}
          <div className="absolute inset-4 pointer-events-none border border-violet-500/[0.04] rounded-lg transition-all duration-500 group-hover:inset-3 group-hover:border-violet-500/10">
            {/* Top-Left Corner Cutout */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-violet-500/30 group-hover:border-violet-400 group-hover:scale-105 transition-all duration-500" />
            {/* Top-Right Corner Cutout */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-violet-500/30 group-hover:border-violet-400 group-hover:scale-105 transition-all duration-500" />
            {/* Bottom-Left Corner Cutout */}
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-violet-500/30 group-hover:border-violet-400 group-hover:scale-105 transition-all duration-500" />
            {/* Bottom-Right Corner Cutout */}
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-violet-500/30 group-hover:border-violet-400 group-hover:scale-105 transition-all duration-500" />
          </div>

          {/* Top HUD Panel */}
          <div className="relative z-10 flex items-center justify-between w-full font-mono text-[9px] tracking-widest text-muted-text/80 pointer-events-none">
            <div className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-violet-400/80 animate-pulse" />
              <span>SYS.LOC_METRIC</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[#A69FB8] font-medium">{IMAGES[activeIndex].status}</span>
            </div>
          </div>

          {/* Inner Photo Frame */}
          <div 
            className="absolute inset-[30px] rounded-xl overflow-hidden bg-black/40 border border-violet-500/5 group-hover:border-violet-500/20 transition-colors duration-500 flex items-center justify-center"
            style={{ transform: "translateZ(30px)" }}
          >
            {/* RGB Glitch Displacement Wipes */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full relative"
              >
                {/* Standard Photo */}
                <img
                  src={IMAGES[activeIndex].src}
                  alt={IMAGES[activeIndex].title}
                  className={`w-full h-full object-cover select-none pointer-events-none transition-all duration-700 ease-out 
                    ${isHovered ? "grayscale-0 contrast-100 brightness-100" : "grayscale opacity-80 contrast-125 brightness-90"}
                  `}
                />

                {/* Duotone Overlay - adds cyber color grading */}
                <div className="absolute inset-0 bg-violet-950/20 mix-blend-color-dodge opacity-60 pointer-events-none transition-opacity group-hover:opacity-20" />
                
                {/* Dark Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Glitch Overlay Components (Triggers on click) */}
                {isGlitching && (
                  <>
                    <div className="absolute inset-0 mix-blend-screen bg-rose-500/40 translate-x-1.5 translate-y-[-2px]" style={{ clipPath: "inset(20% 0 10% 0)" }}>
                      <img src={IMAGES[activeIndex].src} className="w-full h-full object-cover filter contrast-200 hue-rotate-15" alt="" />
                    </div>
                    <div className="absolute inset-0 mix-blend-screen bg-cyan-500/40 translate-x-[-1.5px] translate-y-[2px]" style={{ clipPath: "inset(5% 0 70% 0)" }}>
                      <img src={IMAGES[activeIndex].src} className="w-full h-full object-cover filter contrast-200 -hue-rotate-15" alt="" />
                    </div>
                    <div className="absolute inset-0 mix-blend-color-burn bg-violet-600/30 opacity-80" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%]" />
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Vertical Laser Scan Sweep Beam */}
            <motion.div
              animate={{
                top: ["0%", "100%", "0%"]
              }}
              transition={{
                repeat: Infinity,
                duration: isHovered ? 2.5 : 5,
                ease: "linear"
              }}
              className="absolute left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-violet-400 to-transparent shadow-[0_0_10px_#8b5cf6] opacity-75 pointer-events-none"
            />

            {/* Crosshair Target in Viewfinder */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-6 h-6 border border-violet-400/20 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-violet-400/30 rounded-full" />
              </div>
            </div>
          </div>

          {/* Bottom HUD Information Overlay */}
          <div 
            className="relative z-10 flex flex-col gap-1 w-full bg-gradient-to-t from-black/60 to-transparent p-2 rounded-lg backdrop-blur-[2px]"
            style={{ transform: "translateZ(40px)" }}
          >
            {/* Tech details */}
            <div className="flex items-center justify-between font-mono text-[8px] tracking-wider text-muted-text pointer-events-none">
              <span className="flex items-center gap-1">
                <Disc className="w-2.5 h-2.5 text-violet-500/80 animate-spin" />
                POS: {IMAGES[activeIndex].loc}
              </span>
              <span>
                INDEX // 0{activeIndex + 1}
              </span>
            </div>

            {/* Active image description */}
            <div className="flex flex-col select-none pointer-events-none mt-1">
              <h3 className="font-display text-sm font-bold text-primary-text leading-tight tracking-wide uppercase">
                {IMAGES[activeIndex].title}
              </h3>
              <p className="font-sans text-[10px] text-secondary-text tracking-wide">
                {IMAGES[activeIndex].subtitle}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Cybernetic Deck Controller Consoles (Bottom controls) */}
      <div className="w-full mt-5 flex items-center justify-between px-2 font-mono text-[10px] text-secondary-text">
        {/* Left Interactive Panel */}
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center w-7 h-7 rounded border border-border-custom hover:bg-hover-bg/25 hover:border-hover-bg/50 transition-all duration-300 group active:scale-95 cursor-pointer"
            title="Previous System Photo"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-muted-text group-hover:text-primary-text transition-colors" />
          </button>

          {/* Real-time Dynamic Cursor Coordinates Display */}
          <div className="hidden sm:flex flex-col text-[8px] text-muted-text tracking-widest pointer-events-none">
            <span>GRID_X: {coords.x ? `${coords.x}PX` : "STDBY"}</span>
            <span>GRID_Y: {coords.y ? `${coords.y}PX` : "STDBY"}</span>
          </div>
        </div>

        {/* Deck Segment Indicator Bar */}
        <div className="flex items-center gap-1.5">
          {IMAGES.map((_, idx) => (
            <div
              key={idx}
              onClick={() => {
                if (activeIndex === idx || isGlitching) return;
                triggerGlitch();
                setActiveIndex(idx);
              }}
              className={`h-1.5 cursor-pointer rounded-full transition-all duration-500 ${
                activeIndex === idx 
                  ? "w-8 bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.6)]" 
                  : "w-2.5 bg-violet-950/60 hover:bg-violet-800/40"
              }`}
            />
          ))}
        </div>

        {/* Right Interactive Panel */}
        <div className="flex items-center gap-4">
          {/* Active indicator */}
          <div className="hidden sm:flex items-center gap-1 text-[8px] text-muted-text uppercase pointer-events-none">
            <ShieldCheck className="w-3 h-3 text-emerald-500/80" />
            <span>SECURE_NODE</span>
          </div>

          <button
            onClick={handleNext}
            className="flex items-center justify-center w-7 h-7 rounded border border-border-custom hover:bg-hover-bg/25 hover:border-hover-bg/50 transition-all duration-300 group active:scale-95 cursor-pointer"
            title="Next System Photo"
          >
            <ArrowRight className="w-3.5 h-3.5 text-muted-text group-hover:text-primary-text transition-colors" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
