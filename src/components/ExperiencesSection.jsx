import React from 'react';
import { EXPERIENCES_LIST } from '../data/tourismData';
import { Sparkles, ArrowRight, Palmtree } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExperiencesSection() {
  return (
    <section id="experiences-section" className="relative bg-[#F8F4E6] text-[#5A3E2B] py-16 sm:py-24 border-b border-[#147D64]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#147D64]/15">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#147D64]/20 text-[#0B4D3B] text-xs font-bold uppercase tracking-wider mb-2.5 shadow-sm">
              <Palmtree className="w-3.5 h-3.5 text-[#147D64]" />
              <span>Section 05 • Curated Journeys</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B4D3B] tracking-tight">
              South Indian Experiences
            </h2>
            <p className="text-sm sm:text-base text-[#5A3E2B]/80 mt-1 font-medium max-w-2xl">
              From dawn houseboat cruises on tranquil lagoons to misty hill treks and ancient temple rituals.
            </p>
          </div>

          <Link
            to="/experiences"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B4D3B] text-white hover:bg-[#147D64] text-xs font-bold uppercase tracking-wider transition-all shadow-md group shrink-0"
          >
            <span>View All 8 Experiences</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 8 Cards Grid (4 cols on lg, 2 on sm) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCES_LIST.map((exp) => (
            <div
              key={exp.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#147D64]/15 hover:border-[#F4B400] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-3 text-[10px] font-extrabold uppercase tracking-widest text-[#F4B400]">
                    {exp.subtitle}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-[#0B4D3B] group-hover:text-[#147D64] transition-colors leading-snug">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-[#5A3E2B]/80 mt-2 line-clamp-3 leading-relaxed font-medium">
                    {exp.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-[#147D64]/10 mt-2">
                <Link
                  to={`/experiences#${exp.id}`}
                  className="w-full py-2.5 rounded-xl bg-[#F8F4E6] hover:bg-[#F4B400] text-[#0B4D3B] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border border-[#147D64]/20 group-hover:border-[#F4B400]"
                >
                  <span>Explore Experience</span>
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
