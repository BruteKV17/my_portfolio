"use client";

import { motion } from "framer-motion";
import { capabilities } from "@/data/capabilities";
import { technicalSkills } from "@/data/skills";
import TechIcon from "./TechIcon";

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative w-full py-24 md:py-36 px-6 md:px-12 bg-transparent border-b border-border-custom z-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
        
        {/* Section Label */}
        <div className="lg:col-span-3">
          <span className="sticky top-28 block font-sans text-xs tracking-[0.25em] text-muted-text uppercase">
            03 / Capabilities & Tech Stack
          </span>
        </div>

        {/* Capabilities & Skills Columns */}
        <div className="lg:col-span-9 flex flex-col gap-20">
          
          {/* Core Design & Product Capabilities */}
          <div>
            <h3 className="font-sans text-xs tracking-[0.2em] text-muted-text uppercase mb-10">
              Core Capabilities
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {capabilities.map((capability, index) => {
                const formattedNumber = String(index + 1).padStart(2, "0");
                return (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="flex flex-col gap-4 border-b border-border-custom pb-6 group cursor-default"
                  >
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-xs text-muted-text group-hover:text-[#7C3AED] transition-colors duration-300">
                        {formattedNumber}
                      </span>
                      <h4 className="flex-grow ml-4 font-display text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-secondary-text group-hover:text-primary-text group-hover:translate-x-2 transition-all duration-300">
                        {capability.title}
                      </h4>
                    </div>
                    <p className="pl-8 font-sans text-sm text-muted-text group-hover:text-secondary-text leading-relaxed transition-colors duration-300">
                      {capability.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Technical Languages & Stack Grid */}
          <div className="border-t border-border-custom pt-16">
            <h3 className="font-sans text-xs tracking-[0.2em] text-muted-text uppercase mb-10">
              Technical Stack & Tools
            </h3>

            <div className="flex flex-col gap-14">
              {technicalSkills.map((category, catIdx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                  className="flex flex-col gap-5"
                >
                  <span className="font-mono text-xs text-[#7C3AED] font-semibold tracking-widest uppercase">
                    {category.title}
                  </span>
                  
                  {/* Grid of Tech Stack Logo Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {category.items.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ y: -4, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="bg-[#110b24]/40 border border-purple-500/10 hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/5 px-4 py-6 rounded-xl flex flex-col items-center justify-center gap-4 text-center transition-all duration-300 group cursor-default relative overflow-hidden"
                      >
                        {/* Subtle Card inner hover glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 to-[#7C3AED]/0 group-hover:from-[#7C3AED]/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />

                        {/* Icon component */}
                        <div className="w-10 h-10 flex items-center justify-center">
                          <TechIcon 
                            name={skill} 
                            className="w-8 h-8 filter opacity-70 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.4)] transition-all duration-300" 
                          />
                        </div>

                        {/* Text Label */}
                        <span className="text-[10px] font-mono tracking-widest text-secondary-text group-hover:text-primary-text transition-colors duration-300 uppercase">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
