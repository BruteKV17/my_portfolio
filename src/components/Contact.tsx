"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-24 md:py-36 px-6 md:px-12 bg-[#070210] z-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
        
        {/* Section Label */}
        <div className="lg:col-span-3">
          <span className="block font-sans text-xs tracking-[0.25em] text-muted-text uppercase">
            06 / Connect
          </span>
        </div>

        {/* Contact Content */}
        <div className="lg:col-span-9 flex flex-col gap-12 md:gap-20">
          
          {/* Header & Subtext */}
          <div className="flex flex-col gap-6 max-w-4xl">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-primary-text leading-[0.95] lowercase"
            >
              let's build<br />something useful.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-sans text-lg md:text-xl text-secondary-text font-light leading-relaxed max-w-2xl mt-4"
            >
              I’m open to product design, frontend, AI dashboard, landing page, and collaboration opportunities.
            </motion.p>
          </div>

          {/* Say Hello Button */}
          <div>
            <motion.a
              href="mailto:vermakishan478@gmail.com"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-4 bg-hover-bg text-hover-text font-sans font-semibold text-sm tracking-widest uppercase px-8 py-5 rounded-full hover:bg-white transition-all duration-300 shadow-xl cursor-pointer"
            >
              Say hello
              <ArrowUpRight className="w-4 h-4 text-hover-text" />
            </motion.a>
          </div>

          {/* Additional details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-border-custom pt-12 mt-8">
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[10px] tracking-[0.2em] text-muted-text uppercase">Email</span>
              <a 
                href="mailto:vermakishan478@gmail.com"
                className="font-sans text-sm text-primary-text hover:text-secondary-text transition-colors"
              >
                vermakishan478@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-sans text-[10px] tracking-[0.2em] text-muted-text uppercase">Socials</span>
              <div className="flex flex-col gap-1">
                <a 
                  href="https://linkedin.com/in/kishan-verma" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-sans text-sm text-primary-text hover:text-secondary-text transition-colors"
                >
                  LinkedIn <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
                <a 
                  href="https://github.com/BruteKV17" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-sans text-sm text-primary-text hover:text-secondary-text transition-colors"
                >
                  GitHub <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-sans text-[10px] tracking-[0.2em] text-muted-text uppercase">Resume</span>
              <div>
                <a 
                  href="/resume" 
                  target="_blank"
                  className="inline-flex items-center gap-1.5 font-sans text-xs tracking-wider uppercase border border-border-custom px-3 py-1.5 rounded text-secondary-text hover:text-primary-text hover:border-primary-text transition-colors"
                >
                  View CV
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
