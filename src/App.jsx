import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroVideoSection from './components/HeroVideoSection';
import DroneShowcaseSection from './components/DroneShowcaseSection';
import FeaturedPackagesSection from './components/FeaturedPackagesSection';
import ShivaTempleSection from './components/ShivaTempleSection';
import VehicleFleetSection from './components/VehicleFleetSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
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

  const handleSelectDestinationFromSearch = (dest) => {
    handleOpenBooking({ destination: dest.name, category: dest.category });
  };

  return (
    <div className="min-h-screen bg-emerald-950 text-slate-100 flex flex-col font-sans">
      
      {/* Top Fixed Navigation */}
      <Navbar 
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBookingModal={() => handleOpenBooking()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Drone Section */}
        <HeroVideoSection 
          onOpenBookingModal={() => handleOpenBooking()}
        />

        {/* 2. Karnataka & Tamil Nadu Cinematic Drone Showcase */}
        <DroneShowcaseSection 
          onSelectPackageForBooking={(place) => handleOpenBooking(place)}
        />

        {/* 3. Featured Tour Packages (5, 6, 7 Days) */}
        <FeaturedPackagesSection 
          onOpenBookingModal={() => handleOpenBooking()}
        />

        {/* 4. Dedicated Shiva Temple Tours (Pancha Bhoota & Jyotirlinga) */}
        <ShivaTempleSection 
          onOpenBookingModal={(data) => handleOpenBooking(data)}
        />

        {/* 5. Luxury Vehicle & Tempo Traveller Fleet */}
        <VehicleFleetSection 
          onOpenBookingModal={(data) => handleOpenBooking(data)}
        />

        {/* 6. Why Choose Us (15 Years Experience & Highlights) */}
        <WhyChooseUsSection />

        {/* 7. Plan Your Trip / Lead Generation Form */}
        <PlanYourTripSection initialData={modalInitialData} />

        {/* 8. Traveller Testimonials */}
        <TestimonialsSection />

        {/* 9. Frequently Asked Questions */}
        <FaqSection />

        {/* 10. About Us (Mohanur, Namakkal) */}
        <AboutUsSection />

        {/* 11. Contact Us */}
        <ContactUsSection 
          onOpenBookingModal={() => handleOpenBooking()}
        />
      </main>

      {/* 12. Complete 4-Column Footer */}
      <Footer 
        onSelectDestination={(dest) => handleOpenBooking({ destination: dest.name })}
      />

      {/* Floating Action Hub (WhatsApp & Phone) */}
      <FloatingActions 
        onOpenBookingModal={() => handleOpenBooking()}
      />

      {/* Destination Search Modal */}
      <DestinationSearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectDestination={handleSelectDestinationFromSearch}
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
