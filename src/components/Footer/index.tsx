import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-shell pb-10">
      <div className="flex flex-col gap-6 border-t border-[var(--line)] pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="kicker">Derek David</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-[var(--ink-soft)]">
            Product-focused full-stack engineering with a bias for clarity,
            maintainability, and shipping work that holds up.
          </p>
        </div>

        <div className="flex items-center gap-3">
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
            href="https://github.com/derek-dv"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--line-strong)] p-3 text-[var(--ink)] hover:border-[var(--accent)]"
            aria-label="GitHub"
          >
            <Github size={18} />
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
    </footer>
  );
};

export default Footer;
