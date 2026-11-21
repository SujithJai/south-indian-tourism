import React from 'react';
import { POPULAR_DESTINATIONS } from '../data/tourismData';
import { ArrowRight, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PopularDestinationsSection({ onSelectDestination }) {
  return (
    <section id="popular-destinations" className="relative bg-[#F8F4E6] text-[#5A3E2B] py-16 sm:py-24 border-b border-[#147D64]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#147D64]/15">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#147D64]/20 text-[#0B4D3B] text-xs font-bold uppercase tracking-wider mb-2.5 shadow-sm">
              <Compass className="w-3.5 h-3.5 text-[#147D64]" />
              <span>Section 04 • Top Destinations</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B4D3B] tracking-tight">
              Popular Destinations
            </h2>
            <p className="text-sm sm:text-base text-[#5A3E2B]/80 mt-1 font-medium max-w-2xl">
              Discover the most cherished cultural landmarks, hill retreats, and world heritage wonders in South India.
            </p>
          </div>

          <Link
            to="/destinations"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B4D3B] text-white hover:bg-[#147D64] text-xs font-bold uppercase tracking-wider transition-all shadow-md group shrink-0"
          >
            <span>Explore All 30+ Destinations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#147D64]/15 hover:border-[#F4B400] shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-95"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = "/images/destinations.jpg"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"></div>

                  {/* Category Pill */}
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-extrabold text-[#0B4D3B] shadow uppercase">
                    {dest.category}
                  </span>

                  {/* State Tag */}
                  <span className="absolute bottom-3 left-3 text-xs font-semibold text-white flex items-center gap-1 drop-shadow">
                    <MapPin className="w-3.5 h-3.5 text-[#F4B400]" />
                    {dest.state}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-[#0B4D3B] group-hover:text-[#147D64] transition-colors leading-tight">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-[#5A3E2B]/80 mt-2 line-clamp-2 leading-relaxed font-medium">
                    {dest.description}
                  </p>

                  <div className="mt-3.5 pt-3 border-t border-[#147D64]/10">
                    <span className="text-[10px] font-bold uppercase text-[#147D64] block mb-1">Top Attractions:</span>
                    <p className="text-[11px] text-[#5A3E2B]/75 line-clamp-1 font-medium">
                      {dest.attractions.slice(0, 2).join(' • ')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0 border-t border-[#147D64]/10 mt-2">
                <Link
                  to={`/destinations?state=${encodeURIComponent(dest.state)}`}
                  className="w-full py-2.5 rounded-xl bg-[#F8F4E6] hover:bg-[#F4B400] text-[#0B4D3B] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border border-[#147D64]/20 group-hover:border-[#F4B400]"
                >
                  <span>Explore Destination</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
