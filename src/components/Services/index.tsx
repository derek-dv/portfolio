import { ArrowUpRight } from "lucide-react";

import { engineeringPrinciples, focusAreas, proofPoints } from "../../exports";

const Services = () => {
  return (
    <section id="services" className="section-shell py-20 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="kicker">Approach</p>
          <h2 className="section-title mt-4 max-w-lg">
            Clear product thinking before framework theater.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--ink-soft)] md:text-base">
            The goal is not to impress a room with tooling. It is to build a
            product that feels fast, remains maintainable, and does not force the
            team into cleanup mode three months later.
          </p>

          <div className="mt-8 space-y-3">
            {proofPoints.map((point) => (
              <div
                key={point.label}
                className="flex flex-col gap-2 border-l-2 border-[var(--accent)]/50 pl-4"
              >
                <p className="mono text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
                  {point.label}
                </p>
                <p className="text-sm leading-7 text-[var(--ink)] md:text-base">{point.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="grid gap-4 md:grid-cols-3">
            {focusAreas.map((area, index) => (
              <article
                key={area.title}
                className={`rounded-[1.75rem] border p-5 ${
                  index === 1 ? "surface-light translate-y-0 md:translate-y-8" : "surface"
                }`}
              >
                <p className="kicker">{area.title}</p>
                <p className="mt-5 text-sm leading-7 md:text-base">
                  {area.description}
                </p>
              </article>
            ))}
          </div>

          <div className="surface rounded-[1.75rem] p-6 md:p-7">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="kicker">Operating principles</p>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--ink-soft)] md:text-base">
                  I prefer visible constraints, practical decisions, and software
                  that stays understandable after the launch energy fades.
                </p>
              </div>
              <a href="#contact" className="cta-secondary w-fit">
                Work with me
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {engineeringPrinciples.map((principle) => (
                <div
                  key={principle}
                  className="rounded-[1rem] border border-[var(--line)] px-4 py-3 text-sm text-[var(--ink)]"
                >
                  {principle}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
