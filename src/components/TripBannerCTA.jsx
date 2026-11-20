import React from 'react';
import { ArrowRight, Sparkles, Calendar, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tourismData';

export default function TripBannerCTA({ onOpenBookingModal }) {
  return (
    <section className="py-10 bg-[#F0F7F4] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl bg-[#0B4D3B] text-white">
        
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80"
            alt="Misty tea gardens"
            className="w-full h-full object-cover object-center filter brightness-[0.55]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B4D3B]/95 via-[#0B4D3B]/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#147D64]/60 border border-[#F4B400]/40 text-[#F4B400] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Customized Travel Planning</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Plan Your South India Trip
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-200 font-medium">
            Custom itineraries, best stays and local experiences across Tamil Nadu, Kerala, Karnataka & Andhra Pradesh.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenBookingModal()}
              className="px-7 py-3.5 rounded-full bg-white hover:bg-[#FFF8E6] text-[#0B4D3B] font-extrabold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 text-[#147D64] group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="px-6 py-3.5 rounded-full bg-[#147D64]/80 hover:bg-[#147D64] text-white font-semibold text-sm backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#F4B400]" />
              <span>Call: {BUSINESS_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
