import React from 'react';
import { Award, Calendar, CheckCircle2, Clock } from 'lucide-react';
import { AchievementItem } from '@/data/achievements';
import { Badge } from '@/components/common/Badge';
import { cn } from '@/utils/cn';

export interface AchievementCardProps {
  achievement: AchievementItem;
  className?: string;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, className }) => {
  return (
    <div
      className={cn(
        'relative flex flex-col md:flex-row gap-6 p-6 sm:p-7 rounded-2xl bg-[#0E131F]/90 border border-white/10 hover:border-[#FF9900]/30 transition-all duration-300 hover:shadow-lg hover:shadow-black/50',
        achievement.isPlaceholder && 'border-dashed border-white/15 bg-[#0E131F]/50',
        className
      )}
    >
      {/* Date & Node indicator */}
      <div className="md:w-48 shrink-0 flex md:flex-col justify-between md:justify-start gap-2">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold">
          <Calendar className="w-3.5 h-3.5" />
          <span>{achievement.date}</span>
        </div>
        <Badge
          variant={achievement.isPlaceholder ? 'neutral' : 'orange'}
          size="sm"
          className="self-start mt-1"
        >
          {achievement.category}
        </Badge>
        {achievement.isPlaceholder ? (
          <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 mt-2">
            <Clock className="w-3 h-3" />
            Milestone Slot
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 mt-2">
            <CheckCircle2 className="w-3 h-3" />
            Charter Record
          </span>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
            {achievement.title}
          </h3>
          <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF9900] shrink-0">
            <Award className="w-4 h-4" />
          </div>
        </div>

        <p className="text-xs text-[#FF9900]/80 font-medium mb-3">{achievement.context}</p>

        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          {achievement.description}
        </p>

        {/* Tags */}
        {achievement.tags && achievement.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {achievement.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/5"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
