import { useState, useEffect } from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

import { Toaster } from 'react-hot-toast';

const App = () => {
  const getInitialTheme = (): "light" | "dark" | "system" => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
    return "system";
  };

  const [theme, setTheme] = useState<"light" | "dark" | "system">(getInitialTheme);
  const [darkMode, setDarkMode] = useState(false); // Applied state

  // Effect to apply theme
  useEffect(() => {
    const root = window.document.documentElement;
    const applyTheme = (isDark: boolean) => {
      setDarkMode(isDark);
      if (isDark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      applyTheme(mq.matches);

      const handler = (e: MediaQueryListEvent) => applyTheme(e.matches);
      mq.addEventListener("change", handler);
      localStorage.removeItem("theme");
      return () => mq.removeEventListener("change", handler);
    } else {
      applyTheme(theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  // Force light mode for the new design as primarily requested, but keep logic
  useEffect(() => {
    // Optional: Force light mode initially if design requires it
    // setTheme('light'); 
  }, []);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-white transition-colors duration-300">
        <Toaster position="top-center" />
        {/* Navigation with Liquid Glass Effect */}
        <Navbar theme={theme} setTheme={setTheme} />

        <main>
          {/* Hero Section */}
          <Hero />

          {/* Services Section */}
          <Services />

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
