export interface SkillCategory {
  title: string;
  items: string[];
}

export const technicalSkills: SkillCategory[] = [
  {
    title: "Languages",
    items: ["C/C++", "Python", "JavaScript", "TypeScript", "PHP", "HTML5", "CSS3"]
  },
  {
    title: "Frameworks & Stacks",
    items: ["Next.js", "React.js", "MERN Stack", "Flask", "Django"]
  },
  {
    title: "Databases & Storage",
    items: ["Supabase", "MongoDB", "Firebase"]
  },
  {
    title: "Tools & Technologies",
    items: ["Android Studio", "GitHub", "API Development", "NLP", "AntiGravity", "Cursor", "Codex", "MS Azure"]
  }
];
