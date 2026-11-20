import React from 'react';
import { UI_POPULAR_DESTINATIONS, THEME_COLORS } from '../data/tourismData';
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';

export default function PopularDestinationsSection({ onSelectDestination }) {
  return (
    <section id="destinations" className="py-20 bg-[#F0F7F4] text-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header as in the UI Guide */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 pb-4 border-b border-[#147D64]/15">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0B4D3B] tracking-tight">
              Popular Destinations
            </h2>
            <p className="text-sm sm:text-base text-[#6B7280] mt-1 font-medium">
              Discover the most loved places in South India
            </p>
          </div>

          <a
            href="#packages"
            className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#147D64] hover:text-[#0B4D3B] transition-colors group"
          >
            <span>View All Packages</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Cards Grid matching UI Reference Image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {UI_POPULAR_DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest)}
              className="group bg-white rounded-3xl overflow-hidden border border-[#147D64]/15 hover:border-[#F4B400] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Category Pill */}
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#0B4D3B] shadow">
                  {dest.category}
                </span>
              </div>

              {/* Card Bottom: Title, State, and Circular Arrow Button */}
              <div className="p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#1F2937] group-hover:text-[#0B4D3B] transition-colors leading-tight">
                    {dest.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-[#6B7280] mt-0.5">
                    <MapPin className="w-3 h-3 text-[#147D64]" />
                    <span>{dest.state}</span>
                  </div>
                </div>

                {/* Circular Arrow Button */}
                <div className="w-9 h-9 rounded-full border border-[#147D64]/30 group-hover:border-[#147D64] group-hover:bg-[#147D64] group-hover:text-white text-[#147D64] flex items-center justify-center transition-all duration-300 shrink-0">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
