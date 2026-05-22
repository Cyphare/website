import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Awards from './components/Awards';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-background text-textMain selection:bg-accent/20">
      <Navbar />
      
      <main className="container max-w-5xl mx-auto px-6 pt-24 pb-12 flex flex-col gap-20">
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Awards />
      </main>
      
      <footer className="w-full border-t border-border py-8 text-center text-textMuted text-sm">
        <p>© {new Date().getFullYear()} Arnold GBS. All rights reserved.</p>
        <p className="mt-1">Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
