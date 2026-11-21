import React from 'react';
import { CULTURE_HERITAGE_ITEMS } from '../data/tourismData';
import { Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CultureHeritageSection() {
  return (
    <section id="culture-heritage-section" className="relative bg-[#F8F4E6] text-[#5A3E2B] py-16 sm:py-24 border-b border-[#147D64]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#147D64]/15">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#147D64]/20 text-[#0B4D3B] text-xs font-bold uppercase tracking-wider mb-2.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#147D64]" />
              <span>Section 09 • Living Traditions</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B4D3B] tracking-tight">
              Culture & Heritage
            </h2>
            <p className="text-sm sm:text-base text-[#5A3E2B]/80 mt-1 font-medium max-w-2xl">
              Immerse in millennia of living architectural wonders, classical dance rhythms, pure silk looms, and celebratory feasts.
            </p>
          </div>

          <Link
            to="/culture-heritage"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B4D3B] text-white hover:bg-[#147D64] text-xs font-bold uppercase tracking-wider transition-all shadow-md group shrink-0"
          >
            <span>Explore Cultural Heritage</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CULTURE_HERITAGE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden border border-[#147D64]/15 hover:border-[#F4B400] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#F4B400] text-[#0B4D3B] text-[10px] font-extrabold uppercase tracking-wider shadow">
                    {item.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-[#0B4D3B] group-hover:text-[#147D64] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A3E2B]/80 mt-2.5 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#147D64]/10 mt-2">
                <Link
                  to="/culture-heritage"
                  className="w-full py-2.5 rounded-xl bg-[#F8F4E6] hover:bg-[#F4B400] text-[#0B4D3B] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border border-[#147D64]/20 group-hover:border-[#F4B400]"
                >
                  <span>Learn More</span>
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
