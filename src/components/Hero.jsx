import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import BlueCat from './BlueCat';
const Hero = () => {
  return (
    <section id="about" className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-12 relative pb-16">
      <div className="max-w-2xl flex-1 pt-10 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
            TELADAN Scholarship Awardee
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Hi, I'm <span className="text-gradient">Arnold GBS</span>.
          <br />
          <span className="text-3xl md:text-5xl text-textMuted font-medium">
            Award Winning ML-IoT Enthusiast
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-textMuted max-w-2xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Musicologist English Debater Posing as an Informatics Student at Universitas Gadjah Mada. 
          Passionate about blending artificial intelligence, hardware, and impactful storytelling.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-4 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-textMain text-white font-semibold rounded-full hover:bg-textMain/90 hover:scale-[1.02] transition-all shadow-sm">
              View My Work
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="px-6 py-3 bg-surface border border-border text-textMain font-semibold rounded-full hover:border-accent hover:text-accent hover:scale-[1.02] transition-all shadow-sm">
              Download Resume
            </a>
          </div>
          <div className="flex items-center gap-4 ml-4">
            <a href="https://github.com/cyphare" className="p-3 bg-surface border border-border shadow-sm rounded-full text-textMuted hover:text-textMain transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/arnoldgbs" className="p-3 bg-surface border border-border shadow-sm rounded-full text-textMuted hover:text-[#0a66c2] transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:965arnold@gmail.com" className="p-3 bg-surface border border-border shadow-sm rounded-full text-textMuted hover:text-accent transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="flex-shrink-0 flex justify-center items-center w-full lg:w-auto mt-8 lg:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <BlueCat />
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <ChevronDown className="w-6 h-6 text-textMuted" />
      </motion.div>
    </section>
  );
};

export default Hero;
