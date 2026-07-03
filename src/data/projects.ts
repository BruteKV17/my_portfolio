export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  role: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "noteit-ai",
    number: "01",
    title: "NoteIT AI",
    category: "AI Learning Product",
    role: "Founder, Product Designer & Developer",
    description: "An AI-powered second-brain platform that combines intelligent note-taking, document understanding, and personalized knowledge management into a unified workspace. Features live lecture summarization, semantic search, document chat, and workflow automation.",
    tags: ["Next.js", "React.js", "TypeScript", "Firebase", "OpenAI API", "Tailwind CSS"],
    link: "https://noteit-ai.vercel.app"
  },
  {
    id: "bhasha-bridge",
    number: "02",
    title: "Bhasha Bridge",
    category: "AI Translation Platform",
    role: "Fullstack & NLP Developer",
    description: "An AI-driven language translation system focused on Sinhala and Nepali languages for improved cross-lingual communication. Utilized natural language processing and machine learning techniques to deliver accurate, context-aware translations.",
    tags: ["Next.js", "React.js", "Firebase", "TypeScript", "TSX", "NLP"],
    link: "#",
    image: "/bhashabridge.jpg"
  },
  {
    id: "cure-genie",
    number: "03",
    title: "CureGenie",
    category: "AI Health Assistant",
    role: "AI Developer & UI Designer",
    description: "An AI-powered health and agriculture assistant achieving high accuracy using real-time image-based analysis. Utilized machine learning and data-driven insights to detect human and plant diseases, providing precise diagnosis and actionable recommendations.",
    tags: ["Next.js", "CNN", "RNN", "Kaggle", "Kubernetes"],
    link: "https://curegenie.in",
    image: "/curegenie.png"
  }
];
