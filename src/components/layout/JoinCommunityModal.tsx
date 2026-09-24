import React, { useState } from 'react';
import { Modal } from '@/components/common/Modal';
import { Button } from '@/components/common/Button';
import { siteConfig } from '@/data/site';
import { MessageCircle, CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export interface JoinCommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinCommunityModal: React.FC<JoinCommunityModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const perks = [
    'Direct announcements for hands-on AWS workshops & bootcamps',
    'Peer study groups for AWS Cloud Practitioner & Solutions Architect',
    'Hackathon team formation and project collaboration channels',
    'Mentorship from senior student builders and alumni',
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(siteConfig.joinCommunityUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Join AWS Student Builder Group"
      description="COMSATS University Islamabad, Lahore Campus"
      maxWidth="lg"
    >
      <div className="space-y-6 pt-2">
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
          <div className="p-2 rounded-lg bg-[#FF9900]/15 text-[#FF9900] shrink-0 mt-0.5">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-1">
              Welcome to the Student Cloud Community
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              We welcome all students across all semesters and engineering/computing disciplines at COMSATS Lahore who want to learn cloud architecture and build practical projects.
            </p>
          </div>
        </div>

        <div>
          <h5 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF9900] mb-3">
            What You Get as a Member
          </h5>
          <ul className="space-y-2.5">
            {perks.map((perk, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Primary Action Buttons */}
        <div className="pt-2 border-t border-white/10 space-y-3">
          <Button
            href={siteConfig.joinCommunityUrl}
            isExternal
            variant="primary"
            size="lg"
            className="w-full justify-center"
            leftIcon={<MessageCircle className="w-5 h-5 text-black" />}
            rightIcon={<ArrowRight className="w-4 h-4 text-black" />}
          >
            Join via Official WhatsApp Group
          </Button>

          <Button
            variant="outline"
            size="md"
            onClick={handleCopyLink}
            className="w-full justify-center"
          >
            {copied ? 'Link Copied to Clipboard!' : 'Copy Group Invitation Link'}
          </Button>
        </div>

        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
          <span>Free membership · Student-led university initiative</span>
        </div>
      </div>
    </Modal>
  );
};
