import React from 'react';
import { 
  Code2, 
  Cloud, 
  Database, 
  Server, 
  CheckCircle, 
  Award, 
  TrendingUp, 
  Layers,
  Sparkles,
  Cpu
} from 'lucide-react';
import { personalInfo, keyStats } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Code2,
      accent: "from-blue-500 to-cyan-400",
      title: "Full-Stack Web Engineering",
      desc: "Architecting interactive, highly responsive React.js frontend interfaces backed by modular Node.js REST APIs and clean component hierarchies."
    },
    {
      icon: Cloud,
      accent: "from-indigo-500 to-purple-400",
      title: "AWS Cloud & Serverless",
      desc: "Designing automated event-driven workflows with AWS Lambda, Step Functions, EventBridge, IAM, and CloudWatch as an AWS Certified Practitioner."
    },
    {
      icon: Database,
      accent: "from-emerald-500 to-teal-400",
      title: "Data Pipelines & Warehousing",
      desc: "Transforming raw advertising datasets from Amazon Marketing Cloud via AWS Glue ETL jobs and loading structured schemas into Amazon Redshift."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>01 // Architecture & Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-white">
            Engineering robust web apps & cloud workflows.
          </h2>
        </div>

        {/* Story & Description Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12">
          
          {/* Main Story Card (8 Cols) */}
          <div className="lg:col-span-8 bento-card p-6 sm:p-8 rounded-2xl space-y-4">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              I am a <strong className="text-white font-semibold">Full Stack Developer</strong> with nearly 3 years of hands-on experience building, scaling, and supporting mission-critical web applications for enterprise and US-based advertising clients.
            </p>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              My core focus bridges both ends of software delivery: crafting intuitive, dynamic reporting interfaces with <strong className="text-cyan-400 font-semibold">React.js</strong>, architecting robust server-side services with <strong className="text-indigo-400 font-semibold">Node.js</strong>, and engineering cloud-native pipelines across <strong className="text-purple-400 font-semibold">AWS</strong> (Lambda, Step Functions, S3, Glue, and Redshift).
            </p>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              As an <strong className="text-amber-400 font-semibold">AWS Certified Cloud Practitioner</strong>, I ensure systems are built with high availability, clean RESTful architectures, and reliable automated data flows.
            </p>
          </div>

          {/* Quick Facts Bento Card (4 Cols) */}
          <div className="lg:col-span-4 bento-card p-6 rounded-2xl space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-4 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Core Highlights</span>
              </h3>
              <ul className="space-y-3.5 text-xs font-mono text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>React.js & Node.js production mastery</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>AWS Certified Cloud Practitioner (2025)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <TrendingUp className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>High-volume Amazon Redshift data workflows</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>B.E. in Information Technology (GTU)</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-white/[0.08] text-[11px] font-mono text-slate-400">
              Open to remote, hybrid, and onsite high-impact software engineering roles.
            </div>
          </div>
        </div>

        {/* 4 Stats Cards Bento */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {keyStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bento-card flex flex-col justify-between group"
            >
              <div className="text-3xl sm:text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mb-1">
                {stat.value}
              </div>
              <div>
                <div className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 font-mono">
                  {stat.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Specialization Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bento-card relative group overflow-hidden"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${pillar.accent} p-[1px] mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full bg-[#0d0f1a] rounded-xl flex items-center justify-center text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="font-mono font-bold text-white text-base mb-2">
                  {pillar.title}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
