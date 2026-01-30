import { motion } from "framer-motion";
import { Brain, Cloud, Code, Database, Server, Smartphone } from "lucide-react";
import { skills } from "../../exports";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Experienced developer crafting modern solutions with <span className="font-semibold text-slate-700">NextJS, React, & NodeJS</span>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-slate-600 leading-relaxed text-lg">
              Specializing in <span className="font-bold text-primary">MERN stack</span>, <span className="font-bold text-primary">Django</span>, and <span className="font-bold text-primary">Cloud Solutions</span>. I build scalable, efficient systems that solve real-world problems.
            </p>
            <p className="text-slate-600 leading-relaxed">
              From microservices architecture to AI integration, I bring technical depth and creative problem-solving to every project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: Code, label: "Full-Stack" },
              { icon: Database, label: "Database" },
              { icon: Cloud, label: "Cloud" },
              { icon: Brain, label: "AI & ML" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <item.icon className="text-primary" size={24} />
                <span className="font-semibold text-slate-800">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Technical Arsenal
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-slate-800">
                    {skill.name}
                  </span>
                  <span className="text-sm text-slate-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-primary h-2 rounded-full"
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
