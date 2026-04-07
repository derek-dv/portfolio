import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "../Logo";

const navLinks = [
  { name: "Work", href: "#portfolio" },
  { name: "Approach", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <nav className="section-shell pt-3 md:pt-4">
        <div
          className={`flex items-center justify-between rounded-[1.35rem] px-4 py-3 md:px-5 ${
            scrolled ? "surface" : "bg-transparent"
          }`}
        >
          <a href="#hero" className="flex items-center gap-3">
            <Logo className="h-9 w-9" />
            <div>
              <p className="mono text-[11px] uppercase tracking-[0.24em] text-[var(--accent)]">
                Derek David
              </p>
              <p className="text-sm text-[var(--ink-soft)]">Full-stack engineer</p>
            </div>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-[var(--ink-soft)] hover:text-[var(--ink)]"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="cta-primary">
              Let&apos;s talk
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="rounded-full border border-[var(--line-strong)] p-2 text-[var(--ink)] md:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {isOpen && (
          <div className="surface mt-3 rounded-[1.35rem] p-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-[var(--ink-soft)]"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="cta-primary w-fit">
                Let&apos;s talk
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
