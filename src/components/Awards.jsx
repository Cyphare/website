import React from 'react';
import { Trophy, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Awards = () => {
  const awards = [
    { title: "2nd Place on Innovation Competition", issuer: "KMTETI FT UGM", date: "Nov 2025" },
    { title: "1st Place on AI Project Competition", issuer: "KMTETI FT UGM", date: "Jul 2025" },
    { title: "2nd Place on IoT Project Competition", issuer: "KMTETI FT UGM", date: "Jul 2025" },
    { title: "3rd Champion of English Debate", issuer: "UIN Sunan Kalijaga", date: "Nov 2024" },
    { title: "1st Champion of English Debate", issuer: "UAD Farmasi Festival Debate", date: "Nov 2023" },
    { title: "Best Speaker of English Debate", issuer: "UAD Farmasi Festival Debate", date: "Nov 2023" }
  ];

  const certs = [
    "AI-IoT Samsung Innovation Campus",
    "Web Development (KMTETI)",
    "Data Science (KMTETI)",
    "Internet of Things (KMTETI)",
    "Artificial Intelligence (KMTETI)",
    "Image Processing (KMTETI)",
    "TOEFL ITP - 637 / 677"
  ];

  const volunteering = [
    {
      role: "Environmental Engineer",
      org: "Singapore University of Technology and Design",
      desc: "Designing a solar panel system to power waste filters across the Code River, on a budget of around 11M+."
    },
    {
      role: "Course Instructor on Artificial Intelligence",
      org: "University of Malaya",
      desc: "Selected as a guest speaker to present materials about artificial intelligence and our award winning project."
    }
  ];

  return (
    <motion.section 
      id="awards" 
      className="py-12 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px flex-1 bg-border"></div>
        <h2 className="text-3xl md:text-4xl font-bold">Awards & Certifications</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Trophy className="text-yellow-500" /> Honors & Awards
          </h3>
          <div className="space-y-4">
            {awards.map((award, i) => (
              <div key={i} className="clean-panel p-4 rounded-lg flex items-start gap-4 hover:bg-gray-50 transition-colors border-l-4 border-l-accent">
                <div className="flex-1">
                  <h4 className="font-bold text-textMain">{award.title}</h4>
                  <p className="text-sm text-textMuted">{award.issuer}</p>
                </div>
                <span className="text-xs text-accent font-medium whitespace-nowrap bg-accent/10 px-2 py-1 rounded">
                  {award.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-accent" /> Licenses & Certifications
            </h3>
            <div className="flex flex-wrap gap-2">
              {certs.map((cert, i) => (
                <span key={i} className="bg-surface border border-border shadow-sm px-4 py-2 rounded-full text-sm font-medium hover:border-accent/50 transition-colors cursor-default text-textMain">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Volunteering</h3>
            <div className="space-y-4">
              {volunteering.map((vol, i) => (
                <div key={i} className="clean-card">
                  <h4 className="font-bold text-textMain text-lg">{vol.role}</h4>
                  <p className="text-accent text-sm font-medium mb-2">{vol.org}</p>
                  <p className="text-textMuted text-sm">{vol.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Awards;
