import { Briefcase } from "lucide-react";

export const skills = [
  { name: "Python", level: 95 },
  { name: "Django", level: 90 },
  { name: "JavaScript", level: 92 },
  { name: "React", level: 94 },
  { name: "Node.js", level: 88 },
  { name: "MongoDB", level: 85 },
  { name: "PostgreSQL", level: 87 },
  { name: "AWS", level: 83 },
  { name: "Docker", level: 80 },
  { name: "TensorFlow", level: 60 },
];

export const experiences = [
  {
    title: "Freelance Software Engineer",
    company: "Upwork",
    period: "07/2019 - 06/2025",
    location: "Remote",
    icon: Briefcase,
    achievements: [
      "Built high-performance full-stack applications using React, Redux, and Next.js, resulting in 95% client satisfaction rate across 30+ projects",
      "Engineered a scalable image generation API with FastAPI and Django that processed 10,000+ daily requests using AWS infrastructure and Docker containerization",
      "Created optimized RESTful APIs and GraphQL endpoints that reduced data exchange latency by 40%",
      "Structured efficient database schemas with Django ORM and PostgreSQL, improving query performance by 35% while maintaining data integrity",
      "Automated testing and deployment through CI/CD pipelines with GitHub Actions and Jenkins, reducing deployment time by 60%",
      "Delivered multiple machine learning solutions including object detection systems, NLP applications with BERT models, and OpenAI integrations that increased client operational efficiency by 25%",
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
  {
    title: "React JS Developer",
    company: "Next Generation Software LTD",
    period: "07/2021 - 12/2022",
    location: "London, UK",
    icon: Briefcase,
    achievements: [
      "Delivered mobile applications using React that incorporated Facebook's design principles, improving user experience metrics by 40%",
      "Optimized REST API integration that decreased frontend loading times by 50% and enhanced overall application responsiveness",
      "Created comprehensive technical documentation that reduced onboarding time for new developers by 60%",
      "Successfully integrated existing company APIs with new applications, ensuring seamless data flow and system compatibility",
    ],
  },
];

export const portfolioProjects = [
  {
    title: "AI-Powered Image Generation API",
    description:
      "Scalable API using FastAPI and Django with AWS infrastructure handling 10,000+ daily requests",
    tech: ["Python", "FastAPI", "Django", "AWS", "Docker"],
    rating: 5,
    client: "Enterprise Client",
    image: "https://placehold.co/400x300/6366f1/ffffff?text=AI+Image+API",
  },
  {
    title: "A SYSTEM FOR PREDICTING STOCK PRICES USING DEEP LEARNING",
    description:
      "Advanced deep learning model for stock price prediction with real-time data processing and visualization",
    tech: ["Python", "TensorFlow", "PyTorch", "Flask", "React"],
    rating: 5,
    client: "Financial Technology Company",
    image: "https://placehold.co/400x300/8b5cf6/ffffff?text=Stock+Prediction",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack MERN application with payment integration and admin dashboard",
    tech: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    rating: 5,
    client: "Retail Startup",
    image: "https://placehold.co/400x300/06b6d4/ffffff?text=E-Commerce",
  },
  {
    title: "Online Text Editor",
    description:
      "Feature-rich online text editor with collaboration tools and real-time saving",
    tech: ["Vue.js", "Node.js", "PostgreSQL", "Socket.io"],
    rating: 4.8,
    client: "Education Platform",
    image: "https://placehold.co/400x300/10b981/ffffff?text=Text+Editor",
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
