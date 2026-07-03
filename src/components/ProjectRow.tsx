"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectRowProps {
  project: Project;
}

export default function ProjectRow({ project }: ProjectRowProps) {
  // Animation variants for smooth cosmic purple color inversion
  const rowVariants = {
    initial: { backgroundColor: "rgba(7, 2, 16, 0)" },
    hover: { 
      backgroundColor: "rgba(124, 58, 237, 1)",
      transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] }
    }
  };

  const titleVariants = {
    initial: { color: "#F3EFFC" },
    hover: { color: "#FFFFFF" }
  };

  const numberVariants = {
    initial: { color: "#635e72" },
    hover: { color: "#d8b4fe" }
  };

  const textSecondaryVariants = {
    initial: { color: "#A69FB8" },
    hover: { color: "#f3e8ff" }
  };

  const textMutedVariants = {
    initial: { color: "#635e72" },
    hover: { color: "#e9d5ff" }
  };

  const borderVariants = {
    initial: { borderColor: "rgba(139, 92, 246, 0.16)" },
    hover: { borderColor: "rgba(255, 255, 255, 0.24)" }
  };

  const tagVariants = {
    initial: { 
      borderColor: "rgba(139, 92, 246, 0.16)", 
      color: "#A69FB8" 
    },
    hover: { 
      borderColor: "rgba(255, 255, 255, 0.3)", 
      color: "#FFFFFF" 
    }
  };

  const arrowVariants = {
    initial: { rotate: 0, scale: 1 },
    hover: { rotate: 45, scale: 1.1 }
  };

  const isLinkable = project.link && project.link !== "#";
  const ContainerComponent = isLinkable ? motion.a : motion.div;
  const containerProps = isLinkable ? {
    href: project.link,
    target: "_blank",
    rel: "noopener noreferrer"
  } : {};

  return (
    <ContainerComponent
      variants={rowVariants}
      initial="initial"
      whileHover="hover"
      {...containerProps}
      className={`w-full border-b border-border-custom transition-all duration-300 relative block group ${
        isLinkable ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Project Meta Info */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full gap-6 md:gap-8">
          
          <div className="flex items-baseline gap-4">
            {/* Project Number */}
            <motion.span 
              variants={numberVariants}
              className="font-sans text-sm md:text-base font-bold tracking-wider"
            >
              {project.number}
            </motion.span>

            {/* Project Title */}
            <motion.h3 
              variants={titleVariants}
              className="font-display text-4xl md:text-6xl font-bold tracking-tight lowercase"
            >
              {project.title}
            </motion.h3>
          </div>

          {/* Project Details */}
          <div className="flex flex-col gap-4">
            <motion.span
              variants={textMutedVariants}
              className="font-sans text-xs tracking-wider uppercase"
            >
              {project.category}
            </motion.span>
            
            <motion.p
              variants={textSecondaryVariants}
              className="font-sans text-base md:text-lg leading-relaxed max-w-xl font-light"
            >
              {project.description}
            </motion.p>
          </div>

          {/* Role & Tags */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <motion.span 
                variants={textMutedVariants}
                className="font-sans text-[10px] tracking-[0.2em] uppercase"
              >
                Role
              </motion.span>
              <motion.span 
                variants={textSecondaryVariants}
                className="font-sans text-sm font-medium"
              >
                {project.role}
              </motion.span>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag) => (
                <motion.span
                  key={tag}
                  variants={tagVariants}
                  className="px-3 py-1 rounded-full border text-xs font-sans tracking-wide uppercase transition-colors"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Abstract Preview Panel */}
        <div className="lg:col-span-5 flex justify-end items-center relative">
          <motion.div
            variants={borderVariants}
            className="w-full aspect-[4/3] rounded-lg border flex items-center justify-center overflow-hidden bg-[#110b24]/40 group-hover:bg-[#070210]/60 transition-all duration-300 relative"
          >
            {project.image ? (
              /* High-fidelity screenshot frame matching the cosmic aesthetic */
              <div className="w-[92%] h-[88%] rounded-lg border border-purple-500/10 group-hover:border-white/15 bg-[#070210] overflow-hidden shadow-2xl relative select-none group/img transition-all duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover/img:scale-[1.03]"
                />
                {/* Modern subtle cosmic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070210]/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 border border-white/5 rounded-lg pointer-events-none" />
              </div>
            ) : project.id === "noteit-ai" ? (
              /* Custom layout recreation from NoteIT AI dashboard screenshot */
              <div className="w-[90%] h-[85%] rounded-lg border border-purple-500/10 group-hover:border-white/10 bg-[#070210] p-4 flex flex-col justify-between shadow-2xl relative select-none">
                
                {/* Header bar */}
                <div className="flex justify-between items-center border-b border-purple-500/10 pb-2 mb-2">
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="font-mono text-[8px] tracking-[0.1em] text-[#635e72] uppercase">
                    Notebook At Node
                  </span>
                </div>

                {/* Transcription State */}
                <div className="flex items-center justify-between mt-1">
                  <span className="font-mono text-[9px] font-bold text-[#A69FB8] tracking-wide uppercase">
                    Speaker 1 &bull; Active Transcription
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-mono text-[7px] text-emerald-400 font-bold tracking-widest uppercase animate-pulse">
                    Live Staging
                  </span>
                </div>

                {/* Audio Waves Simulation */}
                <div className="flex items-end justify-center gap-1.5 my-3 h-10 px-4">
                  {[20, 45, 30, 60, 50, 70, 40, 80, 55, 65, 45, 30, 20].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className="w-1 rounded bg-[#7C3AED] opacity-80 shadow-[0_0_8px_rgba(124,58,237,0.5)]"
                    />
                  ))}
                </div>

                {/* Text Block Quote */}
                <p className="font-sans text-[9px] text-[#A69FB8] leading-[1.4] text-left italic border-l-2 border-purple-500/30 pl-3 py-1 bg-purple-500/5 rounded-r">
                  &ldquo;Gradient optimization constraints decrease exponentially when the activation functions are correctly scaled using adaptive weights parameters...&rdquo;
                </p>

                {/* Concepts identified */}
                <div className="mt-2 border-t border-purple-500/10 pt-2">
                  <span className="block font-mono text-[7px] tracking-wider text-[#635e72] uppercase mb-1.5 text-left">
                    Key Concepts Identified
                  </span>
                  <div className="flex gap-1.5 flex-wrap">
                    {["Stochastic Gradients", "Decay Matrices", "Loss Minifolds"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-purple-950/40 border border-purple-500/20 text-[7px] font-mono tracking-wide text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              /* Blank spaces for other projects as requested, maintaining a gorgeous clean dashed mockup outline */
              <div className="w-[85%] h-[80%] border border-dashed border-purple-500/10 group-hover:border-white/20 rounded-md transition-colors flex items-center justify-center text-center p-4">
                <span className="font-mono text-xs text-[#635e72] group-hover:text-white/40 uppercase tracking-widest">
                  Preview Pending
                </span>
              </div>
            )}
          </motion.div>

          {/* Arrow Hover indicator (only if links are valid) */}
          {isLinkable && (
            <motion.div
              variants={arrowVariants}
              className="absolute top-4 right-4 p-2 rounded-full border border-border-custom group-hover:border-white transition-colors"
            >
              <ArrowUpRight className="w-5 h-5 text-[#F3EFFC] group-hover:text-white transition-colors" />
            </motion.div>
          )}
        </div>

      </div>
    </ContainerComponent>
  );
}
