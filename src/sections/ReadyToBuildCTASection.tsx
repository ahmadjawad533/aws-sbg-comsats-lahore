import React from 'react';
import { ArrowRight, MessageSquare, Terminal } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { useCommunityModal } from '@/layouts/MainLayout';

export const ReadyToBuildCTASection: React.FC = () => {
  const { openJoinModal } = useCommunityModal();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl bg-gradient-to-b from-[#111827] to-[#0A0E17] border border-[#FF9900]/30 p-8 sm:p-12 lg:p-16 overflow-hidden text-center shadow-2xl">
        {/* Subtle Background Glow */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF9900]/15 rounded-full blur-[100px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-amber-400 mb-6">
            <Terminal className="w-3.5 h-3.5" />
            <span>Open Chapter Membership</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Ready to Build With Us?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Join AWS Student Builder Group COMSATS Lahore and become part of a community focused on learning, building and growing together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={openJoinModal}
              className="w-full sm:w-auto shadow-lg shadow-amber-500/20"
              leftIcon={<MessageSquare className="w-5 h-5 text-black" />}
              rightIcon={<ArrowRight className="w-4 h-4 text-black" />}
            >
              Join the Community
            </Button>

            <Button
              to="/contact"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              Contact Chapter Leads
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
