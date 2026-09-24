import React from 'react';
import { Cloud, Wrench, Trophy, Users, Briefcase, TrendingUp } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';

export const WhatWeDoSection: React.FC = () => {
  const cards = [
    {
      title: 'Cloud Learning',
      description: 'Learn AWS and cloud fundamentals through structured workshops and practical technical sessions.',
      icon: Cloud,
      badge: 'Fundamentals',
    },
    {
      title: 'Hands-on Workshops',
      description: 'Build practical, scalable projects in guided live environments instead of only watching slide presentations.',
      icon: Wrench,
      badge: 'Practical Labs',
    },
    {
      title: 'Hackathons',
      description: 'Participate in campus build challenges, collaborate on innovative prototypes, and compete with fellow builders.',
      icon: Trophy,
      badge: 'Competitions',
    },
    {
      title: 'Community',
      description: 'Meet passionate students, builders, developers, and technology enthusiasts from across multiple computing disciplines.',
      icon: Users,
      badge: 'Networking',
    },
    {
      title: 'Industry Exposure',
      description: 'Connect with seasoned cloud architects, DevOps practitioners, alumni, and experienced industry speakers.',
      icon: Briefcase,
      badge: 'Industry Links',
    },
    {
      title: 'Career Growth',
      description: 'Develop technical mastery, architectural thinking, public presentation, teamwork, and tech leadership skills.',
      icon: TrendingUp,
      badge: 'Leadership',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="Core Activities"
        title="What We Do at"
        highlight="AWS SBG"
        subtitle="Our chapter focuses on high-impact practical activities designed to turn student curiosity into real engineering capability."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="group p-6 sm:p-7 rounded-2xl bg-[#0E131F]/90 border border-white/10 hover:border-[#FF9900]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF9900] group-hover:bg-[#FF9900]/15 group-hover:scale-105 transition-all">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/5">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#FF9900] transition-colors mb-2.5">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs font-mono text-slate-500 group-hover:text-amber-400/90 transition-colors">
                <span>Pillar #{idx + 1}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
