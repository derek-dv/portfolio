import { Briefcase } from "lucide-react";

export const skills = [
  { name: "React", level: 94 },
  { name: "Node.js", level: 88 },
  { name: "Next.js", level: 90 },
  { name: "SQL", level: 87 },
  { name: "NoSQL", level: 85 },
];

export const experiences = [
  {
    title: "Full-stack Developer",
    company: "Sky Enterprise",
    period: "12/2022 - Present",
    location: "Yola, Nigeria",
    icon: Briefcase,
    achievements: [
      "Engineered scalable web applications using MERN stack (MongoDB, Express.js, React.js, Node.js) that automated 5 critical business processes, reducing manual workload by 35%",
      "Constructed RESTful APIs following best practices that improved data integrity by 25% and reduced API response times by 30%",
      "Implemented hybrid SQL/NoSQL database architecture that accommodated diverse data types while improving query performance by 40%",
      "Deployed microservices using Docker containers that reduced application deployment time by 50% and improved system reliability with 99.9% uptime",
    ],
  },
  {
    title: "Full-stack Developer",
    company: "Connectivo AB",
    period: "02/2025 - 06/2025",
    location: "Göteborg, Sweden",
    icon: Briefcase,
    achievements: [
      "Architected web applications using Vue.js, React, and Django that boosted user engagement by 30% and reduced page load times by 45%",
      "Streamlined data flow between frontend and backend by refactoring API endpoints, resulting in 28% faster application performance",
      "Enhanced user experience through intuitive UI/UX redesigns that increased user retention rates by 22%",
      "Reduced software defects by 40% through implementing comprehensive testing strategies with Jest and Selenium",
    ],
  },
  {
    title: "React JS Developer",
    company: "Next Generation Software LTD",
    period: "07/2021 - 12/2022",
    location: "London, UK",
    icon: Briefcase,
    achievements: [
      "Delivered mobile applications using React that incorporated Facebook's design principles, improving user experience",
    ],
  },
  {
    title: "Node.JS Developer",
    company: "Manaknight Inc.",
    period: "06/2022 - 10/2022",
    location: "Toronto, ON, Canada",
    icon: Briefcase,
    achievements: [
      "Developed backend systems for two mobile applications that acquired 15,000+ users within three months of launch",
      "Built a feature-rich golf game management application that increased user engagement by 45% through intuitive score tracking and player statistics",
      "Designed normalized PostgreSQL database schemas with Sequelize that improved data retrieval speeds by 35% while ensuring application scalability",
      "Integrated third-party APIs that expanded application functionality while reducing development time by 20%",
    ],
  },
];

export const portfolioProjects = [
  {
    title: "Resume Pro",
    description: "A resume optimization web app.",
    tech: ["React", "Node.js", "AI"],
    rating: 5,
    client: "Personal Project",
    image: "https://placehold.co/400x300/2563eb/ffffff?text=Resume+Pro",
    link: "#",
    github: "#",
  },
  {
    title: "Inuwa Bukar Portfolio",
    description: "A portfolio website.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    rating: 5,
    client: "Inuwa Bukar",
    image: "https://placehold.co/400x300/16a34a/ffffff?text=Portfolio",
    link: "https://inuwa-bukar.vercel.app/",
    github: "#",
  },
];

// Retaining workHistory for backward compatibility if needed, but we should switch to experiences
export const workHistory = [
  // Can leave empty or mock if not used
];
