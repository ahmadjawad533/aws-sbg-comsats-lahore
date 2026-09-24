import React, { useState, createContext, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { JoinCommunityModal } from '@/components/layout/JoinCommunityModal';
import { ScrollToTop } from '@/components/common/ScrollToTop';

interface CommunityContextType {
  openJoinModal: () => void;
}

const CommunityContext = createContext<CommunityContextType>({
  openJoinModal: () => {},
});

export const useCommunityModal = () => useContext(CommunityContext);

export const MainLayout: React.FC = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const openJoinModal = () => setIsJoinModalOpen(true);
  const closeJoinModal = () => setIsJoinModalOpen(false);

  return (
    <CommunityContext.Provider value={{ openJoinModal }}>
      <div className="flex flex-col min-h-screen bg-[#080B11] text-slate-100 selection:bg-[#FF9900]/30 selection:text-white relative">
        {/* Skip to Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#FF9900] focus:text-black focus:font-semibold focus:rounded-lg"
        >
          Skip to main content
        </a>

        <ScrollToTop />
        <Navbar onOpenJoinModal={openJoinModal} />

        <main id="main-content" className="flex-1">
          <Outlet />
        </main>

        <Footer />

        <JoinCommunityModal isOpen={isJoinModalOpen} onClose={closeJoinModal} />
      </div>
    </CommunityContext.Provider>
  );
};
