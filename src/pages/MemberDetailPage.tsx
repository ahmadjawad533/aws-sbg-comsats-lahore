import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { teamMembers } from '@/data/team';
import { eventsData } from '@/data/events';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { EventCard } from '@/components/cards/EventCard';
import { LinkedinIcon, LinktreeIcon, InstagramIcon } from '@/components/common/BrandIcons';
import { generateInitials } from '@/utils/formatting';
import { cn } from '@/utils/cn';
import {
  ArrowLeft,
  Share2,
  ExternalLink,
  Mail,
  User,
  Briefcase,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Quote,
  Sparkles,
  ShieldCheck,
  Building2,
} from 'lucide-react';

export const MemberDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [imageError, setImageError] = useState(false);
  const [copied, setCopied] = useState(false);

  const member = teamMembers.find((m) => m.id === id);

  useDocumentTitle(
    member ? `${member.name} — ${member.position}` : 'Team Member Profile',
    member ? member.bio : 'Leadership profile for AWS Student Builder Group COMSATS Lahore.'
  );

  if (!member) {
    return (
      <div className="pt-36 pb-24 px-4 text-center max-w-xl mx-auto">
        <AlertCircle className="w-12 h-12 text-[#FF9900] mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-white mb-2">Team Member Not Found</h1>
        <p className="text-sm text-slate-400 mb-6">
          The requested team member profile could not be found or may have been updated.
        </p>
        <Button to="/team" variant="primary" leftIcon={<ArrowLeft className="w-4 h-4 text-black" />}>
          Back to Team Directory
        </Button>
      </div>
    );
  }

  // Related events that this member spoke at, hosted, or coordinated
  const memberEvents = eventsData.filter((evt) => {
    if (member.eventSlugs && member.eventSlugs.includes(evt.slug)) return true;
    if (member.eventSlugs && member.eventSlugs.includes(evt.id)) return true;
    return evt.speakers.some((s) => s.name.toLowerCase() === member.name.toLowerCase());
  });

  // Department & leadership peers (excluding current member)
  const peerMembers = teamMembers
    .filter((m) => m.id !== member.id && (m.department === member.department || m.isLeadRole))
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${member.name} — ${member.position} | AWS SBG COMSATS Lahore`,
          text: member.bio,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const initials = generateInitials(member.name);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Navigation Bar: Breadcrumb & Share */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <Link
          to="/team"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Leadership Directory</span>
        </Link>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-white/20 text-xs text-slate-300 hover:text-white transition-colors"
          aria-label="Share profile link"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>{copied ? 'Link Copied!' : 'Share Profile'}</span>
        </button>
      </div>

      {/* Member Hero Header Card */}
      <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#0E131F] to-[#080B11] p-6 sm:p-10 mb-12 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF9900]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 z-10">
          {/* Portrait Photo Container */}
          <div className="relative w-44 sm:w-56 md:w-64 aspect-[4/4.5] rounded-2xl overflow-hidden bg-slate-900 border-2 border-white/10 shrink-0 shadow-xl group">
            {!imageError ? (
              <img
                src={member.photoUrl}
                alt={member.imageTitle}
                title={member.imageTitle}
                onError={() => setImageError(true)}
                className={cn(
                  'w-full h-full object-cover transition-transform duration-500 group-hover:scale-105',
                  member.imagePosition || 'object-[50%_18%]',
                  member.imageScale || 'scale-100'
                )}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-[#FF9900]">
                {initials ? (
                  <span className="font-bold text-3xl font-mono">{initials}</span>
                ) : (
                  <User className="w-16 h-16" />
                )}
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B11]/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Core Info & Titles */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3">
              <Badge variant="orange" size="md">
                {member.department}
              </Badge>
              {member.isLeadRole && (
                <Badge variant="success" size="md">
                  Core Leadership
                </Badge>
              )}
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Active Term
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-2">
              {member.name}
            </h1>

            <p className="text-base sm:text-xl font-semibold text-[#FF9900] mb-3">
              {member.position}
            </p>

            <p className="text-xs sm:text-sm text-slate-400 mb-6 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-slate-500" />
              <span>COMSATS University Islamabad, Lahore Campus</span>
            </p>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed mb-6">
              {member.bio}
            </p>

            {/* Social & Contact Actions */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              {member.linkedinUrl && (
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-[#0A66C2]/20 border border-white/10 hover:border-[#0A66C2]/50 text-xs sm:text-sm font-medium text-slate-200 hover:text-[#0A66C2] transition-colors"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn Profile</span>
                </a>
              )}

              {member.instagramUrl && (
                <a
                  href={member.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-[#E4405F]/20 border border-white/10 hover:border-[#E4405F]/50 text-xs sm:text-sm font-medium text-slate-200 hover:text-[#E4405F] transition-colors"
                >
                  <InstagramIcon size={16} />
                  <span>Instagram</span>
                </a>
              )}

              {member.linktreeUrl && (
                <a
                  href={member.linktreeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-[#43E660]/20 border border-white/10 hover:border-[#43E660]/50 text-xs sm:text-sm font-medium text-slate-200 hover:text-[#43E660] transition-colors"
                >
                  <LinktreeIcon size={16} />
                  <span>Linktree</span>
                </a>
              )}

              {member.portfolioUrl && (
                <a
                  href={member.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-amber-500/20 border border-white/10 hover:border-amber-500/50 text-xs sm:text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Portfolio</span>
                </a>
              )}

              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-[#FF9900]/20 border border-white/10 hover:border-[#FF9900]/50 text-xs sm:text-sm font-medium text-slate-200 hover:text-[#FF9900] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Detailed Content (8 cols) & Sidebar (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 space-y-12">
          {/* Biography & Leadership Vision */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-[#FF9900]">
              <Sparkles className="w-5 h-5" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">About & Leadership Vision</h2>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {member.fullBio && member.fullBio.length > 0 ? (
                member.fullBio.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)
              ) : (
                <p>{member.bio}</p>
              )}
            </div>

            {/* Builder Philosophy / Quote */}
            {member.quote && (
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#FF9900]/10 via-[#0E131F] to-[#0E131F] border border-[#FF9900]/30 flex items-start gap-4 mt-6">
                <Quote className="w-8 h-8 text-[#FF9900] shrink-0 mt-1 opacity-80" />
                <div>
                  <p className="text-sm sm:text-base italic text-slate-200 leading-relaxed font-serif">
                    "{member.quote}"
                  </p>
                  <span className="text-xs font-mono text-[#FF9900] block mt-2">
                    — {member.name}, {member.position}
                  </span>
                </div>
              </div>
            )}
          </section>

          {/* Domain Responsibilities */}
          {member.responsibilities && member.responsibilities.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-[#FF9900]">
                <Briefcase className="w-5 h-5" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">Core Domain Responsibilities</h2>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {member.responsibilities.map((resp, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-[#0E131F]/90 border border-white/10 flex items-start gap-3.5 hover:border-[#FF9900]/30 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#FF9900] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{resp}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills & Cloud Competencies */}
          {member.skills && member.skills.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Skills & Competencies</h2>
              <div className="flex flex-wrap gap-2.5">
                {member.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-xl bg-[#0E131F] border border-white/10 text-xs sm:text-sm font-medium text-slate-200 hover:border-[#FF9900]/40 transition-colors shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Events & Sessions Facilitated */}
          {memberEvents.length > 0 && (
            <section className="space-y-6 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[#FF9900]">
                  <Calendar className="w-5 h-5" />
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Events & Workshops Facilitated
                  </h2>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  {memberEvents.length} Event{memberEvents.length > 1 ? 's' : ''}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {memberEvents.map((evt) => (
                  <EventCard key={evt.id} event={evt} />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Sidebar (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Chapter Role Overview */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0E131F] border border-white/10 space-y-5 shadow-xl">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FF9900]" />
              <span>Chapter Role Overview</span>
            </h3>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-slate-400">Department</span>
                <span className="font-semibold text-white">{member.department}</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-slate-400">Designation</span>
                <span className="font-semibold text-[#FF9900]">{member.position}</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-slate-400">Leadership Type</span>
                <span className="font-semibold text-white">
                  {member.isLeadRole ? 'Domain Lead' : 'Domain Co-Lead'}
                </span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-slate-400">Institution</span>
                <span className="font-semibold text-white text-right">COMSATS Lahore</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Community Status</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Active
                </span>
              </div>
            </div>
          </div>

          {/* Connect & Collaborate Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0E131F] to-[#121929] border border-[#FF9900]/25 space-y-4 shadow-xl">
            <span className="text-xs font-mono uppercase text-[#FF9900] block">Get in Touch</span>
            <h3 className="text-lg font-bold text-white">Collaborate with this Lead</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Have questions regarding {member.department.toLowerCase()} or want to partner on university initiatives?
            </p>

            <div className="space-y-2.5 pt-2">
              {member.linkedinUrl && (
                <Button
                  href={member.linkedinUrl}
                  isExternal
                  variant="outline"
                  size="sm"
                  className="w-full justify-center"
                  leftIcon={<LinkedinIcon size={15} />}
                >
                  Connect on LinkedIn
                </Button>
              )}

              {member.instagramUrl && (
                <Button
                  href={member.instagramUrl}
                  isExternal
                  variant="outline"
                  size="sm"
                  className="w-full justify-center text-[#E4405F] border-[#E4405F]/30 hover:bg-[#E4405F]/10"
                  leftIcon={<InstagramIcon size={15} />}
                >
                  Follow on Instagram
                </Button>
              )}

              {member.linktreeUrl && (
                <Button
                  href={member.linktreeUrl}
                  isExternal
                  variant="outline"
                  size="sm"
                  className="w-full justify-center text-[#43E660] border-[#43E660]/30 hover:bg-[#43E660]/10"
                  leftIcon={<LinktreeIcon size={15} />}
                >
                  Open Linktree
                </Button>
              )}

              <Button
                to="/contact"
                variant="primary"
                size="sm"
                className="w-full justify-center"
                leftIcon={<Mail className="w-4 h-4 text-black" />}
              >
                Send Chapter Inquiry
              </Button>
            </div>
          </div>

          {/* Leadership & Department Peers */}
          {peerMembers.length > 0 && (
            <div className="p-6 rounded-2xl bg-[#0E131F] border border-white/10 space-y-4 shadow-xl">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-slate-400">
                Leadership Peers
              </h3>

              <div className="space-y-3">
                {peerMembers.map((peer) => (
                  <Link
                    key={peer.id}
                    to={`/team/${peer.id}`}
                    className="flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-lg overflow-hidden bg-slate-800 border border-white/10 shrink-0">
                      <img
                        src={peer.photoUrl}
                        alt={peer.name}
                        className={cn(
                          'w-full h-full object-cover',
                          peer.imagePosition || 'object-[50%_18%]'
                        )}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-[#FF9900] transition-colors">
                        {peer.name}
                      </h4>
                      <p className="text-[11px] text-[#FF9900] truncate">{peer.position}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
