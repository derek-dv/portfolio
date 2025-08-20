import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, SendIcon } from "lucide-react";
const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Get in touch for collaborations and opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-slate-700 rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-white">
                      Email
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">
                      derekmiracledavid@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-white">
                      Phone
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">
                      +2347086020081
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-white">
                      LinkedIn
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">
                      linkedin.com/in/derek-dv
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Github
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-white">
                      GitHub
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">
                      github.com/derek-dv
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Availability</h3>
              <p className="mb-4">
                Open to new opportunities and collaborations. Currently
                available for freelance projects and full-time positions.
              </p>
              <div className="flex items-center text-green-300">
                <div className="w-3 h-3 bg-green-300 rounded-full mr-2 animate-pulse"></div>
                <span>Available for new projects</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-700 rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
              Send a Message
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <SendIcon />
                <span>Send Message</span>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
