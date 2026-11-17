import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  const edu = education[0];

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>06 // Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-white">
            Education
          </h2>
          <p className="text-sm text-slate-400 font-mono">
            Formal technical foundation in Computer Science and Information Technology.
          </p>
        </div>

        {/* Education Bento Card */}
        <div className="p-6 sm:p-8 rounded-3xl bento-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-mono font-bold text-white">
                  {edu.institution}
                </h3>
                <div className="flex items-center gap-2.5 flex-wrap mt-1">
                  <p className="text-sm sm:text-base font-mono font-medium text-cyan-400">
                    {edu.degree}
                  </p>
                  {edu.cgpa && (
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                      CGPA: {edu.cgpa}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mt-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-white/[0.04] px-3.5 py-1.5 rounded-xl border border-white/10 self-start sm:self-auto">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>{edu.period}</span>
            </div>
          </div>

          <div className="pt-6 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Program Highlights & Core Focus:
            </h4>
            <div className="space-y-2">
              {edu.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
