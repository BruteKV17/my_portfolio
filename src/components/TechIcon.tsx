import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
}

export default function TechIcon({ name, className = "w-6 h-6" }: TechIconProps) {
  // Normalize key name
  const key = name.toLowerCase().trim();

  switch (key) {
    case "next.js":
    case "nextjs":
      return (
        <svg viewBox="0 0 180 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="next-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
            <circle cx="90" cy="90" r="90" fill="white" />
          </mask>
          <g mask="url(#next-mask)">
            <circle cx="90" cy="90" r="90" fill="black" />
            <path d="M149.508 157.52L69.142 54.024H54v71.952h11.64V69.756l70.2 90.168a90.26 90.26 0 0013.668-12.404zM115.2 54.024h11.64v71.952H115.2V54.024z" fill="url(#next-gradient)" />
          </g>
          <defs>
            <linearGradient id="next-gradient" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "react.js":
    case "react":
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case "typescript":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" fill="#3178c6" rx="8" />
          <path d="M70.9 66.8c0-1.8-.7-3.2-2.1-4.2-1.4-1-3.7-1.9-6.9-2.7-3.2-.8-5.7-1.8-7.5-3-1.8-1.2-2.7-3-2.7-5.3 0-2.3 1-4.1 2.9-5.3 1.9-1.2 4.7-1.8 8.3-1.8 3.5 0 6.3.7 8.3 2 2 1.3 3.1 3.2 3.4 5.7h-9c-.2-1.2-.7-2-1.5-2.5-.8-.5-1.9-.8-3.4-.8-1.4 0-2.5.3-3.2.9s-1.1 1.3-1.1 2.2c0 .8.3 1.5 1 2 .7.5 2.1 1 4.2 1.5 3.3.8 5.9 1.8 7.9 3 2 1.2 3.1 3.1 3.1 5.6 0 2.6-1 4.6-3.1 5.9-2.1 1.3-5.2 2-9.3 2-4.1 0-7.3-.8-9.7-2.3-2.4-1.5-3.6-3.9-3.7-7.2h9.2c.1 1.7.7 2.8 1.7 3.4s2.6.9 4.8.9c1.6 0 2.8-.3 3.6-.8s1.2-1.2 1.2-2zm-28-27.1h-9.9V82h-9.8V39.7H13.3v-8.8h29.6v8.8z" fill="white" />
        </svg>
      );

    case "javascript":
      return (
        <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" fill="#f7df1e" rx="8" />
          <path d="M75.3 70.3c0-2-.8-3.5-2.3-4.5-1.5-1.1-3.9-2-7.2-2.8-3.3-.8-5.9-1.9-7.8-3.1-1.9-1.3-2.8-3.1-2.8-5.5 0-2.4 1-4.3 3-5.5 2-1.2 4.9-1.9 8.6-1.9 3.7 0 6.6.7 8.7 2.1 2.1 1.4 3.2 3.3 3.5 5.9H70c-.2-1.2-.7-2.1-1.6-2.6-.9-.5-2-.8-3.5-.8-1.5 0-2.6.3-3.3.9-.7.6-1.1 1.4-1.1 2.3 0 .8.3 1.5 1 2.1.7.5 2.2 1 4.4 1.6 3.4.8 6.1 1.9 8.2 3.1 2.1 1.3 3.2 3.2 3.2 5.8 0 2.7-1 4.8-3.2 6.1-2.2 1.3-5.4 2-9.6 2-4.3 0-7.6-.8-10.1-2.4-2.5-1.6-3.7-4.1-3.8-7.5h9.5c.1 1.8.7 2.9 1.8 3.5 1.1.6 2.7.9 5 .9 1.7 0 2.9-.3 3.7-.8.8-.5 1.2-1.2 1.2-2.1zM42.2 31.9V82h-9.7V31.9h9.7zm0-10.3v7.4h-9.7v-7.4h9.7z" fill="black" />
        </svg>
      );

    case "python":
      return (
        <svg viewBox="0 0 110 110" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M54.8 5.6C26.5 5.6 27.9 17.8 27.9 17.8l.1 12.6h27.2v3.8H17.8S5.6 32.8 5.6 61.1c0 28.3 10.9 27.2 10.9 27.2h9.8V74.6c0-13.8 11.2-25.1 25.1-25.1H84V22.3S85 5.6 54.8 5.6zm-13 9.4c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 2-4.5 4.5-4.5z" fill="#3776ab" />
          <path d="M55.2 104.4c28.3 0 26.9-12.2 26.9-12.2l-.1-12.6H54.8v-3.8H92.2s12.2 1.4 12.2-26.9c0-28.3-10.9-27.2-10.9-27.2h-9.8v13.7c0 13.8-11.2 25.1-25.1 25.1H26v27.2S25 104.4 55.2 104.4zm13-9.4c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z" fill="#ffd343" />
        </svg>
      );

    case "c/c++":
    case "c++":
      return (
        <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M84.7 39.7H71v-13.7h-7v13.7H50.3v7H64v13.7h7V46.7h13.7v-7zm12.3 0h-5.9v-5.9h-3v5.9h-5.9v3h5.9v5.9h3v-5.9h5.9v-3zm-51.5 5.8c0-3.3-1-6.1-2.9-8.4-1.9-2.3-4.5-3.5-7.9-3.5-3.9 0-7 1.4-9.2 4.2-2.2 2.8-3.3 7-3.3 12.5s1.1 9.7 3.3 12.5c2.2 2.8 5.3 4.2 9.2 4.2 3.4 0 6-1.2 7.9-3.5 1.9-2.3 2.9-5.1 2.9-8.4h9.1c-.2 5.5-2.1 10-5.7 13.4s-8.4 5.2-14.2 5.2c-6.8 0-12.2-2.3-16-7s-5.8-11.1-5.8-19.3c0-8.2 1.9-14.7 5.8-19.3s9.3-7 16-7c5.8 0 10.6 1.7 14.2 5.2s5.5 7.9 5.7 13.4H45.5z" fill="#00599c" />
        </svg>
      );

    case "php":
      return (
        <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="50" rx="46" ry="26" fill="#777bb4" />
          <path d="M30 40h-8l-8 24h6l2-6h6l1 6h6L30 40zm-6 12l2-6 2 6h-4zm24-12h-8l-8 24h6l2-6h6l1 6h6L48 40zm-6 12l2-6 2 6h-4zm36-12h-8l-8 24h6l2-6h6l1 6h6L78 40zm-6 12l2-6 2 6h-4z" fill="white" />
        </svg>
      );

    case "html5":
      return (
        <svg viewBox="0 0 512 512" className={className} xmlns="http://www.w3.org/2000/svg">
          <path fill="#e34f26" d="M71 460L37 0h438l-34 460-185 52z" />
          <path fill="#f06529" d="M256 472V39l147 41-29 324z" />
          <path fill="#ebebeb" d="M256 176h-83v35h83v83h-83v35h118l6-65-1-45-7-43z" />
          <path fill="#fff" d="M256 176v35h48l-5 53-43 12v33l76-21 11-112zM256 96v35h90l-2 21-88 23v34l123-34 11-114z" />
        </svg>
      );

    case "css3":
      return (
        <svg viewBox="0 0 512 512" className={className} xmlns="http://www.w3.org/2000/svg">
          <path fill="#1572b6" d="M71 460L37 0h438l-34 460-185 52z" />
          <path fill="#33a9dc" d="M256 472V39l147 41-29 324z" />
          <path fill="#ebebeb" d="M256 176h-83v35h83v83h-83v35h118l6-65-1-45-7-43z" />
          <path fill="#fff" d="M256 176v35h48l-5 53-43 12v33l76-21 11-112zM256 96v35h90l-2 21-88 23v34l123-34 11-114z" />
        </svg>
      );

    case "supabase":
      return (
        <svg viewBox="0 0 96 96" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M56.883 91.956c-3.149 2.766-8.069.529-8.069-3.666v-25.29H13.626c-5.717 0-9.288-6.196-6.429-11.155L40.166 4.31C43.315 1.543 48.235 3.78 48.235 7.975v25.29H82.8c5.717 0 9.288 6.196 6.429 11.155L56.883 91.956z" fill="#3ecf8e" />
        </svg>
      );

    case "mongodb":
      return (
        <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M50 2.5C40.6 15 31.2 30 31.2 46.2c0 23 15.6 37.6 18.8 41.3V95h3.8v-7.5c3.2-3.7 18.8-18.3 18.8-41.3C72.6 30 63.2 15 53.8 2.5h-3.8zm0 15c4.7 10 11.2 21.2 11.2 28.7 0 11.2-6.2 22.5-11.2 28.7V17.5z" fill="#47a248" />
        </svg>
      );

    case "firebase":
      return (
        <svg viewBox="0 0 112 112" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M17.8 85.5l14-80.5c.5-3 4.5-4 6.5-1.5l12.5 23.5L17.8 85.5z" fill="#ffca28" />
          <path d="M94.2 85.5L78.7 22c-.5-2.5-4-3-5.5-.5L17.8 85.5h76.4z" fill="#ffa000" />
          <path d="M17.8 85.5l3.5-6c.5-1 1.5-1 2.5-.5l49 27c2 1 4.5-.5 4.5-2.5V85.5H17.8z" fill="#f44336" />
        </svg>
      );

    case "mern stack":
    case "node.js":
    case "nodejs":
      return (
        <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M46.8 91.1L12.5 71.3V31.7L46.8 12l34.3 19.8v39.6L46.8 91.1zm-28-23l28 16.2 28-16.2V35.6L46.8 19.4l-28 16.2v32.5z" fill="#339933" />
          <path d="M46.8 71.3V31.7L18.8 47.9v20.4l28 3z" fill="#339933" opacity="0.8" />
        </svg>
      );

    case "flask":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 15c-15.6 0-25 15.6-25 25 0 12.5 12.5 12.5 12.5 25V85h25V65c0-12.5 12.5-12.5 12.5-25 0-9.4-9.4-25-25-25zm0 8.3c9.4 0 16.7 10.4 16.7 16.7s-7.3 16.7-16.7 16.7-16.7-10.4-16.7-16.7 7.3-16.7 16.7-16.7z" fill="#ffffff" />
        </svg>
      );

    case "django":
      return (
        <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" fill="#092e20" rx="8" />
          <path d="M30 65c-6.6 0-9.5-3.3-9.5-8.8V42h6.5v13.7c0 2.2.8 3.3 2.7 3.3.8 0 1.9-.3 2.5-.8V42h6.5v23h-6.2c-.8.7-1.8 1.1-2.5 1.1zM58.3 42h6.5v23h-6.5V60.7c-1.3 1.8-3.4 3.1-6.2 3.1-4.8 0-8.8-3.9-8.8-9.4s4-9.4 8.8-9.4c2.8 0 4.8 1.3 6.2 3.1V42zm-5.9 16.2c2.5 0 4.5-2.2 4.5-5.2s-2-5.2-4.5-5.2-4.5 2.2-4.5 5.2 2 5.2 4.5 5.2z" fill="#ffffff" />
        </svg>
      );

    case "github":
      return (
        <svg viewBox="0 0 98 96" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.268 33.39 46.79 2.437.453 3.336-1.07 3.336-2.378 0-1.185-.04-4.323-.065-8.486-13.59 2.978-16.455-6.612-16.455-6.612-2.22-5.697-5.43-7.22-5.43-7.22-4.436-3.06.338-3.00.338-3.00 4.907.347 7.49 5.093 7.49 5.093 4.36 7.54 11.435 5.362 14.225 4.102.443-3.19 1.7-5.368 3.093-6.6-10.85-1.246-22.253-5.478-22.253-24.37 0-5.385 1.905-9.78 5.038-13.23-.504-1.25-2.185-6.27.484-13.06 0 0 4.105-1.326 13.454 5.06 3.9-1.096 8.087-1.644 12.247-1.663 4.156.019 8.348.567 12.26 1.664 9.34-6.387 13.435-5.06 13.435-5.06 2.678 6.79 1 11.81.493 13.06 3.14 3.45 5.03 7.844 5.03 13.23 0 18.938-11.42 23.112-22.31 24.33 1.75 1.523 3.312 4.52 3.312 9.117 0 6.58-.06 11.88-.06 13.5 0 1.316.89 2.85 3.36 2.372C84 89.47 98 70.966 98 49.217 98 22 76.16 0 48.854 0z" />
        </svg>
      );

    case "android studio":
    case "android":
      return (
        <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M72.3 35.8l5.2-9c.4-.7.2-1.6-.5-2-.7-.4-1.6-.2-2 .5l-5.3 9.2c-5.9-2.7-12.5-4.2-19.7-4.2s-13.8 1.5-19.7 4.2l-5.3-9.2c-.4-.7-1.3-.9-2-.5-.7.4-.9 1.3-.5 2l5.2 9C15.8 43.1 10 52.8 10 64h80c0-11.2-5.8-20.9-15.7-28.2zM33 50c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm34 0c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" fill="#3ddc84" />
        </svg>
      );

    case "ms azure":
    case "azure":
      return (
        <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M19.7 75.8L37.9 22h19.7l22.7 53.8H62.1l-9-24.2-18.2 24.2H19.7z" fill="#0078d4" />
          <path d="M57.6 22H80L62.1 63.6l-4.5-41.6z" fill="#50e6ff" />
        </svg>
      );

    case "antigravity":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="#a855f7" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="25" stroke="#a855f7" strokeWidth="3" />
          <path d="M50 10v35M50 55v35M10 50h35M55 50h90" stroke="#a855f7" strokeWidth="2" />
          <circle cx="50" cy="50" r="8" fill="#a855f7" className="animate-pulse" />
        </svg>
      );

    case "cursor":
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 20l45 25-23 7-7 23-15-55z" fill="#7C3AED" stroke="#F3EFFC" strokeWidth="3" />
          <circle cx="55" cy="55" r="4" fill="#a855f7" />
        </svg>
      );

    case "api development":
    case "api":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
          <line x1="20" y1="6" x2="16" y2="6" />
          <line x1="20" y1="18" x2="16" y2="18" />
        </svg>
      );

    case "nlp":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 6v12M6 12h12M7.5 7.5l9 9M16.5 7.5l-9 9" />
        </svg>
      );

    case "codex":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#d946ef" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
          <line x1="12" y1="22" x2="12" y2="12" />
          <line x1="12" y1="12" x2="22" y2="8.5" />
          <line x1="12" y1="12" x2="2" y2="8.5" />
          <circle cx="12" cy="12" r="3" fill="#d946ef" />
        </svg>
      );

    default:
      // Fallback code bracket icon
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
  }
}
