import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { portfolioProjects } from "../../exports";

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "UI/UX", "Web Design", "App Design", "Graphic"];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-2">Recent Project</h2>
            <p className="text-slate-500">Lorem ipsum dummy text are usually use print and website industry.</p>
          </div>
          <div className="mt-6 md:mt-0">
            <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
              Details
            </button>
          </div>
        </div>

        {/* Filters (Optional, keeping it simple for now as per image) */}
        {/* <div className="flex gap-6 mb-10 overflow-x-auto pb-4">
            {categories.map(cat => (
               <button 
                key={cat} 
                className={`whitespace-nowrap font-medium ${activeFilter === cat ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}`}
                onClick={() => setActiveFilter(cat)}
               >
                 {cat}
               </button>
            ))}
         </div> */}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {project.description.substring(0, 60)}...
                </p>
                <div className="mt-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors">
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
