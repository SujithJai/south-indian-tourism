import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/tourismData';
import { Star, MessageSquareQuote, MapPin, Car, Clock, AlertCircle } from 'lucide-react';
import GreenWaveDivider from './GreenWaveDivider';

export default function TestimonialsSection() {
  const [filterState, setFilterState] = useState('All');

  const filtered = filterState === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.state.toLowerCase() === filterState.toLowerCase());

  return (
    <section className="relative bg-emerald-950 py-20 text-white overflow-hidden">
      
      {/* Wave */}
      <GreenWaveDivider flipped={true} color="fill-emerald-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-3">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Traveller Stories • வாடிக்கையாளர் கருத்துக்கள்</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            What Our <br />
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
              Travellers Say
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-xs sm:text-sm md:text-base">
            தென்னிந்தியாவின் பல்வேறு தலங்களுக்கு எங்களின் வாகனங்கள் மற்றும் டூர் பேக்கேஜ்களில் பயணம் செய்த பயணிகளின் அனுபவங்கள்.
          </p>

          {/* Demonstration Notice Banner as explicitly requested */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Demonstration sample content showcasing typical traveller journeys across South India.</span>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {['All', 'Tamil Nadu', 'Karnataka', 'Kerala'].map(st => (
              <button
                key={st}
                onClick={() => setFilterState(st)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filterState === st
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'bg-emerald-900/40 text-emerald-300 hover:bg-emerald-800 border border-emerald-500/20'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(t => (
            <div
              key={t.id}
              className="glass-card rounded-3xl p-6 border border-emerald-500/20 hover:border-emerald-400/50 transition-all flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              {/* Author & Journey Info */}
              <div className="mt-5 pt-4 border-t border-emerald-800/40 space-y-1.5">
                <div className="font-semibold text-sm text-white">{t.name}</div>
                <div className="text-[11px] text-emerald-400">{t.location}</div>
                
                <div className="flex flex-col gap-1 text-[10px] text-slate-400 pt-1">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    <span>Destination: <strong className="text-slate-200">{t.destination}</strong></span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Car className="w-3 h-3 text-emerald-400" />
                    <span>Vehicle: <strong className="text-slate-200">{t.vehicle}</strong></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
