import { experiences } from "../../exports";

const Experience = () => {
  return (
    <section id="experience" className="section-shell py-20 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr]">
        <div>
          <p className="kicker">Experience</p>
          <h2 className="section-title mt-4">A record of shipped work, not just experiments.</h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--ink-soft)] md:text-base">
            I have worked across startups, client delivery, and modernization
            efforts. The pattern is consistent: clarify the system, ship carefully,
            and keep future work easier than it would have been otherwise.
          </p>
        </div>

        <div className="space-y-5">
          {experiences.map((job, index) => (
            <article
              key={`${job.company}-${job.period}`}
              className={`rounded-[1.75rem] p-5 md:p-6 ${
                index % 2 === 0 ? "surface" : "surface-light"
              }`}
            >
              <div className="grid gap-5 md:grid-cols-[0.32fr_0.68fr]">
                <div>
                  <p className="mono text-[11px] uppercase tracking-[0.24em] text-[var(--accent)]">
                    {job.period}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold md:text-2xl">{job.title}</h3>
                  <p
                    className={`mt-1 text-sm ${
                      index % 2 === 0 ? "text-[var(--ink-soft)]" : "text-[#5f6b76]"
                    }`}
                  >
                    {job.company} / {job.location}
                  </p>
                </div>

                <ul className="space-y-3 text-sm leading-7 md:text-base">
                  {job.achievements.map((achievement) => (
                    <li key={achievement} className="border-b border-current/10 pb-3 last:border-b-0 last:pb-0">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
