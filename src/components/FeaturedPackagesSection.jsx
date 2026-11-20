import React, { useState } from 'react';
import { 
  TOUR_PACKAGES, 
  BUSINESS_INFO 
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
  Compass 
} from 'lucide-react';
import GreenWaveDivider from './GreenWaveDivider';

export default function FeaturedPackagesSection({ onOpenBookingModal }) {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [filterState, setFilterState] = useState('All');

  const filtered = filterState === 'All'
    ? TOUR_PACKAGES
    : TOUR_PACKAGES.filter(p => p.state.toLowerCase().includes(filterState.toLowerCase()) || (filterState === 'Shiva' && p.category.includes('Shiva')));

  return (
    <section id="packages" className="relative bg-emerald-950/80 py-20 text-white overflow-hidden">
      
      {/* Background radial atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Curated Travel Experiences • சிறந்த டூர் பேக்கேஜ்கள்</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Popular South India <br />
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
              Tour Packages
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-xs sm:text-sm md:text-base">
            Day-by-day planned itineraries across Tamil Nadu, Karnataka, Kerala & Shiva Pilgrimages with comfortable transportation and experienced drivers.
          </p>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: 'All', label: 'All Packages (அனைத்தும்)' },
              { id: 'Tamil Nadu', label: 'Tamil Nadu' },
              { id: 'Karnataka', label: 'Karnataka' },
              { id: 'Kerala', label: 'Kerala' },
              { id: 'Shiva', label: 'Shiva Pilgrimage' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilterState(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  filterState === tab.id
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 scale-105'
                    : 'bg-emerald-900/40 hover:bg-emerald-800 text-emerald-300 border border-emerald-500/20'
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
              className="group glass-card rounded-3xl overflow-hidden border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl"
            >
              {/* Package Image & Badges */}
              <div>
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent"></div>

                  {/* Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-bold tracking-wide uppercase shadow">
                    {pkg.badge}
                  </span>

                  {/* Duration Pill */}
                  <span className="absolute bottom-3 left-4 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    {pkg.duration}
                  </span>

                  {/* Price Pill */}
                  <div className="absolute bottom-3 right-4 text-right">
                    <span className="text-[10px] uppercase text-emerald-300 font-semibold block">Starts From</span>
                    <span className="text-lg font-bold text-amber-300 font-cinzel leading-none">{pkg.price}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                    {pkg.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-emerald-400/80 font-medium mt-0.5">
                    {pkg.titleTa}
                  </p>

                  {/* Route */}
                  <div className="mt-3.5 p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/20 flex items-start gap-2 text-xs text-slate-300">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-snug font-medium text-emerald-200">
                      <strong>Route:</strong> {pkg.route}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Top inclusions preview */}
                  <div className="mt-4 space-y-1.5">
                    {pkg.inclusions.slice(0, 3).map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-emerald-800/40 mt-4 space-y-2.5">
                <div className="grid grid-cols-2 gap-2">
                  {/* Call & Book */}
                  <a
                    href={`tel:${BUSINESS_INFO.primaryPhone}`}
                    className="py-2.5 px-3 rounded-xl bg-slate-900 border border-emerald-500/30 hover:border-emerald-400 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call & Book</span>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/916380939670?text=Hi%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20(${encodeURIComponent(pkg.duration)}).%20Please%20send%20me%20details.`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* View Itinerary Detail Modal trigger */}
                <button
                  onClick={() => setSelectedPackage(pkg)}
                  className="w-full py-2.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 text-xs font-semibold text-emerald-300 border border-emerald-500/20 hover:border-emerald-400/40 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Info className="w-3.5 h-3.5 text-emerald-400" />
                  <span>View Day-by-Day Itinerary</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Global Plan Custom Tour Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-900/90 via-emerald-950 to-teal-950 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              Need a 100% Customized Tour Plan?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-emerald-200">
              உங்கள் குடும்பத்தினர் அல்லது நண்பர்களுக்கு ஏற்றவாறு சொந்த பயணத் திட்டம் (Customized Itinerary) & டெம்போ டிராவலர் புக் செய்ய வேண்டுமா?
            </p>
          </div>
          <button
            onClick={() => onOpenBookingModal()}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-emerald-950 font-bold text-sm shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all shrink-0 flex items-center gap-2"
          >
            <span>Plan Custom Trip Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Day-by-Day Itinerary Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedPackage(null)}
          ></div>
          <div className="relative bg-emerald-950 border border-emerald-500/40 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 z-10 shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedPackage(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-900/80 text-slate-300 hover:text-white border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-10">
              <span className="text-xs font-bold uppercase text-emerald-400 tracking-wider">
                {selectedPackage.duration} • {selectedPackage.category}
              </span>
              <h3 className="font-cinzel text-2xl font-bold text-white mt-1">
                {selectedPackage.title}
              </h3>
              <p className="text-xs text-emerald-300/80 mt-0.5">
                {selectedPackage.route}
              </p>
            </div>

            {/* Day by Day list */}
            <div className="mt-6 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-300 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Day-by-Day Travel Plan (பயண அட்டவணை)</span>
              </h4>

              <div className="space-y-3">
                {selectedPackage.itinerary.map((dayItem, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-emerald-900/30 border border-emerald-500/20">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-bold text-xs mb-1">
                      {dayItem.day}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {dayItem.plan}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions */}
            <div className="mt-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-300 mb-2">
                Package Inclusions (சேர்க்கப்பட்டவை)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedPackage.inclusions.map((inc, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal CTAs */}
            <div className="mt-8 pt-6 border-t border-emerald-800/60 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-slate-400 block">Indicative Price</span>
                <span className="font-cinzel text-2xl font-bold text-amber-300">{selectedPackage.price}</span>
                <span className="text-xs text-slate-400 ml-1.5">{selectedPackage.priceUnit}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_INFO.primaryPhone}</span>
                </a>
                <a
                  href={`https://wa.me/916380939670?text=Hello%2C%20I%20want%20to%20book%20the%20${encodeURIComponent(selectedPackage.title)}%20package.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-2 shadow"
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
