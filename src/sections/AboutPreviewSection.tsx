import React from 'react';
import { ArrowRight, CheckCircle2, CloudLightning, Compass, Code2 } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { SectionHeading } from '@/components/common/SectionHeading';

export const AboutPreviewSection: React.FC = () => {
  const highlights = [
    {
      title: 'Move Beyond Slide Decks to Real Infrastructure',
      desc: 'Deploy live services on AWS cloud environments instead of reading static tutorials.',
      icon: CloudLightning,
    },
    {
      title: 'Student-Driven Collaborative Learning',
      desc: 'Work in small study circles on real cloud projects with peers across semesters.',
      icon: Compass,
    },
    {
      title: 'Industry Alignment & Practical Skills',
      desc: 'Master tools, frameworks, and architecture patterns used by top tech companies globally.',
      icon: Code2,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="About Our Chapter"
        title="Empowering the Next Generation of"
        highlight="Cloud Builders"
        subtitle="AWS Student Builder Group at COMSATS University Islamabad, Lahore Campus bridge the gap between academic theory and real-world cloud engineering."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Story & Context */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0E131F]/90 border border-white/10 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              What is AWS Student Builder Group?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              AWS Student Builder Group (AWS SBG) is a student-led initiative helping university students explore cloud technologies through hands-on practice, peer learning, and collaborative projects.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              At the <strong className="text-white">COMSATS Lahore Campus</strong>, our chapter brings together curious beginners and experienced student developers to explore compute, storage, databases, networking, serverless, and cloud architecture fundamentals in an inclusive, supportive environment.
            </p>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono text-slate-400">Key Pillars:</span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-200 border border-white/10">
                Cloud Architecture
              </span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-200 border border-white/10">
                Hackathons & Sprints
              </span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-200 border border-white/10">
                Peer Mentorship
              </span>
            </div>
          </div>

          <div>
            <Button
              to="/about"
              variant="outline"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4 text-[#FF9900]" />}
            >
              Learn More About Our Chapter
            </Button>
          </div>
        </div>

        {/* Right Side: What You Learn */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0B0F19] border border-[#FF9900]/20 space-y-6 shadow-xl">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF9900]" />
              Why Students Join AWS SBG
            </h4>

            <div className="space-y-4">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-[#FF9900] shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-white mb-1">{h.title}</h5>
                      <p className="text-xs text-slate-400 leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Open to all COMSATS Lahore students</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
