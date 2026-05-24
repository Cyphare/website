import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "Scholar",
      company: "Tanoto Foundation",
      period: "Jan 2025 - Present · 1 yr 5 mos",
      description: [
        "Became a national top 10 scholar, with a highlight in assignment punctuality.",
        "Got into a fully-funded leadership program on my 1st semester within Tanoto Foundation."
      ]
    },
    {
      role: "Streaming Team",
      company: "Place of Worship",
      period: "Jan 2021 - Present · 5 yrs 5 mos",
      description: [
        "Created content for the worship livestreams on Youtube, with 6000+ subscribers.",
        "Operated professional camera for the livestream and in-place worshippers, 200+ of them."
      ]
    },
    {
      role: "Workshop & Event Staff",
      company: "KMTETI FT UGM",
      period: "Oct 2024 - Present",
      description: [
        "Lead, Managed, and executed the whole open recruitment phase, with 200+ participants.",
        "Planned and coordinated the Image Processing Workshop, with 60+ members.",
        "Created the big theme, rundown, and plans for the whole election of KMTETI's leader."
      ]
    },
    {
      role: "Staff at External and Networking",
      company: "Tanoto Scholars Association UGM",
      period: "Jan 2025 - Dec 2025 · 1 yr",
      description: [
        "Became a staff of the year for 2025, with a highlight in leading its first alumni talkshow.",
        "Handled external communications and worked on various programs."
      ]
    },
    {
      role: "International Student Buddy at GREENS",
      company: "ASEAN University Network",
      period: "Jun 2025 - Aug 2025 · 3 mos",
      description: [
        "Accompanied all 60+ of international ASEAN college students on an engineering summer course.",
        "Managed all students on field trips to environmental waste processing sites and cultural spots."
      ]
    }
  ];

  return (
    <motion.section 
      id="experience" 
      className="py-12 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px flex-1 bg-border"></div>
        <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
      </div>

      <div className="relative border-l border-border ml-4 md:ml-0 md:pl-8 space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-0">
            <div className="absolute left-[-5px] md:left-[-37px] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-background"></div>
            
            <div className="clean-card hover:border-accent/30 transition-all">
              <h3 className="text-xl font-bold text-textMain">{exp.role}</h3>
              <h4 className="text-accent font-medium mt-1">{exp.company}</h4>
              <p className="text-sm text-textMuted mt-2 mb-4">{exp.period}</p>
              <ul className="space-y-2 text-textMuted text-sm md:text-base">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
