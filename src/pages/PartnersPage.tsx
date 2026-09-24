import React, { useState } from 'react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { partnersData, PARTNER_CATEGORIES, PartnerCategory } from '@/data/partners';
import { PartnerCard } from '@/components/cards/PartnerCard';
import { Button } from '@/components/common/Button';
import { Handshake, ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import { cn } from '@/utils/cn';

export const PartnersPage: React.FC = () => {
  useDocumentTitle(
    'Partners & Collaborations',
    'Explore university, community, and corporate partners collaborating with AWS Student Builder Group COMSATS Lahore.'
  );

  const [selectedCategory, setSelectedCategory] = useState<PartnerCategory | 'All'>('All');

  const filteredPartners = partnersData.filter((partner) => {
    if (selectedCategory === 'All') return true;
    return partner.category === selectedCategory;
  });

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9900]/10 border border-[#FF9900]/30 text-xs font-mono text-[#FF9900] mb-4">
          <Handshake className="w-3.5 h-3.5" />
          <span>Ecosystem Alliances</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Partners & Collaborators
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          We collaborate with universities, tech organizations, developer communities, and sponsors to deliver impactful educational experiences.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
        <button
          onClick={() => setSelectedCategory('All')}
          className={cn(
            'px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-colors border',
            selectedCategory === 'All'
              ? 'bg-[#FF9900] text-black border-[#FF9900] font-semibold'
              : 'bg-[#0E131F] text-slate-300 border-white/10 hover:text-white'
          )}
        >
          All Partners
        </button>
        {PARTNER_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              'px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-colors border',
              selectedCategory === cat
                ? 'bg-[#FF9900] text-black border-[#FF9900] font-semibold'
                : 'bg-[#0E131F] text-slate-300 border-white/10 hover:text-white'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {filteredPartners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>

      {/* Partnership Opportunities Banner */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0E131F] via-[#141D2B] to-[#0E131F] border border-[#FF9900]/30 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FF9900]">
              Collaborate With Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Partner with AWS SBG COMSATS Lahore
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Are you a company, startup, or developer community looking to engage with top engineering and computer science talent at COMSATS Lahore? We offer collaboration opportunities across technical workshops, hackathon tracks, speaker sessions, and student mentoring.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Direct access to university builders
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Workshop co-hosting & tech talks
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Hackathon mentorship & prizes
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              rightIcon={<ArrowRight className="w-4 h-4 text-black" />}
            >
              Propose a Partnership
            </Button>
            <Button
              href="mailto:contact@aws-sbg-comsats.org"
              variant="outline"
              size="md"
              className="w-full justify-center"
              leftIcon={<Mail className="w-4 h-4 text-[#FF9900]" />}
            >
              Email Outreach Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
