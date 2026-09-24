import React from 'react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Button } from '@/components/common/Button';
import { Home, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  useDocumentTitle('404 Page Not Found', 'The requested page could not be located.');

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900] text-3xl font-extrabold font-mono">
          404
        </div>

        <h1 className="text-3xl font-bold text-white tracking-tight">
          Page Not Found
        </h1>

        <p className="text-sm text-slate-400 leading-relaxed">
          The cloud route or page you are looking for doesn't exist or may have been relocated.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button to="/" variant="primary" leftIcon={<Home className="w-4 h-4 text-black" />}>
            Back to Home
          </Button>
          <Button to="/events" variant="outline" leftIcon={<Compass className="w-4 h-4 text-[#FF9900]" />}>
            Explore Events
          </Button>
        </div>
      </div>
    </div>
  );
};
