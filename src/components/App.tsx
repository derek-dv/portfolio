import {
  ArrowRight,
  Check,
  Github,
  Linkedin,
  Mail,
  MoveUpRight,
  Sparkles,
} from "lucide-react";

import {
  capabilityGroups,
  contactFacts,
  engineeringPrinciples,
  experiences,
  featuredProjects,
  focusAreas,
  heroStats,
  proofPoints,
} from "../exports";

const primaryStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
];

const deliverySignals = [
  "Frontend systems that stay fast under real usage",
  "Backends designed for clear ownership and maintainability",
  "Product decisions that reduce future cleanup work",
];

const contactFaqs = [
  {
    question: "What roles are the best fit?",
    answer:
      "Senior frontend, full-stack, and product engineering roles where interface quality and technical discipline both matter.",
  },
  {
    question: "Do you work across time zones?",
    answer:
      "Yes. I am based in Nigeria and comfortable overlapping with US, UK, and EU teams.",
  },
  {
    question: "What kind of projects do you usually take on?",
    answer:
      "Platform rebuilds, internal tools, early-stage products, and modernization work where speed cannot come at the cost of maintainability.",
  },
];

const App = () => {
  return (
    <div className="seo-page">
      <div className="seo-noise" />
      <div className="seo-rings" />

      <div className="section-shell relative z-10 py-5 md:py-8">
        <div className="mx-auto max-w-[1320px]">
          <header className="surface-panel rounded-full px-4 py-3 md:px-6">
            <div className="flex items-center justify-between gap-4">
              <a href="#hero" className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.15] bg-white/5 text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                    D
                  </span>
                </span>
                <div>
                  <p className="seo-label text-[10px]">Derek David</p>
                </div>
              </a>

              <nav className="hidden items-center gap-7 text-sm text-white/[0.5] md:flex">
                <a href="#approach" className="hover:text-white">
                  Approach
                </a>
                <a href="#work" className="hover:text-white">
                  Work
                </a>
                <a href="#experience" className="hover:text-white">
                  Experience
                </a>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </nav>

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/derek-dv"
                  target="_blank"
                  rel="noreferrer"
                  className="hidden rounded-full border border-white/10 bg-white/5 p-2.5 text-white/[0.75] hover:border-white/20 hover:text-white md:inline-flex"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-black"
                >
                  Get In Touch
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </header>

          <main className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-6">
              <section
                id="hero"
                className="surface-panel grid-panel overflow-hidden rounded-[2rem] p-6 md:p-8"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.09),transparent_22%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_18%)]" />
                <div className="pointer-events-none absolute -right-6 top-20 hidden md:block">
                  <div className="spark spark-lg" />
                </div>
                <div className="pointer-events-none absolute right-24 top-40 hidden md:block">
                  <div className="spark spark-md" />
                </div>
                <div className="pointer-events-none absolute bottom-20 right-10 hidden md:block">
                  <div className="spark spark-sm" />
                </div>

                <div className="relative z-10">
                  <p className="seo-label">Product-focused full-stack engineer</p>
                  <div className="mt-5 max-w-[760px]">
                    <h1 className="seo-headline text-balance">
                      I build sharp, production-ready web products.
                    </h1>
                    <p className="mt-5 max-w-[560px] text-sm leading-7 text-white/[0.58] md:text-base">
                      Derek David. I work across frontend systems, backend
                      architecture, and delivery. The goal is simple: ship
                      interfaces that feel deliberate and software that holds up
                      after real users arrive.
                    </p>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a href="#work" className="seo-cta-primary">
                      See Selected Work
                    </a>
                    <a href="/resume.pdf" className="seo-cta-secondary">
                      Open Resume
                    </a>
                  </div>

                  <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-6 text-sm text-white/[0.42]">
                    {primaryStack.map((item) => (
                      <span key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              <section
                id="approach"
                className="surface-panel rounded-[2rem] px-6 py-8 md:px-8 md:py-10"
              >
                <div className="max-w-[620px]">
                  <p className="seo-label">Approach</p>
                  <h2 className="section-title mt-4 text-white">
                    Full-stack execution with product judgment
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/[0.58] md:text-base">
                    I am usually brought in when a team needs both speed and
                    engineering discipline, not a nice-looking prototype that
                    collapses under real complexity.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {engineeringPrinciples.map((item) => (
                    <span key={item} className="seo-chip">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
                  <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 md:p-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      {focusAreas.map((area) => (
                        <div
                          key={area.title}
                          className="rounded-[1.35rem] border border-white/10 bg-black/30 p-4"
                        >
                          <p className="text-xs uppercase tracking-[0.18em] text-white/[0.35]">
                            {area.title}
                          </p>
                          <p className="mt-4 text-sm leading-7 text-white/[0.62]">
                            {area.description}
                          </p>
                        </div>
                      ))}

                      <div className="rounded-[1.35rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5">
                        <p className="text-xs uppercase tracking-[0.18em] text-white/[0.35]">
                          Core stack
                        </p>
                        <div className="mt-6 flex h-[132px] flex-wrap content-end gap-2">
                          {["Next.js", "Node.js", "React", "TypeScript"].map((item) => (
                            <span key={item} className="seo-chip">
                              {item}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-white/[0.42]">Frontend, backend, infra</p>
                      </div>
                    </div>

                    <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_0.9fr]">
                      {proofPoints.slice(0, 2).map((point) => (
                        <div
                          key={point.label}
                          className="rounded-[1.35rem] border border-white/10 bg-black/30 p-4"
                        >
                          <p className="text-xs uppercase tracking-[0.18em] text-white/[0.35]">
                            {point.label}
                          </p>
                          <p className="mt-4 text-sm leading-7 text-white/[0.65]">
                            {point.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-white/[0.52]">Current focus</p>
                        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/[0.65]">
                          Shipping
                        </span>
                      </div>
                      <div className="mt-6 flex items-end gap-3">
                        <div className="flex-1">
                          <p className="text-4xl font-semibold tracking-[-0.05em] text-white">
                            Senior-level
                          </p>
                          <p className="mt-2 text-sm text-white/[0.42]">
                            frontend and full-stack work
                          </p>
                        </div>
                        <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-3 text-white/[0.7]">
                          <Sparkles size={18} />
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[1.6rem] border border-white/10 bg-black/[0.35] p-5">
                      <p className="text-sm text-white/[0.52]">Delivery signals</p>
                      <div className="mt-5 space-y-3">
                        {deliverySignals.map((task) => (
                          <div
                            key={task}
                            className="flex items-start gap-3 rounded-[1.15rem] border border-white/10 bg-white/5 px-4 py-3"
                          >
                            <Check size={16} className="mt-0.5 text-white/80" />
                            <span className="text-sm leading-6 text-white/[0.65]">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section
                id="results"
                className="surface-panel overflow-hidden rounded-[2rem] px-6 py-8 md:px-8 md:py-10"
              >
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="max-w-[460px]">
                    <p className="seo-label">Proof</p>
                    <h2 className="section-title mt-4 text-white">
                      Work backed by measurable outcomes
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-white/[0.58] md:text-base">
                      The numbers here reflect the kind of impact I have already
                      delivered across product teams, platforms, and production
                      systems.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {heroStats.map((metric) => (
                      <div
                        key={metric.label}
                        className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-5"
                      >
                        <div className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/20 p-2 text-white/[0.45]">
                          <MoveUpRight size={15} />
                        </div>
                        <p className="mt-10 text-4xl font-semibold tracking-[-0.06em] text-white">
                          {metric.value}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-white/[0.48]">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section
                id="work"
                className="surface-panel rounded-[2rem] px-6 py-8 md:px-8 md:py-10"
              >
                <div className="max-w-[560px]">
                  <p className="seo-label">Selected work</p>
                  <h2 className="section-title mt-4 text-white">
                    Product work across interface, systems, and delivery
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/[0.58] md:text-base">
                    These projects show the range: product direction, frontend
                    architecture, backend systems, and turning ideas into sharper,
                    more credible experiences.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 lg:grid-cols-3">
                  {featuredProjects.map((project, index) => (
                    <article
                      key={project.title}
                      className={`rounded-[1.6rem] border p-5 md:p-6 ${
                        index === 2
                          ? "border-white bg-white text-black"
                          : "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] text-white"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p
                            className={`text-xs uppercase tracking-[0.18em] ${
                              index === 2 ? "text-black/[0.55]" : "text-white/[0.4]"
                            }`}
                          >
                            {project.status}
                          </p>
                          <p className="mt-4 text-3xl font-semibold tracking-[-0.06em]">
                            {project.title}
                          </p>
                        </div>
                      </div>

                      <p
                        className={`mt-4 text-sm leading-7 ${
                          index === 2 ? "text-black/[0.7]" : "text-white/[0.55]"
                        }`}
                      >
                        {project.summary}
                      </p>

                      <p
                        className={`mt-4 text-sm ${
                          index === 2 ? "text-black/[0.78]" : "text-white/[0.68]"
                        }`}
                      >
                        {project.role}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className={`inline-flex items-center rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] ${
                              index === 2
                                ? "border border-black/10 bg-black/[0.06] text-black/[0.78]"
                                : "border border-white/10 bg-white/5 text-white/[0.68]"
                            }`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <p
                        className={`mt-6 text-sm leading-7 ${
                          index === 2 ? "text-black/[0.7]" : "text-white/[0.62]"
                        }`}
                      >
                        {project.outcome}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-3">
                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] ${
                              index === 2
                                ? "bg-black text-white"
                                : "border border-white/10 bg-white/5 text-white"
                            }`}
                          >
                            View Project
                            <ArrowRight size={14} />
                          </a>
                        ) : null}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section
                id="experience"
                className="surface-panel rounded-[2rem] px-6 py-8 md:px-8 md:py-10"
              >
                <div className="max-w-[560px]">
                  <p className="seo-label">Experience</p>
                  <h2 className="section-title mt-4 text-white">
                    Built in real teams, not just personal experiments
                  </h2>
                </div>

                <div className="mt-8 grid gap-4">
                  {experiences.map((role) => (
                    <article
                      key={`${role.company}-${role.period}`}
                      className="rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5"
                    >
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div>
                          <p className="text-2xl font-semibold tracking-[-0.05em] text-white">
                            {role.title}
                          </p>
                          <p className="mt-1 text-sm text-white/[0.42]">
                            {role.company} · {role.location}
                          </p>
                        </div>
                        <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/[0.55]">
                          {role.period}
                        </span>
                      </div>

                      <div className="mt-6 grid gap-3 md:grid-cols-3">
                        {role.achievements.map((item) => (
                          <div
                            key={item}
                            className="rounded-[1.1rem] border border-white/10 bg-black/[0.25] px-4 py-4 text-sm leading-7 text-white/[0.62]"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section
                id="contact"
                className="surface-panel rounded-[2rem] px-6 py-8 md:px-8 md:py-10"
              >
                <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
                  <div className="max-w-[420px]">
                    <p className="seo-label">Contact</p>
                    <h2 className="section-title mt-4 text-white">
                      Available for serious product work
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-white/[0.58]">
                      If you need a strong frontend or full-stack engineer who can
                      make product decisions and still handle the implementation,
                      reach out.
                    </p>

                    <div className="mt-7 flex items-center gap-3">
                      <a
                        href="mailto:derek@derekcodes.online"
                        className="rounded-full border border-white/10 bg-white/5 p-3 text-white/[0.75] hover:text-white"
                        aria-label="Email"
                      >
                        <Mail size={18} />
                      </a>
                      <a
                        href="https://linkedin.com/in/derek-dv"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/10 bg-white/5 p-3 text-white/[0.75] hover:text-white"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {contactFaqs.map((item, index) => (
                      <details
                        key={item.question}
                        className="group rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-5 py-4"
                        open={index === 0}
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                          <span className="text-left text-sm font-medium text-white md:text-base">
                            {item.question}
                          </span>
                          <span className="text-white/[0.55] group-open:hidden">
                            <ArrowRight size={16} />
                          </span>
                          <span className="hidden text-white/[0.55] group-open:block">
                            <ArrowRight size={16} />
                          </span>
                        </summary>
                        <p className="pt-4 text-sm leading-7 text-white/[0.55]">{item.answer}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </section>

              <footer className="rounded-[2rem] border border-white/10 bg-black/[0.25] px-6 py-6 md:px-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-4xl font-semibold tracking-[-0.07em] text-white/[0.88]">
                      Derek David
                    </p>
                    <p className="mt-2 text-sm text-white/[0.42]">
                      Product-focused full-stack engineering with a bias for
                      clarity, maintainability, and strong delivery.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-white/[0.46]">
                    <a href="#hero" className="hover:text-white">
                      Home
                    </a>
                    <a href="#work" className="hover:text-white">
                      Work
                    </a>
                    <a href="#experience" className="hover:text-white">
                      Experience
                    </a>
                    <a href="#contact" className="hover:text-white">
                      Contact
                    </a>
                  </div>
                </div>
              </footer>
            </div>

            <aside className="hidden xl:block">
              <div className="sticky top-8 space-y-4">
                <section className="surface-panel grid-panel overflow-hidden rounded-[2rem] p-5">
                  <p className="seo-label">Derek David</p>
                  <div className="mt-4">
                    <h2 className="text-[2rem] font-semibold leading-none tracking-[-0.07em] text-white">
                      Quiet UI,
                      <br />
                      credible work.
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-white/[0.52]">
                      Frontend systems, backend delivery, and product work shaped
                      into a tighter presentation.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs text-white/[0.38]">
                    <span className="h-2 w-2 rounded-full bg-white/60" />
                    Available for senior product engineering work
                  </div>
                </section>

                <section className="surface-panel rounded-[2rem] p-5">
                  <p className="seo-label">Capabilities</p>
                  <div className="mt-4 space-y-3">
                    {capabilityGroups.slice(0, 3).map((group) => (
                      <div
                        key={group.title}
                        className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4"
                      >
                        <p className="text-sm font-medium text-white">{group.title}</p>
                        <p className="mt-1 text-sm text-white/[0.45]">
                          {group.items.slice(0, 3).join(" · ")}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="surface-panel rounded-[2rem] p-5">
                  <p className="seo-label">Availability</p>
                  <div className="mt-4 space-y-3">
                    {contactFacts.map((fact) => (
                      <div
                        key={fact}
                        className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/[0.68]"
                      >
                        {fact}
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </aside>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
