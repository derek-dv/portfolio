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
    title: "Freelance Software Engineer",
    company: "Upwork",
    period: "07/2019 - 06/2025",
    location: "Remote",
    icon: Briefcase,
    achievements: [
      "Built high-performance full-stack apps (React, Next.js), achieving 95% client satisfaction.",
      "Engineered scalable AI image generation API handling 10k+ daily requests via AWS & Docker.",
      "Optimized REST/GraphQL APIs, reducing latency by 40%.",
      "Improved DB performance by 35% using efficient Django ORM & PostgreSQL schemas.",
      "Automated CI/CD producing 60% faster deployments.",
      "Delivered ML solutions (NLP, Object Detection) increasing operational efficiency by 25%.",
    ],
  },
  {
    title: "Full-stack Developer",
    company: "Connectivo AB",
    period: "02/2025 - 06/2025",
    location: "Göteborg, Sweden",
    icon: Briefcase,
    achievements: [
      "Architected Vue/React/Django apps, boosting engagement by 30% and speed by 45%.",
      "Refactored API endpoints, improving app performance by 28%.",
      "Redesigned UI/UX, increasing retention by 22%.",
      "Reduced defects by 40% via comprehensive Jest/Selenium testing.",
    ],
  },
  {
    title: "Full-stack Developer",
    company: "Sky Enterprise",
    period: "12/2022 - Present",
    location: "Yola, Nigeria",
    icon: Briefcase,
    achievements: [
      "Engineered MERN stack apps automating critical processes, cutting manual work by 35%.",
      "Built RESTful APIs improving data integrity by 25% and response times by 30%.",
      "Implemented hybrid SQL/NoSQL structure, boosting query speed by 40%.",
      "Deployed microservices (Docker) halving deployment time and ensuring 99.9% uptime.",
    ],
  },
  {
    title: "Node.JS Developer",
    company: "Manaknight Inc.",
    period: "06/2022 - 10/2022",
    location: "Toronto, ON, Canada",
    icon: Briefcase,
    achievements: [
      "Developed backend for mobile apps acquiring 15k+ users in 3 months.",
      "Built golf game management app increasing engagement by 45%.",
      "Designed normalized PostgreSQL schemas improving retrieval speeds by 35%.",
      "Integrated 3rd-party APIs, cutting development time by 20%.",
    ],
  },
  {
    title: "React JS Developer",
    company: "Next Generation Software LTD",
    period: "07/2021 - 12/2022",
    location: "London, UK",
    icon: Briefcase,
    achievements: [
      "Delivered React mobile apps improving UX metrics by 40%.",
      "Optimized REST APIs, halving frontend load times.",
      "Created technical docs reducing onboarding time by 60%.",
      "Seamlessly integrated existing APIs with new apps.",
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

export const workHistory = [
  {
    title: "Add pages to existing Vue.js project + integrate with backend API",
    rating: 4.0,
    period: "Apr 10, 2024 - Dec 9, 2024",
    feedback:
      "Derek did a decent job working on our project, but unfortunately he got ill and could not complete the project. I wish the communication on Derek's side would've been better so that we could've gotten the information sooner and hired another developer to complete the missing parts. Instead, I'm left without responses to messages. I hope you're doing better Derek, and I wish you all the best.",
    amount: "$135.00",
    type: "Fixed price",
    status: "completed",
  },
  {
    title: "Python dev to write a complete wrapper for Google's Data API",
    rating: 5.0,
    period: "Feb 26, 2024 - Mar 2, 2024",
    feedback:
      "Derek did a great job delivering what was requested, without any issues. He was quick and responsive and stuck to the set deadline. I am happy to have worked with Derek and hope to work with him again in the future.",
    amount: "$49.50",
    type: "Fixed price",
    status: "completed",
  },
  {
    title:
      "Seeking Web App Developers with Python, Flask, Relational-Databases, and AWS exp [aico-2023-1]",
    rating: 5.0,
    period: "Oct 2, 2023 - Oct 13, 2023",
    feedback:
      "Derek did a great job on performing various web app development-related coding tasks on Amazon Web Services. We'd be happy to work with this freelancer again.",
    amount: "$379.17",
    type: "$25.00 /hr",
    hours: "15 hours",
    status: "completed",
  },
  {
    title: "Remake / clone an iterative LangChain GPT loop in Python",
    rating: 5.0,
    period: "Mar 28, 2023 - Sep 27, 2023",
    feedback: "Derek is a great freelancer to work with!",
    amount: "$525.00",
    type: "Fixed price",
    status: "completed",
  },
  {
    title: "Image-to-Image conversion model developer",
    rating: 5.0,
    period: "Aug 4, 2023 - Aug 8, 2023",
    feedback:
      "He showed good skill in this job, we will hire him in our further projects again.",
    amount: "$47.50",
    type: "$15.00 /hr",
    hours: "3 hours",
    status: "completed",
  },
  {
    title: "Create API for GTP use-case",
    rating: 5.0,
    period: "Nov 3, 2022 - Dec 16, 2022",
    feedback: "Derek again helped me a lot. Great freelancer, recommended!",
    amount: "$80.00",
    type: "Fixed price",
    status: "completed",
  },
  {
    title: "Work with the Photopea API",
    rating: 5.0,
    period: "Nov 17, 2022 - Nov 21, 2022",
    feedback:
      "Helped me a lot by researching possibilities. Recommended freelancer.",
    amount: "$80.00",
    type: "$20.00 /hr",
    hours: "4 hours",
    status: "completed",
  },
  {
    title: "Translate repo to easy to use google colab playground",
    rating: 5.0,
    period: "Oct 27, 2022 - Nov 3, 2022",
    feedback: "Derek is a great, motivated freelancer.",
    amount: "$105.00",
    type: "Fixed price",
    status: "completed",
  },
  {
    title: "Help me wrap fastapi around Stable Diffusion",
    rating: 5.0,
    period: "Sep 6, 2022 - Oct 27, 2022",
    feedback: "Derek helped me a lot. Nice person to work with.",
    amount: "$225.00",
    type: "Fixed price",
    status: "completed",
  },
  {
    title: "React Js & Django Developer",
    rating: 4.4,
    period: "Sep 28, 2022 - Oct 3, 2022",
    feedback: "Good work, met expectations.",
    amount: "$100.00",
    type: "$20.00 /hr",
    hours: "5 hours",
    status: "completed",
  },
];
