import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { eventsData } from '@/data/events';
import { EventCard } from '@/components/cards/EventCard';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { useCommunityModal } from '@/layouts/MainLayout';

export const FeaturedEventsSection: React.FC = () => {
  const { openJoinModal } = useCommunityModal();

  // Highlight featured events (e.g. Build with Kiro 2026, Spec Driven Dev, Getting Started)
  const featuredEvents = eventsData.slice(0, 3);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div>
          <SectionHeading
            badge="Chapter Schedule"
            title="Featured Chapter"
            highlight="Events"
            subtitle="Highlights from our hands-on workshops, hackathons, and build sprints at COMSATS Lahore."
            align="left"
            className="mb-0"
          />
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <Button
            to="/events"
            variant="outline"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4 text-[#FF9900]" />}
          >
            View All Past Events
          </Button>
        </div>
      </div>

      {/* Notice regarding Upcoming schedule */}
      <div className="mb-8 p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
          <span>
            Upcoming semester workshops and hackathons are currently being finalized. Join our WhatsApp community for instant announcements!
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={openJoinModal}
          className="text-[#FF9900] hover:text-white shrink-0"
          leftIcon={<MessageCircle className="w-4 h-4" />}
        >
          Join Community
        </Button>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};
