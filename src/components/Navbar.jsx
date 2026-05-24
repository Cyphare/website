import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Awards', href: '#awards' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm"
    >
      <div className="container max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight text-textMain">
          Arnold<span className="text-accent">GBS</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-textMuted">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="hover:text-textMain transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <a 
          href="mailto:965arnold@gmail.com"
          className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-textMain hover:bg-textMain/90 rounded-full transition-colors shadow-sm"
        >
          Contact Me
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
