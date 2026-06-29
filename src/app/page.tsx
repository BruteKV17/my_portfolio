"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Work from "@/components/Work";
import Capabilities from "@/components/Capabilities";
import Motto from "@/components/Motto";
import About from "@/components/About";
import WorkTracker from "@/components/WorkTracker";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";
import AudioPlayer from "@/components/AudioPlayer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Intro Preloader */}
      <Loader onComplete={() => setIsLoading(false)} />

      {/* Main Page Content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative min-h-screen bg-[#070210] flex flex-col"
          >
            {/* Custom Mouse Follower */}
            <CursorFollower />

            {/* Ambient Background Music (Am I Dreaming Instrumental) */}
            <AudioPlayer />

            {/* Background Motion Video (Heart of the Singularity) */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 w-full h-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover opacity-20 pointer-events-none"
              >
                <source src="/singularity.mp4" type="video/mp4" />
              </video>
              
              {/* Overlays to secure contrast and blend theme */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#070210]/90 via-transparent to-[#070210]/95" />
              <div className="absolute inset-0 bg-[#070210]/40" />
            </div>

            {/* Sticky Navigation */}
            <Navbar />

            {/* Section Components */}
            <main className="flex-grow flex flex-col relative z-10">
              <Hero />
              <Intro />
              <Work />
              <Capabilities />
              <Motto />
              <About />
              <WorkTracker />
              <Process />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
