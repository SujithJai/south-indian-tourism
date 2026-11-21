import React from 'react';
import { BUSINESS_STATISTICS } from '../data/tourismData';
import { Compass, Map, Sparkles, Calendar, ShieldCheck, Award } from 'lucide-react';

export default function BusinessStatisticsSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'compass':
        return <Compass className="w-6 h-6 text-[#F4B400]" />;
      case 'map':
        return <Map className="w-6 h-6 text-[#F4B400]" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6 text-[#F4B400]" />;
      case 'calendar':
      default:
        return <Calendar className="w-6 h-6 text-[#F4B400]" />;
    }
  };

  return (
    <section id="statistics-section" className="relative bg-[#F8F4E6] text-[#5A3E2B] py-14 sm:py-20 border-b border-[#147D64]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#147D64]/20 text-[#0B4D3B] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#147D64]" />
            <span>Trusted South India Travel Specialists</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B4D3B] tracking-tight">
            Crafting Unforgettable Journeys
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5A3E2B]/80 font-medium">
            Over a decade of curating authentic, hassle-free travel experiences across southern India
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_STATISTICS.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#147D64]/15 hover:border-[#F4B400] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0B4D3B] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                  {getIcon(stat.icon)}
                </div>
                <div className="font-heading text-4xl sm:text-5xl font-extrabold text-[#0B4D3B] tracking-tight group-hover:text-[#147D64] transition-colors">
                  {stat.number}
                </div>
                <h3 className="text-base font-bold text-[#1F2937] mt-2 leading-snug">
                  {stat.label}
                </h3>
              </div>
              <p className="text-xs text-[#5A3E2B]/75 mt-3 font-medium border-t border-[#147D64]/10 pt-3">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
