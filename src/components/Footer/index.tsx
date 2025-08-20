import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-gray:800 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-slate-300">
                  &copy; 2025 Derek David. All rights reserved.
                </p>
              </div>
              <div className="flex space-x-6">
                <a
                  href="https://linkedin.com/in/derek-dv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue:500 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/derek-dv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue:500 transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:derekmiracledavid@gmail.com"
                  className="text-slate-300 hover:text-blue: 500 transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
  )
}

export default Footer;