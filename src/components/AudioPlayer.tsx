"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio instance
    const audio = new Audio("/dreaming.mp3");
    audio.loop = true;
    audio.volume = 0.15; // Pleasant ambient volume level
    audioRef.current = audio;

    // Load sound preference (default to true unless explicitly muted 'false')
    const storedPreference = localStorage.getItem("portfolio-sound-on");
    if (storedPreference !== "false") {
      // Try to autoplay
      audio.play().then(() => {
        setIsPlaying(true);
        localStorage.setItem("portfolio-sound-on", "true");
      }).catch(() => {
        // Autoplay blocked by browser. We will listen to first user interaction to activate.
        const startPlay = () => {
          if (!audioRef.current) return;
          audioRef.current.play().then(() => {
            setIsPlaying(true);
            localStorage.setItem("portfolio-sound-on", "true");
          }).catch((err) => console.log("Autoplay interaction retry failed:", err));
          
          // Cleanup interaction listeners
          document.removeEventListener("click", startPlay);
          document.removeEventListener("scroll", startPlay);
          document.removeEventListener("touchstart", startPlay);
        };
        
        document.addEventListener("click", startPlay);
        document.addEventListener("scroll", startPlay, { passive: true });
        document.addEventListener("touchstart", startPlay, { passive: true });
      });
    }

    // Handle tab visibility change (professional UX detail to pause sound when switching tabs)
    const handleVisibilityChange = () => {
      if (!audioRef.current) return;
      if (document.hidden) {
        if (isPlaying) {
          audioRef.current.pause();
        }
      } else {
        if (isPlaying) {
          audioRef.current.play().catch((err) => console.log("Resume audio failed:", err));
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      audio.pause();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPlaying]);

  const toggleSound = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      localStorage.setItem("portfolio-sound-on", "false");
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        localStorage.setItem("portfolio-sound-on", "true");
      }).catch((err) => {
        console.error("Audio play failed:", err);
      });
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
      {/* Interactive Monospace Pill Button */}
      <button
        onClick={toggleSound}
        className="flex items-center gap-3 bg-[#110b24]/80 backdrop-blur-md border border-purple-500/20 hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/10 px-4 py-2.5 rounded-full transition-all duration-300 group shadow-lg"
        title={isPlaying ? "Mute Background Music" : "Play Background Music"}
      >
        {/* Animated Equalizer Visualizer Bars */}
        <div className="flex items-end gap-[3px] h-3 w-4">
          <div 
            className={`w-[2px] bg-purple-400 rounded-full transition-all duration-300 ${
              isPlaying ? "animate-[eq-bar-1_1.2s_ease-in-out_infinite]" : "h-1"
            }`} 
          />
          <div 
            className={`w-[2px] bg-purple-400 rounded-full transition-all duration-300 ${
              isPlaying ? "animate-[eq-bar-2_0.8s_ease-in-out_infinite]" : "h-2"
            }`} 
          />
          <div 
            className={`w-[2px] bg-purple-400 rounded-full transition-all duration-300 ${
              isPlaying ? "animate-[eq-bar-3_1.5s_ease-in-out_infinite]" : "h-1.5"
            }`} 
          />
          <div 
            className={`w-[2px] bg-purple-400 rounded-full transition-all duration-300 ${
              isPlaying ? "animate-[eq-bar-4_1s_ease-in-out_infinite]" : "h-2.5"
            }`} 
          />
        </div>

        {/* Text and Volume Icon */}
        <span className="font-mono text-[10px] tracking-widest text-[#A69FB8] group-hover:text-white transition-colors duration-300 uppercase">
          {isPlaying ? "Sound On" : "Sound Off"}
        </span>

        {isPlaying ? (
          <Volume2 className="w-3.5 h-3.5 text-purple-400 group-hover:text-purple-300 transition-colors" />
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-[#635e72] group-hover:text-[#A69FB8] transition-colors" />
        )}
      </button>
    </div>
  );
}
