import React from 'react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { useCommunityModal } from '@/layouts/MainLayout';
import {
  Target,
  Eye,
  CheckCircle2,
  Users,
  Terminal,
  Cpu,
  Sparkles,
  BookOpen,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  useDocumentTitle(
    'About Us',
    'Learn about AWS Student Builder Group COMSATS Lahore, our mission, vision, and what students gain through cloud learning.'
  );

  const { openJoinModal } = useCommunityModal();

  const confirmedBenefits = [
    {
      title: 'AWS Learning Opportunities',
      desc: 'Structured curricula and guidance through AWS Skill Builder, official whitepapers, and cloud architectures.',
      icon: BookOpen,
    },
    {
      title: 'Hands-on Experience',
      desc: 'Deploying real compute instances, databases, and serverless backends in hands-on lab environments.',
      icon: Terminal,
    },
    {
      title: 'Workshops',
      desc: 'Step-by-step practical sessions led by student technical leads and guest cloud engineers.',
      icon: Cpu,
    },
    {
      title: 'Hackathons',
      desc: 'Sprint competitions where teams build innovative cloud-native prototypes over 8-24 hour sprints.',
      icon: Sparkles,
    },
    {
      title: 'Community Networking',
      desc: 'Connecting with ambitious peers across software engineering, computer science, and data disciplines.',
      icon: Users,
    },
    {
      title: 'Industry Exposure',
      desc: 'Direct interaction with professional cloud architects, alumni, and tech company practitioners.',
      icon: Target,
    },
    {
      title: 'Leadership Opportunities',
      desc: 'Leading project cohorts, coordinating events, mentoring juniors, and managing chapter operations.',
      icon: Eye,
    },
    {
      title: 'Project-Building Experience',
      desc: 'Building public GitHub cloud repositories to demonstrate practical capabilities on resumes.',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9900]/10 border border-[#FF9900]/30 text-xs font-mono text-[#FF9900] mb-4">
          <span>Charter & Organization</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
          About AWS Student Builder Group{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#FF7700]">
            COMSATS Lahore
          </span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Bridging the gap between classroom theory and cloud industry practice for university students.
        </p>
      </div>

      {/* Who We Are & Mission / Vision Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        {/* Who We Are */}
        <div className="p-8 rounded-2xl bg-[#0E131F]/90 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF9900] mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white mb-4">Who We Are</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              AWS Student Builder Group COMSATS Lahore is a student-led community focused on cloud learning, hands-on building, collaboration and technology leadership.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-white/5 text-xs font-mono text-slate-400">
            Founded at COMSATS Lahore Campus
          </div>
        </div>

        {/* Our Mission */}
        <div className="p-8 rounded-2xl bg-[#0E131F]/90 border border-[#FF9900]/30 transition-all flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9900]/10 rounded-full blur-3xl pointer-events-none" />
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#FF9900]/15 border border-[#FF9900]/30 flex items-center justify-center text-[#FF9900] mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              Help students move from learning technology to actually building with it.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed mt-3">
              We empower learners to transition from theoretical textbooks into running production-grade code, understanding distributed systems, and architecting for high availability.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-white/5 text-xs font-mono text-amber-400">
            Action-Oriented Learning
          </div>
        </div>

        {/* Our Vision */}
        <div className="p-8 rounded-2xl bg-[#0E131F]/90 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF9900] mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              Build a strong student technology ecosystem where learners can collaborate, experiment, lead and connect with the wider industry.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed mt-3">
              Position COMSATS Lahore students at the forefront of Pakistan's tech revolution, fostering globally competitive cloud engineers and startup founders.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-white/5 text-xs font-mono text-slate-400">
            Long-term Ecosystem Impact
          </div>
        </div>
      </div>

      {/* What Members Get */}
      <div className="mb-20">
        <SectionHeading
          badge="Member Value"
          title="What Members"
          highlight="Get"
          subtitle="Concrete, unexaggerated benefits provided through our chapter activities and workshop sessions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {confirmedBenefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0E131F]/80 border border-white/10 hover:border-[#FF9900]/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF9900] mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#FF9900] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Campus Context & Independence Notice */}
      <div className="p-8 rounded-3xl bg-[#0B0F19] border border-white/10 mb-16">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="p-3 rounded-2xl bg-amber-500/10 text-[#FF9900] shrink-0">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white">
              Institutional Context & Community Status
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              AWS Student Builder Group COMSATS Lahore operates as an independent student-led university technology society hosted at COMSATS University Islamabad, Lahore Campus.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              While our curriculum and focus center on Amazon Web Services (AWS) and cloud computing architectures, this chapter is organized by students for students and is not a corporate branch of Amazon Web Services, Inc.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center pt-8 border-t border-white/10">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
          Want to Learn and Build Alongside Us?
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mb-6">
          Connect with our chapter members, attend our next hands-on session, or apply to volunteer in our technical and operations teams.
        </p>
        <Button
          variant="primary"
          size="lg"
          onClick={openJoinModal}
          rightIcon={<ArrowRight className="w-4 h-4 text-black" />}
        >
          Join Our Community
        </Button>
      </div>
    </div>
  );
};
