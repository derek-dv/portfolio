import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Grid, MessageCircle, Star } from "lucide-react";
import { useState } from "react";
import { portfolioProjects, workHistory } from "../../exports";

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Published");
  const [workHistoryFilter, setWorkHistoryFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [portfolioPage, setPortfolioPage] = useState(1);

   const paginate = (array: typeof portfolioProjects, page_size: number, page_number: number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };

  const paginateWork = (array: typeof workHistory, page_size: number, page_number: number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };

  const filteredWorkHistory =
      workHistoryFilter === "all"
        ? workHistory
        : workHistory.filter((job) => job.status === workHistoryFilter);

  const paginatedPortfolio = paginate(portfolioProjects, 2, portfolioPage);
  const paginatedWorkHistory = paginateWork(filteredWorkHistory, 5, currentPage);
  const totalPages = Math.ceil(filteredWorkHistory.length / 5);

  const totalPortfolioPages = Math.ceil(portfolioProjects.length / 2);
  
  return (
    <section id="portfolio" className="py-16 bg-slate-100 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Portfolio & Reviews
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Featured projects and client testimonials
          </p>
        </motion.div>
    

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {paginatedPortfolio.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < Math.floor(project.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-slate-300 dark:text-slate-500"
                        }
                      />
                    ))}
                    <span className="ml-1 text-sm text-slate-600 dark:text-slate-300">
                      {project.rating}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Client: {project.client}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <div className="text-sm text-slate-600 dark:text-slate-300 mb-4 sm:mb-0">
            Page {portfolioPage} of {totalPortfolioPages}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setPortfolioPage(Math.max(1, portfolioPage - 1))}
              disabled={portfolioPage === 1}
              className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors duration-200"
            >
              <ChevronLeft size={16} />
            </button>
            {[...Array(totalPortfolioPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPortfolioPage(i + 1)}
                className={`w-8 h-8 rounded-lg transition-colors duration-200 ${
                  portfolioPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setPortfolioPage(
                  Math.min(totalPortfolioPages, portfolioPage + 1)
                )
              }
              disabled={portfolioPage === totalPortfolioPages}
              className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors duration-200"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Work History */}
        <div className="bg-white dark:bg-slate-700 rounded-xl p-8 shadow-lg mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-0">
              Work History
            </h3>

          </div>

          <div className="space-y-6">
            {paginatedWorkHistory.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-slate-200 dark:border-slate-700 pb-6 last:border-0"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="mb-2 md:mb-0">
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-white">
                      {job.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      {job.period}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < Math.floor(job.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-slate-300 dark:text-slate-500"
                          }
                        />
                      ))}
                      <span className="ml-1 text-sm text-slate-600 dark:text-slate-300">
                        {job.rating}
                      </span>
                    </div>
                    <span className="text-sm bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded">
                      Completed
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                  {job.hours && (
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Hours
                      </p>
                      <p className="font-medium text-slate-800 dark:text-white">
                        {job.hours}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex items-start">
                  <MessageCircle
                    size={16}
                    className="text-slate-500 dark:text-slate-400 mt-1 mr-2 flex-shrink-0"
                  />
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                    {job.feedback}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Work History Pagination */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
            <div className="text-sm text-slate-600 dark:text-slate-300 mb-4 sm:mb-0">
              Page {currentPage} of {totalPages}
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors duration-200"
              >
                <ChevronLeft size={16} />
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 rounded-lg transition-colors duration-200 ${
                    currentPage === i + 1
                      ? "bg-blue-600 text-white"
                      : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors duration-200"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
