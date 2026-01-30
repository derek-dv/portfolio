import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { workHistory } from "../../exports";

const Experience: React.FC = () => {
  // Take only the top entries if the list is long, to keep it "short & precise"
  const recentWork = workHistory.slice(0, 3);

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Experience
          </h2>
          <p className="text-lg text-slate-500">
            My professional journey.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:pl-0 md:grid md:grid-cols-1 md:gap-12 md:max-w-3xl md:mx-auto">
          {recentWork.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-10 md:mb-0 relative pl-8 md:pl-0"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] md:left-[-42px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm z-10" />

              {/* Content Card */}
              <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{job.title}</h3>
                    <p className="text-primary font-medium">{job.client || "Company Name"}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm mt-2 md:mt-0">
                    <Calendar size={16} />
                    <span>{job.period}</span>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {job.feedback ? `"${job.feedback}"` : "Contributed to key projects and delivered high-quality software solutions."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
