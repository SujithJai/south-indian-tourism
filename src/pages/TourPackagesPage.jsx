import React, { useState } from 'react';
import { TOUR_PACKAGES, BUSINESS_INFO } from '../data/tourismData';
import { Clock, MapPin, Check, X, Phone, MessageCircle, Calendar, ShieldCheck, Info } from 'lucide-react';

export default function TourPackagesPage({ onOpenBooking }) {
  const [selectedState, setSelectedState] = useState('All');
  const [activeItineraryPkg, setActiveItineraryPkg] = useState(null);

  const states = ['All', 'Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh'];

  const filtered = selectedState === 'All'
    ? TOUR_PACKAGES
    : TOUR_PACKAGES.filter(p => p.state === selectedState);

  return (
    <div className="bg-[#F8F4E6] text-[#5A3E2B] min-h-screen pt-24 pb-20">
      
      {/* 1. Hero Banner */}
      <div className="relative py-16 sm:py-24 bg-[#0B4D3B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img 
            src="/images/tourbus.jpg" 
            alt="South Indian Tour Packages" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B4D3B] via-[#0B4D3B]/70 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#147D64]/60 border border-[#F4B400]/40 text-[#F4B400] text-xs font-bold mb-4 shadow">
            <Calendar className="w-3.5 h-3.5" />
            <span>Dedicated Landing Page • Page 04</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            South India Tour Packages
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed">
            All-inclusive, fully customizable day-by-day itineraries with private chauffeured AC vehicles, handpicked hotel stays, and verified local expertise.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* 2. Filter Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {states.map(st => (
            <button
              key={st}
              onClick={() => setSelectedState(st)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm ${
                selectedState === st
                  ? 'bg-[#0B4D3B] text-[#F4B400] shadow-md scale-105'
                  : 'bg-white text-[#5A3E2B] hover:bg-[#E7CFA3]/30 border border-[#147D64]/15'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* 3. Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filtered.map(pkg => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#147D64]/15 hover:border-[#F4B400] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#F4B400] text-[#0B4D3B] text-xs font-extrabold uppercase tracking-wider shadow">
                    {pkg.badge}
                  </span>

                  {/* Duration Pill */}
                  <span className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#F4B400]" />
                    {pkg.duration}
                  </span>

                  {/* Price Pill */}
                  <div className="absolute bottom-4 right-4 text-right">
                    <span className="text-[10px] uppercase text-[#FFD166] font-bold block">Starting Price</span>
                    <span className="text-2xl font-extrabold text-[#F4B400] font-heading leading-none drop-shadow">{pkg.price}</span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#147D64] block mb-1">
                    {pkg.state} • {pkg.category}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-[#0B4D3B] group-hover:text-[#147D64] transition-colors leading-snug">
                    {pkg.title}
                  </h3>

                  {/* Route */}
                  <div className="mt-4 p-3.5 rounded-2xl bg-[#F8F4E6] border border-[#147D64]/15 flex items-start gap-2.5 text-xs text-[#5A3E2B]">
                    <MapPin className="w-4 h-4 text-[#147D64] shrink-0 mt-0.5" />
                    <span className="font-medium">
                      <strong className="text-[#0B4D3B]">Route:</strong> {pkg.route}
                    </span>
                  </div>

                  <p className="mt-3.5 text-xs sm:text-sm text-[#5A3E2B]/85 leading-relaxed font-medium">
                    {pkg.description}
                  </p>

                  {/* Inclusions Overview */}
                  <div className="mt-4 pt-4 border-t border-[#147D64]/10">
                    <span className="text-[11px] font-bold uppercase text-[#0B4D3B] block mb-2">Package Inclusions:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#5A3E2B]/85">
                      {pkg.inclusions.map((inc, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#147D64] shrink-0" />
                          <span className="truncate">{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Call & Book, WhatsApp, View Itinerary */}
              <div className="p-6 sm:p-8 pt-0 border-t border-[#147D64]/10 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${BUSINESS_INFO.primaryPhone}`}
                    className="py-3 px-4 rounded-xl bg-[#F4B400] hover:bg-[#e0a600] text-[#0B4D3B] text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call & Book</span>
                  </a>

                  <a
                    href={`https://wa.me/916380939670?text=Hi%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20(${encodeURIComponent(pkg.duration)}).%20Please%20send%20details.`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-3 px-4 rounded-xl bg-[#147D64] hover:bg-[#0f6752] text-white text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <button
                  onClick={() => setActiveItineraryPkg(pkg)}
                  className="w-full py-2.5 rounded-xl bg-[#F8F4E6] hover:bg-[#E7CFA3]/50 text-xs font-bold text-[#0B4D3B] border border-[#147D64]/20 flex items-center justify-center gap-2 transition-colors"
                >
                  <Info className="w-4 h-4 text-[#147D64]" />
                  <span>View Day-by-Day Detailed Itinerary</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Day-by-Day Modal */}
      {activeItineraryPkg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveItineraryPkg(null)}
          ></div>
          <div className="relative bg-white border border-[#147D64]/30 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 z-10 shadow-2xl text-[#5A3E2B]">
            <button
              onClick={() => setActiveItineraryPkg(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#F8F4E6] text-[#0B4D3B] hover:bg-[#F4B400] transition-colors border border-[#147D64]/20 shadow"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pr-10">
              <span className="text-xs font-bold uppercase text-[#147D64] tracking-wider">
                {activeItineraryPkg.duration} • {activeItineraryPkg.category}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0B4D3B] mt-1">
                {activeItineraryPkg.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#147D64] font-semibold mt-1">
                Route: {activeItineraryPkg.route}
              </p>
            </div>

            {/* Day by Day List */}
            <div className="mt-6 space-y-4">
              <h4 className="text-xs font-extrabold uppercase text-[#0B4D3B] tracking-wider">
                Day-by-Day Tour Schedule:
              </h4>
              {activeItineraryPkg.itinerary.map((dayPlan, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#F8F4E6] border border-[#147D64]/15">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0B4D3B] text-[#F4B400] text-[10px] font-extrabold uppercase tracking-wide">
                    {dayPlan.day}
                  </span>
                  <p className="text-xs sm:text-sm text-[#5A3E2B] mt-2 font-medium leading-relaxed">
                    {dayPlan.plan}
                  </p>
                </div>
              ))}
            </div>

            {/* Pricing & CTA */}
            <div className="mt-8 pt-6 border-t border-[#147D64]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#5A3E2B]/75 block font-semibold">Starting from</span>
                <span className="text-2xl font-extrabold text-[#0B4D3B] font-heading">{activeItineraryPkg.price}</span>
                <span className="text-xs text-[#147D64] ml-1">/ person</span>
              </div>
              <button
                onClick={() => {
                  const p = activeItineraryPkg;
                  setActiveItineraryPkg(null);
                  onOpenBooking(p);
                }}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#F4B400] hover:bg-[#e5a700] text-[#0B4D3B] font-extrabold text-xs uppercase tracking-wider shadow-md"
              >
                Book This Package Now
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
