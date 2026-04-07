import { ArrowUpRight, Github } from "lucide-react";

import { caseStudies, featuredProjects } from "../../exports";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-shell py-20 md:py-24">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="kicker">Selected work</p>
          <h2 className="section-title mt-4 max-w-3xl">
            Projects arranged like products, not placeholder tiles.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-[var(--ink-soft)] md:text-base">
          The point here is signal. Enough detail to show how I think, without
          drowning the section in copy.
        </p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className={`overflow-hidden rounded-[2rem] ${
                index === 1 ? "surface-light" : "surface"
              }`}
            >
              <div className={`bg-gradient-to-r ${project.accent} px-5 py-5 md:px-6`}>
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="mono text-[10px] uppercase tracking-[0.24em] text-[#18242f]/70">
                      {project.status}
                    </p>
                    <h3 className="display mt-3 text-3xl leading-[0.95] text-[#0e1821] md:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-[#1a2b34] md:text-base">
                      {project.summary}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[rgba(14,24,33,0.12)] bg-white/50 px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-[#0e1821]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-5 px-5 py-5 md:grid-cols-[0.36fr_0.64fr] md:px-6">
                <div>
                  <p className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
                    Role
                  </p>
                  <p className="mt-2 text-sm leading-7 md:text-base">{project.role}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.highlights.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  <div>
                    <p className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
                      Outcome
                    </p>
                    <p className="mt-2 text-sm leading-7 md:text-base">{project.outcome}</p>
                  </div>
                  <div>
                    <p className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
                      Challenge
                    </p>
                    <p className="mt-2 text-sm leading-7 md:text-base">{project.challenge}</p>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-1">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="cta-secondary"
                      >
                        Live project
                        <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <span className="chip">Private build or concept work</span>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="cta-secondary"
                      >
                        Source
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="space-y-5">
          {caseStudies.map((study, index) => (
            <article
              key={study.title}
              className={`rounded-[1.75rem] p-5 md:p-6 ${
                index === 0 ? "surface" : "surface-light"
              }`}
            >
              <p className="kicker">Case study / {study.project}</p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
                {study.title}
              </h3>
              <p className="mt-4 text-sm leading-7 md:text-base">{study.description}</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 md:text-base">
                {study.bullets.map((bullet) => (
                  <li key={bullet} className="border-b border-current/10 pb-3 last:border-b-0 last:pb-0">
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
