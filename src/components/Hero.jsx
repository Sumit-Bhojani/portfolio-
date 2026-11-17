import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Briefcase, 
  Terminal, 
  Mail, 
  Download, 
  ExternalLink, 
  Copy, 
  Check, 
  Cloud,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Database
} from 'lucide-react';
import { personalInfo, keyStats } from '../data/portfolioData';

export default function Hero() {
  const [timeStr, setTimeStr] = useState('');
  const [copied, setCopied] = useState(false);

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTimeStr(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-tech-grid pointer-events-none" />

      {/* Atmospheric Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/20 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-600/10 blur-[90px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        {/* Main Bento Grid Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill with Pulsing Radar */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium glow-badge-emerald">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.roleStatus}</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono tracking-tight text-white flex items-center gap-2 sm:gap-3">
                  <span>{personalInfo.name}</span>
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400 fill-cyan-400/20 flex-shrink-0" />
                </h1>
              </div>

              <h2 className="text-xl sm:text-2xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400 font-semibold">
                {personalInfo.title} • React.js • Node.js • AWS
              </h2>
            </div>

            {/* Concise Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-sans">
              Full Stack Developer with nearly <strong className="text-white font-semibold">3 years of experience</strong> engineering production web applications, high-throughput REST APIs, and automated serverless cloud pipelines on AWS (Lambda, Step Functions, Glue, Redshift).
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-mono text-xs font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all"
              >
                <span>View Architecture & Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Sumit_Bhojani_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-slate-200 font-mono text-xs font-medium hover:-translate-y-0.5 transition-all"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download CV</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-dashed border-white/15 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-400 font-mono text-xs transition-colors"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{personalInfo.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Social Badges */}
            <div className="flex items-center gap-3 pt-1 text-xs font-mono text-slate-400">
              <span className="text-slate-500 uppercase tracking-wider text-[11px]">Channels:</span>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1"
              >
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1"
              >
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={personalInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1"
              >
                WhatsApp <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

          {/* Right Column: High-End Bento Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Bento Card 1: Interactive Terminal Widget */}
            <div className="rounded-2xl bento-card p-4 sm:p-5 relative overflow-hidden group">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    sumit@cloud:~#
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                  zsh • active
                </span>
              </div>

              {/* Terminal Code Mock */}
              <div className="font-mono text-xs space-y-1.5 text-slate-300">
                <p className="text-slate-400">
                  <span className="text-cyan-400">$</span> curl -s api.sumit.dev/profile
                </p>
                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.04] text-[11px] leading-relaxed text-indigo-200/90 font-mono">
                  <p><span className="text-slate-400">"role":</span> <span className="text-emerald-300">"Full Stack Developer"</span>,</p>
                  <p><span className="text-slate-400">"company":</span> <span className="text-cyan-300">"Dhitech Solutions"</span>,</p>
                  <p><span className="text-slate-400">"cert":</span> <span className="text-amber-300">"AWS Certified Cloud Practitioner"</span>,</p>
                  <p><span className="text-slate-400">"focus":</span> <span className="text-purple-300">["React.js", "Node.js", "Serverless"]</span>,</p>
                  <p><span className="text-slate-400">"status":</span> <span className="text-emerald-400">"Open to Opportunities"</span></p>
                </div>
              </div>
            </div>

            {/* Bento Card 2: Dual Status Bento Grid (Clock + AWS Cloud Badge) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              {/* Local Time with Live Clock */}
              <div className="rounded-2xl bento-card p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Local Time</span>
                  <Clock className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-lg font-mono font-bold text-white tracking-tight">
                    {timeStr || 'Loading...'}
                  </div>
                  <div className="text-[11px] font-mono text-emerald-400/90 flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Ahmedabad (IST)</span>
                  </div>
                </div>
              </div>

              {/* AWS Practitioner Badge */}
              <div className="rounded-2xl bento-card p-4 flex flex-col justify-between bg-gradient-to-br from-amber-500/[0.08] to-transparent border-amber-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300/80">Cloud Badge</span>
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-amber-200">
                    AWS Certified
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                    Cloud Practitioner (2025)
                  </div>
                </div>
              </div>

            </div>

            {/* Bento Card 3: Metrics Strip */}
            <div className="rounded-2xl bento-card p-4 grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="text-xl font-mono font-bold text-cyan-400">3+</div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Yrs Exp</div>
              </div>
              <div className="border-x border-white/10">
                <div className="text-xl font-mono font-bold text-indigo-400">AMC</div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Pipelines</div>
              </div>
              <div>
                <div className="text-xl font-mono font-bold text-emerald-400">100%</div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Reliability</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
