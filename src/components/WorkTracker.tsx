"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, ArrowUpRight, GitPullRequest, Award, Star } from "lucide-react";

interface GithubData {
  avatar_url: string;
  public_repos: number;
  followers: number;
  name: string;
  bio: string;
}

export default function WorkTracker() {
  const [githubUser, setGithubUser] = useState<GithubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch live GitHub stats directly from the browser (CORS-enabled API)
    fetch("https://api.github.com/users/BruteKV17")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setGithubUser({
          avatar_url: data.avatar_url,
          public_repos: data.public_repos,
          followers: data.followers,
          name: data.name || "Kishan Verma",
          bio: data.bio || "AI BTech student specializing in AI/ML & Web Technologies"
        });
        setLoading(false);
      })
      .catch(() => {
        // Fallback in case of API rate limiting
        setGithubUser({
          avatar_url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300",
          public_repos: 18,
          followers: 45,
          name: "Kishan Verma",
          bio: "AI BTech student specializing in AI/ML & Web Technologies"
        });
        setLoading(false);
      });
  }, []);

  // Generate mock contribution calendar items (53 weeks * 7 days = 371 squares)
  const generateContributionGrid = (activeCount = 20) => {
    const grid = [];
    const seed = [0, 0, 0, 1, 0, 2, 0, 0, 1, 0, 0, 3, 0, 0, 1, 2, 0, 0, 0];
    for (let i = 0; i < 112; i++) { // 16 columns * 7 rows
      const intensity = seed[Math.floor(Math.random() * seed.length)];
      grid.push(intensity);
    }
    return grid;
  };

  const githubContributions = generateContributionGrid();
  // LeetCode grid matching the uploaded 0 submissions status but designed beautifully
  const leetcodeContributions = Array(112).fill(0);

  return (
    <section id="tracker" className="relative w-full py-24 md:py-36 px-6 md:px-12 bg-transparent border-b border-border-custom z-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
        
        {/* Section Label */}
        <div className="lg:col-span-3">
          <span className="sticky top-28 block font-sans text-xs tracking-[0.25em] text-muted-text uppercase">
            07 / Work Tracker
          </span>
        </div>

        {/* Tracker Columns */}
        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          
          {/* GitHub Activity Card */}
          <div className="bg-[#110b24]/40 border border-purple-500/10 rounded-xl p-6 md:p-8 flex flex-col justify-between hover:border-purple-500/25 transition-colors group">
            
            {/* Header info */}
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  {loading ? (
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 animate-pulse" />
                  ) : (
                    <img 
                      src={githubUser?.avatar_url} 
                      alt="Kishan Verma GitHub" 
                      className="w-10 h-10 rounded-full border border-purple-500/20 object-cover"
                    />
                  )}
                  <div>
                    <h3 className="font-display text-lg font-bold text-primary-text flex items-center gap-1.5 lowercase">
                      brutekv17
                    </h3>
                    <span className="font-sans text-[10px] tracking-wider text-muted-text uppercase">
                      GitHub Developer Profile
                    </span>
                  </div>
                </div>
                
                <a 
                  href="https://github.com/BruteKV17" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-purple-500/10 group-hover:border-purple-500/40 group-hover:bg-[#7C3AED]/10 text-muted-text group-hover:text-primary-text transition-all duration-300"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <p className="font-sans text-xs text-secondary-text mb-6 font-light leading-relaxed">
                {githubUser?.bio}
              </p>

              {/* Stats Counters */}
              <div className="grid grid-cols-3 gap-4 border-t border-b border-purple-500/10 py-4 mb-6">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xl font-bold text-white">
                    {loading ? "..." : githubUser?.public_repos}
                  </span>
                  <span className="font-sans text-[9px] tracking-widest text-muted-text uppercase">Repos</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xl font-bold text-white">
                    {loading ? "..." : githubUser?.followers}
                  </span>
                  <span className="font-sans text-[9px] tracking-widest text-muted-text uppercase">Followers</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xl font-bold text-white">1</span>
                  <span className="font-sans text-[9px] tracking-widest text-muted-text uppercase">Stars</span>
                </div>
              </div>
            </div>

             {/* Contribution Grid */}
            <div>
              <span className="block font-mono text-[9px] tracking-wider text-muted-text uppercase mb-3">
                GitHub Contribution Grid
              </span>
              <div className="w-full overflow-x-auto pb-2 scrollbar-none">
                <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-[340px] bg-[#070210]/50 p-3 rounded border border-purple-500/5">
                  {githubContributions.map((intensity, i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-[1px] transition-colors ${
                        intensity === 0 ? "bg-purple-950/20 border border-purple-900/5" :
                        intensity === 1 ? "bg-[#7C3AED]/30" :
                        intensity === 2 ? "bg-[#7C3AED]/60" : "bg-[#7C3AED]"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center mt-2 text-[8px] font-mono text-muted-text">
                <span>Jul</span>
                <span>Nov</span>
                <span>Jun</span>
              </div>
            </div>

          </div>

          {/* LeetCode Activity Card */}
          <div className="bg-[#110b24]/40 border border-purple-500/10 rounded-xl p-6 md:p-8 flex flex-col justify-between hover:border-purple-500/25 transition-colors group">
            
            {/* Header info */}
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-primary-text flex items-center gap-1.5 lowercase">
                      brutekv17
                    </h3>
                    <span className="font-sans text-[10px] tracking-wider text-muted-text uppercase">
                      LeetCode Profile
                    </span>
                  </div>
                </div>
                
                <a 
                  href="https://leetcode.com/u/brutekv17/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-purple-500/10 group-hover:border-amber-500/40 group-hover:bg-amber-500/10 text-muted-text group-hover:text-amber-500 transition-all duration-300"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <p className="font-sans text-xs text-secondary-text mb-6 font-light leading-relaxed">
                DSA problem solver specializing in algorithms and machine learning interview preparation.
              </p>

              {/* Stats Counters */}
              <div className="grid grid-cols-3 gap-4 border-t border-b border-purple-500/10 py-4 mb-6">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xl font-bold text-white">0</span>
                  <span className="font-sans text-[9px] tracking-widest text-muted-text uppercase">Solved</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xl font-bold text-white">0</span>
                  <span className="font-sans text-[9px] tracking-widest text-muted-text uppercase">Streak</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xl font-bold text-white">0%</span>
                  <span className="font-sans text-[9px] tracking-widest text-muted-text uppercase">Active Days</span>
                </div>
              </div>
            </div>

            {/* LeetCode Contribution Grid (Matching the 0 submissions activity page) */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="font-mono text-[9px] tracking-wider text-muted-text uppercase">
                  LeetCode Submissions (Past Year)
                </span>
                <span className="font-mono text-[9px] text-[#A69FB8]">
                  Total submissions: 0
                </span>
              </div>
              
              <div className="w-full overflow-x-auto pb-2 scrollbar-none">
                <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-[340px] bg-[#070210]/50 p-3 rounded border border-purple-500/5">
                  {leetcodeContributions.map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-[1px] bg-neutral-900/40 border border-neutral-950/20"
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center mt-2 text-[8px] font-mono text-muted-text">
                <span>Jul</span>
                <span>Nov</span>
                <span>Jun</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
