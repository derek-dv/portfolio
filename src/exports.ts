import { Briefcase } from "lucide-react";

export const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "Node.js / Express", level: 90 },
  { name: "TypeScript", level: 92 },
  { name: "AWS / Azure", level: 85 },
  { name: "SQL / NoSQL", level: 88 },
  { name: "Docker / K8s", level: 80 },
  { name: "Python / AI", level: 75 },
  { name: "Vue.js", level: 85 },
  { name: "GraphQL", level: 82 },
];

export const experiences = [
  {
    title: "Senior Full-Stack Engineer",
    company: "Praix Development LTD",
    period: "08/2025 - Present",
    location: "Remote",
    icon: Briefcase,
    achievements: [
      "Spearheading scalable web application development using Next.js and Node.js, establishing core architectural patterns",
      "Designing secure RESTful APIs and managing complex data schemas with MongoDB and PostgreSQL",
      "Leading the migration of legacy codebases to modern React/TypeScript architectures, improving maintainability",
    ],
  },
  {
    title: "Full-stack Developer",
    company: "Connectivo AB",
    period: "02/2025 - 08/2025",
    location: "Göteborg, Sweden",
    icon: Briefcase,
    achievements: [
      "Architected web applications using Vue.js and React that boosted user engagement by 30%",
      "Streamlined data flow between frontend and backend, resulting in 28% faster application performance",
      "Implemented comprehensive testing strategies that reduced software defects provided to QA",
    ],
  },
  {
    title: "Full-stack Developer",
    company: "Sky Enterprise",
    period: "12/2022 - 08/2025",
    location: "Yola, Nigeria",
    icon: Briefcase,
    achievements: [
      "Engineered scalable MERN stack applications that automated critical business processes, reducing manual workload by 35%",
      "Implemented hybrid SQL/NoSQL database architecture that improved query performance by 40%",
      "Deployed microservices using Docker containers achieving 99.9% system uptime",
    ],
  },
  {
    title: "Node.JS Developer",
    company: "Manaknight Inc.",
    period: "01/2021 - 12/2022",
    location: "Toronto, Canada",
    icon: Briefcase,
    achievements: [
      "Developed backend systems for mobile applications serving 15,000+ users with high availability",
      "Built a feature-rich golf game management application that increased user engagement by 45%",
      "Designed normalized PostgreSQL database schemas that improved data retrieval speeds by 35%",
    ],
  },
];

export const portfolioProjects = [
  {
    title: "Resume Pro",
    description: "AI-integrated resume optimization web app built with Next.js.",
    tech: ["Next.js", "AI", "Tailwind"],
    rating: 5,
    client: "Personal Project",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Resume+Pro",
    link: "#",
    github: "#",
  },
  {
    title: "Haven & Hearth",
    description: "Real estate platform with advanced filtering and agent features.",
    tech: ["React", "Node.js", "PostgreSQL"],
    rating: 5,
    client: "Personal Project",
    image: "https://placehold.co/600x400/ea580c/ffffff?text=Haven+%26+Hearth",
    link: "#",
    github: "#",
  },
  {
    title: "derekcodes.online",
    description: "My personal portfolio website with custom DNS and SSL.",
    tech: ["React", "Azure", "EmailJS"],
    rating: 5,
    client: "Personal Project",
    image: "https://placehold.co/600x400/0f172a/ffffff?text=Portfolio",
    link: "https://derekcodes.online",
    github: "https://github.com/derek-dv",
  },
];

// Retaining workHistory for backward compatibility if needed, but we should switch to experiences
export const workHistory = [
  // Can leave empty or mock if not used
];
