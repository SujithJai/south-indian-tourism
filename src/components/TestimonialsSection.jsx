import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/tourismData';
import { Star, MapPin, Car, AlertCircle } from 'lucide-react';

export default function TestimonialsSection() {
  const [filterState, setFilterState] = useState('All');

  const filtered = filterState === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.state.toLowerCase() === filterState.toLowerCase());

  return (
    <section className="py-20 bg-[#F0F7F4] text-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8E6] border border-[#F4B400]/40 text-[#0B4D3B] text-xs font-bold mb-3 shadow-sm">
            <Star className="w-3.5 h-3.5 text-[#F4B400] fill-[#F4B400]" />
            <span>Traveller Stories</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B4D3B] tracking-tight">
            What Our <br />
            <span className="text-[#147D64]">Travellers Say</span>
          </h2>
          <p className="mt-3 text-[#6B7280] text-sm sm:text-base font-medium">
            Read travel experiences and reviews from families, couples and groups across South India.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFF8E6] border border-[#F4B400]/30 text-[#0B4D3B] text-xs font-medium">
            <AlertCircle className="w-4 h-4 text-[#F4B400] shrink-0" />
            <span>Demonstration sample content showcasing typical traveller journeys across South India.</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map(t => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 border border-[#147D64]/15 hover:border-[#F4B400] transition-all flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#F4B400] fill-[#F4B400]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#1F2937] italic leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#147D64]/10 space-y-1.5">
                <div className="font-bold text-sm text-[#0B4D3B]">{t.name}</div>
                <div className="text-[11px] text-[#147D64] font-semibold">{t.location}</div>
                
                <div className="flex flex-col gap-1 text-[11px] text-[#6B7280] pt-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#147D64]" />
                    <span>Destination: <strong className="text-[#1F2937]">{t.destination}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Car className="w-3 h-3 text-[#147D64]" />
                    <span>Vehicle: <strong className="text-[#1F2937]">{t.vehicle}</strong></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
