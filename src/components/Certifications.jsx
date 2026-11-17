import React from 'react';
import { Award, CheckCircle, ExternalLink, ShieldCheck, Zap } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  const cert = certifications[0];

  const competencies = [
    { title: "Cloud Architecture", desc: "Well-Architected Framework principles, high availability & fault tolerance" },
    { title: "Security & IAM", desc: "Shared responsibility model, IAM policies, roles, and Secrets Manager" },
    { title: "Serverless & Compute", desc: "Event-driven compute with AWS Lambda and Amazon EC2 instances" },
    { title: "Cloud Storage & Data", desc: "Amazon S3 lifecycle rules, Amazon Redshift data warehouse & DynamoDB" },
    { title: "Monitoring & Governance", desc: "Amazon CloudWatch logs/metrics, alarms, and EventBridge automation" }
  ];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span>05 // Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-white">
            AWS Certification
          </h2>
          <p className="text-sm text-slate-400 font-mono">
            Officially verified cloud practitioner certification from Amazon Web Services.
          </p>
        </div>

        {/* Featured Certificate Bento Card */}
        <div className="p-6 sm:p-8 rounded-3xl bento-card border-amber-500/30 bg-gradient-to-br from-amber-500/[0.06] via-black/40 to-indigo-500/[0.04] relative">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider block">
                  Amazon Web Services (AWS)
                </span>
                <h3 className="text-xl sm:text-2xl font-mono font-bold text-white">
                  {cert.title}
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  Credential Earned: {cert.date}
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold self-start md:self-auto glow-badge-emerald">
              <CheckCircle className="w-4 h-4" />
              <span>Verified Credential</span>
            </div>
          </div>

          <div className="py-6">
            <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
              {cert.description}
            </p>

            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
              Validated Competencies & Core Knowledge:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {competencies.map((c, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span className="font-mono font-bold text-xs text-white">
                      {c.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-snug">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
