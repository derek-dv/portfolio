import { motion } from "framer-motion";
import { ArrowRight, Trophy, ShoppingBag, Code } from "lucide-react";
import ThreeBackground from "../ThreeBackground";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      <ThreeBackground />
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-[10%] right-[-5%] w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold text-slate-800 mb-2">Welcome</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
              Hi! I Am <br />
              <span className="text-slate-800">Derek David</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 text-lg max-w-lg mx-auto lg:mx-0"
          >
            Fullstack Developer specializing in <span className="text-slate-800 font-semibold">NextJS</span>, <span className="text-slate-800 font-semibold">React</span>, and <span className="text-slate-800 font-semibold">NodeJS</span>. Building scalable, high-performance web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all hover:scale-105"
            >
              Hire Me
            </a>
          </motion.div>


        </div>

        {/* Right Image & Floating Elements */}
        <div className="relative order-1 lg:order-2 flex justify-center">

          {/* Main Image Container */}
          <div className="relative z-10 w-80 h-80 md:w-[28rem] md:h-[28rem]">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl transform translate-y-4 scale-90" />
            <img
              src="/images/hero_new.jpg"
              alt="Derek"
              className="relative w-full h-full object-cover rounded-b-full drop-shadow-2xl"
            />
          </div>

          {/* Floating Cards */}
          {/* Card 1: Best Design Awards */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-0 md:right-10 glass p-3 rounded-2xl flex items-center gap-3 z-20"
          >
            <div className="bg-orange-100 p-2 rounded-full">
              <Trophy className="text-primary w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-slate-800 text-sm">Hackathon Winner</p>
              <p className="text-xs text-slate-500">2025</p>
            </div>
          </motion.div>

          {/* Card 2: UI/Ux */}
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-0 glass p-3 rounded-2xl flex items-center gap-3 z-20"
          >
            <div className="bg-purple-100 p-2 rounded-full">
              <Code className="text-purple-600 w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-slate-800 text-sm">Full Stack</p>
              <p className="text-xs text-slate-500">Web & Mobile</p>
            </div>
          </motion.div>

          {/* Card 3: Shopify */}
          <motion.div
            animate={{ x: [-5, 5, -5] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/2 right-[-20px] glass p-3 rounded-xl z-20"
          >
            <div className="bg-green-100 p-2 rounded-full">
              <ShoppingBag className="text-green-600 w-6 h-6" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
