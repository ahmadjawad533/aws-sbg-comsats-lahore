import React from 'react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { HeroSection } from '@/sections/HeroSection';
import { CommunityImpactSection } from '@/sections/CommunityImpactSection';
import { AboutPreviewSection } from '@/sections/AboutPreviewSection';
import { WhatWeDoSection } from '@/sections/WhatWeDoSection';
import { FeaturedEventsSection } from '@/sections/FeaturedEventsSection';
import { ReadyToBuildCTASection } from '@/sections/ReadyToBuildCTASection';

export const HomePage: React.FC = () => {
  useDocumentTitle(
    'Home',
    'Official website of AWS Student Builder Group at COMSATS University Islamabad, Lahore Campus. Helping students learn cloud technologies and build real projects.'
  );

  return (
    <div className="space-y-4">
      <HeroSection />
      <CommunityImpactSection />
      <AboutPreviewSection />
      <WhatWeDoSection />
      <FeaturedEventsSection />
      <ReadyToBuildCTASection />
    </div>
  );
};
