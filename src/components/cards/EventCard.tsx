import React from 'react';
import { Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';
import { CommunityEvent } from '@/data/events';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { formatDate } from '@/utils/formatting';
import { cn } from '@/utils/cn';

export interface EventCardProps {
  event: CommunityEvent;
  className?: string;
}

export const EventCard: React.FC<EventCardProps> = ({ event, className }) => {
  return (
    <article
      className={cn(
        'group flex flex-col rounded-2xl bg-[#0E131F]/90 border border-white/10 hover:border-[#FF9900]/40 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60',
        className
      )}
    >
      {/* Event Image Banner */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
        <img
          src={event.bannerImage}
          alt={event.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <Badge variant="orange" size="sm">
            {event.category}
          </Badge>
          <Badge
            variant={event.isUpcoming ? 'success' : 'neutral'}
            size="sm"
          >
            {event.isUpcoming ? 'Upcoming' : 'Completed'}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Meta: Date & Time */}
        <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400 mb-3 font-mono">
          <div className="flex items-center gap-1.5 text-amber-400/90">
            <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{event.time.split(' ')[0]} {event.time.split(' ')[1]}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#FF9900] transition-colors line-clamp-2 mb-2">
          {event.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
          <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-500" aria-hidden="true" />
          <span className="truncate">{event.venue}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 mb-6 flex-1">
          {event.shortDescription}
        </p>

        {/* Action Button */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
          <Button
            to={`/events/${event.slug}`}
            variant="outline"
            size="sm"
            className="w-full justify-between group-hover:border-[#FF9900]/50"
            rightIcon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
          >
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
};
