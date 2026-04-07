import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import { heroStats } from "../../exports";

const Hero = () => {
  return (
    <section id="hero" className="section-shell pt-8 md:pt-12">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-5 py-8 md:px-8 md:py-10 lg:px-10">
          <div className="absolute inset-0 opacity-60 divider-grid" />
          <div className="absolute -right-20 top-10 h-48 w-48 rounded-full bg-[rgba(141,247,111,0.16)] blur-3xl" />
          <div className="absolute bottom-0 left-10 h-40 w-40 rounded-full bg-[rgba(122,216,255,0.14)] blur-3xl" />

          <div className="relative z-10">
            <p className="kicker">Frontend systems / product engineering / delivery</p>
            <h1 className="headline-xl mt-6 max-w-5xl">
              Modern web products without the bloated agency aesthetic.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--ink-soft)] md:text-lg">
              I build Next.js and Node.js products with a bias for sharp interfaces,
              sane architecture, and momentum that does not collapse once the app
              gets real users.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#portfolio" className="cta-primary">
                See selected work
                <ArrowRight size={16} />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="cta-secondary">
                Resume
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-[var(--line)] bg-[rgba(255,255,255,0.04)] p-4"
                >
                  <p className="display text-3xl text-[var(--ink)] md:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[var(--ink-soft)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="surface-light rounded-[2rem] p-6 md:p-7">
            <p className="kicker">What I optimize for</p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--ink-dark)] md:text-base">
              <li>Interfaces that stay quick under real usage, not just screenshots.</li>
              <li>Backend choices that reduce future cleanup instead of postponing it.</li>
              <li>Product delivery that feels intentional rather than over-designed.</li>
            </ul>
          </div>

          <div className="surface rounded-[2rem] p-6 md:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="kicker">Current stack</p>
                <h2 className="display mt-4 text-3xl md:text-4xl">Next.js, React, Node.js</h2>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://github.com/derek-dv"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[var(--line-strong)] p-3 text-[var(--ink)] hover:border-[var(--accent)]"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/derek-dv"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[var(--line-strong)] p-3 text-[var(--ink)] hover:border-[var(--accent)]"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:derek@derekcodes.online"
                  className="rounded-full border border-[var(--line-strong)] p-3 text-[var(--ink)] hover:border-[var(--accent)]"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["TypeScript", "PostgreSQL", "Docker", "Azure", "AI integrations"].map(
                (item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ),
              )}
            </div>

            <p className="mt-8 text-sm leading-7 text-[var(--ink-soft)]">
              Best fit: serious product teams, platform rebuilds, internal tools,
              and startups that need both speed and technical discipline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
