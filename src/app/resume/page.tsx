"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Printer } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#070210] text-[#F3EFFC] py-16 px-6 md:px-12 relative overflow-hidden font-sans select-text">
      {/* Background ambient glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/20 blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-900/20 blur-[160px]" />
      </div>

      {/* Control Bar (Hidden on print) */}
      <div className="max-w-4xl mx-auto mb-10 flex justify-between items-center z-10 relative print:hidden">
        <Link
          href="/"
          className="group flex items-center gap-2 text-xs tracking-widest uppercase text-[#A69FB8] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to site
        </Link>

        <button
          onClick={handlePrint}
          className="flex items-center gap-2 border border-purple-500/20 hover:border-[#7C3AED] hover:bg-[#7C3AED]/10 text-xs tracking-widest uppercase text-[#A69FB8] hover:text-white px-4 py-2 rounded transition-all cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          Print CV / Save PDF
        </button>
      </div>

      {/* Printable Resume Container */}
      <main className="max-w-4xl mx-auto bg-[#110b24]/40 border border-purple-500/10 rounded-lg p-8 md:p-12 z-10 relative shadow-2xl print:bg-white print:text-black print:border-none print:shadow-none print:p-0">
        
        {/* Header Section */}
        <header className="border-b border-purple-500/10 pb-8 mb-8 print:border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white print:text-black">
                Kishan Verma
              </h1>
              <p className="font-sans text-sm text-[#7C3AED] uppercase tracking-widest font-semibold mt-1 print:text-neutral-700">
                AI Product Designer & Software Engineer
              </p>
            </div>
            <div className="flex flex-col gap-1 text-right items-start md:items-end font-mono text-xs text-[#A69FB8] print:text-neutral-600">
              <span>Raipur, Chhattisgarh, India</span>
              <span>+91 7471111980</span>
              <a href="mailto:vermakishan478@gmail.com" className="hover:text-white print:hover:text-black">
                vermakishan478@gmail.com
              </a>
              <a 
                href="https://linkedin.com/in/kishan-verma" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white print:hover:text-black"
              >
                linkedin.com/in/kishan-verma
              </a>
            </div>
          </div>
        </header>

        {/* Objective */}
        <section className="mb-8">
          <h2 className="font-mono text-xs text-[#7C3AED] font-bold tracking-wider uppercase mb-3 print:text-neutral-800">
            Career Objective
          </h2>
          <p className="font-sans text-sm md:text-base text-[#A69FB8] leading-relaxed font-light print:text-neutral-700">
            A passionate Bachelor of Technology (BTech) Computer Science student specializing in AI/ML, aspiring to secure a Software Engineer role, with proficiency in C++ and Python along with a solid understanding of data structures and algorithms. Experienced in software development, building scalable and high-performance applications. Possesses strong problem-solving and leadership skills, with experience in developing websites for club initiatives and contributing to research work. Dedicated to leveraging technology and data-driven insights to create impactful and efficient solutions.
          </p>
        </section>

        {/* Education */}
        <section className="mb-8 border-t border-purple-500/10 pt-6 print:border-neutral-200">
          <h2 className="font-mono text-xs text-[#7C3AED] font-bold tracking-wider uppercase mb-4 print:text-neutral-800">
            Education
          </h2>
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex justify-between items-baseline font-sans text-sm font-semibold text-white print:text-black">
                <h3>Chandigarh University — B.E. Computer Science AI/ML</h3>
                <span className="font-mono text-xs text-[#635e72] font-normal print:text-neutral-500">2025 – Present</span>
              </div>
              <p className="font-sans text-xs text-[#A69FB8] italic print:text-neutral-600">Unnao, Uttar Pradesh</p>
              <p className="font-sans text-xs text-[#635e72] mt-2 print:text-neutral-500">
                Relevant Coursework: Object-Oriented Programming, Data Structures and Algorithms, Operating Systems, Databases, Computer Networks, Machine Learning, Internet of Things (IoT), Cloud Computing, Cyber Security.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-sans text-sm font-semibold text-white print:text-black">
                <h3>Jyoti Hr Sec Eng Med School - BMY (CBSE Board)</h3>
                <span className="font-mono text-xs text-[#635e72] font-normal print:text-neutral-500">2022 – 2023</span>
              </div>
              <p className="font-sans text-xs text-[#A69FB8] print:text-neutral-600">Senior Secondary Education: 94.0%</p>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-sans text-sm font-semibold text-white print:text-black">
                <h3>Jyoti Hr Sec Eng Med School - BMY (CBSE Board)</h3>
                <span className="font-mono text-xs text-[#635e72] font-normal print:text-neutral-500">2020 – 2021</span>
              </div>
              <p className="font-sans text-xs text-[#A69FB8] print:text-neutral-600">Secondary Education (Matriculation): 97.3%</p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-8 border-t border-purple-500/10 pt-6 print:border-neutral-200">
          <h2 className="font-mono text-xs text-[#7C3AED] font-bold tracking-wider uppercase mb-4 print:text-neutral-800">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-sm">
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-white print:text-black">Languages & Frameworks</span>
              <span className="text-[#A69FB8] print:text-neutral-700">MERN Stack, C/C++, HTML5, CSS3, Python, Flask, Django, PHP, Next.js</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-white print:text-black">Databases</span>
              <span className="text-[#A69FB8] print:text-neutral-700">Supabase, MongoDB, Firebase</span>
            </div>
            <div className="flex flex-col gap-1 md:col-span-2">
              <span className="font-semibold text-white print:text-black">Development Tools & Technologies</span>
              <span className="text-[#A69FB8] print:text-neutral-700">Android Studio, GitHub, API Development, NLP, AntiGravity, Cursor, Codex, MS Azure</span>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8 border-t border-purple-500/10 pt-6 print:border-neutral-200">
          <h2 className="font-mono text-xs text-[#7C3AED] font-bold tracking-wider uppercase mb-4 print:text-neutral-800">
            Projects
          </h2>
          <div className="flex flex-col gap-6">
            
            <div>
              <div className="flex justify-between items-baseline font-sans text-sm font-semibold text-white print:text-black">
                <a href="https://noteit-ai.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline text-purple-300 print:text-black">
                  NoteIT AI
                </a>
                <span className="font-mono text-xs text-[#635e72] font-normal print:text-neutral-500">2026 – Present</span>
              </div>
              <p className="font-mono text-[10px] text-purple-400 uppercase tracking-widest print:text-neutral-600">Next.js, React.js, TypeScript, Firebase, OpenAI API, Tailwind CSS</p>
              <ul className="list-disc pl-5 mt-2 flex flex-col gap-1 text-xs text-[#A69FB8] print:text-neutral-700">
                <li>Founded and developed NoteIT AI, an AI-powered second-brain platform that combines intelligent note-taking, document understanding, and personalized knowledge management into a unified workspace.</li>
                <li>Built features such as AI note / live lecture summarization, semantic search, document chat, contextual Q&A, knowledge extraction, and workflow automation at Real Time using modern large language models and retrieval-based AI systems.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-sans text-sm font-semibold text-white print:text-black">
                <h3>Bhasha Bridge</h3>
                <span className="font-mono text-xs text-[#635e72] font-normal print:text-neutral-500">Jul – Nov 2025</span>
              </div>
              <p className="font-mono text-[10px] text-purple-400 uppercase tracking-widest print:text-neutral-600">Next.js, React.js, Firebase, TSX</p>
              <ul className="list-disc pl-5 mt-2 flex flex-col gap-1 text-xs text-[#A69FB8] print:text-neutral-700">
                <li>Developed BhashaBridge, an AI-driven language translation system focused on Sinhala and Nepali languages for improved cross-lingual communication.</li>
                <li>Utilized natural language processing and machine learning techniques to deliver accurate, context-aware translations beyond traditional tools.</li>
                <li>Enhanced accessibility and user experience by enabling efficient, real-time translation, reducing language barriers in critical communication scenarios.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-sans text-sm font-semibold text-white print:text-black">
                <h3>CureGenie (AI health assistant)</h3>
                <span className="font-mono text-xs text-[#635e72] font-normal print:text-neutral-500">Sep – Dec 2025</span>
              </div>
              <p className="font-mono text-[10px] text-purple-400 uppercase tracking-widest print:text-neutral-600">Next.js, CNN, RNN, Kaggle, Kubernetes</p>
              <ul className="list-disc pl-5 mt-2 flex flex-col gap-1 text-xs text-[#A69FB8] print:text-neutral-700">
                <li>Developed CureGenie, an AI-powered health and agriculture assistant achieving high accuracy using real-time image-based analysis.</li>
                <li>Utilized machine learning and data-driven insights to detect human and plant diseases, providing precise diagnosis and actionable recommendations.</li>
                <li>Enhanced accessibility to healthcare by enabling offline functionality, optimizing response time, and delivering fast, reliable assistance in low-connectivity regions.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Achievements */}
        <section className="mb-8 border-t border-purple-500/10 pt-6 print:border-neutral-200">
          <h2 className="font-mono text-xs text-[#7C3AED] font-bold tracking-wider uppercase mb-3 print:text-neutral-800">
            Key Achievements
          </h2>
          <ul className="list-disc pl-5 flex flex-col gap-1.5 text-xs text-[#A69FB8] print:text-neutral-700">
            <li>Achieved <strong>silver medal</strong> in national space day event, which has been conducted in ISRO.</li>
            <li>Earned a 1st runner up trophy during Fresh - Gen - Fiesta event in Chandigarh University, UP.</li>
            <li>Published a research paper in the field of AI in Health / Wellness.</li>
            <li>Head of UI/UX and design team at CU CODING CLUB.</li>
            <li>Google Student Ambassador at Chandigarh University, UP Campus.</li>
            <li>Won <strong>2 National Level Hackathons</strong> - HackWithUP / SIH.</li>
          </ul>
        </section>

        {/* Certifications */}
        <section className="border-t border-purple-500/10 pt-6 print:border-neutral-200">
          <h2 className="font-mono text-xs text-[#7C3AED] font-bold tracking-wider uppercase mb-3 print:text-neutral-800">
            Certifications & Recognitions
          </h2>
          <ul className="list-disc pl-5 flex flex-col gap-1.5 text-xs text-[#A69FB8] print:text-neutral-700">
            <li>AZURE AI900 / AZ900 / DP900 — Microsoft (2025)</li>
            <li>Introduction To Generative AI — Google (2025)</li>
            <li>Enterprise Design Thinking Practitioner — IBM SkillsBuild (2025)</li>
            <li>Analyze Data to Answer Questions — Google (Coursera) (2025)</li>
            <li>CodeRush: Student Coding Marathon — byteXL (2026)</li>
            <li>Oracle Skill Dev — Oracle (2026)</li>
            <li>HackWithUp - National level Hackathon (Second Runner Up) — 2025</li>
            <li>Smart India Hackathon - National Level final round — 2025</li>
            <li>Reimagathon – InnoVortex 3.0 (WINNER) — 2025</li>
            <li>6th Kharagpur Data Science Hackathon — IIT Kharagpur (2026)</li>
            <li>Hackophobia - 3 hour code rushing hackathon (WINNER) — 2026</li>
            <li>AI Health Matrix — Organised By Chandigarh University (2026)</li>
          </ul>
        </section>

      </main>
    </div>
  );
}
