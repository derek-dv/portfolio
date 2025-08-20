import { motion } from "framer-motion";
import { Brain, Cloud, Code, Database, Server, Smartphone } from "lucide-react";
import { skills } from "../../exports";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-slate-100 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Full-Stack Software Engineer with 5+ years of experience delivering
            high-performance web and mobile applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              I specialize in MERN stack, Django, cloud solutions, and ML
              integration. My passion lies in creating innovative technical
              solutions that optimize system efficiency and enhance user
              experiences.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              With a proven record of success across diverse industries, I bring
              expertise in full-stack development, microservices architecture,
              and test-driven development to every project I undertake.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Code className="text-blue-600 dark:text-blue-400" size={24} />
                <span className="font-semibold text-slate-800 dark:text-white">
                  Full-Stack
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Database
                  className="text-blue-600 dark:text-blue-400"
                  size={24}
                />
                <span className="font-semibold text-slate-800 dark:text-white">
                  Database Design
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Cloud className="text-blue-600 dark:text-blue-400" size={24} />
                <span className="font-semibold text-slate-800 dark:text-white">
                  Cloud Solutions
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Server
                  className="text-blue-600 dark:text-blue-400"
                  size={24}
                />
                <span className="font-semibold text-slate-800 dark:text-white">
                  API Development
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Brain className="text-blue-600 dark:text-blue-400" size={24} />
                <span className="font-semibold text-slate-800 dark:text-white">
                  AI & ML
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Smartphone
                  className="text-blue-600 dark:text-blue-400"
                  size={24}
                />
                <span className="font-semibold text-slate-800 dark:text-white">
                  Mobile Apps
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-slate-800 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
