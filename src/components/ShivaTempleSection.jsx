import React from 'react';
import { SHIVA_TEMPLES, BUSINESS_INFO } from '../data/tourismData';
import { Sparkles, MapPin, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import GreenWaveDivider from './GreenWaveDivider';

export default function ShivaTempleSection({ onOpenBookingModal }) {
  return (
    <section id="shiva-temples" className="relative bg-gradient-to-b from-emerald-950 via-slate-950 to-emerald-950 py-20 text-white overflow-hidden">
      
      {/* Top Wave */}
      <GreenWaveDivider flipped={true} color="fill-slate-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold mb-3 shadow-lg">
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
            <span>Divine Pilgrimage • சிவ தலம் யாத்திரை</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            South Indian <br />
            <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
              Shiva Temple Tours
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
            பஞ்ச பூத ஸ்தலங்கள் (நிலம், நீர், நெருப்பு, காற்று, ஆகாயம்) மற்றும் தென்னிந்தியாவின் வரலாற்று சிறப்புமிக்க சிவ தலங்களுக்கான பிரத்யேக ஆன்மீக யாத்திரை பேக்கேஜ்கள்.
          </p>
        </div>

        {/* Temple Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SHIVA_TEMPLES.map((temple, idx) => (
            <div 
              key={idx}
              className="group glass-card rounded-3xl overflow-hidden border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={temple.image}
                    alt={temple.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                  
                  {/* Temple Type Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500/90 text-slate-950 text-[11px] font-bold tracking-wide uppercase shadow">
                    {temple.type}
                  </span>

                  {/* State Pill */}
                  <span className="absolute bottom-3 left-4 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-medium flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {temple.state}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {temple.name}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {temple.highlight}
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="p-6 pt-0 border-t border-amber-500/10 flex items-center gap-2">
                <button
                  onClick={() => onOpenBookingModal({ destination: temple.name, tourType: 'Temple Tour' })}
                  className="flex-1 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 text-amber-300 text-xs font-semibold transition-colors text-center"
                >
                  Book Shiva Yatra
                </button>
                <a
                  href={`https://wa.me/916380939670?text=Namaste%2C%20I%20would%20like%20to%20plan%20a%20pilgrimage%20to%20${encodeURIComponent(temple.name)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                  title="WhatsApp Enquiry"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Yatra Package Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-950/60 via-slate-900 to-emerald-950 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Exclusive Pilgrimage Fleet</span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-1">
              Pancha Bhoota & Jyotirlinga Special Tempo Travellers
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              குடும்பத்துடன் ஆன்மீக யாத்திரை செல்ல வசதியான 12, 17 மற்றும் 20 சீட்டர் புஷ்பேக் ஏசி டெம்போ டிராவலர்கள் அனுபவமிக்க ஓட்டுநர்களுடன் கிடைக்கும்.
            </p>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.primaryPhone}`}
            className="px-8 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 hover:scale-105 transition-all flex items-center gap-2 shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Call {BUSINESS_INFO.primaryPhone}</span>
          </a>
        </div>

      </div>

      {/* Bottom Wave */}
      <GreenWaveDivider flipped={false} color="fill-emerald-950" />

    </section>
  );
}
