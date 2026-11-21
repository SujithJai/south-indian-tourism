import React from 'react';
import { TRAVEL_GUIDE_DATA } from '../data/tourismData';
import { Compass, Calendar, Sun, CloudRain, Car, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TravelGuideSection() {
  return (
    <section id="travel-guide-section" className="relative bg-[#F8F4E6] text-[#5A3E2B] py-16 sm:py-24 border-b border-[#147D64]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#147D64]/15">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#147D64]/20 text-[#0B4D3B] text-xs font-bold uppercase tracking-wider mb-2.5 shadow-sm">
              <Compass className="w-3.5 h-3.5 text-[#147D64]" />
              <span>Section 08 • Essential Knowledge</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B4D3B] tracking-tight">
              South India Travel Guide
            </h2>
            <p className="text-sm sm:text-base text-[#5A3E2B]/80 mt-1 font-medium max-w-2xl">
              Everything you need to know before you embark: optimal seasons, route logistics, packing tips, and local culinary specialties.
            </p>
          </div>

          <Link
            to="/travel-guide"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B4D3B] text-white hover:bg-[#147D64] text-xs font-bold uppercase tracking-wider transition-all shadow-md group shrink-0"
          >
            <span>Read Full Travel Guide</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Overview Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Best Seasons */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#147D64]/15 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0B4D3B] text-[#F4B400] flex items-center justify-center mb-6">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#0B4D3B]">
                When to Visit
              </h3>
              <p className="text-xs text-[#5A3E2B]/80 mt-2 font-medium">
                {TRAVEL_GUIDE_DATA.bestTime.summary}
              </p>

              <div className="mt-5 space-y-3">
                {TRAVEL_GUIDE_DATA.bestTime.seasons.map((s, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-[#F8F4E6] border border-[#147D64]/10 text-xs">
                    <div className="flex justify-between items-center font-bold text-[#0B4D3B]">
                      <span>{s.name}</span>
                      <span className="text-[11px] text-[#F4B400] bg-[#0B4D3B] px-2 py-0.5 rounded-full">{s.temp}</span>
                    </div>
                    <p className="text-[11px] text-[#5A3E2B]/75 mt-1">{s.verdict}</p>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/travel-guide#seasons"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#147D64] hover:text-[#0B4D3B]"
            >
              <span>Explore Seasonal Tips</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: Transportation & Routes */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#147D64]/15 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0B4D3B] text-[#F4B400] flex items-center justify-center mb-6">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#0B4D3B]">
                Transportation
              </h3>
              <p className="text-xs text-[#5A3E2B]/80 mt-2 font-medium">
                Smooth highway connectivity and scenic rail corridors across all four southern states.
              </p>

              <div className="mt-5 space-y-3">
                {TRAVEL_GUIDE_DATA.transportation.map((t, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-[#F8F4E6] border border-[#147D64]/10 text-xs">
                    <span className="font-bold text-[#0B4D3B] block">{t.mode}</span>
                    <p className="text-[11px] text-[#5A3E2B]/75 mt-1">{t.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/travel-guide#transport"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#147D64] hover:text-[#0B4D3B]"
            >
              <span>View Route Options</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3: Regional Food Specialties */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#147D64]/15 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0B4D3B] text-[#F4B400] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#0B4D3B]">
                Culinary Heritage
              </h3>
              <p className="text-xs text-[#5A3E2B]/80 mt-2 font-medium">
                Savor authentic vegetarian feasts on fresh banana leaves and fragrant spice infusions.
              </p>

              <div className="mt-5 space-y-3">
                {TRAVEL_GUIDE_DATA.foodSpecialties.map((f, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-[#F8F4E6] border border-[#147D64]/10 text-xs">
                    <span className="font-bold text-[#0B4D3B] block">{f.state}</span>
                    <p className="text-[11px] text-[#5A3E2B]/75 mt-1 font-medium">{f.dishes}</p>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/travel-guide#food"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#147D64] hover:text-[#0B4D3B]"
            >
              <span>Read Food Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
