import React from 'react';
import CinematicDroneVoyage from '../components/CinematicDroneVoyage';
import BusinessStatisticsSection from '../components/BusinessStatisticsSection';
import ExploreSouthIndiaSection from '../components/ExploreSouthIndiaSection';
import PopularDestinationsSection from '../components/PopularDestinationsSection';
import ExperiencesSection from '../components/ExperiencesSection';
import FeaturedPackagesSection from '../components/FeaturedPackagesSection';
import ShivaTempleSection from '../components/ShivaTempleSection';
import TravelGuideSection from '../components/TravelGuideSection';
import CultureHeritageSection from '../components/CultureHeritageSection';
import PlanYourTripSection from '../components/PlanYourTripSection';

export default function HomePage({ onOpenBooking, onOpenVideoModal, onReplayFlightIntro }) {
  return (
    <div>
      {/* SECTION 01 – Cinematic Hero Video Banner (Preserved 100%) */}
      <CinematicDroneVoyage
        onOpenBookingModal={onOpenBooking}
        onOpenVideoModal={onOpenVideoModal}
        onReplayFlightIntro={onReplayFlightIntro}
      />

      {/* SECTION 02 – Business Statistics */}
      <BusinessStatisticsSection />

      {/* SECTION 03 – Explore South India (4 Regions) */}
      <ExploreSouthIndiaSection />

      {/* SECTION 04 – Popular Destinations */}
      <PopularDestinationsSection 
        onSelectDestination={(dest) => onOpenBooking({ destination: dest.name, state: dest.state })} 
      />

      {/* SECTION 05 – Experiences (8 Curated Categories) */}
      <ExperiencesSection />

      {/* SECTION 06 – Tour Packages */}
      <FeaturedPackagesSection 
        onOpenBookingModal={(pkg) => onOpenBooking(pkg)}
      />

      {/* SECTION 07 – Shiva Temple & Spiritual Tourism */}
      <ShivaTempleSection 
        onOpenBookingModal={onOpenBooking}
      />

      {/* SECTION 08 – Travel Guide */}
      <TravelGuideSection />

      {/* SECTION 09 – Culture & Heritage */}
      <CultureHeritageSection />

      {/* SECTION 10 – Plan Your Trip Form */}
      <PlanYourTripSection />
    </div>
  );
}
