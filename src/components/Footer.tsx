export default function Footer() {
  return (
    <footer className="w-full bg-[#070210] border-t border-border-custom/50 py-12 px-6 md:px-12 z-10 relative">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        {/* Left copyright / credits */}
        <div className="flex flex-col gap-1">
          <span className="font-sans text-xs text-muted-text">
            &copy; 2026 Kishan Verma
          </span>
          <span className="font-sans text-[10px] tracking-wider text-muted-text/60 uppercase">
            Designed and built with intention.
          </span>
        </div>

        {/* Right quick links */}
        <div className="flex gap-6 md:gap-8">
          <a 
            href="mailto:vermakishan478@gmail.com" 
            className="font-sans text-xs tracking-wider uppercase text-muted-text hover:text-primary-text transition-colors"
          >
            Email
          </a>
          <a 
            href="https://linkedin.com/in/kishan-verma" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-sans text-xs tracking-wider uppercase text-muted-text hover:text-primary-text transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/BruteKV17" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-sans text-xs tracking-wider uppercase text-muted-text hover:text-primary-text transition-colors"
          >
            GitHub
          </a>
        </div>

      </div>
    </footer>
  );
}
