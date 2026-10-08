import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ArrowRight } from 'lucide-react';
import { TeamMember } from '@/data/team';
import { Badge } from '@/components/common/Badge';
import { generateInitials } from '@/utils/formatting';
import { cn } from '@/utils/cn';
import { LinkedinIcon, GithubIcon, LinktreeIcon, InstagramIcon } from '@/components/common/BrandIcons';

export interface TeamCardProps {
  member: TeamMember;
  className?: string;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member, className }) => {
  const [imageError, setImageError] = useState(false);
  const initials = generateInitials(member.name);

  return (
    <article
      className={cn(
        'group flex flex-col rounded-2xl bg-[#0E131F]/90 border border-white/10 hover:border-[#FF9900]/40 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70',
        member.isLeadRole && 'ring-1 ring-[#FF9900]/25',
        className
      )}
      title={member.imageTitle}
    >
      {/* Clickable Photo Frame */}
      <Link
        to={`/team/${member.id}`}
        className="relative aspect-[4/4.2] w-full overflow-hidden bg-slate-900 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9900]"
        aria-label={`View profile of ${member.name}`}
      >
        {!imageError ? (
          <img
            src={member.photoUrl}
            alt={member.imageTitle}
            title={member.imageTitle}
            loading="lazy"
            onError={() => setImageError(true)}
            className={cn(
              'w-full h-full object-cover transition-transform duration-500',
              member.imagePosition || 'object-[50%_18%]',
              member.imageScale || 'scale-100',
              member.imageScale ? 'group-hover:scale-[1.62]' : 'group-hover:scale-105'
            )}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-[#FF9900]">
            {initials ? (
              <span className="font-bold text-2xl font-mono">{initials}</span>
            ) : (
              <User className="w-12 h-12" />
            )}
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-[#0E131F]/20 to-transparent" />

        {/* Department Badge floating at top right */}
        <div className="absolute top-3 right-3">
          <Badge variant={member.isLeadRole ? 'orange' : 'neutral'} size="sm" className="backdrop-blur-md">
            {member.department}
          </Badge>
        </div>
      </Link>

      {/* Card Details */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <Link
          to={`/team/${member.id}`}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9900] rounded"
        >
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#FF9900] transition-colors">
            {member.name}
          </h3>
        </Link>
        <p className="text-xs sm:text-sm text-[#FF9900] font-semibold mb-3">
          {member.position}
        </p>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 flex-1 line-clamp-3">
          {member.bio}
        </p>

        {/* Social Links & View Profile */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
          <Link
            to={`/team/${member.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-[#FF9900] transition-colors group/link"
          >
            <span>View Profile</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
          </Link>

          <div className="flex items-center gap-1.5">
            {member.linkedinUrl && (
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg bg-white/[0.04] text-slate-400 hover:text-[#0A66C2] hover:bg-[#0A66C2]/15 transition-colors focus-visible:ring-2 focus-visible:ring-[#FF9900]"
                aria-label={`${member.name} on LinkedIn`}
                title={`${member.name} on LinkedIn`}
              >
                <LinkedinIcon size={15} />
              </a>
            )}
            {member.instagramUrl && (
              <a
                href={member.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg bg-white/[0.04] text-slate-400 hover:text-[#E4405F] hover:bg-[#E4405F]/15 transition-colors focus-visible:ring-2 focus-visible:ring-[#FF9900]"
                aria-label={`${member.name} on Instagram`}
                title={`${member.name} on Instagram`}
              >
                <InstagramIcon size={15} />
              </a>
            )}
            {member.githubUrl && (
              <a
                href={member.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-[#FF9900]"
                aria-label={`${member.name} on GitHub`}
                title={`${member.name} on GitHub`}
              >
                <GithubIcon size={15} />
              </a>
            )}
            {member.linktreeUrl && (
              <a
                href={member.linktreeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg bg-white/[0.04] text-slate-400 hover:text-[#43E660] hover:bg-[#43E660]/15 transition-colors focus-visible:ring-2 focus-visible:ring-[#FF9900]"
                aria-label={`${member.name} on Linktree`}
                title={`${member.name} on Linktree`}
              >
                <LinktreeIcon size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
