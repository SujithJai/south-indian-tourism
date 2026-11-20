import React from 'react';
import { VEHICLE_FLEET, BUSINESS_INFO } from '../data/tourismData';
import { Users, Shield, CheckCircle, Phone, MessageCircle, Sparkles } from 'lucide-react';
import GreenWaveDivider from './GreenWaveDivider';

export default function VehicleFleetSection({ onOpenBookingModal }) {
  return (
    <section id="fleet" className="relative bg-emerald-950 py-20 text-white overflow-hidden">
      
      {/* Wave connector */}
      <GreenWaveDivider flipped={true} color="fill-emerald-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-3">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Luxury Transportation Fleet • சொகுசு வாகனங்கள்</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Tempo Traveller & <br />
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
              Tourist Vehicle Rentals
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
            மோகனூர் (நாமக்கல்) மற்றும் தமிழகம் முழுவதிலும் இருந்து கர்நாடகா, கேரளா, ஆந்திரா செல்ல நவீன ஏசி புஷ்பேக் வசதியுடன் கூடிய டெம்போ டிராவலர்கள் மற்றும் கார்கள்.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VEHICLE_FLEET.map((car, idx) => (
            <div 
              key={idx}
              className="group glass-card rounded-3xl overflow-hidden border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent"></div>
                  
                  {/* Capacity Pill */}
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-emerald-400" />
                    {car.capacity}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {car.name}
                  </h3>
                  <p className="text-xs text-amber-300 font-medium mt-0.5">
                    {car.idealFor}
                  </p>

                  <div className="mt-4 space-y-2">
                    {car.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0 border-t border-emerald-800/40 mt-3 flex items-center gap-2">
                <button
                  onClick={() => onOpenBookingModal({ preferredTransport: car.name })}
                  className="flex-1 py-2.5 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-400/30 text-emerald-300 text-xs font-semibold transition-colors"
                >
                  Book Vehicle
                </button>
                <a
                  href={`https://wa.me/916380939670?text=Hi%2C%20I%20am%20enquiring%20about%20renting%20${encodeURIComponent(car.name)}%20for%20a%20tour.`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Wave bottom */}
      <GreenWaveDivider flipped={false} color="fill-emerald-950" />

    </section>
  );
}
