import React from 'react';
import { Code2, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/[0.08] text-xs font-mono relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex items-center gap-2 text-slate-400">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1px]">
              <div className="w-full h-full bg-[#0d0f1a] rounded-full flex items-center justify-center text-cyan-400">
                <Code2 className="w-3.5 h-3.5" />
              </div>
            </div>
            <span>
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </span>
          </div>

          {/* Tech Stack Credit */}
          <div className="text-slate-500 text-center sm:text-right">
            <span>Engineered with React.js, Tailwind CSS & Vite</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2.5 rounded-xl border border-white/10 hover:border-cyan-400 text-slate-400 hover:text-cyan-400 bg-white/[0.04] transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>
      </div>
    </footer>
  );
}
