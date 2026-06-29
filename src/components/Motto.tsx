"use client";

import { motion } from "framer-motion";

export default function Motto() {
  return (
    <section className="relative w-full py-32 md:py-48 px-6 md:px-12 bg-transparent border-b border-border-custom overflow-hidden z-10">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            {/* Empty space to align asymmetrically with other sections */}
          </div>
          
          <div className="lg:col-span-9 flex flex-col gap-8 md:gap-12">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] }}
              className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[1.0] text-primary-text lowercase"
            >
              &ldquo;Good design makes complex things feel obvious.&rdquo;
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.0, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number], delay: 0.2 }}
              className="border-l-2 border-primary-text/20 pl-6 md:pl-10 max-w-xl"
            >
              <p className="font-sans text-lg md:text-xl lg:text-2xl text-secondary-text font-light leading-relaxed">
                Especially when the product is powered by AI.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
