"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="relative w-full py-24 md:py-36 px-6 md:px-12 bg-transparent border-t border-border-custom z-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        
        {/* Section Label */}
        <div className="md:col-span-3">
          <span className="sticky top-28 block font-sans text-xs tracking-[0.25em] text-muted-text uppercase">
            01 / Introduction
          </span>
        </div>

        {/* Text Content */}
        <div className="md:col-span-9 max-w-4xl flex flex-col gap-8 md:gap-12">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] }}
            className="font-sans text-2xl md:text-4xl lg:text-[2.75rem] font-light leading-[1.3] text-primary-text"
          >
            I design and build AI-first digital products — from early ideas and interfaces to polished frontend-ready systems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number], delay: 0.15 }}
            className="font-sans text-lg md:text-xl lg:text-2xl text-secondary-text leading-[1.5] max-w-2xl font-light"
          >
            My work sits between product design, visual systems, frontend development, and AI experience design.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
