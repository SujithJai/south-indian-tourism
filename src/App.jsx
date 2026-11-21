import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import FlightMapIntro from './components/FlightMapIntro';
import BookingModal from './components/BookingModal';
import DestinationSearchModal from './components/DestinationSearchModal';
import WatchVideoModal from './components/WatchVideoModal';

// Dedicated Landing Pages
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import ExperiencesPage from './pages/ExperiencesPage';
import TourPackagesPage from './pages/TourPackagesPage';
import ShivaTemplesPage from './pages/ShivaTemplesPage';
import TravelGuidePage from './pages/TravelGuidePage';
import CultureHeritagePage from './pages/CultureHeritagePage';
import PlanYourTripPage from './pages/PlanYourTripPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';

export default function App() {
  const [showFlightIntro, setShowFlightIntro] = useState(true);
  const [isIntroFading, setIsIntroFading] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState(null);
  
  // Watch Video Modal state
  const [activeVideoModalStage, setActiveVideoModalStage] = useState(null);

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

  return (
    <BrowserRouter>
      {/* Scroll to Top on every route change */}
      <ScrollToTop />

      <div className="min-h-screen bg-[#F8F4E6] text-[#5A3E2B] flex flex-col font-sans selection:bg-[#F4B400] selection:text-[#0B4D3B]">
        
        {/* 1. Opening Flight Map Animation with Cinematic Dissolve */}
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

        {/* Main Routed Content */}
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenBooking={handleOpenBooking}
                  onOpenVideoModal={handleOpenVideoModal}
                  onReplayFlightIntro={handleReplayIntro}
                />
              } 
            />
            <Route 
              path="/destinations" 
              element={<DestinationsPage onOpenBooking={handleOpenBooking} />} 
            />
            <Route 
              path="/experiences" 
              element={<ExperiencesPage onOpenBooking={handleOpenBooking} />} 
            />
            <Route 
              path="/tour-packages" 
              element={<TourPackagesPage onOpenBooking={handleOpenBooking} />} 
            />
            <Route 
              path="/shiva-temples" 
              element={<ShivaTemplesPage onOpenBooking={handleOpenBooking} />} 
            />
            <Route 
              path="/travel-guide" 
              element={<TravelGuidePage onOpenBooking={handleOpenBooking} />} 
            />
            <Route 
              path="/culture-heritage" 
              element={<CultureHeritagePage onOpenBooking={handleOpenBooking} />} 
            />
            <Route 
              path="/plan-your-trip" 
              element={<PlanYourTripPage initialData={modalInitialData} />} 
            />
            <Route 
              path="/about" 
              element={<AboutUsPage onOpenBooking={handleOpenBooking} />} 
            />
            <Route 
              path="/contact" 
              element={<ContactUsPage onOpenBooking={handleOpenBooking} />} 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer in Deep Green #0B4D3B & Sandal #E7CFA3 */}
        <Footer 
          onSelectDestination={(dest) => handleOpenBooking({ destination: dest.name })}
        />

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
    </BrowserRouter>
  );
}
