import { motion, AnimatePresence } from "framer-motion";
import { Menu, Monitor, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../Logo";

interface NavbarProps {
  theme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);

  const getThemeIcon = () => {
    if (theme === "light") return <Sun size={20} />;
    if (theme === "dark") return <Moon size={20} />;
    return <Monitor size={20} />;
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Update active section after scroll
      setTimeout(() => setActiveSection(sectionId), 500);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "backdrop-blur-[32px] bg-white/25 dark:bg-slate-900/25 border border-white/30 dark:border-slate-700/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.18)] saturate-150 data-[glass=true]:after:absolute data-[glass=true]:after:inset-0 data-[glass=true]:after:bg-gradient-to-b data-[glass=true]:after:from-transparent data-[glass=true]:after:via-white/10 data-[glass=true]:after:to-transparent dark:data-[glass=true]:after:via-slate-900/10 after:pointer-events-none"
        : "bg-transparent border-0"
        }`}
      data-glass={scrolled} // Triggers the effect only when scrolled
      style={{
        // Subtle inner glow for "liquid" feel
        WebkitBackdropFilter: "blur(32px)",
        backdropFilter: "blur(32px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2"
          >
            <Logo className="w-8 h-8" />
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {["home", "about", "experience", "portfolio", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-sm font-medium transition-all duration-200 relative group ${activeSection === item
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                >
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"
                    animate={{
                      width: activeSection === item ? "100%" : "0%",
                    }}
                  />
                </button>
              )
            )}
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
                className="p-2 rounded-full bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm text-slate-800 dark:text-slate-200 hover:bg-white/30 dark:hover:bg-slate-800/30 transition-colors duration-200"
                title="Change Theme"
              >
                {getThemeIcon()}
              </button>

              <AnimatePresence>
                {isThemeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-36 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                  >
                    {[
                      { name: "light", icon: Sun, label: "Light" },
                      { name: "dark", icon: Moon, label: "Dark" },
                      { name: "system", icon: Monitor, label: "System" },
                    ].map((mode) => (
                      <button
                        key={mode.name}
                        onClick={() => {
                          setTheme(mode.name as "light" | "dark" | "system");
                          setIsThemeDropdownOpen(false);
                        }}
                        className={`w-full flex items-center space-x-3 px-4 py-3 text-sm transition-colors ${theme === mode.name
                          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                          }`}
                      >
                        <mode.icon size={16} />
                        <span>{mode.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm text-slate-800 dark:text-slate-200"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-slate-200/30 dark:border-slate-700/30 backdrop-blur-sm bg-white/20 dark:bg-slate-900/20"
            >
              <div className="py-4 space-y-2">
                {["home", "about", "experience", "portfolio", "contact"].map(
                  (item) => (
                    <a
                      href={`#${item}`}
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="block w-full text-left px-4 py-3 text-slate-600 dark:text-slate-300 hover:bg-white/10 dark:hover:bg-slate-800/10 rounded-lg capitalize font-medium transition-colors duration-200"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
