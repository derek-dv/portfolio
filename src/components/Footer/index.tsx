import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl text-slate-800 mb-2">Derek David</h3>
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/derek-dv"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-primary hover:bg-orange-50 transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/derek-dv"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-primary hover:bg-orange-50 transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:derek@derekcodes.online"
              className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-primary hover:bg-orange-50 transition-all duration-300"
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