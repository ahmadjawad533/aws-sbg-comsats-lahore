import React from 'react';
import { Mail } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { cn } from '@/utils/cn';
import {
  LinkedinIcon,
  InstagramIcon,
  GithubIcon,
  WhatsappIcon,
  LinktreeIcon,
  MeetupIcon,
} from './BrandIcons';

export interface SocialLinksProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className,
  size = 'md',
  showLabels = false,
}) => {
  const iconPixelSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  const links = [
    {
      name: 'WhatsApp',
      href: siteConfig.socials.whatsapp,
      icon: (s: number) => <WhatsappIcon size={s} />,
      hoverClass: 'hover:text-[#25D366] hover:border-[#25D366]/40',
    },
    {
      name: 'LinkedIn',
      href: siteConfig.socials.linkedin,
      icon: (s: number) => <LinkedinIcon size={s} />,
      hoverClass: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40',
    },
    {
      name: 'Instagram',
      href: siteConfig.socials.instagram,
      icon: (s: number) => <InstagramIcon size={s} />,
      hoverClass: 'hover:text-[#E4405F] hover:border-[#E4405F]/40',
    },
    {
      name: 'Linktree',
      href: siteConfig.socials.linktree,
      icon: (s: number) => <LinktreeIcon size={s} />,
      hoverClass: 'hover:text-[#43E660] hover:border-[#43E660]/40',
    },
    {
      name: 'Meetup',
      href: siteConfig.socials.meetup,
      icon: (s: number) => <MeetupIcon size={s} />,
      hoverClass: 'hover:text-[#F64060] hover:border-[#F64060]/40',
    },
    {
      name: 'GitHub',
      href: siteConfig.socials.github,
      icon: (s: number) => <GithubIcon size={s} />,
      hoverClass: 'hover:text-white hover:border-white/40',
    },
    {
      name: 'Email',
      href: siteConfig.socials.email,
      icon: (s: number) => <Mail style={{ width: s, height: s }} />,
      hoverClass: 'hover:text-[#FF9900] hover:border-[#FF9900]/40',
    },
  ];

  const buttonSizes = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-2.5',
  };

  return (
    <div className={cn('flex items-center gap-2.5 flex-wrap', className)}>
      {links.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'flex items-center gap-2 rounded-lg bg-white/[0.04] border border-white/10 text-slate-400 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9900]',
            buttonSizes[size],
            item.hoverClass
          )}
          aria-label={`Visit our ${item.name} page`}
          title={`Visit our ${item.name}`}
        >
          {item.icon(iconPixelSizes[size])}
          {showLabels && <span className="text-xs font-medium text-slate-300">{item.name}</span>}
        </a>
      ))}
    </div>
  );
};
