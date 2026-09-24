import React from 'react';
import { cn } from '@/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'orange' | 'success' | 'outline' | 'neutral' | 'blue';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'default',
  size = 'md',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full transition-colors';

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 tracking-wide',
    md: 'text-xs px-3 py-1',
  };

  const variantStyles = {
    default: 'bg-white/10 text-slate-200 border border-white/10',
    orange: 'bg-[#FF9900]/15 text-[#FFB03A] border border-[#FF9900]/30',
    success: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
    neutral: 'bg-slate-800 text-slate-300 border border-slate-700',
    outline: 'bg-transparent text-slate-300 border border-white/20',
    blue: 'bg-sky-500/15 text-sky-400 border border-sky-500/30',
  };

  return (
    <span
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
};
