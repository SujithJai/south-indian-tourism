import React from 'react';
import { SHIVA_TEMPLES, BUSINESS_INFO } from '../data/tourismData';
import { Sparkles, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function ShivaTempleSection({ onOpenBookingModal }) {
  return (
    <section id="shiva-temples" className="py-20 bg-[#0B4D3B] text-white overflow-hidden relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#147D64]/60 border border-[#F4B400]/40 text-[#F4B400] text-xs font-bold mb-3 shadow-lg">
            <Sparkles className="w-4 h-4 text-[#F4B400]" />
            <span>Divine Pilgrimage</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            South Indian <br />
            <span className="text-[#FFD166]">Shiva Temple Tours</span>
          </h2>
          <p className="mt-3 text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed">
            Dedicated sacred pilgrimage circuits connecting the 5 cosmic element temples (Pancha Bhoota Sthalams: Earth, Water, Fire, Air, Space) and historic Jyotirlinga shrines.
          </p>
        </div>

        {/* Temple Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SHIVA_TEMPLES.map((temple, idx) => (
            <div 
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden border border-[#F4B400]/30 hover:border-[#F4B400] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl text-[#1F2937]"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={temple.image}
                    alt={temple.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Temple Type Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#F4B400] text-[#1F2937] text-[11px] font-extrabold tracking-wide uppercase shadow">
                    {temple.type}
                  </span>

                  {/* State Pill */}
                  <span className="absolute bottom-3 left-4 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#F4B400]" />
                    {temple.state}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-[#0B4D3B] group-hover:text-[#147D64] transition-colors leading-snug">
                    {temple.name}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                    {temple.highlight}
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="p-6 pt-0 border-t border-[#147D64]/10 flex items-center gap-2">
                <button
                  onClick={() => onOpenBookingModal({ destination: temple.name, tourType: 'Temple Tour' })}
                  className="flex-1 py-2.5 rounded-xl bg-[#FFF8E6] hover:bg-[#F4B400] border border-[#F4B400]/40 text-[#0B4D3B] text-xs font-bold transition-all text-center"
                >
                  Book Shiva Yatra
                </button>
                <a
                  href={`https://wa.me/916380939670?text=Namaste%2C%20I%20would%20like%20to%20plan%20a%20pilgrimage%20to%20${encodeURIComponent(temple.name)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#147D64] hover:bg-[#0f6752] text-white transition-colors"
                  title="WhatsApp Enquiry"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Yatra Package Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0B4D3B] via-[#147D64] to-[#0B4D3B] border border-[#F4B400]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFD166]">Exclusive Pilgrimage Fleet</span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mt-1">
              Pancha Bhoota & Jyotirlinga Special Tempo Travellers
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-200">
              Spacious 12, 17 and 20 seater pushback AC Tempo Travellers with courteous and devotional drivers experienced in temple darshan schedules.
            </p>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.primaryPhone}`}
            className="px-8 py-3.5 rounded-full bg-[#F4B400] hover:bg-[#e0a600] text-[#1F2937] font-extrabold text-sm shadow-xl hover:scale-105 transition-all flex items-center gap-2 shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Call {BUSINESS_INFO.primaryPhone}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
