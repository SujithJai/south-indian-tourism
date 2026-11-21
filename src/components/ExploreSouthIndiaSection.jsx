import React from 'react';
import { EXPLORE_REGIONS } from '../data/tourismData';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExploreSouthIndiaSection() {
  return (
    <section id="explore-regions" className="relative bg-[#F8F4E6] text-[#5A3E2B] py-16 sm:py-24 border-b border-[#147D64]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#147D64]/15">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#147D64]/20 text-[#0B4D3B] text-xs font-bold uppercase tracking-wider mb-2.5 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#147D64]" />
              <span>Section 03 • Regional Showcase</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B4D3B] tracking-tight">
              Explore South India
            </h2>
            <p className="text-sm sm:text-base text-[#5A3E2B]/80 mt-1 font-medium max-w-2xl">
              Four distinct states, each offering its own majestic blend of ancient Dravidian heritage, tropical nature, and royal history.
            </p>
          </div>

          <Link
            to="/destinations"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B4D3B] text-white hover:bg-[#147D64] text-xs font-bold uppercase tracking-wider transition-all shadow-md group shrink-0"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Regions Grid (2x2 on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EXPLORE_REGIONS.map((region) => (
            <div
              key={region.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#147D64]/15 hover:border-[#F4B400] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-60 sm:h-64 w-full overflow-hidden">
                  <img
                    src={region.image}
                    alt={region.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* State Name & Tagline */}
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F4B400] block mb-1">
                      {region.tagline}
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight drop-shadow">
                      {region.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs sm:text-sm text-[#5A3E2B]/85 leading-relaxed font-medium">
                    {region.intro}
                  </p>

                  {/* Highlights Pills */}
                  <div className="mt-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B4D3B] block mb-2.5">
                      Key Highlights & Cities:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {region.popularDestinations.map((dest, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-[#F8F4E6] border border-[#147D64]/20 text-[11px] font-semibold text-[#0B4D3B]"
                        >
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 border-t border-[#147D64]/10 mt-2">
                <Link
                  to={region.routeLink}
                  className="w-full py-3 rounded-2xl bg-[#F8F4E6] hover:bg-[#F4B400] text-[#0B4D3B] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-[#147D64]/20 group-hover:border-[#F4B400]"
                >
                  <span>Explore {region.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
