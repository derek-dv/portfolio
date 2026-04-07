import { capabilityGroups } from "../../exports";

const About = () => {
  return (
    <section id="about" className="section-shell py-20 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-1">
          <div className="surface-strong h-full rounded-[1.7rem] p-6 md:p-8">
            <p className="kicker">Why teams hire me</p>
            <h2 className="section-title mt-4 max-w-md">
              I am most useful when the easy choices are gone.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--ink-soft)] md:text-base">
              <p>
                That usually means a product has real users, real edge cases, and
                real pressure to keep shipping without turning the codebase into a
                liability.
              </p>
              <p>
                I like working in that zone because it rewards judgment. You need
                enough design sense to keep the interface clean, enough engineering
                discipline to keep the system readable, and enough restraint not to
                overbuild the solution.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {capabilityGroups.map((group, index) => (
            <article
              key={group.title}
              className={`rounded-[1.6rem] p-5 md:p-6 ${
                index % 2 === 0 ? "surface-light" : "surface"
              }`}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="min-w-40">
                  <p className="kicker">{group.title}</p>
                </div>
                <div className="flex max-w-2xl flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full px-4 py-2 text-sm ${
                        index % 2 === 0
                          ? "border border-[rgba(20,32,43,0.12)] text-[var(--ink-dark)]"
                          : "border border-[var(--line)] text-[var(--ink)]"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
