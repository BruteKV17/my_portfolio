"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      description: "I start by understanding the product, target audience, technical constraints, and core business goals."
    },
    {
      number: "02",
      title: "Structure",
      description: "I structure flows, information architecture, state layouts, and key user journeys to align user actions."
    },
    {
      number: "03",
      title: "Design",
      description: "I create clean, scalable, and highly expressive interface layouts backed by robust, cohesive visual systems."
    },
    {
      number: "04",
      title: "Build",
      description: "I translate designs into high-quality, production-ready frontend components, layout templates, and responsive systems."
    }
  ];

  return (
    <section className="relative w-full py-24 md:py-36 px-6 md:px-12 bg-[#070210] border-b border-border-custom z-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
        
        {/* Section Label */}
        <div className="lg:col-span-3">
          <span className="sticky top-28 block font-sans text-xs tracking-[0.25em] text-muted-text uppercase">
            05 / The Process
          </span>
        </div>

        {/* Process List */}
        <div className="lg:col-span-9 flex flex-col w-full">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group border-b border-border-custom py-10 md:py-14 flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-start md:items-center last:border-b-0 cursor-default"
            >
              {/* Step Number & Title */}
              <div className="flex items-center gap-6">
                <span className="font-mono text-2xl md:text-3xl text-muted-text group-hover:text-primary-text transition-colors duration-300">
                  {step.number}
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-secondary-text group-hover:text-primary-text transition-colors duration-300 lowercase">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="max-w-md font-sans text-sm md:text-base text-muted-text group-hover:text-secondary-text leading-relaxed transition-colors duration-300 md:text-right">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
