import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Awards from './components/Awards';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-background">
      {/* Background ambient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      <Navbar />
      
      <main className="container mx-auto px-6 pt-24 pb-12 flex flex-col gap-24">
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Awards />
      </main>
      
      <footer className="w-full border-t border-white/10 py-8 text-center text-textMuted text-sm">
        <p>© {new Date().getFullYear()} Arnold GBS. All rights reserved.</p>
        <p className="mt-2">Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
