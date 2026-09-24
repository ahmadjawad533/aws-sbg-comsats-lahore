import React from 'react';
import { Users, CalendarCheck, Laptop, Rocket, Star, MessageSquareQuote } from 'lucide-react';
import { siteConfig } from '@/data/site';

export const CommunityImpactSection: React.FC = () => {
  const statItems = [
    {
      label: 'Community Members',
      value: siteConfig.stats.members,
      description: 'Active student builders & cloud learners',
      icon: Users,
    },
    {
      label: 'Chapter Events',
      value: siteConfig.stats.events,
      description: 'Cloud meetups, orientations & sessions',
      icon: CalendarCheck,
    },
    {
      label: 'Hands-on Workshops',
      value: siteConfig.stats.workshops,
      description: 'Practical labs & architecture walkthroughs',
      icon: Laptop,
    },
    {
      label: 'Projects Built',
      value: siteConfig.stats.projects,
      description: 'Cloud-native prototypes & repos developed',
      icon: Rocket,
    },
    {
      label: 'Student Reviews',
      value: siteConfig.stats.reviews,
      description: 'Feedback from workshop participants',
      icon: MessageSquareQuote,
    },
    {
      label: 'Satisfaction Rating',
      value: `${siteConfig.stats.rating} ★`,
      description: 'Average participant session rating',
      icon: Star,
    },
  ];

  return (
    <section className="py-16 bg-[#0B0F19] border-y border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF9900]">
            Chapter Metrics
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Community Impact & Milestone Metrics
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Verified stats reflecting community participation, projects built, and workshop satisfaction at COMSATS Lahore.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {statItems.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0E131F]/80 border border-white/10 hover:border-[#FF9900]/30 transition-all duration-300 text-center flex flex-col items-center justify-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF9900] mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-[#FF9900] transition-colors mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 line-clamp-2">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
