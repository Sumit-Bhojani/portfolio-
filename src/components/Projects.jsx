import React, { useState } from 'react';
import { 
  ArrowRight, 
  Cpu, 
  CheckCircle,
  BarChart3,
  PhoneCall,
  Gift,
  Sparkles,
  Layers
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'drivepg': return BarChart3;
      case 'call-clutch': return PhoneCall;
      default: return Gift;
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>04 // Selected Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-white">
            Featured Systems & Applications
          </h2>
          <p className="text-sm text-slate-400 font-mono">
            High-impact production applications showcasing full-stack development and serverless cloud architectures.
          </p>
        </div>

        {/* Project Selector Bento Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
          {projects.map((proj) => {
            const Icon = getProjectIcon(proj.id);
            const isSelected = activeProject.id === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveProject(proj)}
                className={`p-4 rounded-2xl text-left transition-all flex items-start gap-3.5 bento-card ${
                  isSelected
                    ? '!border-cyan-500/60 !bg-white/[0.08] shadow-[0_0_25px_-5px_rgba(6,182,212,0.25)]'
                    : 'hover:border-white/20'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${
                  isSelected
                    ? 'bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white shadow-md'
                    : 'bg-white/[0.05] text-slate-400'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-xs sm:text-sm text-white">
                    {proj.title.split('—')[0].trim()}
                  </h3>
                  <p className="text-[11px] font-mono text-slate-400 line-clamp-1 mt-0.5">
                    {proj.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Project Deep-Dive Showcase Bento Card */}
        <div className="p-6 sm:p-8 rounded-3xl bento-card space-y-6">
          
          {/* Top row metadata */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  {activeProject.category}
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                  {activeProject.status}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-mono font-bold text-white mt-2">
                {activeProject.title}
              </h3>
              <p className="text-sm font-mono text-indigo-400 mt-0.5">
                {activeProject.subtitle}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            {activeProject.description}
          </p>

          {/* Architecture Pipeline Visualizer */}
          <div className="rounded-2xl border border-white/[0.08] bg-black/40 p-5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>System Architecture & Data Workflow</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {activeProject.architecture.map((arch, aIdx) => (
                <div
                  key={aIdx}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-500/30 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-mono font-bold text-cyan-300 block mb-1">
                      {arch.step}
                    </span>
                    <p className="text-xs text-slate-300 font-sans leading-snug">
                      {arch.detail}
                    </p>
                  </div>
                  {aIdx < activeProject.architecture.length - 1 && (
                    <div className="hidden md:flex justify-end pt-2 text-slate-500">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Key Engineering Impact & Outcomes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeProject.highlights.map((h, hIdx) => (
                <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300 font-sans">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="pt-4 border-t border-white/[0.08]">
            <span className="text-xs font-mono text-slate-400 block mb-2 font-medium">
              Technologies Used:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {activeProject.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs font-mono bg-white/[0.04] text-slate-200 border border-white/[0.08] px-2.5 py-1 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
