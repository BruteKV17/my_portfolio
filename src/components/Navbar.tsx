"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Contact", href: "#contact" }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.2, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-[#070210]/80 backdrop-blur-md border-b border-[rgba(139,92,246,0.06)] py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
        {/* Brand Name */}
        <a 
          href="#"
          onClick={(e) => handleScrollTo(e, "#top")}
          className="font-display text-sm sm:text-base md:text-lg font-bold tracking-tight text-primary-text hover:opacity-80 transition-opacity"
        >
          kishan verma.
        </a>

        {/* Desktop Links */}
        <nav className="flex items-center space-x-3.5 sm:space-x-8 md:space-x-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="group relative font-sans text-[9px] sm:text-[10px] md:text-xs tracking-[0.1em] sm:tracking-[0.15em] text-secondary-text hover:text-primary-text transition-colors duration-350 uppercase"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary-text transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
