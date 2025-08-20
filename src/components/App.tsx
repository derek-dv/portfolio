import  { useState, useEffect } from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  const getInitialDarkMode = () => {
  const stored = localStorage.getItem("theme");
  if (stored) return stored === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Listen to system changes only if user hasn't chosen
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);


  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
        {/* Navigation with Liquid Glass Effect */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <main>
          {/* Hero Section */}
          <Hero />
          {/* About Section */}
          <About />

          {/* Experience Section */}
          <Experience />

          {/* Portfolio Section */}
          <Portfolio />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
