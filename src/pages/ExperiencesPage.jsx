import React from 'react';
import { EXPERIENCES_LIST, TOUR_PACKAGES } from '../data/tourismData';
import { Palmtree, ArrowRight, CheckCircle2, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExperiencesPage({ onOpenBooking }) {
  return (
    <div className="bg-[#F8F4E6] text-[#5A3E2B] min-h-screen pt-24 pb-20">
      
      {/* 1. Hero Banner */}
      <div className="relative py-16 sm:py-24 bg-[#0B4D3B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img 
            src="/images/houseboat.jpg" 
            alt="South Indian Experiences" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B4D3B] via-[#0B4D3B]/70 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#147D64]/60 border border-[#F4B400]/40 text-[#F4B400] text-xs font-bold mb-4 shadow">
            <Palmtree className="w-3.5 h-3.5" />
            <span>Dedicated Landing Page • Page 03</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Curated South Indian Experiences
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed">
            Move beyond conventional tourism. Experience private backwater houseboats, high-altitude tea trails, sacred temple aartis, and thrilling tiger safaris.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        
        {/* 2. All 8 Detailed Experiences */}
        <div className="space-y-16">
          {EXPERIENCES_LIST.map((exp, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={exp.id}
                id={exp.id}
                className={`bg-white rounded-3xl overflow-hidden border border-[#147D64]/15 shadow-lg flex flex-col ${
                  isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-stretch`}
              >
                {/* Image */}
                <div className="lg:w-1/2 relative min-h-[280px] sm:min-h-[360px] overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#F4B400] text-[#0B4D3B] text-xs font-extrabold uppercase tracking-wider shadow">
                    Experience 0{idx + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#147D64]">
                      {exp.subtitle}
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0B4D3B] mt-1 leading-tight">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-[#5A3E2B]/85 mt-3 leading-relaxed font-medium">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-6">
                      <span className="text-xs font-bold uppercase text-[#0B4D3B] block mb-2">Signature Highlights:</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {exp.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#5A3E2B]/85 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#147D64] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Featured Locations */}
                    <div className="mt-5 pt-4 border-t border-[#147D64]/10">
                      <span className="text-[11px] font-bold uppercase text-[#147D64] block mb-2">Prime Destinations:</span>
                      <div className="flex flex-wrap gap-2">
                        {exp.featuredLocations.map((loc, i) => (
                          <span key={i} className="px-3 py-1 rounded-full bg-[#F8F4E6] text-[11px] font-semibold text-[#0B4D3B] border border-[#147D64]/15">
                            {loc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 pt-6 border-t border-[#147D64]/15 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onOpenBooking({ tourType: exp.title })}
                      className="px-6 py-3 rounded-xl bg-[#0B4D3B] hover:bg-[#147D64] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md"
                    >
                      <span>Plan This Experience</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href={`https://wa.me/916380939670?text=Hi%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(exp.title)}.%20Please%20share%20details.`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-3 rounded-xl bg-[#147D64] hover:bg-[#0f6752] text-white text-xs font-bold flex items-center gap-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* 3. Enquiry CTA Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0B4D3B] to-[#147D64] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#F4B400]">Personalized Guidance</span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Want a Tailored Multi-Experience Tour?
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 mt-2 max-w-xl leading-relaxed">
              Combine tea estates with private houseboats and UNESCO heritage temples in a single seamless itinerary.
            </p>
          </div>
          <Link
            to="/plan-your-trip"
            className="px-8 py-3.5 rounded-full bg-[#F4B400] hover:bg-[#e0a600] text-[#0B4D3B] font-extrabold text-xs uppercase tracking-wider shadow-xl transition-all shrink-0"
          >
            Customize My Trip
          </Link>
        </div>

      </div>
    </div>
  );
}
