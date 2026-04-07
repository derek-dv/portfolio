import { Briefcase } from "lucide-react";

export const heroStats = [
  { value: "4+", label: "years building production software" },
  { value: "15k+", label: "users served across shipped products" },
  { value: "99.9%", label: "uptime delivered on containerized systems" },
  { value: "35%", label: "manual workload reduced through automation" },
];

export const focusAreas = [
  {
    title: "Product Engineering",
    description:
      "Building fast interfaces and dependable backends for SaaS, internal tools, and customer-facing platforms.",
  },
  {
    title: "System Design",
    description:
      "Choosing pragmatic architectures, database models, and API boundaries that keep teams moving without painting them into a corner.",
  },
  {
    title: "Delivery",
    description:
      "Taking projects from rough requirements to shipped software with an emphasis on reliability, maintainability, and clear communication.",
  },
];

export const engineeringPrinciples = [
  "Clear product thinking before framework choices",
  "Interfaces that stay fast under real usage",
  "Backends designed for observability and growth",
  "Shipping scope that is ambitious but controlled",
];

export const capabilityGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "GraphQL", "Authentication"],
  },
  {
    title: "Data + Infra",
    items: ["PostgreSQL", "MongoDB", "Docker", "Azure", "AWS"],
  },
  {
    title: "Extra Depth",
    items: ["Python", "AI integrations", "Testing strategy", "Legacy migrations"],
  },
];

export const proofPoints = [
  {
    label: "What teams bring me in for",
    value: "Turning messy requirements into shippable, maintainable product work",
  },
  {
    label: "Work style",
    value: "Hands-on across frontend, backend, database design, and deployment",
  },
  {
    label: "Best fit",
    value: "Early-stage products, platform rebuilds, internal tools, and modernization work",
  },
];

export const featuredProjects = [
  {
    title: "Resume Pro",
    summary: "AI-assisted resume workflow for faster, more deliberate tailoring.",
    role: "Product design and frontend architecture",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "AI"],
    status: "Personal product",
    outcome: "Turns resume editing into a guided flow instead of a blank-page struggle.",
    challenge: "Keeping AI useful without making every output sound generic.",
    highlights: ["Guided editing flow", "Clearer revision structure"],
    accent: "from-[#2f6a58] via-[#bdd9cf] to-[#edf7f3]",
    link: null,
    github: null,
  },
  {
    title: "Haven & Hearth",
    summary: "Real-estate platform concept centered on search, clarity, and agent workflows.",
    role: "Full-stack product build",
    stack: ["React", "Node.js", "PostgreSQL"],
    status: "Product concept",
    outcome: "Designed around the parts of property search that usually break first.",
    challenge: "Making filters flexible without letting data modeling turn messy.",
    highlights: ["Advanced filtering", "Agent-facing workflows"],
    accent: "from-[#29504b] via-[#8cc0b5] to-[#ebf6f2]",
    link: null,
    github: null,
  },
  {
    title: "derekcodes.online",
    summary: "Portfolio rebuilt to feel sharper, more opinionated, and more credible.",
    role: "Design direction, frontend implementation, deployment",
    stack: ["Next.js", "TypeScript", "Azure", "Email API"],
    status: "Live",
    outcome: "Shifted the site away from template energy and toward clearer proof.",
    challenge: "Making it feel personal and technical without slipping into agency fluff.",
    highlights: ["Editorial redesign", "Proof-led positioning"],
    accent: "from-[#20333f] via-[#8aa5ab] to-[#eef5f4]",
    link: "https://derekcodes.online",
    github: "https://github.com/derek-dv",
  },
];

export const caseStudies = [
  {
    title: "Building for clarity, not feature noise",
    project: "Resume Pro",
    description:
      "The product direction centers on reducing friction in a task that is usually emotionally expensive: rewriting and refining a resume under pressure.",
    bullets: [
      "Broke the experience into guided steps instead of a blank-page editor",
      "Kept the interface focused on edits that improve clarity, structure, and relevance",
      "Used AI as an assistant layer rather than the voice of the product",
    ],
  },
  {
    title: "Designing for complex filters without a messy UI",
    project: "Haven & Hearth",
    description:
      "Property search tends to collapse under too many controls. The concept work focuses on keeping discovery fluid while preserving detail where it matters.",
    bullets: [
      "Separated browsing decisions from listing deep-dives",
      "Planned backend-friendly filtering around predictable data shapes",
      "Prioritized confidence and scanning speed over visual clutter",
    ],
  },
];

export const experiences = [
  {
    title: "Senior Full-Stack Engineer",
    company: "Praix Development LTD",
    period: "Aug 2025 - Present",
    location: "Remote",
    icon: Briefcase,
    achievements: [
      "Spearheading scalable web application development with Next.js and Node.js while setting core architectural patterns.",
      "Designing secure REST APIs and managing complex MongoDB and PostgreSQL data models.",
      "Leading migration work from legacy codebases into maintainable React and TypeScript systems.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Connectivo AB",
    period: "Feb 2025 - Aug 2025",
    location: "Goteborg, Sweden",
    icon: Briefcase,
    achievements: [
      "Built web applications in Vue.js and React that improved user engagement by 30%.",
      "Streamlined frontend-backend data flow for roughly 28% faster application performance.",
      "Introduced testing practices that reduced defects reaching QA.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Sky Enterprise",
    period: "Dec 2022 - Aug 2025",
    location: "Yola, Nigeria",
    icon: Briefcase,
    achievements: [
      "Built MERN applications that automated business processes and cut manual workload by 35%.",
      "Implemented hybrid SQL and NoSQL data architecture that improved query performance by 40%.",
      "Deployed Docker-based services that supported 99.9% uptime targets.",
    ],
  },
  {
    title: "Node.js Developer",
    company: "Manaknight Inc.",
    period: "Jan 2021 - Dec 2022",
    location: "Toronto, Canada",
    icon: Briefcase,
    achievements: [
      "Developed backend systems for mobile applications serving more than 15,000 users.",
      "Built a golf game management application that increased user engagement by 45%.",
      "Designed normalized PostgreSQL schemas that improved retrieval speed by 35%.",
    ],
  },
];

export const contactFacts = [
  "Open to senior frontend, full-stack, and contract product engineering roles",
  "Usually replies within 24 hours",
  "Based in Nigeria and comfortable working across US, UK, and EU time overlap",
];
