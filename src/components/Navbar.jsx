import React, { useState, useEffect } from 'react';
import { Code2, Menu, X, FileDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-3 sm:px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Floating Capsule Bar */}
        <div className="w-full flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full floating-nav">
          
          {/* Logo / Brand with Pulsing Accent */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1px] group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0d0f1a] rounded-full flex items-center justify-center text-cyan-400">
                <Code2 className="w-4 h-4" />
              </div>
            </div>
            <span className="font-mono font-bold text-sm tracking-tight text-white">
              {personalInfo.shortName}
              <span className="text-indigo-400">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-1.5 rounded-full text-xs font-mono text-slate-300 hover:text-white hover:bg-white/[0.08] transition-all focus:outline-none"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Action buttons (Resume + Mobile menu toggle) */}
          <div className="flex items-center gap-2">
            
            {/* Download Resume Button with Gradient Sheen */}
            <a
              href={personalInfo.resumePath}
              download="Sumit_Bhojani_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-slate-200 bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-indigo-500/50 transition-all shadow-sm group"
            >
              <FileDown className="w-3.5 h-3.5 text-indigo-400 group-hover:translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2 rounded-full text-slate-300 hover:bg-white/[0.08] transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-5xl mx-auto mt-2 rounded-2xl floating-nav p-4 shadow-2xl animate-fade-in">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-xs font-mono font-medium text-slate-300 hover:text-indigo-400 hover:bg-white/[0.05] px-3 py-2 rounded-lg focus:outline-none"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-2 border-t border-white/10 flex justify-between items-center px-1">
              <a
                href={personalInfo.resumePath}
                download="Sumit_Bhojani_Resume.pdf"
                className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 font-medium py-1"
              >
                <FileDown className="w-4 h-4" />
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
