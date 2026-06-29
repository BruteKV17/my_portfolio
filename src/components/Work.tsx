"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectRow from "./ProjectRow";

export default function Work() {
  return (
    <section id="work" className="w-full bg-transparent pt-12 z-10 relative">
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <span className="block font-sans text-xs tracking-[0.25em] text-muted-text uppercase">
              02 / Selected Work
            </span>
          </div>
          <div className="md:col-span-9">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] }}
              className="font-display text-2xl md:text-3xl text-secondary-text font-medium tracking-tight"
            >
              Building and design case studies detailing interfaces, systems, and product ideas.
            </motion.h2>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="w-full">
        {projects.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
