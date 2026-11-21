import React from 'react';
import { CULTURE_HERITAGE_ITEMS, TOUR_PACKAGES } from '../data/tourismData';
import { Sparkles, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CultureHeritagePage({ onOpenBooking }) {
  return (
    <div className="bg-[#F8F4E6] text-[#5A3E2B] min-h-screen pt-24 pb-20">
      
      {/* 1. Hero Banner */}
      <div className="relative py-16 sm:py-24 bg-[#0B4D3B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img 
            src="/images/kathakali.jpg" 
            alt="South Indian Culture & Heritage" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B4D3B] via-[#0B4D3B]/70 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#147D64]/60 border border-[#F4B400]/40 text-[#F4B400] text-xs font-bold mb-4 shadow">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Landing Page • Page 07</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Culture & Heritage of South India
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed">
            A living civilization unbroken for two millennia. Explore monolithic stone chariot temples, divine classical performing arts, sacred silk handlooms, and timeless cultural festivals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-16">
        
        {/* 2. Editorial Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CULTURE_HERITAGE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-[#147D64]/15 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#F4B400] text-[#0B4D3B] text-[10px] font-extrabold uppercase tracking-wider shadow">
                    {item.category}
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0B4D3B] group-hover:text-[#147D64] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A3E2B]/85 mt-3 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 border-t border-[#147D64]/10 mt-3">
                <button
                  onClick={() => onOpenBooking({ tourType: item.title })}
                  className="w-full py-2.5 rounded-xl bg-[#0B4D3B] hover:bg-[#147D64] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <span>Book Cultural Tour</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* 3. Cultural Heritage Packages Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#147D64]/20 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#147D64]">Heritage Circuits</span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0B4D3B] mt-1">
                Featured Cultural Tour Packages
              </h2>
              <p className="text-sm text-[#5A3E2B]/80 mt-1 font-medium">
                Immerse in Dravidian architecture, living royal palaces, and traditional performing arts.
              </p>
            </div>
            <Link
              to="/tour-packages"
              className="px-6 py-3 rounded-full bg-[#F4B400] hover:bg-[#e5a700] text-[#0B4D3B] font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 flex items-center gap-2"
            >
              <span>View All Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TOUR_PACKAGES.slice(0, 2).map((pkg) => (
              <div key={pkg.id} className="p-6 rounded-2xl bg-[#F8F4E6] border border-[#147D64]/15 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#147D64]">{pkg.duration}</span>
                  <h4 className="font-heading text-xl font-bold text-[#0B4D3B] mt-1">{pkg.title}</h4>
                  <p className="text-xs text-[#5A3E2B]/80 mt-2 leading-relaxed">{pkg.description}</p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#147D64]/10 flex items-center justify-between">
                  <span className="font-heading font-extrabold text-lg text-[#0B4D3B]">{pkg.price}</span>
                  <button
                    onClick={() => onOpenBooking(pkg)}
                    className="px-5 py-2 rounded-xl bg-[#0B4D3B] text-white hover:bg-[#147D64] text-xs font-bold"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
