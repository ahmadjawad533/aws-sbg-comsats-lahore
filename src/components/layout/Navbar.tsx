import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { Button } from '@/components/common/Button';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/utils/cn';

export interface NavbarProps {
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const location = useLocation();
  const isScrolled = scrollY > 20;

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-[#080B11]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40'
            : 'bg-transparent border-b border-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo & Chapter Title */}
            <NavLink
              to="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9900] rounded-lg p-1"
              aria-label="AWS Student Builder Group COMSATS Lahore Home"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0E131F] border border-white/15 flex items-center justify-center group-hover:border-[#FF9900]/50 transition-colors shadow-inner">
                {/* Custom SVG AWS Cube */}
                <svg
                  viewBox="0 0 32 32"
                  className="w-6 h-6 text-[#FF9900] transition-transform duration-300 group-hover:scale-110"
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
                <span className="text-sm font-bold text-white tracking-tight group-hover:text-[#FF9900] transition-colors flex items-center gap-1.5">
                  AWS SBG
                  <span className="text-[11px] font-normal px-1.5 py-0.2 rounded bg-white/[0.06] text-slate-300 border border-white/10">
                    COMSATS
                  </span>
                </span>
                <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                  Lahore Chapter
                </span>
              </div>
            </NavLink>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {siteConfig.navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9900]',
                      isActive
                        ? 'text-[#FF9900] bg-[#FF9900]/10 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                onClick={onOpenJoinModal}
                rightIcon={<ArrowUpRight className="w-4 h-4 text-black" />}
              >
                Join Our Community
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9900]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-30 lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 bg-[#080B11]/95 backdrop-blur-xl border-b border-white/10 overflow-y-auto"
        >
          <div className="space-y-1">
            <p className="text-[11px] font-mono uppercase tracking-widest text-[#FF9900] mb-3 px-3">
              Navigation Menu
            </p>
            {siteConfig.navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'block px-4 py-3 rounded-xl text-base font-medium transition-colors',
                    isActive
                      ? 'text-[#FF9900] bg-[#FF9900]/15 font-semibold'
                      : 'text-slate-200 hover:text-white hover:bg-white/[0.05]'
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <Button
              variant="primary"
              size="lg"
              className="w-full justify-center"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal();
              }}
              rightIcon={<ArrowUpRight className="w-4 h-4 text-black" />}
            >
              Join Our Community
            </Button>
            <p className="text-[11px] text-center text-slate-400">
              {siteConfig.location}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
