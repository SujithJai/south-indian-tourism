import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import FlightMapIntro from './components/FlightMapIntro';
import CinematicDroneVoyage from './components/CinematicDroneVoyage';
import WebsiteSectionsGrid from './components/WebsiteSectionsGrid';
import FeaturedPackagesSection from './components/FeaturedPackagesSection';
import PlanYourTripSection from './components/PlanYourTripSection';
import Footer from './components/Footer';
import WatchVideoModal from './components/WatchVideoModal';
import SectionDetailModal from './components/SectionDetailModal';
import DestinationSearchModal from './components/DestinationSearchModal';
import BookingModal from './components/BookingModal';
import FloatingActions from './components/FloatingActions';
import { CINEMATIC_JOURNEY_STAGES } from './data/tourismData';

export default function App() {
  const [showFlightIntro, setShowFlightIntro] = useState(true);
  const [isIntroFading, setIsIntroFading] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState(null);
  
  // Watch Video Modal state
  const [activeVideoModalStage, setActiveVideoModalStage] = useState(null);

  // Section Detail Modal state (for the 6 website section cards)
  const [activeSectionCardId, setActiveSectionCardId] = useState(null);

  // Lock body scroll while opening flight intro is active
  useEffect(() => {
    if (showFlightIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showFlightIntro]);

  const handleFinishIntro = useCallback(() => {
    setIsIntroFading(true);
    setTimeout(() => {
      setShowFlightIntro(false);
      setIsIntroFading(false);
    }, 900);
  }, []);

  const handleReplayIntro = useCallback(() => {
    setIsIntroFading(false);
    setShowFlightIntro(true);
  }, []);

  const handleOpenBooking = (data = null) => {
    setModalInitialData(data);
    setIsBookingModalOpen(true);
  };

  const handleOpenVideoModal = (stage) => {
    setActiveVideoModalStage(stage);
  };

  const handleSectionCardClick = (cardId) => {
    if (cardId === 'plan-your-trip') {
      handleOpenBooking();
    } else {
      setActiveSectionCardId(cardId);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F4E6] text-[#5A3E2B] flex flex-col font-sans selection:bg-[#F4B400] selection:text-[#0B4D3B]">
      
      {/* 1. Opening Flight Map Animation (0 - 10s) with Cinematic Dissolve into Hero */}
      {showFlightIntro && (
        <div 
          className={`fixed inset-0 z-50 transition-opacity duration-1000 ease-in-out ${
            isIntroFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <FlightMapIntro onCompleteIntro={handleFinishIntro} />
        </div>
      )}

      {/* Top Fixed Minimal Luxury Navbar */}
      <Navbar 
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBookingModal={() => handleOpenBooking()}
      />

      <main className="flex-1">
        {/* 2. Full-Page Scroll-Driven Cinematic Drone Voyage (Tamil Nadu -> Kerala -> Karnataka -> Andhra & Telangana) */}
        <CinematicDroneVoyage 
          onOpenBookingModal={handleOpenBooking}
          onOpenVideoModal={handleOpenVideoModal}
          onReplayFlightIntro={handleReplayIntro}
        />

        {/* 3. The 6 Website Section Cards (After the Video Journey - After 50s) */}
        <WebsiteSectionsGrid 
          onCardClick={handleSectionCardClick}
        />

        {/* 4. Tours & Packages */}
        <div id="packages-section">
          <FeaturedPackagesSection 
            onOpenBookingModal={(pkg) => handleOpenBooking(pkg)}
          />
        </div>

        {/* 5. Plan Your Trip Form */}
        <PlanYourTripSection 
          initialData={modalInitialData}
        />
      </main>

      {/* 6. Footer in Deep Green #0B4D3B & Sandal #E7CFA3 */}
      <div id="about-section">
        <Footer 
          onSelectDestination={(dest) => handleOpenBooking({ destination: dest.name })}
        />
      </div>

      {/* Floating Action Hub (WhatsApp & Phone) */}
      <FloatingActions 
        onOpenBookingModal={() => handleOpenBooking()}
      />

      {/* Watch Video Fullscreen Modal */}
      <WatchVideoModal 
        isOpen={!!activeVideoModalStage}
        stageData={activeVideoModalStage}
        onClose={() => setActiveVideoModalStage(null)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Section Detail Modal (for 6 cards) */}
      <SectionDetailModal 
        activeCardId={activeSectionCardId}
        onClose={() => setActiveSectionCardId(null)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Destination Search Modal */}
      <DestinationSearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectDestination={(dest) => handleOpenBooking({ destination: dest.name })}
      />

      {/* Booking / Enquiry Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialData={modalInitialData}
      />

    </div>
  );
}
