import React from 'react';
import { ExternalLink, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ResourceItem } from '@/data/resources';
import { Badge } from '@/components/common/Badge';
import { cn } from '@/utils/cn';

export interface ResourceCardProps {
  resource: ResourceItem;
  className?: string;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource, className }) => {
  const isExt = resource.isExternal;

  return (
    <div
      className={cn(
        'group flex flex-col justify-between p-6 rounded-2xl bg-[#0E131F]/90 border border-white/10 hover:border-[#FF9900]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60',
        className
      )}
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF9900] group-hover:scale-105 transition-transform">
            <BookOpen className="w-5 h-5" />
          </div>
          {resource.badge && (
            <Badge variant="orange" size="sm">
              {resource.badge}
            </Badge>
          )}
        </div>

        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FF9900] transition-colors mb-2">
          {resource.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
          {resource.description}
        </p>
      </div>

      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
          {resource.category}
        </span>

        {isExt ? (
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-[#FF9900] transition-colors"
          >
            <span>Access Resource</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <Link
            to={resource.url}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-[#FF9900] transition-colors"
          >
            <span>View Material</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
};
