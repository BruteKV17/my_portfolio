"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // End the loader after 2.0 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070210]"
          exit={{
            y: "-100vh",
            transition: { duration: 0.9, ease: [0.85, 0, 0.15, 1] as [number, number, number, number] }
          }}
        >
          <div className="relative overflow-hidden px-4">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] }}
              className="font-display text-4xl font-bold tracking-tight text-primary-text sm:text-6xl uppercase"
            >
              Kishan Verma
            </motion.div>
          </div>
          
          <div className="absolute bottom-12 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-sans text-xs tracking-[0.2em] text-muted-text uppercase"
            >
              AI Product Designer & Developer
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
