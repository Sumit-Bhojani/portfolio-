import React, { useState } from 'react';
import { 
  Layout, 
  Server, 
  Cloud, 
  Database, 
  Terminal, 
  Sparkles, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = [
    { name: 'All', icon: Sparkles },
    { name: 'Frontend', icon: Layout },
    { name: 'Backend', icon: Server },
    { name: 'AWS Cloud', icon: Cloud },
    { name: 'Databases', icon: Database },
    { name: 'Tools', icon: Terminal },
  ];

  const getFilteredCategories = () => {
    if (activeTab === 'All') return skillCategories;
    if (activeTab === 'Frontend') return skillCategories.filter(c => c.category.includes('Frontend'));
    if (activeTab === 'Backend') return skillCategories.filter(c => c.category.includes('Backend'));
    if (activeTab === 'AWS Cloud') return skillCategories.filter(c => c.category.includes('AWS'));
    if (activeTab === 'Databases') return skillCategories.filter(c => c.category.includes('Databases'));
    if (activeTab === 'Tools') return skillCategories.filter(c => c.category.includes('Tools'));
    return skillCategories;
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return Layout;
      case 'Server': return Server;
      case 'Cloud': return Cloud;
      case 'Database': return Database;
      default: return Terminal;
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>02 // Tech Stack & Tooling</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-white">
              Skills & Cloud Ecosystem
            </h2>
            <p className="text-sm text-slate-400 font-mono">
              Modern JavaScript ecosystem, cloud-native serverless services, and data tooling.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bento-card self-start md:self-auto">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.name;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* AWS Spotlight Banner */}
        <div className="mb-10 p-5 rounded-2xl bento-card border-amber-500/30 bg-gradient-to-r from-amber-500/[0.08] via-purple-500/[0.04] to-transparent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-mono font-bold text-sm text-white">
                  AWS Certified Cloud Practitioner
                </h3>
                <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full font-semibold">
                  Certified May 2025
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5 font-mono">
                Production mastery with AWS Lambda, Step Functions, S3, Glue, Redshift, DynamoDB & EventBridge.
              </p>
            </div>
          </div>
          <a
            href="#certifications"
            className="text-xs font-mono font-semibold text-amber-300 hover:text-amber-200 inline-flex items-center gap-1"
          >
            <span>View Credential</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {getFilteredCategories().map((cat, idx) => {
            const Icon = getIcon(cat.icon);
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bento-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-mono font-bold text-base text-white">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/40 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-mono font-semibold text-xs text-white">
                            {skill.name}
                          </span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-medium ${
                            skill.level === 'Expert' 
                              ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
                              : skill.level === 'Advanced'
                              ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                              : 'bg-white/[0.05] text-slate-400'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {skill.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-mono text-slate-400 bg-white/[0.03] px-1.5 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
