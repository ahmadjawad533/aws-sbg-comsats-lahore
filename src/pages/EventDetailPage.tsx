import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { eventsData } from '@/data/events';
import { teamMembers } from '@/data/team';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Lightbox } from '@/components/common/Lightbox';
import { EventCard } from '@/components/cards/EventCard';
import { LinkedinIcon, GithubIcon } from '@/components/common/BrandIcons';
import {
  Calendar,
  Clock,
  MapPin,
  ArrowLeft,
  Share2,
  ExternalLink,
  Download,
  Video,
  FileText,
  User,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';

export const EventDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const event = eventsData.find((e) => e.slug === slug || e.id === slug);

  useDocumentTitle(
    event ? event.title : 'Event Details',
    event ? event.shortDescription : 'Event details and registration for AWS SBG COMSATS Lahore.'
  );

  if (!event) {
    return (
      <div className="pt-36 pb-24 px-4 text-center max-w-xl mx-auto">
        <AlertCircle className="w-12 h-12 text-[#FF9900] mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-white mb-2">Event Not Found</h1>
        <p className="text-sm text-slate-400 mb-6">
          The requested event could not be found or may have been updated.
        </p>
        <Button to="/events" variant="primary" leftIcon={<ArrowLeft className="w-4 h-4 text-black" />}>
          Back to Events Directory
        </Button>
      </div>
    );
  }

  // Related events (same category or upcoming, excluding current)
  const relatedEvents = eventsData
    .filter((e) => e.id !== event.id)
    .slice(0, 2);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.shortDescription,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'slides':
        return <Download className="w-4 h-4 text-amber-400" />;
      case 'github':
        return <GithubIcon size={16} className="text-slate-200" />;
      case 'recording':
        return <Video className="w-4 h-4 text-rose-400" />;
      default:
        return <FileText className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Breadcrumb & Share */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Events</span>
        </Link>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-white/20 text-xs text-slate-300 hover:text-white transition-colors"
          aria-label="Share event link"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>{copied ? 'Link Copied!' : 'Share Event'}</span>
        </button>
      </div>

      {/* Hero Banner & Core Header */}
      <div className="relative rounded-3xl overflow-hidden border border-white/10 mb-12 bg-slate-900">
        <div className="relative aspect-[21/9] min-h-[260px] w-full">
          <img
            src={event.bannerImage}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B11] via-[#080B11]/70 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="orange" size="md">
              {event.category}
            </Badge>
            <Badge variant={event.isUpcoming ? 'success' : 'neutral'} size="md">
              {event.isUpcoming ? 'Upcoming Event' : 'Past Event'}
            </Badge>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            {event.title}
          </h1>
        </div>
      </div>

      {/* Main Grid: Details & Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Content (8 cols) */}
        <div className="lg:col-span-8 space-y-12">
          {/* Quick Info Bar */}
          <div className="p-6 rounded-2xl bg-[#0E131F] border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-white/[0.04] text-[#FF9900] border border-white/10">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-mono block">DATE</span>
                <span className="text-sm font-semibold text-white">{event.date}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-white/[0.04] text-[#FF9900] border border-white/10">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-mono block">TIME</span>
                <span className="text-sm font-semibold text-white">{event.time}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-white/[0.04] text-[#FF9900] border border-white/10">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-mono block">VENUE</span>
                <span className="text-sm font-semibold text-white">{event.venue}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">About This Event</h2>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {event.fullDescription.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Collaborators & Partners Highlight */}
          {(event.collaborators || event.communityPartnersCount) && (
            <section className="p-6 rounded-2xl bg-gradient-to-r from-[#FF9900]/10 via-[#0E131F] to-[#0E131F] border border-[#FF9900]/30 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-[#FF9900] uppercase tracking-wider block mb-1">
                    Ecosystem Impact
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Event Collaborators & Community Partners
                  </h3>
                </div>
                {event.communityPartnersCount && (
                  <div className="px-4 py-2 rounded-xl bg-[#FF9900]/15 border border-[#FF9900]/30 text-[#FF9900] font-mono text-sm font-bold flex items-center gap-2">
                    <span>🤝</span>
                    <span>{event.communityPartnersCount} Community Partners</span>
                  </div>
                )}
              </div>

              {event.collaborators && event.collaborators.length > 0 && (
                <div className="pt-2">
                  <span className="text-xs text-slate-400 font-mono block mb-2">OFFICIAL COLLABORATORS:</span>
                  <div className="flex flex-wrap gap-2">
                    {event.collaborators.map((collab, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 rounded-lg bg-white/[0.06] border border-white/10 text-white font-medium text-xs sm:text-sm hover:border-[#FF9900]/50 transition-colors"
                      >
                        {collab}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Agenda / Schedule */}
          {event.agenda && event.agenda.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Event Schedule</h2>
              <div className="space-y-3">
                {event.agenda.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#0E131F]/90 border border-white/10 flex flex-col sm:flex-row sm:items-start gap-4"
                  >
                    <div className="sm:w-44 shrink-0 text-xs font-mono font-semibold text-amber-400">
                      {item.time}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Speakers */}
          {event.speakers && event.speakers.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Featured Speakers & Hosts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {event.speakers.map((speaker, idx) => {
                  const matchedMember = teamMembers.find(
                    (m) => m.name.toLowerCase() === speaker.name.toLowerCase()
                  );

                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[#0E131F]/90 border border-white/10 flex items-start gap-4 hover:border-white/20 transition-colors"
                    >
                      {matchedMember ? (
                        <Link
                          to={`/team/${matchedMember.id}`}
                          className="w-14 h-14 rounded-xl overflow-hidden bg-slate-800 border border-white/10 shrink-0 block hover:border-[#FF9900]/50 transition-colors group/avatar"
                          title={`View ${matchedMember.name}'s Profile`}
                        >
                          {speaker.avatarUrl ? (
                            <img
                              src={speaker.avatarUrl}
                              alt={speaker.name}
                              className="w-full h-full object-cover object-[50%_20%] transition-transform duration-300 group-hover/avatar:scale-110"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-400">
                              <User className="w-6 h-6" />
                            </div>
                          )}
                        </Link>
                      ) : (
                        <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-800 border border-white/10 shrink-0">
                          {speaker.avatarUrl ? (
                            <img
                              src={speaker.avatarUrl}
                              alt={speaker.name}
                              className="w-full h-full object-cover object-[50%_20%]"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-400">
                              <User className="w-6 h-6" />
                            </div>
                          )}
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        {matchedMember ? (
                          <Link
                            to={`/team/${matchedMember.id}`}
                            className="text-sm font-bold text-white hover:text-[#FF9900] transition-colors truncate block"
                          >
                            {speaker.name}
                          </Link>
                        ) : (
                          <h4 className="text-sm font-bold text-white truncate">{speaker.name}</h4>
                        )}
                        <p className="text-xs text-[#FF9900] font-medium truncate">{speaker.role}</p>
                        <p className="text-[11px] text-slate-400 mb-2 truncate">{speaker.affiliation}</p>
                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{speaker.bio}</p>

                        <div className="flex flex-wrap items-center gap-3 mt-2.5">
                          {matchedMember && (
                            <Link
                              to={`/team/${matchedMember.id}`}
                              className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-400 hover:text-amber-300 transition-colors"
                            >
                              <span>View Profile</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          )}
                          {speaker.linkedinUrl && (
                            <a
                              href={speaker.linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-[11px] text-[#0A66C2] hover:underline font-medium"
                            >
                              <LinkedinIcon size={12} />
                              <span>LinkedIn</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Event Gallery */}
          {event.gallery && event.gallery.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Event Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {event.gallery.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setLightboxIndex(idx)}
                    className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9900]"
                  >
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                      <span className="text-xs text-white font-medium drop-shadow-md">
                        {img.caption}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* Resources & Handouts */}
          {event.resources && event.resources.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Event Resources & Handouts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {event.resources.map((res, idx) => (
                  <a
                    key={idx}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-[#0E131F] border border-white/10 hover:border-[#FF9900]/40 flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/[0.04]">
                        {getResourceIcon(res.type)}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-[#FF9900] transition-colors">
                        {res.title}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Sidebar (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Registration Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0E131F] border border-[#FF9900]/30 space-y-6 sticky top-28 shadow-xl">
            <div>
              <span className="text-xs font-mono uppercase text-[#FF9900] block mb-1">
                Participation Status
              </span>
              <h3 className="text-xl font-bold text-white">
                {event.registrationOpen ? 'Registration Open' : 'Registration Closed'}
              </h3>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Open to all COMSATS Lahore students</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Certificate of Participation provided</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Laptops required for hands-on labs</span>
              </div>
            </div>

            {event.registrationOpen && event.registrationUrl ? (
              <Button
                href={event.registrationUrl}
                isExternal
                variant="primary"
                size="lg"
                className="w-full justify-center shadow-lg shadow-amber-500/15"
                rightIcon={<ExternalLink className="w-4 h-4 text-black" />}
              >
                Register for Event
              </Button>
            ) : (
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/5 text-center text-xs text-slate-400">
                This event has completed or registrations are currently closed.
              </div>
            )}

            <div className="pt-4 border-t border-white/10 text-[11px] text-slate-500 text-center">
              Questions? Reach out to <Link to="/contact" className="text-amber-400 hover:underline">operations lead</Link>.
            </div>
          </div>
        </div>
      </div>

      {/* Related Events Section */}
      {relatedEvents.length > 0 && (
        <div className="mt-20 pt-16 border-t border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">More Chapter Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedEvents.map((rel) => (
              <EventCard key={rel.id} event={rel} />
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {event.gallery && (
        <Lightbox
          images={event.gallery}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev !== null ? (prev === 0 ? event.gallery.length - 1 : prev - 1) : null
            )
          }
          onNext={() =>
            setLightboxIndex((prev) =>
              prev !== null ? (prev === event.gallery.length - 1 ? 0 : prev + 1) : null
            )
          }
        />
      )}
    </div>
  );
};
