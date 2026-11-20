import React from 'react';
import { VEHICLE_FLEET, BUSINESS_INFO } from '../data/tourismData';
import { Users, Shield, CheckCircle, Phone, MessageCircle } from 'lucide-react';

export default function VehicleFleetSection({ onOpenBookingModal }) {
  return (
    <section id="fleet" className="py-20 bg-[#F0F7F4] text-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8E6] border border-[#F4B400]/40 text-[#0B4D3B] text-xs font-bold mb-3 shadow-sm">
            <Shield className="w-3.5 h-3.5 text-[#147D64]" />
            <span>Luxury Transportation Fleet</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B4D3B] tracking-tight">
            Tempo Traveller & <br />
            <span className="text-[#147D64]">Tourist Vehicle Rentals</span>
          </h2>
          <p className="mt-3 text-[#6B7280] text-sm sm:text-base leading-relaxed font-medium">
            Modern AC pushback Tempo Travellers, Innova Crystas and luxury tourist buses with inter-state permits across Tamil Nadu, Karnataka, Kerala and Andhra Pradesh.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VEHICLE_FLEET.map((car, idx) => (
            <div 
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden border border-[#147D64]/15 hover:border-[#F4B400] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-md hover:shadow-2xl"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Capacity Pill */}
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#F4B400]" />
                    {car.capacity}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-[#0B4D3B] group-hover:text-[#147D64] transition-colors">
                    {car.name}
                  </h3>
                  <p className="text-xs text-[#F4B400] font-bold mt-0.5">
                    {car.idealFor}
                  </p>

                  <div className="mt-4 space-y-2">
                    {car.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-[#1F2937]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#147D64] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0 border-t border-[#147D64]/10 mt-3 flex items-center gap-2">
                <button
                  onClick={() => onOpenBookingModal({ preferredTransport: car.name })}
                  className="flex-1 py-2.5 rounded-xl bg-[#FFF8E6] hover:bg-[#F4B400] border border-[#F4B400]/40 text-[#0B4D3B] text-xs font-bold transition-colors"
                >
                  Book Vehicle
                </button>
                <a
                  href={`https://wa.me/916380939670?text=Hi%2C%20I%20am%20enquiring%20about%20renting%20${encodeURIComponent(car.name)}%20for%20a%20tour.`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#147D64] hover:bg-[#0f6752] text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
