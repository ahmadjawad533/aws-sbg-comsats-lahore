import React, { useState } from 'react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { teamMembers, TeamDepartment } from '@/data/team';
import { TeamCard } from '@/components/cards/TeamCard';
import { Button } from '@/components/common/Button';
import { useCommunityModal } from '@/layouts/MainLayout';
import { Users2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { cn } from '@/utils/cn';

const DEPARTMENTS: (TeamDepartment | 'All')[] = [
  'All',
  'Executive Leadership',
  'Technical & Cloud',
  'Creative & Media',
  'Operations & Logistics',
  'Partnerships & Outreach',
];

export const TeamPage: React.FC = () => {
  useDocumentTitle(
    'Team & Leadership',
    'Meet the student leaders and domain coordinators behind AWS Student Builder Group at COMSATS Lahore.'
  );

  const [selectedDept, setSelectedDept] = useState<TeamDepartment | 'All'>('All');
  const { openJoinModal } = useCommunityModal();

  const filteredTeam = teamMembers.filter((member) => {
    if (selectedDept === 'All') return true;
    return member.department === selectedDept;
  });

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9900]/10 border border-[#FF9900]/30 text-xs font-mono text-[#FF9900] mb-4">
          <Users2 className="w-3.5 h-3.5" />
          <span>Chapter Directory</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Leadership & Core Team
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          The passionate student builders coordinating workshops, cloud challenges, operations, and community outreach at COMSATS Lahore.
        </p>
      </div>

      {/* Department Filter Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
        {DEPARTMENTS.map((dept) => (
          <button
            key={dept}
            onClick={() => setSelectedDept(dept)}
            className={cn(
              'px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-colors border',
              selectedDept === dept
                ? 'bg-[#FF9900] text-black border-[#FF9900] font-semibold shadow-md shadow-amber-500/10'
                : 'bg-[#0E131F] text-slate-300 border-white/10 hover:text-white hover:border-white/20'
            )}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {filteredTeam.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>

      {/* Leadership Notice */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 mb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-[#FF9900] shrink-0" />
          <div className="text-xs sm:text-sm text-slate-400">
            <span className="font-semibold text-white">Annual Leadership Rotation: </span>
            Positions are appointed on a seasonal academic charter to encourage student leadership progression.
          </div>
        </div>
      </div>

      {/* Call for Volunteers / Join the Team */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0E131F] via-[#141D2B] to-[#0E131F] border border-[#FF9900]/30 text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#FF9900]/15 text-[#FF9900] flex items-center justify-center mx-auto mb-2">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Want to Join the Chapter Team?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We are always excited to welcome passionate student volunteers in cloud engineering, design, photography, content creation, and event operations.
          </p>
          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              onClick={openJoinModal}
              rightIcon={<ArrowRight className="w-4 h-4 text-black" />}
            >
              Get Involved as a Volunteer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
