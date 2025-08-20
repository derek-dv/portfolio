import { motion } from "framer-motion";
import { experiences } from "../../exports";
import { MapPin } from "lucide-react";

const Experience: React.FC = () => {
  
  return (
    <section id="experience" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Professional journey and key achievements
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center space-x-3 mb-4 md:mb-0">
                  <exp.icon
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-slate-600 dark:text-slate-300 font-medium">
                    {exp.period}
                  </p>
                  <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mt-1">
                    <MapPin size={16} className="mr-1" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exp.achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700"
                  >
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
