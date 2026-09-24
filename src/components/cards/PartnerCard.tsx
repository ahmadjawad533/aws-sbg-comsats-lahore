import React, { useState } from 'react';
import { ExternalLink, Building2 } from 'lucide-react';
import { PartnerItem } from '@/data/partners';
import { Badge } from '@/components/common/Badge';
import { generateInitials } from '@/utils/formatting';
import { cn } from '@/utils/cn';

export interface PartnerCardProps {
  partner: PartnerItem;
  className?: string;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({ partner, className }) => {
  const [logoError, setLogoError] = useState(false);
  const initials = generateInitials(partner.name);

  return (
    <div
      className={cn(
        'group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0E131F]/90 border border-white/10 hover:border-[#FF9900]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60',
        partner.isPlaceholder && 'border-dashed border-white/15 bg-[#0E131F]/40',
        className
      )}
    >
      <div>
        <div className="flex items-start justify-between gap-4 mb-5">
          {/* Logo or Monogram Icon */}
          <div className="w-14 h-14 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-2.5 overflow-hidden">
            {partner.logoUrl && !logoError ? (
              <img
                src={partner.logoUrl}
                alt={partner.name}
                loading="lazy"
                onError={() => setLogoError(true)}
                className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            ) : (
              <div className="text-center font-mono font-bold text-sm text-[#FF9900]">
                {initials || <Building2 className="w-6 h-6 mx-auto text-slate-400" />}
              </div>
            )}
          </div>

          <Badge variant={partner.isPlaceholder ? 'neutral' : 'orange'} size="sm">
            {partner.category}
          </Badge>
        </div>

        <h3 className="text-lg font-bold text-white group-hover:text-[#FF9900] transition-colors mb-2">
          {partner.name}
        </h3>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
          {partner.shortDescription}
        </p>
      </div>

      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs text-slate-500 font-mono">
          {partner.isPlaceholder ? 'Collaboration Slot' : 'Official Partner'}
        </span>
        <a
          href={partner.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-[#FF9900] transition-colors"
        >
          <span>Learn More</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
