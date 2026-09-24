import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '@/data/site';
import { SocialLinks } from '@/components/common/SocialLinks';
import { MapPin, Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05070B] border-t border-white/10 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand & Mission column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0E131F] border border-white/15 flex items-center justify-center">
                <svg
                  viewBox="0 0 32 32"
                  className="w-6 h-6 text-[#FF9900]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 4L27 10.3V21.7L16 28L5 21.7V10.3L16 4Z" />
                  <path d="M16 4V16M27 10.3L16 16M5 10.3L16 16" />
                  <path d="M16 16V28" />
                  <path d="M11 22C13 24 19 24 21 22" stroke="#FF9900" strokeWidth="2.2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white tracking-tight">
                  AWS Student Builder Group
                </span>
                <span className="text-xs text-[#FF9900] font-mono">
                  COMSATS Lahore Chapter
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              A student-led technology community dedicated to fostering cloud architecture, hands-on building, practical workshops, and career growth at COMSATS University Lahore.
            </p>

            <div className="pt-2">
              <SocialLinks size="sm" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About the Chapter
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-white transition-colors">
                  Upcoming & Past Events
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">
                  Leadership Team
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-white transition-colors">
                  Milestones & Achievements
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Ecosystem */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/resources" className="hover:text-white transition-colors">
                  Student Resource Hub
                </Link>
              </li>
              <li>
                <a
                  href="https://explore.skillbuilder.aws/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>AWS Skill Builder</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://aws.amazon.com/developer/community/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>AWS Builder Center</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <Link to="/partners" className="hover:text-white transition-colors">
                  Partners & Collaborators
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Campus Location & Info */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white mb-4">
              Chapter Base
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF9900] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Department of Computer Science, COMSATS University Islamabad, Lahore Campus, Defence Road, Off Raiwind Road, Lahore.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF9900] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="hover:text-white transition-colors truncate"
                >
                  {siteConfig.contactEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-white/10 space-y-4">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 leading-relaxed">
            <span className="font-semibold text-slate-300">Disclaimer: </span>
            {siteConfig.disclaimer}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} AWS Student Builder Group COMSATS Lahore. All rights reserved.</p>
            <p className="font-mono text-[11px]">
              Crafted for student cloud builders in Lahore, Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
