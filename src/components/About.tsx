"use client";

import { motion } from "framer-motion";

export default function About() {
  const quickFacts = [
    { label: "Location", value: "Raipur, India" },
    { label: "Focus", value: "AI-First Digital Systems" },
    { label: "Core Stacks", value: "Next.js + Python + AI/ML" },
    { label: "Status", value: "Active (B.E. AI/ML student)" }
  ];

  const achievements = [
    "Achieved silver medal in National Space Day event conducted by ISRO.",
    "Won 2 National Level Hackathons — HackWithUP & Smart India Hackathon (SIH).",
    "Head of UI/UX and Design Team at CU CODING CLUB.",
    "Published a research paper in the field of AI in Health / Wellness.",
    "Google Student Ambassador at Chandigarh University, UP Campus.",
    "Earned 1st runner up trophy during Fresh-Gen-Fiesta event."
  ];

  const certifications = [
    { title: "AZURE AI900 / AZ900 / DP900", issuer: "Microsoft" },
    { title: "Introduction To Generative AI", issuer: "Google" },
    { title: "Enterprise Design Thinking Practitioner", issuer: "IBM SkillsBuild" },
    { title: "Analyze Data to Answer Questions", issuer: "Google (Coursera)" },
    { title: "Oracle Skill Dev", issuer: "Oracle" },
    { title: "CodeRush: Student Coding Marathon", issuer: "byteXL" }
  ];

  const hackathons = [
    "Hackophobia - 3 hour code rushing hackathon (WINNER) — 2026",
    "Reimagathon – InnoVortex 3.0 (WINNER) — 2025",
    "Smart India Hackathon - National Level final round — 2025",
    "HackWithUp - National level Hackathon (Second Runner Up) — 2025",
    "6th Kharagpur Data Science Hackathon — IIT Kharagpur (2026)",
    "AI Health Matrix — Organised By Chandigarh University (2026)"
  ];

  return (
    <section id="about" className="relative w-full py-24 md:py-36 px-6 md:px-12 bg-transparent border-b border-border-custom z-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
        
        {/* Section Label & Quick Facts */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-12">
          <div>
            <span className="block font-sans text-xs tracking-[0.25em] text-[#635e72] uppercase">
              04 / Profile & Background
            </span>
          </div>

          {/* Quick Facts List */}
          <div className="flex flex-col gap-6 md:gap-8 max-w-sm">
            {quickFacts.map((fact, index) => (
              <motion.div 
                key={fact.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col gap-2 border-b border-border-custom pb-4"
              >
                <span className="font-sans text-[10px] tracking-[0.2em] text-[#635e72] uppercase">
                  {fact.label}
                </span>
                <span className="font-sans text-sm text-[#F3EFFC] font-medium uppercase tracking-wide">
                  {fact.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Narrative, Achievements & Certifications */}
        <div className="lg:col-span-8 flex flex-col gap-12 md:gap-16 max-w-3xl">
          
          {/* Story Paragraphs */}
          <div className="flex flex-col gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="font-sans text-xl md:text-2xl lg:text-[1.75rem] font-light leading-relaxed text-[#A69FB8]"
            >
              I’m <span className="text-[#F3EFFC] font-normal">Kishan Verma</span>, an AI Product Designer and Software Builder based in Raipur, India. I specialize in turning complex data-driven AI systems into useful, intuitive, and frontend-ready products.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-sans text-lg md:text-xl font-light leading-relaxed text-[#A69FB8]"
            >
              Currently pursuing a Bachelor of Engineering in Computer Science with a specialization in AI/ML, I actively combine machine learning, product workflows, and modern web frameworks to develop highly scalable interfaces.
            </motion.p>
          </div>

          {/* Key Achievements */}
          <div className="border-t border-border-custom pt-10">
            <h3 className="font-mono text-xs text-[#7C3AED] font-semibold tracking-widest uppercase mb-6">
              Selected Achievements
            </h3>
            <ul className="flex flex-col gap-4">
              {achievements.map((ach, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="flex items-start gap-3 font-sans text-sm md:text-base text-[#A69FB8] font-light"
                >
                  <span className="font-mono text-[#7C3AED] text-sm font-semibold mt-0.5">&bull;</span>
                  <span>{ach}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Hackathons Track */}
          <div className="border-t border-border-custom pt-10">
            <h3 className="font-mono text-xs text-[#7C3AED] font-semibold tracking-widest uppercase mb-6">
              Hackathons & Competitions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hackathons.map((hack, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="border border-purple-500/10 hover:border-purple-500/20 bg-[#110b24]/30 hover:bg-[#110b24]/50 p-4 rounded-md transition-colors"
                >
                  <p className="font-sans text-sm text-[#A69FB8] font-light leading-relaxed">
                    {hack}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="border-t border-border-custom pt-10">
            <h3 className="font-mono text-xs text-[#7C3AED] font-semibold tracking-widest uppercase mb-6">
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="flex flex-col gap-1 border-b border-border-custom/50 pb-3"
                >
                  <span className="font-sans text-sm text-[#F3EFFC] font-medium leading-snug">
                    {cert.title}
                  </span>
                  <span className="font-mono text-[9px] tracking-wider text-[#635e72] uppercase">
                    Issued by {cert.issuer}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
