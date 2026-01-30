import { motion, Variants } from "framer-motion";
import { CheckCircle, Linkedin, Mail } from "lucide-react";

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };
  return (
    <section id="home" className="pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div>
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-4"
              >
                Full-Stack
                <span className="block text-blue-600 dark:text-blue-400">
                  Software Engineer
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed"
              >
                Building high-performance web and mobile applications with
                expertise in MERN stack, Django, cloud solutions, and ML
                integration.
              </motion.p>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://linkedin.com/in/derek-dv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:derek@derekcodes.online"
                className="flex items-center space-x-2 border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 dark:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <Mail size={20} />
                <span>Contact Me</span>
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-6 pt-4"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">
                  20+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">
                  5+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">
                  95%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Client Satisfaction
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={process.env.PUBLIC_URL + "/images/me.webp"}
                alt="Derek David"
                className="relative  w-full h-full object-cover rounded-full shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800">
                <CheckCircle size={32} className="text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
