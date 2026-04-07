import { FormEvent, useRef, useState } from "react";
import { ArrowUpRight, Mail, Phone, Send } from "lucide-react";
import toast from "react-hot-toast";

import { contactFacts } from "../exports";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("user_name"),
      email: formData.get("user_email"),
      subject: "Portfolio Contact",
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmitted(true);
      toast.success("Message sent.");
      form.current.reset();
    } catch (error) {
      console.error(error);
      toast.error("Message failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-shell py-20 md:py-24">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="surface-light rounded-[2rem] p-6 md:p-8">
          <p className="kicker">Contact</p>
          <h2 className="section-title mt-4 max-w-lg text-[var(--ink-dark)]">
            Bring the serious brief. I&apos;ll bring the engineering.
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-[#5f6b76] md:text-base">
            I am open to senior product engineering roles, contract work, and
            consulting where quality and speed are both expected.
          </p>

          <div className="mt-8 space-y-3">
            {contactFacts.map((fact) => (
              <div
                key={fact}
                className="rounded-[1.25rem] border border-[rgba(20,32,43,0.08)] px-4 py-3 text-sm leading-7 text-[var(--ink-dark)]"
              >
                {fact}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:derek@derekcodes.online"
              className="rounded-[1.4rem] border border-[rgba(20,32,43,0.08)] p-4"
            >
              <Mail size={18} />
              <p className="mt-3 mono text-[11px] uppercase tracking-[0.2em] text-[#5f6b76]">
                Email
              </p>
              <p className="mt-2 text-sm text-[var(--ink-dark)]">derek@derekcodes.online</p>
            </a>
            <a
              href="tel:+2347086020081"
              className="rounded-[1.4rem] border border-[rgba(20,32,43,0.08)] p-4"
            >
              <Phone size={18} />
              <p className="mt-3 mono text-[11px] uppercase tracking-[0.2em] text-[#5f6b76]">
                Phone
              </p>
              <p className="mt-2 text-sm text-[var(--ink-dark)]">+234 708 602 0081</p>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="cta-primary">
              Resume
              <ArrowUpRight size={16} />
            </a>
            <a
              href="https://linkedin.com/in/derek-dv"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(20,32,43,0.12)] px-5 py-3 text-sm text-[var(--ink-dark)]"
            >
              LinkedIn
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="surface rounded-[2rem] p-6 md:p-8">
          {!submitted ? (
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Your name"
                    className="mt-2 w-full rounded-[1rem] border border-[var(--line)] bg-[rgba(255,255,255,0.04)] px-4 py-3.5 text-[var(--ink)] outline-none focus:border-[var(--accent)]"
                  />
                </div>
                <div>
                  <label className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-[1rem] border border-[var(--line)] bg-[rgba(255,255,255,0.04)] px-4 py-3.5 text-[var(--ink)] outline-none focus:border-[var(--accent)]"
                  />
                </div>
              </div>

              <div>
                <label className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">
                  What are you building?
                </label>
                <textarea
                  name="message"
                  rows={8}
                  required
                  placeholder="Scope, timeline, team context, or the part that is currently stuck."
                  className="mt-2 w-full rounded-[1rem] border border-[var(--line)] bg-[rgba(255,255,255,0.04)] px-4 py-3.5 text-[var(--ink)] outline-none focus:border-[var(--accent)]"
                />
              </div>

              <button type="submit" disabled={loading} className="cta-primary disabled:opacity-70">
                {loading ? "Sending..." : "Send message"}
                <Send size={16} />
              </button>
            </form>
          ) : (
            <div className="flex min-h-[22rem] flex-col justify-center">
              <p className="kicker">Message received</p>
              <h3 className="section-title mt-4 max-w-lg">Thanks. I&apos;ll reply shortly.</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-[var(--ink-soft)] md:text-base">
                If everything landed correctly, you should hear back within a day.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="cta-secondary mt-8 w-fit"
              >
                Send another message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
