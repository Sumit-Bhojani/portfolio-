import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  GitBranch,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const exp = experiences[0];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>03 // Professional History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-white">
            Work Experience
          </h2>
          <p className="text-sm text-slate-400 font-mono">
            Track record of deploying production applications and serverless data workflows.
          </p>
        </div>

        {/* Company Main Bento Card */}
        <div className="p-6 sm:p-8 rounded-3xl bento-card relative overflow-hidden">
          
          {/* Top Row: Role, Company, Period */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/[0.08] gap-4">
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-2xl sm:text-3xl font-mono font-bold text-white">
                  {exp.role}
                </h3>
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                  {exp.type}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-1.5 text-sm font-mono text-slate-400 flex-wrap">
                <span className="font-semibold text-cyan-400">{exp.company}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {exp.location}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-white/[0.04] px-4 py-2 rounded-xl border border-white/10 self-start md:self-auto">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>{exp.period}</span>
            </div>
          </div>

          {/* High-level summary */}
          <div className="py-6">
            <p className="text-base text-slate-300 leading-relaxed font-sans">
              {exp.summary}
            </p>

            {/* Key highlights bullet list */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {exp.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs font-mono text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Projects Delivered Inside Dhitech */}
          <div className="mt-4 pt-6 border-t border-white/[0.08]">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
                Featured Systems Delivered:
              </h4>
            </div>

            {/* Project Navigation Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {exp.projectsInRole.map((proj, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => setActiveProjectIdx(pIdx)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
                    activeProjectIdx === pIdx
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white border-transparent shadow-md'
                      : 'bg-white/[0.03] text-slate-400 border-white/[0.06] hover:border-white/20 hover:text-white'
                  }`}
                >
                  {proj.name.split('—')[0].trim()}
                </button>
              ))}
            </div>

            {/* Active Project Details Card */}
            {(() => {
              const currentProj = exp.projectsInRole[activeProjectIdx];
              return (
                <div className="p-6 rounded-2xl bg-black/40 border border-white/[0.08] space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h5 className="font-mono font-bold text-lg text-white">
                        {currentProj.name}
                      </h5>
                      <span className="text-xs font-mono text-cyan-400">
                        Client Focus: {currentProj.client}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {currentProj.overview}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider block">
                      Engineering Contributions:
                    </span>
                    <ul className="space-y-2">
                      {currentProj.deliverables.map((d, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                          <span className="text-cyan-400 font-mono font-bold">•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack pills */}
                  <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                    {currentProj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono bg-white/[0.04] text-slate-300 px-2.5 py-1 rounded-md border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })()}

          </div>

        </div>

      </div>
    </section>
  );
}
