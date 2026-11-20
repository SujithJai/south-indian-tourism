import React, { useState } from 'react';
import { 
  TOUR_PACKAGES, 
  BUSINESS_INFO, 
  THEME_COLORS 
} from '../data/tourismData';
import { 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Check, 
  Calendar, 
  ArrowRight, 
  Info, 
  X, 
  Sparkles, 
  Star 
} from 'lucide-react';

export default function FeaturedPackagesSection({ onOpenBookingModal }) {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [filterState, setFilterState] = useState('All');

  const filtered = filterState === 'All'
    ? TOUR_PACKAGES
    : TOUR_PACKAGES.filter(p => p.state.toLowerCase().includes(filterState.toLowerCase()) || (filterState === 'Shiva' && p.category.includes('Shiva')));

  return (
    <section id="packages" className="py-20 bg-[#F0F7F4] text-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8E6] border border-[#F4B400]/40 text-[#0B4D3B] text-xs font-bold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F4B400]" />
            <span>Curated Travel Experiences</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B4D3B] tracking-tight">
            Popular South India <br />
            <span className="text-[#147D64]">Tour Packages</span>
          </h2>
          <p className="mt-3 text-[#6B7280] text-sm sm:text-base font-medium">
            Day-by-day travel plans across Tamil Nadu, Karnataka, Kerala & Shiva Pilgrimages with comfortable transportation and verified drivers.
          </p>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: 'All', label: 'All Packages' },
              { id: 'Tamil Nadu', label: 'Tamil Nadu' },
              { id: 'Karnataka', label: 'Karnataka' },
              { id: 'Kerala', label: 'Kerala' },
              { id: 'Shiva', label: 'Shiva Pilgrimage' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilterState(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  filterState === tab.id
                    ? 'bg-[#147D64] text-white shadow-lg shadow-[#147D64]/30 scale-105'
                    : 'bg-white text-[#1F2937] hover:bg-[#FFF8E6] border border-[#147D64]/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(pkg => (
            <div
              key={pkg.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#147D64]/15 hover:border-[#F4B400] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-lg hover:shadow-2xl"
            >
              <div>
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#F4B400] text-[#1F2937] text-[11px] font-extrabold tracking-wide uppercase shadow">
                    {pkg.badge}
                  </span>

                  {/* Duration Pill */}
                  <span className="absolute bottom-3 left-4 px-3 py-1 rounded-lg bg-black/75 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#F4B400]" />
                    {pkg.duration}
                  </span>

                  {/* Price Pill */}
                  <div className="absolute bottom-3 right-4 text-right">
                    <span className="text-[10px] uppercase text-[#FFD166] font-bold block">Starting at</span>
                    <span className="text-xl font-extrabold text-[#F4B400] font-heading leading-none drop-shadow">{pkg.price}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#147D64] block mb-1">
                    {pkg.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-[#1F2937] group-hover:text-[#0B4D3B] transition-colors leading-snug">
                    {pkg.title}
                  </h3>

                  {/* Route */}
                  <div className="mt-3.5 p-3 rounded-xl bg-[#F0F7F4] border border-[#147D64]/15 flex items-start gap-2 text-xs text-[#1F2937]">
                    <MapPin className="w-4 h-4 text-[#147D64] shrink-0 mt-0.5" />
                    <span className="leading-snug font-medium">
                      <strong className="text-[#0B4D3B]">Route:</strong> {pkg.route}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-[#6B7280] line-clamp-2 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Inclusions */}
                  <div className="mt-4 space-y-1.5">
                    {pkg.inclusions.slice(0, 3).map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-[#1F2937]">
                        <Check className="w-3.5 h-3.5 text-[#147D64] shrink-0" />
                        <span className="truncate">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-[#147D64]/10 mt-4 space-y-2.5">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${BUSINESS_INFO.primaryPhone}`}
                    className="py-2.5 px-3 rounded-xl bg-[#F4B400] hover:bg-[#e0a600] text-[#1F2937] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call & Book</span>
                  </a>

                  <a
                    href={`https://wa.me/916380939670?text=Hi%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20(${encodeURIComponent(pkg.duration)}).%20Please%20send%20me%20details.`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-[#147D64] hover:bg-[#0f6752] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <button
                  onClick={() => setSelectedPackage(pkg)}
                  className="w-full py-2.5 rounded-xl bg-[#F0F7F4] hover:bg-[#FFF8E6] text-xs font-bold text-[#0B4D3B] border border-[#147D64]/20 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Info className="w-3.5 h-3.5 text-[#147D64]" />
                  <span>View Day-by-Day Itinerary</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Day-by-Day Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPackage(null)}
          ></div>
          <div className="relative bg-white border border-[#147D64]/30 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 z-10 shadow-2xl text-[#1F2937]">
            
            <button
              onClick={() => setSelectedPackage(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#F0F7F4] text-[#1F2937] hover:bg-[#FFF8E6] border border-[#147D64]/20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pr-10">
              <span className="text-xs font-bold uppercase text-[#147D64] tracking-wider">
                {selectedPackage.duration} • {selectedPackage.category}
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#0B4D3B] mt-1">
                {selectedPackage.title}
              </h3>
              <p className="text-xs text-[#6B7280] mt-0.5">
                {selectedPackage.route}
              </p>
            </div>

            {/* Day-by-Day */}
            <div className="mt-6 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#0B4D3B] flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#147D64]" />
                <span>Day-by-Day Travel Plan</span>
              </h4>

              <div className="space-y-2.5">
                {selectedPackage.itinerary.map((dayItem, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-[#F0F7F4] border border-[#147D64]/15">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#147D64] text-white font-bold text-xs mb-1">
                      {dayItem.day}
                    </span>
                    <p className="text-xs sm:text-sm text-[#1F2937] leading-relaxed">
                      {dayItem.plan}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions */}
            <div className="mt-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#0B4D3B] mb-2">
                Package Inclusions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedPackage.inclusions.map((inc, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#1F2937]">
                    <Check className="w-4 h-4 text-[#147D64] shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal CTAs */}
            <div className="mt-8 pt-6 border-t border-[#147D64]/20 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-[#6B7280] block">Starting Price</span>
                <span className="font-heading text-2xl font-bold text-[#0B4D3B]">{selectedPackage.price}</span>
                <span className="text-xs text-[#6B7280] ml-1">{selectedPackage.priceUnit}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  className="px-5 py-2.5 rounded-xl bg-[#F0F7F4] border border-[#147D64]/30 text-[#0B4D3B] text-xs font-bold flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_INFO.primaryPhone}</span>
                </a>
                <a
                  href={`https://wa.me/916380939670?text=Hello%2C%20I%20want%20to%20book%20the%20${encodeURIComponent(selectedPackage.title)}%20package.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#147D64] hover:bg-[#0f6752] text-white text-xs font-bold flex items-center gap-2 shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
