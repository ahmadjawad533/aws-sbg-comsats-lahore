import React, { useState, useMemo } from 'react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { eventsData, EVENT_CATEGORIES, EventCategory } from '@/data/events';
import { EventCard } from '@/components/cards/EventCard';
import { EmptyState } from '@/components/common/EmptyState';
import { Search, CalendarDays, MessageCircle } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { useCommunityModal } from '@/layouts/MainLayout';
import { cn } from '@/utils/cn';

export const EventsPage: React.FC = () => {
  useDocumentTitle(
    'Events',
    'Explore completed workshops, build challenges, and tech sessions by AWS SBG COMSATS Lahore.'
  );

  const { openJoinModal } = useCommunityModal();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | 'All'>('All');
  const [activeTab, setActiveTab] = useState<'all' | 'upcoming' | 'past'>('all');

  const filteredEvents = useMemo(() => {
    return eventsData.filter((event) => {
      // Category filter
      if (selectedCategory !== 'All' && event.category !== selectedCategory) {
        return false;
      }

      // Tab filter (Upcoming vs Past)
      if (activeTab === 'upcoming' && !event.isUpcoming) {
        return false;
      }
      if (activeTab === 'past' && event.isUpcoming) {
        return false;
      }

      // Search query filter (matches title, description, venue, speakers)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = event.title.toLowerCase().includes(query);
        const matchesDesc = event.shortDescription.toLowerCase().includes(query);
        const matchesVenue = event.venue.toLowerCase().includes(query);
        const matchesSpeaker = event.speakers.some((s) => s.name.toLowerCase().includes(query));

        if (!matchesTitle && !matchesDesc && !matchesVenue && !matchesSpeaker) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory, activeTab]);

  const upcomingCount = eventsData.filter((e) => e.isUpcoming).length;
  const pastCount = eventsData.filter((e) => !e.isUpcoming).length;

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9900]/10 border border-[#FF9900]/30 text-xs font-mono text-[#FF9900] mb-4">
          <CalendarDays className="w-3.5 h-3.5" />
          <span>Chapter Calendar</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Events & Workshops
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          From hands-on AWS console labs and Kiro build hackathons to competitive cloud quests.
        </p>
      </div>

      {/* Controls: Search, Tabs & Categories */}
      <div className="space-y-6 mb-12">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Tabs: All / Upcoming / Past */}
          <div className="flex items-center p-1 rounded-xl bg-[#0E131F] border border-white/10 self-start">
            <button
              onClick={() => setActiveTab('all')}
              className={cn(
                'px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors',
                activeTab === 'all'
                  ? 'bg-[#FF9900] text-black font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              )}
            >
              All Events ({eventsData.length})
            </button>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={cn(
                'px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors',
                activeTab === 'upcoming'
                  ? 'bg-[#FF9900] text-black font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              )}
            >
              Upcoming ({upcomingCount})
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={cn(
                'px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors',
                activeTab === 'past'
                  ? 'bg-[#FF9900] text-black font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              )}
            >
              Past Sessions ({pastCount})
            </button>
          </div>

          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, speaker, or keyword..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0E131F] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('All')}
            className={cn(
              'px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border',
              selectedCategory === 'All'
                ? 'bg-[#FF9900]/20 text-[#FF9900] border-[#FF9900]/40 font-semibold'
                : 'bg-white/[0.03] text-slate-400 border-white/10 hover:text-white hover:bg-white/[0.06]'
            )}
          >
            All Categories
          </button>
          {EVENT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                'px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border',
                selectedCategory === cat
                  ? 'bg-[#FF9900]/20 text-[#FF9900] border-[#FF9900]/40 font-semibold'
                  : 'bg-white/[0.03] text-slate-400 border-white/10 hover:text-white hover:bg-white/[0.06]'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid / Empty States */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : activeTab === 'upcoming' ? (
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0E131F]/70 border border-white/10 text-center max-w-xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#FF9900]/15 text-[#FF9900] flex items-center justify-center mx-auto">
            <CalendarDays className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white">No Upcoming Events Scheduled Right Now</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            All recent workshop sessions and hackathons have concluded. New upcoming semester events are currently in planning. Join our WhatsApp community group to be the first to know when registrations open!
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={openJoinModal}
              leftIcon={<MessageCircle className="w-4 h-4 text-black" />}
            >
              Join WhatsApp Community
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveTab('past')}
            >
              Browse Past Sessions
            </Button>
          </div>
        </div>
      ) : (
        <EmptyState
          title="No events found"
          description="We couldn't find any events matching your selected filter or search term. Try resetting your search query."
          actionText="Reset All Filters"
          onAction={() => {
            setSearchQuery('');
            setSelectedCategory('All');
            setActiveTab('all');
          }}
        />
      )}
    </div>
  );
};
