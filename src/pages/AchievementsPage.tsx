import React, { useState } from 'react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import {
  achievementsData,
  ACHIEVEMENT_CATEGORIES,
  AchievementCategory,
} from '@/data/achievements';
import { AchievementCard } from '@/components/cards/AchievementCard';
import { Trophy, Info } from 'lucide-react';
import { cn } from '@/utils/cn';

export const AchievementsPage: React.FC = () => {
  useDocumentTitle(
    'Achievements & Milestones',
    'Track chapter milestones, student certification completions, and AWS recognition at COMSATS Lahore.'
  );

  const [selectedCategory, setSelectedCategory] = useState<AchievementCategory | 'All'>('All');

  const filteredAchievements = achievementsData.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9900]/10 border border-[#FF9900]/30 text-xs font-mono text-[#FF9900] mb-4">
          <Trophy className="w-3.5 h-3.5" />
          <span>Chapter Milestones</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Achievements & Milestones
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Chronological record of our chapter formation, community growth, student certifications, and technological impact.
        </p>
      </div>

      {/* Categories Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
        <button
          onClick={() => setSelectedCategory('All')}
          className={cn(
            'px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border',
            selectedCategory === 'All'
              ? 'bg-[#FF9900] text-black border-[#FF9900] font-semibold'
              : 'bg-[#0E131F] text-slate-400 border-white/10 hover:text-white'
          )}
        >
          All Milestones
        </button>
        {ACHIEVEMENT_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              'px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border',
              selectedCategory === cat
                ? 'bg-[#FF9900] text-black border-[#FF9900] font-semibold'
                : 'bg-[#0E131F] text-slate-400 border-white/10 hover:text-white'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Notice about verified data */}
      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 mb-8 flex items-start gap-3 text-xs text-slate-400">
        <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <p>
          <strong className="text-slate-300">Milestone Integrity: </strong>
          We document confirmed chapter milestones. Items marked with <em>[Placeholder]</em> indicate formal record slots ready to be verified as current student cohorts conclude their examination and project cycles.
        </p>
      </div>

      {/* Timeline List */}
      <div className="space-y-4">
        {filteredAchievements.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </div>
  );
};
