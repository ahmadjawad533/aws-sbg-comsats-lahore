import React from 'react';
import { ArrowRight, Sparkles, Cloud, Terminal, Shield, Layers } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { siteConfig } from '@/data/site';
import { useCommunityModal } from '@/layouts/MainLayout';

export const HeroSection: React.FC = () => {
  const { openJoinModal } = useCommunityModal();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden aws-grid-bg">
      {/* Subtle Ambient Radial Gradients */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FF9900]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Official Chapter Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#FF9900]/30 backdrop-blur-md mb-8 animate-fade-in shadow-sm shadow-[#FF9900]/10">
          <span className="w-2 h-2 rounded-full bg-[#FF9900] animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-slate-200">
            AWS Student Builder Group · COMSATS Lahore
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
          Build. Learn. Innovate.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] via-[#FFB347] to-[#FF7700]">
            With AWS.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          {siteConfig.heroSupportingText}
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            variant="primary"
            size="lg"
            onClick={openJoinModal}
            className="w-full sm:w-auto shadow-lg shadow-amber-500/15"
            rightIcon={<ArrowRight className="w-5 h-5 text-black" />}
          >
            Join the Community
          </Button>

          <Button
            to="/events"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            leftIcon={<Sparkles className="w-4 h-4 text-[#FF9900]" />}
          >
            Explore Events
          </Button>
        </div>

        {/* Tech Cloud Pills */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <Cloud className="w-4 h-4 text-[#FF9900]" />
            <span>Cloud Architecture</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <Terminal className="w-4 h-4 text-[#FF9900]" />
            <span>Hands-on Labs</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <Layers className="w-4 h-4 text-[#FF9900]" />
            <span>Serverless & DevOps</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <Shield className="w-4 h-4 text-[#FF9900]" />
            <span>Security & IAM</span>
          </div>
        </div>
      </div>
    </section>
  );
};
