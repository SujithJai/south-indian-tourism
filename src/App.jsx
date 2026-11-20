import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CinematicDroneVoyage from './components/CinematicDroneVoyage';
import CategoryStrip from './components/CategoryStrip';
import PopularDestinationsSection from './components/PopularDestinationsSection';
import TripBannerCTA from './components/TripBannerCTA';
import FeaturedPackagesSection from './components/FeaturedPackagesSection';
import ShivaTempleSection from './components/ShivaTempleSection';
import VehicleFleetSection from './components/VehicleFleetSection';
import PlanYourTripSection from './components/PlanYourTripSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import AboutUsSection from './components/AboutUsSection';
import ContactUsSection from './components/ContactUsSection';
import Footer from './components/Footer';
import DestinationSearchModal from './components/DestinationSearchModal';
import BookingModal from './components/BookingModal';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState(null);

  const handleOpenBooking = (data = null) => {
    setModalInitialData(data);
    setIsBookingModalOpen(true);
  };

  const handleSelectDestination = (dest) => {
    handleOpenBooking({
      destination: dest.name,
      category: dest.category
    });
  };

  const handleSelectCategory = (catName) => {
    handleOpenBooking({
      tourType: `${catName} Tour`,
      destination: catName === 'Temples' ? 'Madurai / Thanjavur' : catName === 'Hill Stations' ? 'Ooty / Munnar' : 'South India'
    });
  };

  return (
    <div className="min-h-screen bg-[#F0F7F4] text-[#1F2937] flex flex-col font-sans selection:bg-[#F4B400] selection:text-[#1F2937]">
      
      {/* Top Fixed Navbar */}
      <Navbar 
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBookingModal={() => handleOpenBooking()}
      />

      <main className="flex-1">
        {/* 1. Cinematic Fullscreen 4K Drone Voyage (Tamil Nadu -> Kerala -> Karnataka -> Andhra Pradesh) */}
        <CinematicDroneVoyage 
          onOpenBookingModal={(data) => handleOpenBooking(data)}
        />

        {/* 2. Category Strip from UI Reference Guide (Temples, Hill Stations, Beaches, Backwaters, Wildlife, Culture) */}
        <div id="explore-sections">
          <CategoryStrip onSelectCategory={handleSelectCategory} />
        </div>

        {/* 3. Popular Destinations Section (Madurai, Munnar, Hampi, Pondicherry, Ooty, Coorg) */}
        <PopularDestinationsSection 
          onSelectDestination={handleSelectDestination}
        />

        {/* 4. Plan Your South India Trip Banner CTA */}
        <TripBannerCTA 
          onOpenBookingModal={() => handleOpenBooking()}
        />

        {/* 5. Featured Tour Packages (5, 6, 7 Days) */}
        <FeaturedPackagesSection 
          onOpenBookingModal={(pkg) => handleOpenBooking(pkg)}
        />

        {/* 6. Dedicated Shiva Temple Tours */}
        <ShivaTempleSection 
          onOpenBookingModal={(data) => handleOpenBooking(data)}
        />

        {/* 7. Luxury Vehicle & Tempo Traveller Fleet */}
        <VehicleFleetSection 
          onOpenBookingModal={(data) => handleOpenBooking(data)}
        />

        {/* 8. Plan Your Perfect Trip - Lead Generation Quote Form */}
        <PlanYourTripSection 
          initialData={modalInitialData}
        />

        {/* 9. Traveller Stories / Testimonials */}
        <TestimonialsSection />

        {/* 10. Frequently Asked Questions */}
        <FaqSection />

        {/* 11. About Us (Mohanur, Namakkal) */}
        <AboutUsSection />

        {/* 12. Contact Us */}
        <ContactUsSection 
          onOpenBookingModal={() => handleOpenBooking()}
        />
      </main>

      {/* 13. Complete Footer */}
      <Footer 
        onSelectDestination={handleSelectDestination}
      />

      {/* Floating Action Hub (WhatsApp & Phone) */}
      <FloatingActions 
        onOpenBookingModal={() => handleOpenBooking()}
      />

      {/* Destination Search Modal */}
      <DestinationSearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectDestination={handleSelectDestination}
      />

      {/* Quick Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialData={modalInitialData}
      />

    </div>
  );
}
