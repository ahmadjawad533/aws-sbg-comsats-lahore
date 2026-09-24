import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface LoadingStateProps {
  message?: string;
  className?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Loading...',
  className,
}) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'flex flex-col items-center justify-center py-16 px-4 text-center',
        className
      )}
    >
      <Loader2 className="w-8 h-8 animate-spin text-[#FF9900] mb-3" aria-hidden="true" />
      <p className="text-sm text-slate-400 font-medium">{message}</p>
      <span className="sr-only">Loading</span>
    </div>
  );
};
