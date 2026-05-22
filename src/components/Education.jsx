import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Education & Activities</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
      </div>

      <div className="glass-card flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-0.5">
            <div className="w-full h-full bg-surface rounded-xl flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white">Universitas Gadjah Mada</h3>
              <p className="text-lg text-primary mt-1">Bachelor's degree, Information Technology</p>
            </div>
            <div className="flex items-center gap-2 text-textMuted bg-white/5 px-3 py-1 rounded-full text-sm">
              <Calendar className="w-4 h-4" />
              <span>2024 - Present</span>
            </div>
          </div>

          <div className="mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-500" />
            <span className="text-white font-medium">Grade: Top 1% ❗</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="text-xl">🏵️</span> Activities and societies
              </h4>
              <ul className="space-y-2 text-textMuted">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Calculus tutor for 4 classes (Jul-Dec 25)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>PR Staff at IEEE Sight's LOOP Academy (Agu-Oct 25)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500"></span> TSA Experiences
              </h4>
              <ul className="space-y-2 text-textMuted text-sm">
                <li>• Lead Coordinator at Ngobral (Mar-Apr 25)</li>
                <li>• PR Staff at TSA Club (Apr-May 25)</li>
                <li>• PR Coordinator at Benchmark with TSA UB (May-Jun 25)</li>
                <li>• Security Sub-coordinator at TSP Fun Run (May-Nov 25)</li>
                <li>• Event Coordinator at TELADAN Socialization (Jul-Sep 25)</li>
                <li>• PR & Publications Coordinator at TELADAN Scholars Talk (Jul-Sep 25)</li>
                <li>• Logistics Staff at Geodipa Company Visit (Nov-Dec 25)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
